/* page.jsx */

'use client';
import React, { useState, useRef } from 'react';
import { Toolbar } from '@/src/app/(main)/(post)/blog-editor/toolbar/InsertToolbar';
import TitleInput from './editor/TitleInput';
import ContentEditor from './editor/ContentEditor';
// 헤더 스타일 import (동작하지 않아도 로드)
import styles from './Header.css';
// 발행 설정창
import PublishOptions from '@/src/app/(main)/(post)/blog-editor/posts/PublishOption.jsx';
import SubjectSettings from '@/src/app/(main)/(post)/blog-editor/posts/SubjectSettings';
// 최상단 툴바
import Header from '@/src/app/(main)/(post)/blog-editor/Header';
import './editor/Editor.css';
import Modal from './posts/Modal';
// import PublishModal from './PublishModal'; // 모달 창 열고 닫기에 쓰임

export default function BlogEditor() {
  styles; // CSS가 빌드에 포함되도록만 처리

  // 제목모드, 본문모드
  // const [activeSection, setActiveSection] = useState('title'); <<<< 보류 : 서식 변경 필요?

  // 제목 상태
  const [title, setTitle] = useState('');
  // 내용 상태
  const [content, setContent] = useState('');
  // 제목에서 엔터 시 내용으로 이동하기 위한 ref
  const contentRef = useRef(null);
  const [showPublishOptions, setShowPublishOptions] = useState(false);
  const [showSubjectSettings, setShowSubjectSettings] = useState(false);
  const [selectedSubject, setSelectedSubject] = useState('주제 선택 안 함');

  return (
    <div>
      <>
        <Header
          title={title}
          content={content}
          onOpenPublishOptions={() => setShowPublishOptions(true)}
        />

        {/* 주제설정창 ON */}
        {showPublishOptions && (
          <Modal onClose={() => setShowPublishOptions(false)}>
            <PublishOptions
              onClose={() => setShowPublishOptions(false)}
              onOpenSubject={() => {
                setShowPublishOptions(false); // 발행설정 모달 끔
                setShowSubjectSettings(true); // 주제설정 모달 켬
              }}
              selectedSubject={selectedSubject}
            />
          </Modal>
        )}

        {/* 발행설정창 ON */}
        {showSubjectSettings && (
          <Modal onClose={() => setShowSubjectSettings(false)}>
            <SubjectSettings
              onClose={() => {
                setShowSubjectSettings(false);
                setShowPublishOptions(true);
              }}
              onConfirm={subject => {
                setSelectedSubject(subject);
                setShowSubjectSettings(false);
                setShowPublishOptions(true);
              }}
            />
          </Modal>
        )}

        <main>{/* 입력창 */}</main>
      </>

      {/* 삽입 툴바 (이미지, 링크 등) */}
      <Toolbar />

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

          {/* 본문: onFocus로 상태 전환 */}
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
