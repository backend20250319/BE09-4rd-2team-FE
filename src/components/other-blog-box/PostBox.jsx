import React from 'react';
import '../my-blog-box/MyPostBox.css';

export default function MyPostBox({ post, onEdit, onDelete }) {
  return (
    <div className="post-box">
      {/* 게시판 */}
      <div className="board-name">게시판</div>

      {/* 제목 */}
      <h1 className="post-title">{post.title}</h1>

      {/* 작성자, 날짜 */}
      <div className="post-meta">
        <img src={post.profileImage} alt="프로필" className="author-img" />
        <span className="post-author">{post.author}</span>
        <span className="post-date">{post.date}</span>
      </div>

      {/* 본문 */}
      <p className="post-content">{post.content}</p>

      {/* 해시태그 */}
      <div className="tags">
        {post.tags.map((tag, i) => (
          <button key={i} className="tag-btn">
            #{tag}
          </button>
        ))}
      </div>

      {/* 액션 버튼들 */}
      <div className="post-actions">
        <button className="action-button">💗 공감</button>
        <button className="action-button">💬 댓글</button>
        <button className="action-button">🔗 공유</button>
        <button className="owner-button" onClick={onEdit}>
          수정
        </button>
        <button className="owner-button" onClick={onDelete}>
          삭제
        </button>
        <button className="owner-button">설정</button>
      </div>
    </div>
  );
}
