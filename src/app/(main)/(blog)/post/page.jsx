'use client';

import { useEffect, useState } from 'react';
import api from '@/src/lib/axios'; // 전역 api 인스턴스 사용 (JWT 인터셉터 포함)
import CommentSection from '@/src/components/comment/CommentSection';
import SympathyList from '@/src/app/(main)/(blog)/sympathyList/page';

export default function PostPage({ postId = 1 }) {
  const [activeTab, setActiveTab] = useState(null); // 'sympathy' | 'comments' | null
  const [isLiked, setIsLiked] = useState(false);
  const [sympathyCount, setSympathyCount] = useState(0);
  const [commentCount, setCommentCount] = useState(0);

  useEffect(() => {
    fetchPostData();
  }, [postId]);

  const fetchPostData = async () => {
    try {
      // 전역 api 인스턴스 사용 (JWT 인터셉터가 자동으로 헤더 추가)
      const likeResponse = await api.get(`/posts/${postId}/like/status`);
      setIsLiked(likeResponse.data.isLiked);
      setSympathyCount(likeResponse.data.likeCount);

      const commentResponse = await api.get(`/posts/${postId}/comments`);
      setCommentCount(commentResponse.data.totalCount);
    } catch (error) {
      console.error('게시글 데이터 로드 실패: ', error);
    }
  };

  // 공감 버튼 클릭 핸들러 - JWT 토큰 자동 추가됨
  const handleLikeClick = async e => {
    e.stopPropagation();

    try {
      // 전역 api 인스턴스 사용 (JWT 인터셉터가 자동으로 헤더 추가)
      const response = await api.post(`/posts/${postId}/like`);

      setIsLiked(response.data.isLiked);
      setSympathyCount(response.data.likeCount);
    } catch (error) {
      console.error('공감 처리 실패:', error);
      // 로그인이 필요한 경우 에러 메시지 표시
      if (error.response && error.response.status === 500) {
        alert('로그인이 필요합니다.');
      }
    }
  };

  return (
    <div
      style={{
        maxWidth: '920px',
        margin: '40px auto',
        padding: '20px',
      }}
    >
      {/* 공감/댓글 버튼 영역 */}
      <div
        style={{
          display: 'flex',
          gap: '8px',
          marginBottom: '20px',
        }}
      >
        {/* 공감 버튼 */}
        <button
          onClick={() => {
            setActiveTab(activeTab === 'sympathy' ? null : 'sympathy');
          }}
          style={{
            display: 'flex',
            alignItems: 'center',
            gap: '6px',
            padding: '8px 12px',
            border: '1px solid #ddd',
            backgroundColor: activeTab === 'sympathy' ? '#f8f9fa' : '#fff',
            cursor: 'pointer',
            fontSize: '14px',
            color: '#333',
          }}
        >
          <span
            onClick={e => {
              e.stopPropagation(); // 버튼 클릭 이벤트 차단
              handleLikeClick(e); // 하트만 공감 처리
            }}
            style={{
              fontSize: '16px',
              cursor: 'pointer', // 하트가 클릭 기능이 있다는 걸 구분하기 위해
            }}
          >
            {isLiked ? '❤️' : '🤍'}
          </span>

          <span>공감 {sympathyCount}</span>
          <span style={{ fontSize: '12px', color: '#999' }}>
            {activeTab === 'sympathy' ? '▲' : '▼'}
          </span>
        </button>

        {/* 댓글 버튼 */}
        <button
          onClick={() => setActiveTab(activeTab === 'comments' ? null : 'comments')}
          style={{
            display: 'flex',
            alignItems: 'center',
            gap: '6px',
            padding: '8px 12px',
            border: '1px solid #ddd',
            backgroundColor: activeTab === 'comments' ? '#f8f9fa' : '#fff',
            cursor: 'pointer',
            fontSize: '14px',
            color: '#333',
          }}
        >
          <span>💬</span>
          <span>댓글 {commentCount}</span>
          <span
            style={{
              fontSize: '10px',
              backgroundColor: '#ff4757',
              color: 'white',
              padding: '2px 4px',
              marginLeft: '2px',
            }}
          >
            NEW
          </span>
          <span style={{ fontSize: '12px', color: '#999' }}>
            {activeTab === 'comments' ? '▲' : '▼'}
          </span>
        </button>
      </div>

      {/* 토글 컨텐츠 영역 */}
      {activeTab === 'sympathy' && (
        <div style={{ marginTop: '20px' }}>
          <SympathyList postId={postId} />
        </div>
      )}

      {activeTab === 'comments' && (
        <div style={{ marginTop: '20px' }}>
          {/* 댓글 영역 */}
          <div style={{ border: 'none' }}>
            <CommentSection postId={postId} onCommentChange={fetchPostData} />
          </div>
        </div>
      )}
    </div>
  );
}
