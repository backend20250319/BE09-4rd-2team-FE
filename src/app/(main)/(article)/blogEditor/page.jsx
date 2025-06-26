// React의 상태 관리 훅 사용: useState, useEffect, useContext 등 React 훅을 사용하려면 클라이언트 컴포넌트여야 합니다.
// 브라우저 전용 API 사용: window, document, localStorage 등 브라우저 환경에서만 동작하는 API를 사용할 때.
// 이벤트 핸들링: 버튼 클릭, 입력 등 사용자 상호작용이 필요한 경우.
// 클라이언트 사이드 라우팅: useRouter 등 클라이언트 전용 라우팅 훅을 사용할 때.
'use client';

import { useEffect, useRef } from 'react';
import Editor from '@toast-ui/editor';
import '@toast-ui/editor/dist/toastui-editor.css';

export default function BlogEditor() {
  // 에디터가 붙을 DOM 요소를 참조하기 위한 ref
  const editorRef = useRef(null);

  useEffect(() => {
    // ref가 연결된 DOM이 존재할 때만 Toast UI Editor 초기화
    if (editorRef.current) {
      new Editor({
        el: editorRef.current, // 에디터가 렌더링될 DOM 요소
        height: '600px', // 에디터의 높이 설정
        initialEditType: 'wysiwyg', // 처음에 보여질 편집 형태 (Markdown 또는 WYSIWYG)
        previewStyle: 'vertical', // 미리보기 창을 세로 정렬로 설정

        // 툴바에 표시할 기능 아이템 설정
        toolbarItems: [
          // 텍스트 서식 관련 버튼들
          ['heading', 'bold', 'italic', 'strike'],

          // 인용구와 수평선 추가
          ['hr', 'quote'],

          // 목록 및 할 일 체크리스트
          ['ul', 'ol', 'task'],

          // 테이블, 링크 삽입
          ['table', 'link'],

          // 이미지 및 코드 삽입
          ['image', 'code'],

          /// 에디터 ↔ 미리보기 동기화
          ['scrollSync'],
        ],
      });
    }
  }, []);
  // 실제 에디터가 들어갈 컨테이너 div
  return (
    <div className="blog-editor-container">
      <input type="text" placeholder="제목을 입력하세요" className="title-input" />

      <div ref={editorRef} className="editor-section" />

      <div className="options-panel">
        <label>공개 설정</label>
        <select>
          <option>공개</option>
          <option>이웃공개</option>
          <option>비공개</option>
        </select>

        <label>태그</label>
        <input type="text" placeholder="예: 일상, 여행" />
      </div>
    </div>
  );
}
