'use client';

import { useState, useEffect } from 'react';
import axios from 'axios';
import CommentForm from './CommentForm';
import CommentList from './CommentList';

const CommentSection = ({ postId = 1 }) => {
  // postId props 추가
  const [comments, setComments] = useState([]);
  const [loading, setLoading] = useState(false);

  const API_BASE_URL = 'http://localhost:8000/api/blog-service';

  // axios 기본 설정
  const api = axios.create({
    baseURL: API_BASE_URL,
    headers: {
      'Content-Type': 'application/json',
    },
  });

  // 댓글 목록 조회
  const fetchComments = async () => {
    try {
      setLoading(true);
      const response = await api.get(`/posts/${postId}/comments`, {
        headers: { 'X-User-Id': '1' },
      });
      setComments(response.data.comments || []);
    } catch (error) {
      console.error('댓글 조회 에러:', error);
      if (error.response) {
        console.error('응답 에러:', error.response.status, error.response.data);
      }
    } finally {
      setLoading(false);
    }
  };

  // 컴포넌트 마운트 시 댓글 목록 조회
  useEffect(() => {
    fetchComments();
  }, [postId]);

  // 댓글 작성
  const handleAddComment = async (content, isSecret) => {
    try {
      const response = await api.post(
        `/posts/${postId}/comments`,
        {
          content: content,
          isSecret: isSecret || false,
        },
        {
          headers: { 'X-User-Id': '1' },
        },
      );

      if (response.status === 201 || response.status === 200) {
        // 댓글 목록 다시 조회
        fetchComments();
      }
    } catch (error) {
      console.error('댓글 작성 에러:', error);
      if (error.response) {
        console.error('응답 에러:', error.response.status, error.response.data);
      }
      alert('댓글 작성에 실패했습니다.');
    }
  };

  // 댓글 공감
  const handleLikeComment = async commentId => {
    try {
      const response = await api.post(
        `/comments/${commentId}/like`,
        {},
        {
          headers: { 'X-User-Id': '1' },
        },
      );

      if (response.status === 200) {
        // 댓글 목록 다시 조회하여 공감 수 업데이트
        fetchComments();
      }
    } catch (error) {
      console.error('댓글 공감 에러:', error);
      if (error.response) {
        console.error('응답 에러:', error.response.status, error.response.data);
      }
    }
  };

  // 댓글 삭제
  const handleDeleteComment = async commentId => {
    if (!confirm('댓글을 삭제하시겠습니까?')) return;

    try {
      const response = await api.delete(`/comments/${commentId}`, {
        headers: { 'X-User-Id': '1' },
      });

      if (response.status === 204 || response.status === 200) {
        // 댓글 목록 다시 조회
        fetchComments();
        alert('댓글이 삭제되었습니다.');
      }
    } catch (error) {
      console.error('댓글 삭제 에러:', error);
      if (error.response) {
        console.error('응답 에러:', error.response.status, error.response.data);
      }
      alert('댓글 삭제에 실패했습니다.');
    }
  };

  if (loading) {
    return <div style={{ textAlign: 'center', padding: '20px' }}>댓글을 불러오는 중...</div>;
  }

  return (
    <div
      style={{
        maxWidth: '920px',
        margin: '10px auto',
        padding: '20px',
        backgroundColor: '#ffffff',
      }}
    >
      {/* 댓글 목록 */}
      <CommentList
        comments={comments}
        onLikeComment={handleLikeComment}
        onDeleteComment={handleDeleteComment}
      />

      {/* 페이지네이션 */}
      <div
        style={{
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          marginBottom: '30px',
          gap: '20px',
        }}
      >
        <span
          style={{
            padding: '2px 1px',
            border: '1px solid #ddd',
            backgroundColor: 'white',
            color: 'black',
            borderRadius: '4px',
            fontSize: '14px',
            minWidth: '36px',
            height: '32px',
            textAlign: 'center',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
          }}
        >
          1
        </span>
      </div>

      {/* 댓글 작성 폼 */}
      <CommentForm onAddComment={handleAddComment} />
    </div>
  );
};

export default CommentSection;
