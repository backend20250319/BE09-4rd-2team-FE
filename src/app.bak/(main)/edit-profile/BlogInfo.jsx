'use client';
const styles = {};
import React, { useState, useEffect, useRef } from 'react';
// import './BlogBasicInfo.css';

export default function BlogBasicInfo({ userId }) {
  // 기존 상태들
  const [blogTitle, setBlogTitle] = useState('');
  const [nickname, setNickname] = useState('');
  const [description, setDescription] = useState('');
  const [profileFile, setProfileFile] = useState(null);
  const [profilePreview, setProfilePreview] = useState('');
  const fileInputRef = useRef(null);

  // 초기값 저장 (수정 체크용)
  const [initialBlogTitle, setInitialBlogTitle] = useState('');
  const [initialNickname, setInitialNickname] = useState('');
  const [initialDescription, setInitialDescription] = useState('');
  const [initialProfilePreview, setInitialProfilePreview] = useState('');

  // ✅ localStorage 값들을 state로 관리
  const [accessToken, setAccessToken] = useState('');
  const [currentUserId, setCurrentUserId] = useState('');

  // ✅ localStorage 값들을 useEffect에서 설정
  useEffect(() => {
    // 클라이언트에서만 localStorage 접근
    if (typeof window !== 'undefined') {
      const token = localStorage.getItem('accessToken') || '';
      const userId = localStorage.getItem('userId') || '';
      setAccessToken(token);
      setCurrentUserId(userId);
    }
  }, []);

  // 1. userInfo 데이터 받아오기
  useEffect(() => {
    async function fetchUserInfo() {
      try {
        let targetUserId = userId;

        // userId가 없으면 localStorage에서 가져오기 (클라이언트에서만)
        if (!targetUserId && typeof window !== 'undefined') {
          targetUserId = localStorage.getItem('userId');
        }

        if (!targetUserId) {
          console.log('userId를 찾을 수 없습니다.');
          return;
        }

        console.log(targetUserId);
        const res = await fetch(
          `${process.env.NEXT_PUBLIC_API_BLOG}/blog-service/api/user-info/${targetUserId}`,
        );
        if (!res.ok) throw new Error('데이터를 불러오는데 실패했습니다.');
        const data = await res.json();

        // 상태 세팅
        setBlogTitle(data.blogTitle || '');
        setNickname(data.nickname || '');
        setDescription(data.profileIntro || '');
        setProfilePreview(data.profileImgUrl || '');

        // 초기값도 같이 세팅 (변경 비교용)
        setInitialBlogTitle(data.blogTitle || '');
        setInitialNickname(data.nickname || '');
        setInitialDescription(data.profileIntro || '');
        setInitialProfilePreview(data.profileImgUrl || '');
      } catch (err) {
        alert(err.message);
      }
    }

    // accessToken이 로드된 후에만 실행
    if (accessToken || currentUserId) {
      fetchUserInfo();
    }
  }, [userId, accessToken, currentUserId]);

  // 나머지 코드는 그대로...
  // (handleFileChange, handleDeleteImage, handleSubmit 함수들은 변경 없음)

  const handleFileChange = e => {
    const file = e.target.files[0];
    if (file) {
      setProfileFile(file);
      setProfilePreview(URL.createObjectURL(file));
    }
  };

  const handleDeleteImage = () => {
    setProfileFile(null);
    setProfilePreview(initialProfilePreview);
    if (fileInputRef.current) {
      fileInputRef.current.value = null;
    }
  };

  const handleSubmit = async e => {
    e.preventDefault();

    let uploadedImgUrl = profilePreview;

    if (profileFile) {
      const formData = new FormData();
      formData.append('file', profileFile);
      try {
        const response = await fetch('http://localhost:8000/api/blog-service/ftp/upload', {
          method: 'POST',
          headers: {
            Authorization: `Bearer ${accessToken}`,
          },
          body: formData,
        });
        const data = await response.json();

        if (response.ok && data.success && data.imageUrls && data.imageUrls.length > 0) {
          uploadedImgUrl = data.imageUrls[0];
        } else {
          alert('이미지 업로드 실패: ' + (data.message || ''));
          return;
        }
      } catch (error) {
        alert('이미지 업로드 중 에러: ' + error.message);
        return;
      }
    }

    const isChanged =
      blogTitle !== initialBlogTitle ||
      nickname !== initialNickname ||
      description !== initialDescription ||
      profilePreview !== initialProfilePreview;

    if (!isChanged) {
      alert('수정된 내용이 없습니다.');
      return;
    }

    const updatedFields = {
      blogTitle,
      nickname,
      profileIntro: description,
      profileImagUrl: uploadedImgUrl,
    };

    try {
      console.log('edit: ' + userId);
      console.log(updatedFields);
      const res = await fetch(
        `${process.env.NEXT_PUBLIC_API_BLOG}/blog-service/api/user-info/${currentUserId}`,
        {
          method: 'PATCH',
          headers: {
            'Content-Type': 'application/json',
            Authorization: `Bearer ${accessToken}`,
          },
          body: JSON.stringify(updatedFields),
        },
      );
      if (res.ok) {
        alert('정보가 성공적으로 수정되었습니다.');
        setInitialBlogTitle(blogTitle);
        setInitialNickname(nickname);
        setInitialDescription(description);
        setInitialProfilePreview(uploadedImgUrl);
      } else {
        alert('수정에 실패했습니다.');
      }
    } catch (err) {
      alert('서버 오류: ' + err.message);
    }
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
          <label htmlFor="profile-img">블로그 프로필 이미지</label>
          <div className="form-row-left">
            <input
              id="profile-img"
              type="file"
              accept="image/*"
              onChange={handleFileChange}
              ref={fileInputRef}
            />
          </div>
          <div className="form-row-right">
            <div className="profile-img-box">
              <img
                src={profilePreview || 'https://ssl.pstatic.net/static/blog/no_image_161.png'}
                alt="프로필"
                className="profile-img"
              />
            </div>

            {profilePreview && (
              <button type="button" onClick={handleDeleteImage} className="img-delete-btn">
                이미지 삭제
              </button>
            )}
            <div className="img-desc">
              <span>프로필 이미지는 가로 160px 이상을 권장합니다.</span>
            </div>
          </div>
        </div>
        <div className="form-row">
          <button type="submit" className="confirm-btn">
            확인
          </button>
        </div>
      </form>
    </div>
  );
}
