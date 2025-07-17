import React from 'react';
// import './TagButtons.css';

export default function TagButtons({ tags }) {
  return (
    /* 🗝️ 태그 데이터 받아오기 */
    <div className="tag-buttons">
      {tags.map((tag, index) => (
        <button key={index} className="tag-btn">
          #{tag}
        </button>
      ))}
    </div>
  );
}
