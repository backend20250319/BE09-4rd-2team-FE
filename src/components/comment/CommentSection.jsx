'use client';

import { useState } from 'react';
import CommentForm from './CommentForm';
import CommentList from './CommentList';

const CommentSection = () => {
  const [comments, setComments] = useState([
    {
      id: 1,
      author: '재은',
      content: '여름 감상 수필... 🔴 하고 가요!!',
      timestamp: '2025.6.26. 09:27',
      likes: 0,
      isLiked: false,
    },
    {
      id: 2,
      author: '이사드라',
      content: '여름 날씨요',
      timestamp: '2025.6.26. 10:40',
      likes: 0,
      isLiked: false,
    },
    {
      id: 3,
      author: '리브킹 여니',
      content:
        '서촌에서 좋은 시간을 보내신거 같네요 ㅎㅎ\n오늘은 우모일, 오늘도 멋진하루요\n하이링! 리브킹 여니 블로그도 많은 부탁드리겠습니다:)',
      timestamp: '2025.6.26. 11:13',
      likes: 0,
      isLiked: false,
    },
    {
      id: 4,
      author: '감정호 대표변호사',
      content: '포스팅 내용 좋네요~ 자주 소통해요!',
      timestamp: '2025.6.26. 11:31',
      likes: 0,
      isLiked: false,
    },
    {
      id: 5,
      author: '장민누나',
      content: '첫 시간에 강영 그 둘 ❤️',
      timestamp: '2025.6.26. 16:20',
      likes: 0,
      isLiked: false,
    },
    {
      id: 6,
      author: '망고는 떡수',
      content:
        '잘못 들어 어서 도움은... 인상좋은걸 보니 너무 종이에서 좋더 더 뵌혔지 하이해요 ㅠㅠ 인상깊기 더 없어요더옵소!!!\n앞으로도 자이입네도 포스팅 기다려주겠습니다!!!\n블로그 소식이다 시간나시던 채 블로그에도 들러와주세요~ 감사합니다!!',
      timestamp: '2025.6.26. 17:09',
      likes: 0,
      isLiked: false,
    },
  ]);

  const [commentCount, setCommentCount] = useState(comments.length);

  const handleAddComment = newComment => {
    const comment = {
      id: Date.now(),
      author: '방문자',
      content: newComment,
      timestamp: new Date()
        .toLocaleString('ko-KR', {
          year: 'numeric',
          month: '2-digit',
          day: '2-digit',
          hour: '2-digit',
          minute: '2-digit',
        })
        .replace(/\./g, '.')
        .replace(', ', '. '),
      likes: 0,
      isLiked: false,
    };

    setComments([...comments, comment]);
    setCommentCount(prev => prev + 1);
  };

  const handleLikeComment = commentId => {
    setComments(
      comments.map(comment =>
        comment.id === commentId
          ? {
              ...comment,
              isLiked: !comment.isLiked,
              likes: comment.isLiked ? comment.likes - 1 : comment.likes + 1,
            }
          : comment,
      ),
    );
  };

  const handleDeleteComment = commentId => {
    setComments(comments.filter(comment => comment.id !== commentId));
    setCommentCount(prev => prev - 1);
  };

  return (
    <div
      style={{
        maxWidth: '920px',
        margin: '40px auto',
        padding: '20px',
        backgroundColor: '#ffffff',
        border: '1px solid #e1e5e9',
        borderRadius: '8px',
      }}
    >
      {/* 댓글 헤더 */}
      <div
        style={{
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-between',
          marginBottom: '20px',
          paddingBottom: '15px',
          borderBottom: '2px solid #f1f3f4',
        }}
      >
        <div
          style={{
            display: 'flex',
            alignItems: 'center',
            gap: '10px',
          }}
        >
          <span
            style={{
              fontSize: '18px',
              fontWeight: 'bold',
              color: '#333',
            }}
          >
            댓글
          </span>
          <span
            style={{
              fontSize: '16px',
              color: '#666',
              backgroundColor: '#f8f9fa',
              padding: '4px 8px',
              borderRadius: '12px',
            }}
          >
            {commentCount}
          </span>
        </div>

        <div
          style={{
            display: 'flex',
            gap: '8px',
          }}
        >
          <button
            style={{
              padding: '6px 12px',
              border: '1px solid #ddd',
              backgroundColor: '#fff',
              borderRadius: '4px',
              fontSize: '13px',
              cursor: 'pointer',
            }}
          >
            최신순
          </button>
          <button
            style={{
              padding: '6px 12px',
              border: '1px solid #ddd',
              backgroundColor: '#f8f9fa',
              borderRadius: '4px',
              fontSize: '13px',
              cursor: 'pointer',
              color: '#666',
            }}
          >
            오래된순
          </button>
        </div>
      </div>

      {/* 댓글 작성 폼 */}
      <CommentForm onAddComment={handleAddComment} />

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
          marginTop: '30px',
          gap: '20px',
        }}
      >
        <button
          style={{
            padding: '8px 16px',
            border: '1px solid #ddd',
            backgroundColor: '#fff',
            borderRadius: '4px',
            cursor: 'pointer',
            fontSize: '14px',
          }}
        >
          이전
        </button>

        <span
          style={{
            padding: '8px 12px',
            backgroundColor: '#03c75a',
            color: 'white',
            borderRadius: '4px',
            fontSize: '14px',
            minWidth: '32px',
            textAlign: 'center',
          }}
        >
          1
        </span>

        <button
          style={{
            padding: '8px 16px',
            border: '1px solid #ddd',
            backgroundColor: '#fff',
            borderRadius: '4px',
            cursor: 'pointer',
            fontSize: '14px',
          }}
        >
          다음
        </button>
      </div>
    </div>
  );
};

export default CommentSection;
