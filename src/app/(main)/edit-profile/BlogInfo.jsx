import React from "react";
import "./BlogBasicInfo.css";

export default function BlogBasicInfo() {
  return (
    <div className="blog-admin-container">
      <div className="sidebar">
        <div className="sidebar-title">기본 설정 관리</div>
        <ul className="sidebar-menu">
          <li className="active">기본 정보 관리</li>
          <li>사생활 보호</li>
          <li>스팸차단</li>
          <li>열린 이웃</li>
          <li>공지사항</li>
          <li>블로그 이용 Tip</li>
          <li>블로그 스마트봇</li>
        </ul>
      </div>
      <div className="main-content">
        <h2 className="section-title">블로그 정보</h2>
        <form className="basic-info-form">
          <div className="form-row">
            <label>네이버ID 타입</label>
            <span>개인</span>
          </div>
          <div className="form-row">
            <label>연결ID종류</label>
            <span>연결된 ID가 없습니다.</span>
          </div>
          <div className="form-row">
            <label>블로그 주소</label>
            <span>https://blog.naver.com/bloblaa</span>
          </div>
          <div className="form-row">
            <label htmlFor="blog-title">블로그명</label>
            <input id="blog-title" type="text" placeholder="블로그명 입력" />
          </div>
          <div className="form-row">
            <label htmlFor="nickname">별명</label>
            <input id="nickname" type="text" placeholder="별명 입력" />
          </div>
          <div className="form-row">
            <label htmlFor="description">소개글</label>
            <textarea
              id="description"
              placeholder="블로그 소개글을 입력하세요."
            />
          </div>
          <div className="form-row">
            <label htmlFor="topic">내 블로그 주제</label>
            <select id="topic">
              <option>없음</option>
              <option>일상</option>
              <option>여행</option>
              <option>음식</option>
              {/* ... */}
            </select>
          </div>
          <div className="form-row">
            <label>블로그 프로필 이미지</label>
            <div className="profile-img-box">
              <img
                src="https://blogpfthumb-phinf.pstatic.net/MjAyNDA1MTlfMTg4/MDAxNzE2Mzg1ODgxNDc2.4A4vG3eX9nQKjH1w4sK8w0Q8HkHf4oQh5rQwK-3r1nUg.h3B6Qd1Wn6vN9h9N9yA6lQh5rQwK-3r1nUg.jpeg"
                alt="프로필"
                className="profile-img"
              />
              <div className="img-desc">
                <span>프로필 이미지는 가로 160px 이상을 권장합니다.</span>
                <a href="#">이미지 업로드/삭제</a>
              </div>
              <div>
                <input type="checkbox" id="profile-public" />
                <label htmlFor="profile-public">
                  네이버 프로필에도 적용합니다.
                </label>
              </div>
            </div>
          </div>
          <div className="form-row">
            <label>모바일앱 커버 이미지</label>
            <div className="cover-img-box">
              <img
                src="https://blogimgs.pstatic.net/imgs/mobile/default_cover_img.png"
                alt="커버 이미지"
                className="cover-img"
              />
              <div className="img-desc">
                <span>
                  커버 이미지는 3MB 이하의 jpg, gif, png 파일만 등록할 수
                  있습니다.
                </span>
                <a href="#">이미지 업로드/삭제</a>
              </div>
            </div>
          </div>
          <div className="form-row">
            <label>서체 적용</label>
            <span>
              블로그 글꼴을 변경할 수 있습니다. <a href="#">설정 바로가기</a>
            </span>
          </div>
          <div className="form-row">
            <button type="submit" className="confirm-btn">
              확인
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}
