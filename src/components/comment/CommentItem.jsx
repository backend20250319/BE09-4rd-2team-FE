'use client';

const CommentItem = ({ comment, onLike }) => {
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
        padding: '16px 0',
        borderBottom: '1px solid #f1f3f4',
        position: 'relative',
      }}
    >
      <div
        style={{
          display: 'flex',
          gap: '12px',
        }}
      >
        {/* 프로필 이미지 */}
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

        {/* 댓글 내용 영역 */}
        <div style={{ flex: 1 }}>
          {/* 닉네임 */}
          <div
            style={{
              fontWeight: 'bold',
              fontSize: '14px',
              color: '#333',
              marginBottom: '6px',
            }}
          >
            {comment.author}
          </div>

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
            {formatContent(comment.content)}
          </div>

          {/* 시간 */}
          <div
            style={{
              fontSize: '12px',
              color: '#999',
              marginBottom: '6px',
            }}
          >
            {comment.timestamp}
          </div>

          {/* 답글 버튼 - 시간 아래 */}
          <div>
            <button
              style={{
                background: 'none',
                border: '1px solid #ddd',
                borderRadius: '4px',
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
      </div>

      {/* 공감 버튼 - 오른쪽 하단 */}
      <div
        style={{
          position: 'absolute',
          right: '0',
          bottom: '16px',
        }}
      >
        <button
          onClick={onLike}
          style={{
            display: 'flex',
            alignItems: 'center',
            gap: '4px',
            background: 'none',
            border: '1px solid #ddd',
            borderRadius: '4px',
            cursor: 'pointer',
            fontSize: '12px',
            color: '#666',
            padding: '4px 8px',
          }}
        >
          <span>♡</span>
          <span>{comment.likes}</span>
        </button>
      </div>
    </div>
  );
};

export default CommentItem;
