'use client';
const styles = {};

export default function MainPage() {
  return (
    <div
      style={{
        padding: '50px',
        textAlign: 'center',
        minHeight: '100vh',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#f5f5f5',
      }}
    >
      <h1 style={{ color: '#333', marginBottom: '20px', fontSize: '2.5rem' }}>
        🚀 VLOG 프론트엔드
      </h1>
      <p style={{ color: '#666', fontSize: '18px', marginBottom: '10px' }}>Docker 빌드 성공! 🎉</p>
      <p style={{ color: '#999', fontSize: '14px', marginBottom: '30px' }}>
        Jenkins 파이프라인 구축 후 원래 페이지로 복구 예정
      </p>

      {/* 임시 네비게이션 */}
      <div style={{ display: 'flex', gap: '15px', flexWrap: 'wrap' }}>
        <button
          onClick={() => (window.location.href = '/login')}
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
          onClick={() => (window.location.href = '/blogHome')}
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
          onClick={() => (window.location.href = '/edit-profile')}
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

      <div style={{ marginTop: '40px', fontSize: '12px', color: '#aaa' }}>
        <p>✅ localStorage 문제 해결</p>
        <p>✅ PostBox FooterIcons 차단</p>
        <p>✅ CSS 호환성 문제 해결</p>
        <p>🔄 메인 페이지 단순화 적용</p>
      </div>
    </div>
  );
}
