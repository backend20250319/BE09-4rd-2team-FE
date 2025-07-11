import React, { useState } from 'react';
import './BlogBasicInfo.css';

export default function BlogBasicInfo() {
  const [blogTitle, setBlogTitle] = useState('');
  const [nickname, setNickname] = useState('');
  const [description, setDescription] = useState('');
  const [profileImg, setProfileImg] = useState(
    'https://blogpfthumb-phinf.pstatic.net/MjAyNDA1MTlfMTg4/MDAxNzE2Mzg1ODgxNDc2.4A4vG3eX9nQKjH1w4sK8w0Q8HkHf4oQh5rQwK-3r1nUg.h3B6Qd1Wn6vN9h9N9yA6lQh5rQwK-3r1nUg.jpeg',
  );

  // 팝업에서 이미지 등록 시
  window.handleImageUpload = imgDataUrl => {
    setProfileImg(imgDataUrl);
  };

  const handleOpenPopup = () => {
    window.open('/image-upload-popup', '이미지업로드', 'width=400,height=300,scrollbars=no');
  };

  const handleDeleteImage = () => {
    setProfileImg('');
  };

  // 확인 버튼 클릭 시
  const handleSubmit = async e => {
    e.preventDefault();

    let uploadedImgUrl = profileImg; // 기본값: 미리보기 URL(업로드 안 했을 때)

    // 1. 이미지 파일이 있으면 먼저 업로드
    if (profileImg) {
      const imgFormData = new FormData();
      imgFormData.append('file', profileImg);

      try {
        const imgRes = await fetch('http://localhost:8081/ftp/upload', {
          method: 'POST',
          body: imgFormData,
        });
        const imgData = await imgRes.json();

        if (imgRes.ok && imgData.success && imgData.imageUrls && imgData.imageUrls.length > 0) {
          uploadedImgUrl = imgData.imageUrls[0];
        } else {
          alert('이미지 업로드 실패: ' + (imgData.message || ''));
          return;
        }
      } catch (err) {
        alert('이미지 업로드 중 에러: ' + err.message);
        return;
      }
    }

    // // 2. 전체 데이터 JSON으로 전송 (이미지 URL 포함)
    // const data = {
    //   blogTitle,
    //   nickname,
    //   description,
    //   profileImg: uploadedImgUrl, // 이미지 URL만 보냄
    // };

    // try {
    //   const response = await fetch('/api/blog-info', {
    //     method: 'POST',
    //     headers: {
    //       'Content-Type': 'application/json',
    //     },
    //     body: JSON.stringify(data),
    //   });

    //   if (response.ok) {
    //     alert('저장되었습니다!');
    //     // 필요하다면 추가 동작
    //   } else {
    //     alert('저장 실패!');
    //   }
    // } catch (error) {
    //   alert('에러 발생: ' + error.message);
    // }
  };

  return (
    <div className="main-content">
      <h2 className="section-title">블로그 정보</h2>
      <form className="basic-info-form" onSubmit={handleSubmit}>
        <div className="form-row">
          <label htmlFor="blog-title">블로그명</label>
          <input
            id="blog-title"
            type="text"
            placeholder="블로그명 입력"
            value={blogTitle}
            onChange={e => setBlogTitle(e.target.value)}
          />
        </div>
        <div className="form-row">
          <label htmlFor="nickname">별명</label>
          <input
            id="nickname"
            type="text"
            placeholder="별명 입력"
            value={nickname}
            onChange={e => setNickname(e.target.value)}
          />
        </div>
        <div className="form-row">
          <label htmlFor="description">소개글</label>
          <textarea
            id="description"
            placeholder="블로그 소개글을 입력하세요."
            value={description}
            onChange={e => setDescription(e.target.value)}
          />
        </div>
        <div className="form-row">
          <label>블로그 프로필 이미지</label>
          <div className="profile-img-box">
            {profileImg ? (
              <img src={profileImg} alt="프로필" className="profile-img" />
            ) : (
              <div className="no-image">이미지가 없습니다</div>
            )}
          </div>
          <div className="img-desc">
            <span>프로필 이미지는 가로 160px 이상을 권장합니다.</span>
            <button type="button" onClick={handleOpenPopup} className="img-upload-btn">
              이미지 업로드
            </button>
            <button type="button" onClick={handleDeleteImage} className="img-delete-btn">
              이미지 삭제
            </button>
          </div>
        </div>
        <div className="form-row">
          <button type="submit" onClick={handleSubmit} className="confirm-btn">
            확인
          </button>
        </div>
      </form>
    </div>
  );
}
