'use client';

import CommentSection from '@/src/app/(main)/(blog)/comments/page.jsx';

const CommentsTestPage = () => {
  return (
    <div
      style={{
        minHeight: '100vh',
        backgroundColor: '#f5f7fa',
        paddingTop: '20px',
        paddingBottom: '40px',
      }}
    >
      {/* 가상의 블로그 포스트 */}
      <div
        style={{
          maxWidth: '920px',
          margin: '0 auto 20px auto',
          padding: '30px',
          backgroundColor: '#ffffff',
          border: '1px solid #e1e5e9',
          borderRadius: '8px',
        }}
      >
        <h1
          style={{
            fontSize: '24px',
            fontWeight: 'bold',
            marginBottom: '16px',
            color: '#333',
          }}
        >
          서촌에서의 여름 산책
        </h1>

        <div
          style={{
            fontSize: '14px',
            color: '#666',
            marginBottom: '20px',
          }}
        >
          2025.06.26. | 조회 85
        </div>

        <div
          style={{
            fontSize: '16px',
            lineHeight: '1.6',
            color: '#333',
          }}
        >
          오늘은 날씨가 너무 좋아서 서촌 일대를 산책했습니다. 골목골목 숨어있는 작은 카페들과
          갤러리들을 구경하며 여유로운 시간을 보냈어요. 특히 한옥 카페에서 마신 아이스 아메리카노가
          정말 맛있었습니다!
          <br />
          <br />
          여러분도 시간 나실 때 서촌 한번 가보시길 추천드려요 ☕️
        </div>
      </div>

      {/* 댓글 섹션 */}
      <CommentSection />
    </div>
  );
};

export default CommentsTestPage;
