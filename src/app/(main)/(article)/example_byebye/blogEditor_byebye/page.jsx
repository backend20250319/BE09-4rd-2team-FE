'use client';

import React from 'react';
import TopBar from './TopBar'; // 최상단 N Blog + 발행 버튼
import FontToolbar from './FontToolbar'; // 글꼴/텍스트 스타일 툴바
import InsertToolbar from './InsertToolbar'; // 삽입 도구 툴바

const BlogEditor = () => {
  const handlePublish = () => {
    alert('글이 발행되었습니다!');
    // 실제 발행 로직 연결
  };

  const handleFontChange = (type, value) => {
    console.log(`폰트 변경: ${type} → ${value}`);
    // 실제 글꼴/스타일 적용 로직 연결
  };

  const handleInsert = type => {
    console.log(`${type} 삽입 요청됨`);
    // 실제 삽입 로직 연결
  };

  const handleShortcut = type => {
    console.log(`${type} 단축키 사용`);
    // 실제 단축키 로직 연결
  };

  return (
    <div>
      <TopBar onPublish={handlePublish} />

      <InsertToolbar onInsert={handleInsert} onShortcut={handleShortcut} />

      <FontToolbar onChange={handleFontChange} />

      <div style={{ padding: 24, background: '#fff' }}>
        <h1>제목</h1>
      </div>
      <hr />

      {/* ↓ 실제 에디터 본문 영역 */}

      <div style={{ minHeight: 300, padding: 24, background: '#fff' }}>
        <h2>여기에 본문을 작성하세요.</h2>
        {/* 실제 에디터 컴포넌트 연결 */}
      </div>
    </div>
  );
};

export default BlogEditor;
