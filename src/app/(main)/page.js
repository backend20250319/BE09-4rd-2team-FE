'use client';
import { useState, useEffect } from 'react';

export default function MainPage() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [mounted, setMounted] = useState(false);
  const [selected, setSelected] = useState('전체');
  const [blogs, setBlogs] = useState([]);

  useEffect(() => {
    // SSR 안전성 체크
    if (typeof window !== 'undefined') {
      const token = localStorage.getItem('accessToken');
      setIsLoggedIn(!!token);
      setMounted(true);

      // 샘플 데이터 (실제 API 연동 전까지)
      setBlogs([
        {
          id: 1,
          title: 'PlayBlog 개발 일지 #1',
          content: 'MSA 구조로 블로그 서비스를 개발하고 있습니다. 댓글과 공감 기능을 완성했어요!',
          author: '개발팀',
          subTopicName: '개발',
          createdAt: '2025-07-18',
          viewCount: 42,
        },
        {
          id: 2,
          title: 'Jenkins CI/CD 파이프라인 구축기',
          content: 'Docker와 Jenkins를 활용한 자동 배포 시스템을 구축했습니다.',
          author: 'DevOps팀',
          subTopicName: '기술',
          createdAt: '2025-07-17',
          viewCount: 35,
        },
        {
          id: 3,
          title: 'Next.js로 프론트엔드 개발하기',
          content:
            'React 기반의 Next.js 프레임워크로 블로그 프론트엔드를 개발한 경험을 공유합니다.',
          author: '프론트팀',
          subTopicName: '개발',
          createdAt: '2025-07-16',
          viewCount: 28,
        },
        {
          id: 4,
          title: 'AWS EC2 배포 완성!',
          content: '클라우드 인프라 구축과 배포 자동화를 완료했습니다.',
          author: '인프라팀',
          subTopicName: '기술',
          createdAt: '2025-07-15',
          viewCount: 56,
        },
      ]);
    }
  }, []);

  // SSR 방지
  if (!mounted) {
    return (
      <div
        style={{
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          minHeight: '100vh',
          backgroundColor: '#f8f9fa',
        }}
      >
        <div>로딩중...</div>
      </div>
    );
  }

  const categories = ['전체', ...new Set(blogs.map(b => b.subTopicName))];
  const filteredBlogs =
    selected === '전체' ? blogs : blogs.filter(b => b.subTopicName === selected);

  return (
    <div
      style={{
        minHeight: '100vh',
        backgroundColor: '#f8f9fa',
        fontFamily:
          'NanumGothic, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif',
      }}
    >
      {/* Header */}
      <header
        style={{
          backgroundColor: 'white',
          borderBottom: '1px solid #e9ecef',
          padding: '15px 0',
          position: 'sticky',
          top: 0,
          zIndex: 100,
        }}
      >
        <div
          style={{
            maxWidth: '1032px',
            margin: '0 auto',
            padding: '0 16px',
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'center',
          }}
        >
          <h1
            style={{
              fontSize: '24px',
              fontWeight: 'bold',
              color: '#333',
              margin: 0,
            }}
          >
            PlayBlog
          </h1>

          <div style={{ display: 'flex', gap: '10px' }}>
            {isLoggedIn ? (
              <>
                <button
                  style={{
                    padding: '8px 16px',
                    backgroundColor: '#007bff',
                    color: 'white',
                    border: 'none',
                    borderRadius: '4px',
                    cursor: 'pointer',
                  }}
                >
                  내 블로그
                </button>
                <button
                  style={{
                    padding: '8px 16px',
                    backgroundColor: '#6c757d',
                    color: 'white',
                    border: 'none',
                    borderRadius: '4px',
                    cursor: 'pointer',
                  }}
                  onClick={() => {
                    localStorage.removeItem('accessToken');
                    window.location.reload();
                  }}
                >
                  로그아웃
                </button>
              </>
            ) : (
              <>
                <button
                  style={{
                    padding: '8px 16px',
                    backgroundColor: '#007bff',
                    color: 'white',
                    border: 'none',
                    borderRadius: '4px',
                    cursor: 'pointer',
                  }}
                  onClick={() => {
                    // 임시 로그인 (테스트용)
                    localStorage.setItem('accessToken', 'test-token');
                    window.location.reload();
                  }}
                >
                  로그인
                </button>
                <button
                  style={{
                    padding: '8px 16px',
                    backgroundColor: '#28a745',
                    color: 'white',
                    border: 'none',
                    borderRadius: '4px',
                    cursor: 'pointer',
                  }}
                >
                  회원가입
                </button>
              </>
            )}
          </div>
        </div>
      </header>

      {/* 상태 메시지 */}
      <div style={{ textAlign: 'center', margin: '54px 0' }}>
        <p style={{ lineHeight: '2', color: '#666' }}>
          {isLoggedIn ? (
            <>
              환영합니다! 🎉 <br /> 최신 블로그 글들을 확인해보세요.
            </>
          ) : (
            <>
              로그아웃 상태입니다. <br /> 로그인하여 이웃새글을 확인해보세요.
            </>
          )}
        </p>
      </div>

      {/* 메인 컨텐츠 */}
      <div
        style={{
          display: 'flex',
          alignItems: 'flex-start',
          justifyContent: 'space-between',
          gap: '24px',
          padding: '0 16px',
          maxWidth: '1032px',
          margin: '0 auto',
        }}
      >
        {/* 블로그 목록 영역 */}
        <div style={{ flex: 1, maxWidth: '720px' }}>
          {/* 카테고리 선택 메뉴 */}
          <div
            style={{
              backgroundColor: 'white',
              borderRadius: '8px',
              padding: '20px',
              marginBottom: '20px',
              boxShadow: '0 2px 4px rgba(0,0,0,0.1)',
            }}
          >
            <div
              style={{
                display: 'flex',
                gap: '10px',
                flexWrap: 'wrap',
              }}
            >
              {categories.map(category => (
                <button
                  key={category}
                  onClick={() => setSelected(category)}
                  style={{
                    padding: '8px 16px',
                    backgroundColor: selected === category ? '#007bff' : '#f8f9fa',
                    color: selected === category ? 'white' : '#333',
                    border: '1px solid ' + (selected === category ? '#007bff' : '#dee2e6'),
                    borderRadius: '20px',
                    cursor: 'pointer',
                    fontSize: '14px',
                    transition: 'all 0.2s',
                  }}
                >
                  {category}
                </button>
              ))}
            </div>
          </div>

          {/* 블로그 포스트 목록 */}
          <div style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
            {filteredBlogs.map(blog => (
              <div
                key={blog.id}
                style={{
                  backgroundColor: 'white',
                  borderRadius: '8px',
                  padding: '24px',
                  boxShadow: '0 2px 4px rgba(0,0,0,0.1)',
                  cursor: 'pointer',
                  transition: 'transform 0.2s, box-shadow 0.2s',
                }}
                onMouseEnter={e => {
                  e.currentTarget.style.transform = 'translateY(-2px)';
                  e.currentTarget.style.boxShadow = '0 4px 12px rgba(0,0,0,0.15)';
                }}
                onMouseLeave={e => {
                  e.currentTarget.style.transform = 'translateY(0)';
                  e.currentTarget.style.boxShadow = '0 2px 4px rgba(0,0,0,0.1)';
                }}
              >
                <div
                  style={{
                    display: 'flex',
                    justifyContent: 'space-between',
                    alignItems: 'flex-start',
                    marginBottom: '12px',
                  }}
                >
                  <div>
                    <span
                      style={{
                        backgroundColor: '#e7f3ff',
                        color: '#0066cc',
                        padding: '4px 8px',
                        borderRadius: '4px',
                        fontSize: '12px',
                        fontWeight: 'bold',
                      }}
                    >
                      {blog.subTopicName}
                    </span>
                  </div>
                  <div
                    style={{
                      fontSize: '12px',
                      color: '#999',
                      display: 'flex',
                      gap: '12px',
                    }}
                  >
                    <span>👀 {blog.viewCount}</span>
                    <span>{blog.createdAt}</span>
                  </div>
                </div>

                <h3
                  style={{
                    fontSize: '20px',
                    fontWeight: 'bold',
                    marginBottom: '12px',
                    color: '#333',
                    lineHeight: '1.4',
                  }}
                >
                  {blog.title}
                </h3>

                <p
                  style={{
                    fontSize: '14px',
                    color: '#666',
                    lineHeight: '1.6',
                    marginBottom: '16px',
                  }}
                >
                  {blog.content}
                </p>

                <div
                  style={{
                    display: 'flex',
                    justifyContent: 'space-between',
                    alignItems: 'center',
                  }}
                >
                  <span
                    style={{
                      fontSize: '14px',
                      color: '#333',
                      fontWeight: '500',
                    }}
                  >
                    ✍️ {blog.author}
                  </span>
                  <button
                    style={{
                      padding: '6px 12px',
                      backgroundColor: '#f8f9fa',
                      border: '1px solid #dee2e6',
                      borderRadius: '4px',
                      fontSize: '12px',
                      cursor: 'pointer',
                      color: '#666',
                    }}
                  >
                    자세히 보기
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* 사이드바 */}
        <div style={{ width: '256px' }}>
          <div
            style={{
              backgroundColor: 'white',
              borderRadius: '8px',
              padding: '20px',
              boxShadow: '0 2px 4px rgba(0,0,0,0.1)',
            }}
          >
            {isLoggedIn ? (
              <div>
                <h4 style={{ marginBottom: '15px', color: '#333' }}>🎯 나의 활동</h4>
                <div style={{ fontSize: '14px', color: '#666' }}>
                  <p>오늘 작성한 글: 0개</p>
                  <p>받은 공감: 0개</p>
                  <p>새 댓글: 0개</p>
                </div>
              </div>
            ) : (
              <div style={{ textAlign: 'center' }}>
                <h4 style={{ marginBottom: '15px', color: '#333' }}>로그인이 필요해요!</h4>
                <p style={{ fontSize: '14px', color: '#666', marginBottom: '15px' }}>
                  로그인하면 더 많은 기능을 사용할 수 있어요
                </p>
                <button
                  style={{
                    width: '100%',
                    padding: '10px',
                    backgroundColor: '#007bff',
                    color: 'white',
                    border: 'none',
                    borderRadius: '4px',
                    cursor: 'pointer',
                  }}
                  onClick={() => {
                    localStorage.setItem('accessToken', 'test-token');
                    window.location.reload();
                  }}
                >
                  로그인하기
                </button>
              </div>
            )}
          </div>

          {/* 개발 상태 */}
          <div
            style={{
              backgroundColor: '#e7f3ff',
              borderRadius: '8px',
              padding: '15px',
              marginTop: '20px',
              border: '1px solid #b3d9ff',
            }}
          >
            <h5 style={{ color: '#0066cc', marginBottom: '10px', fontSize: '14px' }}>
              🔧 개발 현황
            </h5>
            <div style={{ fontSize: '12px', color: '#333' }}>
              <p>✅ 메인 페이지 복구</p>
              <p>✅ 로그인 토글 기능</p>
              <p>✅ 카테고리 필터</p>
              <p>🔄 실제 API 연동 예정</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
