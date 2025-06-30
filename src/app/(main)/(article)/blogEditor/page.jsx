'use client';

import React, { useState, useRef } from 'react';
// 툴바 컴포넌트 import
import { Toolbar } from '@/src/app/(main)/(article)/blogEditor/toolbar/insertToolbar';
// 제목 입력 컴포넌트 import
import TitleInput from './editor/titleinput';
// 본문 입력 컴포넌트 import
import ContentEditor from './editor/contenteditor';
// 헤더 스타일 import (동작하지 않아도 로드)
import styles from './header.css';
import Image from 'next/image';

export default function BlogEditor() {
  styles; // CSS가 빌드에 포함되도록만 처리
  // 제목모드, 본문모드
  const [activeSection, setActiveSection] = useState('title');
  // 제목 상태
  const [title, setTitle] = useState('');
  // 내용 상태
  const [content, setContent] = useState('');
  // 제목에서 엔터 시 내용으로 이동하기 위한 ref
  const contentRef = useRef(null);

  // 저장 버튼 동작
  const handleSave = () => {
    const blogPost = { title, content };
    console.log('저장:', blogPost);
  };

  // 발행 버튼 동작
  const handlePublish = () => {
    const blogPost = { title, content };
    console.log('발행:', blogPost);
  };

  return (
    <div className="flex flex-col h-screen bg-[#f5f5f5]">
      <header className="flex items-center px-4 py-2 border-b">
        <a href="/" className="flex items-center">
          <img
            src="/images/editor/header/n-logo.svg"
            alt="Naver Logo"
            className="w-6 h-6 inline-block align-middle"
          />
          <img
            src="/images/editor/header/blog-logo.svg"
            alt="Naver Blog Logo"
            className="h-6 ml-1 inline-block align-middle"
          />
        </a>

        {/* 저장/발행 버튼 */}
        <div className="space-x-2">
          <button onClick={handleSave}>저장</button>
          <button onClick={handlePublish}>발행</button>
        </div>
      </header>

      {/* 삽입 툴바 (이미지, 링크 등) */}
      <Toolbar />

      {/* 서식 툴바 (굵게, 기울임, 글꼴 등) */}
      <div className="flex items-center px-6 py-3 bg-white border-b">
        <button className="px-2 py-1 hover:bg-gray-100 rounded">굵게</button>
        <button className="px-2 py-1 hover:bg-gray-100 rounded">기울임</button>
        <button className="px-2 py-1 hover:bg-gray-100 rounded">글꼴</button>
      </div>

      {/* 본문 작성 영역 */}
      <main className="flex justify-center py-8">
        <div className="se_editor_wrap w-full max-w-4xl bg-white shadow-md rounded px-8 py-10">
          {/* 제목: onFocus로 상태 전환 */}
          <div className="se_title_wrap">
            <TitleInput
              title={title}
              setTitle={setTitle}
              contentRef={contentRef} // 넘겨주기
              onFocus={() => setActiveSection('title')}
            />
          </div>

          {/* ✅ 본문: onFocus로 상태 전환 */}
          <div className="se_content_wrap">
            <ContentEditor
              content={content}
              setContent={setContent}
              contentRef={contentRef} // 넘겨주고 있네
              onFocus={() => setActiveSection('content')}
            />
          </div>
        </div>
      </main>
    </div>
  );
}
