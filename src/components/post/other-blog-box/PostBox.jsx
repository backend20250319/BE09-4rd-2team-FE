import React from 'react';
import './PostBox.css';
import PostBoxFooterIcons from './PostBoxFooterIcons';
import MyPostMetaAction from './PostMetaAction';
import TagButtons from './TagButton';

export default function PostBox({ post = {}, onEdit, onDelete }) {
  /* 🗝️ post 데이터 받아오기 */
  const {
    category = '',
    blogTitle = '',
    nickname = '',
    date = '',
    profileImageUrl = '',
    content = '',
    tags = [],
  } = post;

  return (
    <div className="post-box">
      {/* 게시판 카테고리 */}
      <h1 className="post-category">{category}</h1>

      {/* 글 제목 */}
      <h2 className="post-title">{blogTitle}</h2>

      {/* 작성자 정보 */}
      <div className="post-meta">
        <div className="post-author-info">
          <img
            src={profileImageUrl || 'https://ssl.pstatic.net/static/blog/m/img_default.gif'}
            alt={`${nickname} 프로필`}
            className="profile-img2"
          />
          <span className="post-author-name">{nickname}</span>
          <span className="post-date">{date}</span>
        </div>

        <MyPostMetaAction onEdit={onEdit} onDelete={onDelete} />
      </div>

      {/* HTML 콘텐츠 렌더링 */}
      {/* angerouslySetInnerHTML는 이름처럼 XSS 보안 문제가 생길 수 있으니, 실서비스라면 백엔드에서 반드시 HTML Sanitizing 처리.지금은 테스트니까 그대로 사용해도 됩니다.*/}
      <div
        className="post-content"
        dangerouslySetInnerHTML={{ __html: content.replace(/\n/g, '<br>') }}
      />

      {/* 태그 출력 */}
      <TagButtons tags={tags} />

      {/* 공감/댓글 등 */}
      <PostBoxFooterIcons />
    </div>
  );
}
