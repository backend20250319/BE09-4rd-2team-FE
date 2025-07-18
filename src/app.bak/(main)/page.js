'use client';
import { useState, useEffect } from 'react';

export default function MainPage() {
  const [message, setMessage] = useState('PlayBlog에 오신 것을 환영합니다!');
  const [clickCount, setClickCount] = useState(0);
  const [deployTime, setDeployTime] = useState('');

  useEffect(() => {
    setDeployTime(new Date().toLocaleString('ko-KR'));
  }, []);

  const handleMainClick = () => {
    setClickCount(prev => prev + 1);
    const messages = [
      '버튼이 정상적으로 클릭되었습니다! 🎉',
      'Jenkins CI/CD 파이프라인이 잘 작동하고 있어요! 🚀',
      'Docker 컨테이너가 성공적으로 배포되었습니다! 🐳',
      `와우! ${clickCount + 1}번째 클릭이네요! ✨`,
      'MSA 구조로 백엔드도 완성되었어요! 🏗️',
    ];
    setMessage(messages[clickCount % messages.length]);
  };

  const handlePageNavigation = path => {
    window.location.href = path;
  };

  const handleResetClick = () => {
    setMessage('PlayBlog에 오신 것을 환영합니다!');
    setClickCount(0);
  };

  return (
    <div
      style={{
        padding: '50px',
        textAlign: 'center',
        fontFamily: '-apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif',
        background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
        minHeight: '100vh',
        color: 'white',
      }}
    >
      {/* 메인 헤더 */}
      <div
        style={{
          backgroundColor: 'rgba(255, 255, 255, 0.1)',
          borderRadius: '15px',
          padding: '30px',
          marginBottom: '30px',
          backdropFilter: 'blur(10px)',
        }}
      >
        <h1
          style={{
            fontSize: '2.5rem',
            marginBottom: '20px',
            textShadow: '2px 2px 4px rgba(0,0,0,0.3)',
          }}
        >
          {message}
        </h1>

        {clickCount > 0 && (
          <p
            style={{
              fontSize: '1.2rem',
              opacity: 0.9,
              marginTop: '15px',
            }}
          >
            🎯 클릭 횟수: {clickCount}번
          </p>
        )}
      </div>

      {/* 테스트 버튼들 */}
      <div style={{ marginBottom: '30px' }}>
        <button
          onClick={handleMainClick}
          style={{
            padding: '15px 30px',
            fontSize: '18px',
            backgroundColor: '#4CAF50',
            color: 'white',
            border: 'none',
            borderRadius: '25px',
            cursor: 'pointer',
            marginRight: '15px',
            marginBottom: '10px',
            boxShadow: '0 4px 15px rgba(0,0,0,0.2)',
            fontWeight: 'bold',
          }}
        >
          🚀 테스트 버튼
        </button>

        <button
          onClick={handleResetClick}
          style={{
            padding: '15px 30px',
            fontSize: '18px',
            backgroundColor: '#FF9800',
            color: 'white',
            border: 'none',
            borderRadius: '25px',
            cursor: 'pointer',
            marginBottom: '10px',
            boxShadow: '0 4px 15px rgba(0,0,0,0.2)',
            fontWeight: 'bold',
          }}
        >
          🔄 리셋
        </button>
      </div>

      {/* 페이지 네비게이션 */}
      <div style={{ marginBottom: '30px' }}>
        <h3 style={{ marginBottom: '20px' }}>📋 페이지 네비게이션</h3>
        <div style={{ display: 'flex', gap: '15px', justifyContent: 'center', flexWrap: 'wrap' }}>
          <button
            onClick={() => handlePageNavigation('/login')}
            style={{
              padding: '12px 24px',
              backgroundColor: '#007bff',
              color: 'white',
              border: 'none',
              borderRadius: '6px',
              cursor: 'pointer',
              fontSize: '16px',
            }}
          >
            로그인
          </button>
          <button
            onClick={() => handlePageNavigation('/blogHome')}
            style={{
              padding: '12px 24px',
              backgroundColor: '#28a745',
              color: 'white',
              border: 'none',
              borderRadius: '6px',
              cursor: 'pointer',
              fontSize: '16px',
            }}
          >
            전체글 보기
          </button>
          <button
            onClick={() => handlePageNavigation('/edit-profile')}
            style={{
              padding: '12px 24px',
              backgroundColor: '#17a2b8',
              color: 'white',
              border: 'none',
              borderRadius: '6px',
              cursor: 'pointer',
              fontSize: '16px',
            }}
          >
            프로필 수정
          </button>
        </div>
      </div>

      {/* 프로젝트 정보 */}
      <div
        style={{
          backgroundColor: 'rgba(255, 255, 255, 0.1)',
          borderRadius: '15px',
          padding: '25px',
          backdropFilter: 'blur(10px)',
          maxWidth: '600px',
          margin: '0 auto',
        }}
      >
        <h3 style={{ marginBottom: '20px' }}>🎯 프로젝트 현황</h3>

        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))',
            gap: '15px',
            fontSize: '14px',
            textAlign: 'left',
          }}
        >
          <div>
            <p>
              <strong>🚀 버전:</strong> v1.1.0
            </p>
            <p>
              <strong>📅 배포:</strong> {deployTime}
            </p>
            <p>
              <strong>🐳 Docker:</strong> 성공
            </p>
          </div>
          <div>
            <p>
              <strong>🏗️ MSA:</strong> Blog Service 완료
            </p>
            <p>
              <strong>🔄 CI/CD:</strong> Jenkins 자동화
            </p>
            <p>
              <strong>📊 백엔드:</strong> 댓글/공감 API
            </p>
          </div>
        </div>

        <div
          style={{
            marginTop: '20px',
            padding: '15px',
            backgroundColor: 'rgba(255, 255, 255, 0.1)',
            borderRadius: '10px',
            borderLeft: '4px solid #4CAF50',
          }}
        >
          <p style={{ margin: '0', fontSize: '13px' }}>
            ✅ localStorage 문제 해결 <br />
            ✅ CSS 호환성 문제 해결 <br />
            ✅ Docker 빌드 성공 <br />
            🔄 메인 페이지 인터랙티브 기능 추가
          </p>
        </div>
      </div>
    </div>
  );
}
