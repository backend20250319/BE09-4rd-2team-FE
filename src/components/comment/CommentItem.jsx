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
            src={`https://i.pravatar.cc/36?u=${comment.author}`}
            alt={comment.author}
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
          {comment.author}
        </div>
      </div>

      {/* 댓글 내용 영역 - 이미지 밑에서 시작 */}
      <div
        style={{
          marginLeft: '5px',
        }}
      >
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

        {/* 답글 버튼 */}
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
