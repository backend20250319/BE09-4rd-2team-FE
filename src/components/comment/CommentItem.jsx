'use client';

import { useState } from 'react';

const CommentItem = ({ comment, onLike, onDelete }) => {
  const [showMenu, setShowMenu] = useState(false);
  const [isReplying, setIsReplying] = useState(false);
  const [replyText, setReplyText] = useState('');

  const handleReplySubmit = e => {
    e.preventDefault();
    if (replyText.trim()) {
      // 답글 기능은 여기서 구현
      console.log('답글:', replyText);
      setReplyText('');
      setIsReplying(false);
    }
  };

  const getInitial = name => {
    return name ? name.charAt(0) : '?';
  };

  const formatContent = content => {
    return content.split('\n').map((line, index) => (
      <span key={index}>
        {line}
        {index < content.split('\n').length - 1 && <br />}
      </span>
    ));
  };

  return (
    <div
      style={{
        marginBottom: '20px',
        paddingBottom: '20px',
        borderBottom: '1px solid #f1f3f4',
      }}
    >
      <div
        style={{
          display: 'flex',
          gap: '12px',
        }}
      >
        {/* 프로필 아바타 */}
        <div
          style={{
            width: '36px',
            height: '36px',
            borderRadius: '50%',
            backgroundColor: '#4a90e2',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            color: 'white',
            fontSize: '14px',
            fontWeight: 'bold',
            flexShrink: 0,
          }}
        >
          {getInitial(comment.author)}
        </div>

        <div style={{ flex: 1 }}>
          {/* 댓글 헤더 */}
          <div
            style={{
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'space-between',
              marginBottom: '8px',
            }}
          >
            <div
              style={{
                display: 'flex',
                alignItems: 'center',
                gap: '8px',
              }}
            >
              <span
                style={{
                  fontWeight: 'bold',
                  fontSize: '14px',
                  color: '#333',
                }}
              >
                {comment.author}
              </span>

              <span
                style={{
                  fontSize: '12px',
                  color: '#999',
                }}
              >
                {comment.timestamp}
              </span>
            </div>

            {/* 더보기 메뉴 */}
            <div style={{ position: 'relative' }}>
              <button
                onClick={() => setShowMenu(!showMenu)}
                style={{
                  background: 'none',
                  border: 'none',
                  cursor: 'pointer',
                  padding: '4px 8px',
                  fontSize: '16px',
                  color: '#666',
                }}
              >
                ⋯
              </button>

              {showMenu && (
                <div
                  style={{
                    position: 'absolute',
                    right: 0,
                    top: '100%',
                    backgroundColor: 'white',
                    border: '1px solid #ddd',
                    borderRadius: '4px',
                    boxShadow: '0 2px 8px rgba(0,0,0,0.1)',
                    zIndex: 10,
                    minWidth: '80px',
                  }}
                >
                  <button
                    onClick={() => {
                      setShowMenu(false);
                      // 신고 기능
                    }}
                    style={{
                      display: 'block',
                      width: '100%',
                      padding: '8px 12px',
                      border: 'none',
                      background: 'none',
                      textAlign: 'left',
                      cursor: 'pointer',
                      fontSize: '13px',
                    }}
                  >
                    신고
                  </button>
                  <button
                    onClick={() => {
                      setShowMenu(false);
                      onDelete();
                    }}
                    style={{
                      display: 'block',
                      width: '100%',
                      padding: '8px 12px',
                      border: 'none',
                      background: 'none',
                      textAlign: 'left',
                      cursor: 'pointer',
                      fontSize: '13px',
                      color: '#e74c3c',
                    }}
                  >
                    삭제
                  </button>
                </div>
              )}
            </div>
          </div>

          {/* 댓글 내용 */}
          <div
            style={{
              fontSize: '14px',
              lineHeight: '1.5',
              color: '#333',
              marginBottom: '12px',
              wordBreak: 'break-word',
            }}
          >
            {formatContent(comment.content)}
          </div>

          {/* 댓글 액션 버튼들 */}
          <div
            style={{
              display: 'flex',
              alignItems: 'center',
              gap: '16px',
            }}
          >
            <button
              onClick={onLike}
              style={{
                display: 'flex',
                alignItems: 'center',
                gap: '4px',
                background: 'none',
                border: 'none',
                cursor: 'pointer',
                fontSize: '13px',
                color: comment.isLiked ? '#e74c3c' : '#666',
                padding: '4px',
              }}
            >
              <span>{comment.isLiked ? '❤️' : '🤍'}</span>
              {comment.likes > 0 && <span>{comment.likes}</span>}
            </button>

            <button
              onClick={() => setIsReplying(!isReplying)}
              style={{
                background: 'none',
                border: 'none',
                cursor: 'pointer',
                fontSize: '13px',
                color: '#666',
                padding: '4px',
              }}
            >
              답글
            </button>
          </div>

          {/* 답글 작성 폼 */}
          {isReplying && (
            <div
              style={{
                marginTop: '12px',
                padding: '12px',
                backgroundColor: '#f8f9fa',
                borderRadius: '4px',
              }}
            >
              <form onSubmit={handleReplySubmit}>
                <textarea
                  value={replyText}
                  onChange={e => setReplyText(e.target.value)}
                  placeholder="답글을 입력하세요..."
                  style={{
                    width: '100%',
                    minHeight: '60px',
                    padding: '8px',
                    border: '1px solid #ddd',
                    borderRadius: '4px',
                    fontSize: '13px',
                    resize: 'vertical',
                    outline: 'none',
                  }}
                />
                <div
                  style={{
                    display: 'flex',
                    justifyContent: 'flex-end',
                    gap: '8px',
                    marginTop: '8px',
                  }}
                >
                  <button
                    type="button"
                    onClick={() => {
                      setIsReplying(false);
                      setReplyText('');
                    }}
                    style={{
                      padding: '6px 12px',
                      border: '1px solid #ddd',
                      backgroundColor: '#fff',
                      borderRadius: '4px',
                      fontSize: '12px',
                      cursor: 'pointer',
                    }}
                  >
                    취소
                  </button>
                  <button
                    type="submit"
                    disabled={!replyText.trim()}
                    style={{
                      padding: '6px 12px',
                      border: 'none',
                      backgroundColor: replyText.trim() ? '#03c75a' : '#ccc',
                      color: 'white',
                      borderRadius: '4px',
                      fontSize: '12px',
                      cursor: replyText.trim() ? 'pointer' : 'not-allowed',
                    }}
                  >
                    등록
                  </button>
                </div>
              </form>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default CommentItem;
