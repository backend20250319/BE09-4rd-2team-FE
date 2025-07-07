import React from 'react';
import './PostBoxFooterIcons.css';

export default function PostBoxFooterIcons() {
  return (
    <div className="post-footer">
      {/* 🗝️ 좌측: 공감/댓글 확인*/}
      <div className="post-actions">
        <button className="action-btn">🤍 공감</button>
        <button className="action-btn">💬 댓글</button>
      </div>

      {/* 우측: 아이콘 */}
      <div className="post-icons-manage">
        <div className="share-icons">
          <button className="icon-btn blog-spi" aria-label="블로그 보내기"></button>
          <button className="icon-btn cafe-spi" aria-label="카페 보내기"></button>
          <button className="icon-btn keep-spi" aria-label="keep 보내기"></button>
          {/*-252px 0px;*/}
          <button className="icon-btn memo-spi" aria-label="memo 보내기"></button>
          {/*-252px -64px;*/}
          <button className="icon-btn realse-spi" aria-label="기타 보내기 펼치기 "></button>
          {/*-252px -96px;*/}
        </div>
        <div className="manage-btns">
          <a
            href="#"
            id="configBtn1"
            className="owner-btn"
            role="button"
            aria-haspopup="true"
            aria-expanded="false"
          >
            인쇄
          </a>
        </div>
      </div>
    </div>
  );
}
