'use client';

// ContentEditor: 본문 입력 영역 컴포넌트
// contentRef 를 외부에서 전달받아 제목에서 포커스 이동 가능
import { useRef } from 'react';
// 본문 영역 전용 CSS
import './content.css';

export default function ContentEditor({ content, setContent, contentRef }) {
  // 입력이 끝나고 포커스를 잃으면 내용을 저장
  const ref = useRef(null);

  // 입력이 끝나고 포커스를 잃으면 내용을 저장
  const handleBlur = e => {
    const text = e.currentTarget.innerText.trim();
    if (text === '') {
      // 텍스트 없으면 완전 비워서 placeholder 다시 보이게
      e.currentTarget.innerHTML = '';
    }
    setContent(text);
  };

  return (
    <div
      ref={contentRef} // div에 ref 연결 (포커스 이동 시 활용 가능)
      className="se_content" // 네이버 스마트에디터 스타일 이름 맞춤
      contentEditable // div를 직접 편집 가능하게 함
      suppressContentEditableWarning // React 경고 억제 (권장)
      data-placeholder="나만의 일상을 기록으로 남겨보세요!" // placeholder 문구
      onBlur={handleBlur} // 포커스 잃으면 현재 내용 저장
    >
      {content !== '' ? content : null}
    </div>
  );
}
