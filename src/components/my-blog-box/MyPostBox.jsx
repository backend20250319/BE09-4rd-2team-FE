import React from 'react';
import './MyPostBox.css'; // 스타일은 따로 관리
import MyPostBoxFooterIcons from './MyPostBoxFooterIcons';
import MyPostMetaAction from './MyPostMetaAction';
import TagEditor from './TapEditor';

export default function MyPostBox({ post, onEdit, onDelete }) {
  const { category, blogTitle, nickName, date, imageUrls, content, tags } = post;

  return (
    <div className="post-box">
      {/* 게시판 카테고리 */}
      <h1 className="post-category">{category}</h1>

      {/* 글 제목 */}
      <h2 className="post-title">{blogTitle}</h2>

      {/* 작성자 정보 + 우측 URL 복사/이웃추가 */}
      <div className="post-meta">
        <div className="post-author-info">
          <img
            src={imageUrls || '/assets/images/myblog/profile.png'}
            alt={`${nickName} 프로필`}
            className="profile-img2"
          />
          <span className="post-author-name">{nickName}</span>
          <span className="post-date">{date}</span>
        </div>

        {/* 메뉴/통계/복사 → 별도 컴포넌트로 대체 */}
        <MyPostMetaAction onEdit={onEdit} onDelete={onDelete} />
      </div>

      <div className="post-content">
        {content.split('\n').map((line, index) => (
          <p key={index}>{line}</p>
        ))}
      </div>

      {/* ✅ 태그 출력+수정 */}
      <TagEditor tags={tags} />

      {/* 공감/댓글 <> 보내기/수정/삭제/설정 */}
      <MyPostBoxFooterIcons />
    </div>
  );
}
