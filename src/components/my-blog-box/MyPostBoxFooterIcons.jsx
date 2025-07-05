import React from 'react';
import './MyPostBoxFooterIcons.css';

export default function MyPostBoxFooterIcons() {
  return (
    <div className="post-footer">
      {/* 좌측: 공감/댓글 */}
      <div className="post-actions">
        <button className="action-btn">🤍 공감</button>
        <button className="action-btn">💬 댓글 쓰기</button>
      </div>

      {/* 우측: 아이콘 + 관리버튼 ★수정/삭제버튼 */}
      <div className="post-icons-manage">
        <div className="share-icons">
          <button className="icon-btn cafe-spi" aria-label="카페 보내기"></button>
          <button className="icon-btn keep-spi" aria-label="keep 보내기"></button>
          {/*-252px 0px;*/}
          <button className="icon-btn memo-spi" aria-label="memo 보내기"></button>
          {/*-252px -64px;*/}
          <button className="icon-btn realse-spi" aria-label="기타 보내기 펼치기 "></button>
          {/*-252px -96px;*/}
        </div>
        <div className="manage-btns">
          <a href="#" className="owner-btn">
            수정
          </a>
          <a href="#" className="owner-btn">
            삭제
          </a>
          <a
            href="#"
            id="configBtn1"
            className="owner-btn"
            role="button"
            aria-haspopup="true"
            aria-expanded="false"
          >
            설정
          </a>
        </div>
      </div>
    </div>
  );
}
