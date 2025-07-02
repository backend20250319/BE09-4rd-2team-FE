'use client';

import { useState } from 'react';
import CommentForm from './CommentForm';
import CommentList from './CommentList';

const CommentSection = () => {
  const [comments, setComments] = useState([
    {
      id: 1,
      author: '쏭블리',
      content: '사진 진짜 감성 대박이에요… 저장하고 갑니다 💕',
      timestamp: '2025.6.26. 09:15',
      likes: 0,
      isLiked: false,
    },
    {
      id: 2,
      author: '하루한줄기록',
      content: '오늘도 좋은 글 잘 보고 가요 :) 글 분위기 너무 좋아요!',
      timestamp: '2025.6.26. 10:22',
      likes: 0,
      isLiked: false,
    },
    {
      id: 3,
      author: '민트초코중독자',
      content: '헉 저도 여기 진짜 좋아해요 ㅋㅋ 공감 꾹 누르고 갑니다!',
      timestamp: '2025.6.26. 11:45',
      likes: 0,
      isLiked: false,
    },
    {
      id: 4,
      author: '달빛마카롱',
      content: '요즘 이런 정보 찾고 있었는데 딱이네요!! 감사합니다 😍',
      timestamp: '2025.6.26. 12:30',
      likes: 0,
      isLiked: false,
    },
    {
      id: 5,
      author: '조용한열정',
      content: '글에서 진심이 느껴져요. 자주 놀러올게요~ 🌿',
      timestamp: '2025.6.26. 13:18',
      likes: 0,
      isLiked: false,
    },
  ]);

  const handleAddComment = (content, isSecret) => {
    const newComment = {
      id: Date.now(),
      author: '새로운 사용자',
      content: content,
      timestamp: new Date().toLocaleString('ko-KR'),
      likes: 0,
      isLiked: false,
      isSecret: isSecret,
    };

    setComments([...comments, newComment]);
  };

  const handleLikeComment = () => {};

  const handleDeleteComment = () => {};

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
