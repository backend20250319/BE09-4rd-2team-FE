'use client';

import { useState } from 'react';

const CommentItem = ({ comment, onLike }) => {
  const [isCommentLiked, setIsCommentLiked] = useState(false);
  const [commentLikeCount, setCommentLikeCount] = useState(comment.likeCount || 0);

  const formatContent = content => {
    if (!content) return '';

    return content.split('\n').map((line, index) => (
      <span key={index}>
        {line}
        {index < content.split('\n').length - 1 && <br />}
      </span>
    ));
  };

  // 댓글 공감 클릭 핸들러
  const handleCommentLike = () => {
    setIsCommentLiked(!isCommentLiked);
    if (!isCommentLiked) {
      setCommentLikeCount(commentLikeCount + 1);
    } else {
      setCommentLikeCount(commentLikeCount - 1);
    }

    // 부모 컴포넌트 onLike 함수도 호출 (기존 로직 유지)
    if (onLike) {
      onLike();
    }
  };

  return (
    <div
      style={{
        padding: '16px 0',
        borderBottom: '1px solid #f1f3f4',
        position: 'relative',
      }}
    >
      {/* 프로필 이미지 + 닉네임 (한 줄) */}
      <div
        style={{
          display: 'flex',
          alignItems: 'center',
          gap: '12px',
          marginBottom: '8px',
        }}
      >
        {/* 프로필 이미지 */}
        <div
          style={{
            width: '36px',
            height: '36px',
            borderRadius: '50%',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            color: 'white',
            fontSize: '14px',
            fontWeight: 'bold',
            overflow: 'hidden',
            flexShrink: 0,
          }}
        >
          <img
            src={`https://i.pravatar.cc/36?u=${comment.author?.nickname || '익명'}`}
            alt={comment.author?.nickname || '익명'}
            style={{
              width: '100%',
              height: '100%',
              objectFit: 'cover',
            }}
          />
        </div>

        {/* 닉네임 */}
        <div
          style={{
            fontWeight: 'bold',
            fontSize: '14px',
            color: '#333',
          }}
        >
          {comment.author?.nickname || '익명'}
        </div>
      </div>

      {/* 댓글 내용 영역 */}
      <div
        style={{
          marginLeft: '5px',
        }}
      >
        {/* 🔥 비밀댓글 표시 - 새로 추가된 부분 */}
        {comment.isSecret && (
          <div
            style={{
              fontSize: '12px',
              color: '#888',
              marginBottom: '6px',
              display: 'flex',
              alignItems: 'center',
              gap: '4px',
              padding: '2px 6px',
              backgroundColor: '#f8f9fa',
              borderRadius: '4px',
              width: 'fit-content',
            }}
          >
            🔒 <span>비밀댓글</span>
          </div>
        )}

        {/* 댓글 내용 */}
        <div
          style={{
            fontSize: '14px',
            lineHeight: '1.5',
            color: '#333',
            marginBottom: '8px',
            wordBreak: 'break-word',
          }}
        >
          {formatContent(comment.comment)}
        </div>

        {/* 작성 시간 */}
        <div
          style={{
            fontSize: '12px',
            color: '#999',
            marginBottom: '6px',
          }}
        >
          {comment.createdAt}
        </div>

        {/* 답글 버튼 */}
        <div>
          <button
            style={{
              background: 'none',
              border: '1px solid #ddd',
              color: '#666',
              fontSize: '12px',
              cursor: 'pointer',
              padding: '4px 8px',
            }}
          >
            답글
          </button>
        </div>
      </div>

      {/* 공감 버튼 */}
      <div
        style={{
          position: 'absolute',
          right: '0',
          bottom: '16px',
        }}
      >
        <button
          onClick={handleCommentLike}
          style={{
            display: 'flex',
            alignItems: 'center',
            gap: '4px',
            background: 'none',
            border: '1px solid #ddd',
            cursor: 'pointer',
            fontSize: '12px',
            color: '#666',
            padding: '4px 8px',
          }}
        >
          <span style={{ fontSize: '14px' }}>{isCommentLiked ? '❤️' : '🤍'}</span>
          <span>{commentLikeCount}</span>
        </button>
      </div>
    </div>
  );
};

export default CommentItem;
