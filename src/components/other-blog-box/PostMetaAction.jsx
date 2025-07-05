import React, { useState } from 'react';
import './PostMetaAction.css';

export default function MetaActions({ onEdit, onDelete }) {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  return (
    <div className="post-meta-actions">
      <button className="copy-url">URL 복사</button>

      <button className="neighbor-button">+이웃추가</button>

      <div className="more-menu-wrapper">
        <button
          className="more-menu"
          onClick={toggleMenu}
          aria-haspopup="true"
          aria-expanded={menuOpen}
        >
          ⋮
        </button>

        {/* 🗝️ 수정/삭제버튼 */}
        {menuOpen && (
          <div className="overflow-menu">
            <a href="#" className="menu-item modify">
              수정하기
              <img
                src="https://ssl.pstatic.net/static/blog/ico_blog_modify@2x.png"
                className="ico"
                alt="수정"
              />
            </a>
            <a href="#" className="menu-item share">
              공유하기
              <img
                src="https://ssl.pstatic.net/static/blog/ico_blog_share44x44.png"
                className="ico"
                alt="공유"
              />
            </a>
            <a href="#" className="menu-item delete">
              삭제하기
              <img
                src="https://ssl.pstatic.net/static/blog/ico_blog_del3@2x.png"
                className="ico"
                alt="삭제"
              />
            </a>
          </div>
        )}
      </div>
    </div>
  );
}
