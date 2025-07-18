'use client';
import { useState, useEffect } from 'react';

export default function MainPage() {
  const [data, setData] = useState({
    content: [],
    totalPages: 1,
    number: 0,
    first: true,
    last: true,
  });
  const [selected, setSelected] = useState('전체');
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);

    // BlogHome API 호출
    const fetchData = async () => {
      try {
        const response = await fetch(
          `${process.env.NEXT_PUBLIC_API_BLOG || ''}/blog-service/posts/all?page=0&size=10`,
        );
        if (response.ok) {
          const result = await response.json();
          setData(result.data || {});
        } else {
          throw new Error('API 요청 실패');
        }
      } catch (error) {
        console.error('API 에러:', error);
        // API 실패 시 빈 데이터
        setData({
          content: [],
          totalPages: 1,
          number: 0,
          first: true,
          last: true,
        });
      }
    };

    fetchData();
  }, []);

  // 페이지네이션 핸들러
  const onPageChange = newPage => {
    setData(prev => ({ ...prev, number: newPage }));
  };

  if (!mounted) {
    return (
      <div
        style={{
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          minHeight: '100vh',
          backgroundColor: '#f5f5f5',
        }}
      >
        <div>로딩중...</div>
      </div>
    );
  }

  const blogs = data.content || [];
  const categories = ['전체', ...new Set(blogs.map(b => b.subTopicName))];
  const filtered = selected === '전체' ? blogs : blogs.filter(b => b.subTopicName === selected);

  return (
    <div style={{ fontFamily: 'NanumGothic, sans-serif' }}>
      {/* Header - 네이버 스타일 */}
      <header
        style={{
          backgroundColor: '#03c75a',
          padding: '8px 0',
          borderBottom: '1px solid #02b351',
        }}
      >
        <div
          style={{
            maxWidth: '1032px',
            margin: '0 auto',
            padding: '0 16px',
            display: 'flex',
            alignItems: 'center',
            gap: '20px',
          }}
        >
          <div
            style={{
              display: 'flex',
              alignItems: 'center',
              gap: '8px',
            }}
          >
            <div
              style={{
                backgroundColor: 'white',
                color: '#03c75a',
                width: '30px',
                height: '30px',
                borderRadius: '4px',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                fontWeight: 'bold',
                fontSize: '18px',
              }}
            >
              N
            </div>
            <span
              style={{
                color: 'white',
                fontSize: '16px',
                fontWeight: 'bold',
              }}
            >
              blog
            </span>
          </div>
          <div
            style={{
              flex: 1,
              maxWidth: '400px',
              display: 'flex',
            }}
          >
            <select
              style={{
                padding: '8px',
                border: 'none',
                backgroundColor: 'white',
                borderRadius: '2px 0 0 2px',
                fontSize: '12px',
              }}
            >
              <option>전체</option>
            </select>
            <input
              type="text"
              style={{
                flex: 1,
                padding: '8px 12px',
                border: 'none',
                fontSize: '12px',
              }}
            />
            <button
              style={{
                backgroundColor: '#02b351',
                color: 'white',
                border: 'none',
                padding: '8px 15px',
                borderRadius: '0 2px 2px 0',
                cursor: 'pointer',
                fontSize: '12px',
              }}
            >
              통합검색
            </button>
          </div>
        </div>
      </header>

      {/* MenuTabs */}
      <nav
        style={{
          backgroundColor: 'white',
          borderTop: '1px solid #e0e0e0',
          borderBottom: '1px solid #e0e0e0',
          maxWidth: '1032px',
          margin: '0 auto',
          padding: '0 16px',
          height: '2.5em',
          display: 'flex',
          alignItems: 'center',
        }}
      >
        {[
          { name: '블로그 홈', href: '/', active: true },
          { name: '주제별 보기', href: '/category', active: false },
          { name: '글쓰기', href: '/blog-editor', active: false },
        ].map(item => (
          <a
            key={item.href}
            href={item.href}
            style={{
              fontWeight: 'bold',
              fontSize: '14px',
              color: item.active ? '#4CAF50' : '#222',
              lineHeight: '2.5em',
              margin: '0 24px',
              borderBottom: item.active ? '4px solid #4CAF50' : '4px solid transparent',
              textDecoration: 'none',
              paddingBottom: '2px',
            }}
          >
            {item.name}
          </a>
        ))}
      </nav>

      {/* 중앙 메시지 */}
      <div style={{ textAlign: 'center', margin: '54px 0' }}>
        <p style={{ lineHeight: '2', color: '#666' }}>
          로그아웃 상태입니다. <br /> 로그인하여 이웃새글을 확인해보세요.
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
        {/* 왼쪽: 블로그 목록 */}
        <div style={{ flex: 1, maxWidth: '720px' }}>
          {/* ChoiceMenu - 카테고리 필터 */}
          <div
            style={{
              display: 'flex',
              gap: '16px',
              borderBottom: '3px solid #ddd',
              borderTop: '1px solid #ddd',
              maxWidth: '770px',
              padding: '16px',
            }}
          >
            {categories.map(category => (
              <span
                key={category}
                onClick={() => setSelected(category)}
                style={{
                  color: selected === category ? 'green' : 'black',
                  fontWeight: selected === category ? 'bold' : 'normal',
                  cursor: 'pointer',
                  transition: 'color 0.2s',
                }}
              >
                {category}
              </span>
            ))}
          </div>

          {/* BlogList - 블로그 목록 */}
          <div
            style={{
              margin: '16px',
              maxWidth: '770px',
              width: '100%',
            }}
          >
            {filtered.length > 0 ? (
              filtered.map(blog => (
                <div
                  key={blog.postId}
                  style={{
                    marginBottom: '24px',
                    borderBottom: '1px solid #eee',
                    paddingBottom: '25px',
                    display: 'flex',
                    alignItems: 'flex-start',
                  }}
                >
                  <div style={{ flex: 1 }}>
                    {/* 프로필 영역 */}
                    <div
                      style={{
                        display: 'flex',
                        alignItems: 'flex-start',
                        marginBottom: '12px',
                      }}
                    >
                      <img
                        src={blog.profileImageUrl || '/default-profile.png'}
                        alt="프로필"
                        style={{
                          width: '35px',
                          height: '35px',
                          borderRadius: '50%',
                          marginRight: '10px',
                        }}
                      />
                      <div>
                        <div
                          style={{
                            fontWeight: 'bold',
                            fontSize: '14px',
                            color: '#333',
                          }}
                        >
                          {blog.nickname}
                        </div>
                        <div
                          style={{
                            color: '#888',
                            fontSize: '10px',
                          }}
                        >
                          {(() => {
                            const d = new Date(blog.publishedAt);
                            return `${d.getFullYear()}.${d.getMonth() + 1}.${d.getDate()}`;
                          })()}
                        </div>
                      </div>
                    </div>

                    {/* 제목 */}
                    <div
                      style={{
                        fontWeight: 'bold',
                        fontSize: '17px',
                        marginBottom: '10px',
                        color: '#333',
                        cursor: 'pointer',
                      }}
                    >
                      {blog.title}
                    </div>

                    {/* 내용 */}
                    <div
                      style={{
                        color: '#444',
                        fontSize: '13px',
                        lineHeight: '1.7',
                        marginBottom: '8px',
                      }}
                    >
                      {blog.content}
                    </div>

                    {/* 공감/댓글 수 */}
                    <div
                      style={{
                        display: 'flex',
                        gap: '18px',
                        color: '#888',
                        fontSize: '13px',
                      }}
                    >
                      <span>공감 {blog.likeCount}</span>
                      <span>댓글 {blog.commentCount}</span>
                    </div>
                  </div>

                  {/* 썸네일 */}
                  <div
                    style={{
                      marginLeft: '24px',
                      width: '120px',
                      height: '120px',
                      flexShrink: 0,
                    }}
                  >
                    <img
                      src={blog.thumbnailImageUrl || '/default-thumbnail.png'}
                      alt="썸네일"
                      style={{
                        width: '100%',
                        height: '100%',
                        objectFit: 'cover',
                        borderRadius: '2px',
                      }}
                    />
                  </div>
                </div>
              ))
            ) : (
              <div
                style={{
                  textAlign: 'center',
                  padding: '40px',
                  color: '#ff6b6b',
                  fontSize: '14px',
                }}
              >
                API 요청 실패
              </div>
            )}

            {/* 페이지네이션 */}
            {filtered.length > 0 && (
              <div
                style={{
                  display: 'flex',
                  justifyContent: 'center',
                  gap: '6px',
                  margin: '18px 0 0 0',
                }}
              >
                <button
                  disabled={data.first}
                  onClick={() => !data.first && onPageChange(data.number - 1)}
                  style={{
                    border: 'none',
                    background: '#eee',
                    padding: '6px 12px',
                    margin: '0 2px',
                    borderRadius: '4px',
                    cursor: data.first ? 'not-allowed' : 'pointer',
                    fontSize: '15px',
                  }}
                >
                  이전
                </button>

                {Array.from({ length: data.totalPages }).map((_, idx) => (
                  <button
                    key={idx}
                    onClick={() => onPageChange(idx)}
                    disabled={idx === data.number}
                    style={{
                      border: 'none',
                      background: idx === data.number ? '#4caf50' : '#eee',
                      color: idx === data.number ? '#fff' : '#000',
                      fontWeight: idx === data.number ? 'bold' : 'normal',
                      padding: '6px 12px',
                      margin: '0 2px',
                      borderRadius: '4px',
                      cursor: idx === data.number ? 'not-allowed' : 'pointer',
                      fontSize: '15px',
                    }}
                  >
                    {idx + 1}
                  </button>
                ))}

                <button
                  disabled={data.last}
                  onClick={() => !data.last && onPageChange(data.number + 1)}
                  style={{
                    border: 'none',
                    background: '#eee',
                    padding: '6px 12px',
                    margin: '0 2px',
                    borderRadius: '4px',
                    cursor: data.last ? 'not-allowed' : 'pointer',
                    fontSize: '15px',
                  }}
                >
                  다음
                </button>
              </div>
            )}
          </div>
        </div>

        {/* 오른쪽: LoginModal 사이드바 */}
        <div style={{ width: '256px' }}>
          <div
            style={{
              backgroundColor: 'white',
              borderRadius: '6px',
              boxShadow: '0 1px 3px rgba(0,0,0,0.1)',
              overflow: 'hidden',
            }}
          >
            <div
              style={{
                padding: '16px',
                textAlign: 'center',
                fontSize: '12px',
                color: '#666',
                lineHeight: '1.4',
              }}
            >
              네이버를 보다 안전하고 편리하게 이용하세요.
            </div>
            <button
              onClick={() => {
                localStorage.setItem('accessToken', 'test-token');
                window.location.reload();
              }}
              style={{
                width: '100%',
                padding: '16px',
                backgroundColor: '#03c75a',
                color: 'white',
                border: 'none',
                fontSize: '14px',
                fontWeight: 'bold',
                cursor: 'pointer',
              }}
            >
              NAVER로그인
            </button>
            <div
              style={{
                padding: '12px 16px',
                fontSize: '11px',
                color: '#666',
                textAlign: 'center',
                cursor: 'pointer',
              }}
            >
              회원가입
            </div>
          </div>

          {/* 개발 상태 박스 */}
          <div
            style={{
              backgroundColor: '#fff3cd',
              border: '1px solid #ffeaa7',
              borderRadius: '6px',
              padding: '12px',
              fontSize: '11px',
              color: '#856404',
              marginTop: '16px',
            }}
          >
            <div
              style={{
                fontWeight: 'bold',
                marginBottom: '8px',
                color: '#533301',
              }}
            >
              🔧 개발 현황
            </div>
            <div style={{ lineHeight: '1.4' }}>
              ✅ BlogHome 메인 화면 완성
              <br />
              ✅ 리다이렉트 제거
              <br />
              🔄 API 연결 대기 중<br />
              🚀 CI/CD 파이프라인 완료
            </div>
          </div>
        </div>
      </div>

      {/* 하단 이슈 표시 */}
      <div
        style={{
          position: 'fixed',
          bottom: '20px',
          left: '20px',
          zIndex: 1000,
        }}
      >
        <div
          style={{
            backgroundColor: '#dc3545',
            color: 'white',
            padding: '8px 12px',
            borderRadius: '20px',
            fontSize: '12px',
            display: 'flex',
            alignItems: 'center',
            gap: '6px',
            boxShadow: '0 2px 10px rgba(0,0,0,0.2)',
          }}
        >
          <span
            style={{
              backgroundColor: 'white',
              color: '#dc3545',
              borderRadius: '50%',
              width: '18px',
              height: '18px',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              fontSize: '10px',
              fontWeight: 'bold',
            }}
          >
            N
          </span>
          2 Issues
          <button
            style={{
              backgroundColor: 'transparent',
              border: 'none',
              color: 'white',
              cursor: 'pointer',
              padding: '0',
              marginLeft: '4px',
            }}
          >
            ×
          </button>
        </div>
      </div>
    </div>
  );
}
