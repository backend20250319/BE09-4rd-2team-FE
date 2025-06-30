'use client';

import React, { useRef } from 'react';

export default function UploadImage({ onUpload }) {
  const fileInputRef = useRef(null);

  // 버튼 클릭 → input 숨김 클릭
  const triggerFileSelect = () => {
    if (fileInputRef.current) {
      fileInputRef.current.click();
    }
  };

  // 파일 선택 → 서버로 업로드
  const handleFileChange = async e => {
    const file = e.target.files[0];
    if (!file) return;

    const formData = new FormData();
    formData.append('file', file);

    try {
      const response = await fetch('/api/uploadImage', {
        method: 'POST',
        body: formData,
      });

      if (!response.ok) throw new Error('업로드 실패');

      const data = await response.json();
      console.log('업로드 완료:', data);

      if (onUpload) {
        onUpload(data.imageUrl); // 부모 컴포넌트로 URL 전달
      }
    } catch (err) {
      console.error(err);
      alert('업로드 중 오류 발생');
    }
  };

  return (
    <>
      <input
        type="file"
        accept="image/*"
        ref={fileInputRef}
        onChange={handleFileChange}
        style={{ display: 'none' }}
      />

      <button
        onClick={triggerFileSelect} // 클릭하면 파일 선택 열림
        style={{
          minWidth: '40px',
          height: '54px',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          justifyContent: 'center',
          border: 'none',
          background: 'none',
          cursor: 'pointer',
          textAlign: 'center',
          padding: 0,
        }}
      >
        <span className="bg-photo"></span>
        <span
          style={{
            fontSize: '12px',
            color: '#666',
            marginTop: '4px',
            lineHeight: 1.2,
          }}
        >
          사진
        </span>
      </button>
    </>
  );
}
