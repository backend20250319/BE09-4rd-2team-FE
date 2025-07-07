'use client'; // 이 컴포넌트가 클라이언트 측에서 렌더링되고 실행되어야 함을 나타냅니다. (Next.js App Router)

import React, { useRef } from 'react'; // React 라이브러리와 useRef 훅을 임포트합니다.

// 'UploadImage'라는 이름의 React 컴포넌트를 정의합니다.
// onUpload 함수를 props로 받아 이미지 업로드 완료 시 부모 컴포넌트로 URL을 전달합니다.
export default function UploadImage({ onUpload }) {
  // file input DOM 요소에 직접 접근하기 위해 useRef 훅을 사용합니다.
  const fileInputRef = useRef(null);

  // 사용자가 버튼을 클릭했을 때 숨겨진 file input을 프로그래매틱하게 클릭하는 함수입니다.
  // 이를 통해 커스텀 UI로 파일 선택 창을 열 수 있습니다.
  const triggerFileSelect = () => {
    // fileInputRef.current가 실제 input 요소를 가리키고 있는지 확인합니다.
    if (fileInputRef.current) {
      // input 요소의 click() 메서드를 호출하여 파일 선택 창을 엽니다.
      fileInputRef.current.click();
    }
  };

  // 사용자가 파일을 선택했을 때 실행되는 이벤트 핸들러 함수입니다.
  const handleFileChange = async e => {
    // 이벤트 객체(e)에서 사용자가 선택한 파일 목록(files) 중 첫 번째 파일을 가져옵니다.
    const file = e.target.files[0];
    // 만약 선택된 파일이 없다면(취소 등) 함수를 즉시 종료합니다.
    if (!file) return;

    // 서버로 파일을 전송하기 위해 FormData 객체를 생성합니다.
    // FormData는 키-값 쌍의 집합을 쉽게 구성하여 'multipart/form-data' 형식으로 전송할 수 있게 해줍니다.
    const formData = new FormData();
    // 'file'이라는 키 이름으로 선택된 파일을 FormData에 추가합니다.
    formData.append('file', file);

    try {
      // fetch API를 사용하여 서버의 '/api/uploadImage' 엔드포인트로 POST 요청을 보냅니다.
      // body에는 파일이 담긴 formData를 전달합니다.
      const response = await fetch('/api/uploadImage', {
        method: 'POST',
        body: formData,
      });

      // 서버 응답이 성공적이지 않으면(HTTP 상태 코드가 200-299 범위가 아니면) 에러를 발생시킵니다.
      if (!response.ok) throw new Error('업로드 실패');

      // 서버로부터 받은 JSON 형식의 응답을 파싱합니다.
      const data = await response.json();
      console.log('업로드 완료:', data); // 성공적으로 업로드된 데이터(예: 이미지 URL)를 콘솔에 출력합니다.

      // onUpload prop이 부모 컴포넌트로부터 전달되었다면,
      if (onUpload) {
        // onUpload 함수를 호출하여 업로드된 이미지의 URL(data.imageUrl)을 부모 컴포넌트로 전달합니다.
        onUpload(data.imageUrl);
      }
    } catch (err) {
      // try 블록 내에서 발생한 모든 에러(네트워크 문제, 서버 에러 등)를 여기서 처리합니다.
      console.error(err); // 에러를 콘솔에 출력합니다.
      alert('업로드 중 오류 발생'); // 사용자에게 에러가 발생했음을 알립니다.
    }
  };

  // 컴포넌트가 렌더링할 JSX를 반환합니다.
  return (
    <>
      {/* 실제 파일 입력을 담당하는 input 요소입니다. /}

  {/* 사용자에게 보여지는 커스텀 버튼입니다. */}
      <button
        onClick={triggerFileSelect} // 이 버튼을 클릭하면 triggerFileSelect 함수가 실행되어 파일 선택 창이 열립니다.
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
        {/* 아이콘 표시를 위한 span 요소 (CSS 클래스를 통해 배경 이미지 등으로 스타일링) */}
        <span className="bg-photo"></span>
        {/* 버튼의 텍스트 레이블 */}
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
