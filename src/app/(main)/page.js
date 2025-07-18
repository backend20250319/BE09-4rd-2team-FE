'use client';
import { useState, useEffect, useRef } from 'react';
import { useRouter } from 'next/navigation';

// 원본 Header 컴포넌트를 인라인으로 구현
function Header({ selected = '글' }) {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const [selectedOption, setSelectedOption] = useState(selected);
  const [searchQuery, setSearchQuery] = useState('');
  const dropdownRef = useRef(null);
  const router = useRouter();

  const options = ['글', '블로그', '별명.아이디'];

  const toggleDropdown = () => setIsDropdownOpen(prev => !prev);

  const handleSelect = option => {
    setSelectedOption(option);
    setIsDropdownOpen(false);
  };

  useEffect(() => {
    const handleClickOutside = e => {
      if (dropdownRef.current && !dropdownRef.current.contains(e.target)) {
        setIsDropdownOpen(false);
      }
    };
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  const handleSearch = e => {
    e.preventDefault();
    const encodedOption = encodeURIComponent(selectedOption);
    const encodedQuery = encodeURIComponent(searchQuery);
    router.push(`/searchResult?mode=${encodedOption}&query=${encodedQuery}`);
  };

  return (
    <>
      <style jsx>{`
        body {
          margin: 0;
        }
        .header-common {
          box-sizing: content-box;
          height: 54px;
          background-color: #03c75a;
          border-bottom: 1px solid rgba(0, 0, 0, 0.1);
          color: #fff;
          margin: 0;
        }
        .inner {
          position: relative;
          height: 100%;
          display: flex;
          align-items: center;
          max-width: 1032px;
          margin: 0 auto;
          padding: 0 16px;
        }
        .area-logo {
          display: flex;
          align-items: center;
          padding: 4px;
        }
        .logo-naver-blog {
          width: 94px;
          display: flex;
          align-items: center;
        }
        .link-naver {
          display: flex;
          width: 48px;
          height: 26px;
          background-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='26' height='26'%3E%3Cpath d='M26 0v26H0V0h26zM11 7.049H6.54V18.95h4.4v-6.16l4.22 6.161h4.459V7.05H15.22v6.16L11 7.05z' fill='%23FFF' fill-rule='evenodd'/%3E%3C/svg%3E");
          background-repeat: no-repeat;
          background-position: center;
          background-origin: content-box;
          background-size: contain;
        }
        .link-blog {
          display: flex;
          width: 48px;
          height: 26px;
          background-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='48' height='26' fill='none'%3E%3Cpath fill='%23fff' fill-rule='evenodd' d='M13.1 7.158V4c2.842.277 5.42 1.997 5.42 5.625v10.376h-3.503V9.625c0-1.407-.713-2.234-1.918-2.467Zm-9.386 2.26c.77-.887 1.915-1.425 3.48-1.425v.001c3.061 0 5.584 2.687 5.584 6.167s-2.524 6.167-5.584 6.167c-1.564 0-2.71-.537-3.48-1.425v1.098H.21V4.427h3.504v4.991Zm-.229 4.743c0 1.897 1.265 3.085 3.009 3.085s3.008-1.188 3.008-3.085c0-1.896-1.264-3.084-3.008-3.084s-3.009 1.188-3.009 3.084Zm17.111 0c0-3.481 2.756-6.168 6.19-6.168 3.433 0 6.19 2.687 6.19 6.167s-2.756 6.167-6.19 6.167c-3.433 0-6.19-2.686-6.19-6.167Zm3.283 0c0 1.795 1.264 2.983 2.907 2.983s2.907-1.19 2.907-2.984-1.264-2.982-2.907-2.982-2.907 1.187-2.907 2.982Zm23.314-5.84h-3.41v1.19c-.77-.957-1.893-1.518-3.41-1.518-3.318 0-5.747 2.71-5.747 5.934s2.43 5.933 5.746 5.933c1.518 0 2.64-.56 3.411-1.519v1.075c0 1.659-1.005 2.5-2.64 2.5h-.116v3.083c3.108 0 6.167-1.659 6.167-5.583V8.321Zm-6.236 8.539c-1.795 0-3.058-1.188-3.058-2.932s1.264-2.932 3.058-2.932c1.795 0 3.059 1.188 3.059 2.932s-1.264 2.932-3.059 2.932Z' clip-rule='evenodd'/%3E%3C/svg%3E");
          background-repeat: no-repeat;
          background-position: center;
          background-origin: content-box;
          background-size: contain;
        }
        .blind {
          position: absolute;
          clip: rect(0 0 0 0);
          width: 1px;
          height: 1px;
          margin: -1px;
          overflow: hidden;
        }
        .area-search {
          margin-left: 12px;
          height: 37px;
          display: flex;
          align-items: center;
          flex-wrap: nowrap;
        }
        .fieldset {
          margin: 0px;
          border: 0px;
          display: flex;
          align-items: center;
          flex-wrap: nowrap;
          flex-direction: row;
        }
        .search {
          display: flex;
          width: 322px;
          height: 37px;
          border: 1px solid #05ab4f;
          border-right: 0;
          background-color: #fff;
        }
        .area-dropdown {
          width: 99px;
          height: 35px;
          display: flex;
          flex-direction: column;
          align-items: flex-start;
          position: relative;
        }
        .dropdown-select {
          position: absolute;
          top: 36px;
          left: 0;
          width: 100%;
          background: #fff;
          border: 1px solid #e3e3e3;
          box-shadow: 0 2px 8px rgba(0, 0, 0, 0.08);
          z-index: 10;
          border-radius: 0 0 4px 4px;
          overflow: hidden;
        }
        .dropdown-select .item {
          display: block;
          padding: 8px 16px;
          color: #222;
          font-size: 13px;
          cursor: pointer;
          transition: background 0.2s;
          text-decoration: none;
          font-family: NanumGothic, sans-serif;
        }
        .dropdown-select .item.selected,
        .dropdown-select .item[aria-selected='true'] {
          background: #f6f6f6;
          color: #03c75a;
        }
        .dropdown-select .item:hover {
          background: #f7f7f7;
          color: #00ab33;
        }
        .selected-option {
          display: flex;
          align-items: center;
          cursor: pointer;
          font-size: 13px;
          font-weight: 600;
          color: #00ab33;
          height: 35px;
          padding-left: 8px;
          white-space: nowrap;
          width: 90%;
          justify-content: space-between;
          gap: 0;
          text-decoration: none;
          font-family: NanumGothic, sans-serif;
        }
        .icon-arrow {
          display: flex;
          align-self: center;
          background-image: url('https://ssl.pstatic.net/static/blog/sp_common_82544d1d.svg');
          background-position: -1011px -332px;
          width: 8px;
          height: 4px;
          margin-left: 4px;
          background-repeat: no-repeat;
          vertical-align: middle;
        }
        .textbox {
          width: 222px;
          height: 35px;
          border: 0;
          font-size: 12px;
          font-weight: 600;
          line-height: 16px;
          text-indent: 10px;
        }
        .button {
          height: 37px;
          background-color: #03b150;
          border: 1px solid #05ab4f;
          text-align: center;
          color: #fff;
          display: flex;
          align-items: center;
          justify-content: center;
        }
        .button-blog {
          vertical-align: center;
          width: 37px;
          height: 37px;
        }
        .icon-search {
          width: 18px;
          height: 18px;
          background-image: url(https://ssl.pstatic.net/static/blog/sp_common_82544d1d.svg);
          background-position: -476px -547px;
        }
        .button-naver {
          margin-left: 4px;
          float: left;
          height: 37px;
          background-color: #03b150;
          border: 1px solid #05ab4f;
          text-align: center;
          text-decoration: none;
          color: inherit;
          cursor: pointer;
          font-size: 13px;
        }
      `}</style>
      <header className="header-common">
        <div className="inner">
          <div className="area-logo">
            <a className="link-naver" href="http://www.naver.com">
              <span className="blind">naver</span>
            </a>
            <a className="link-blog" href="/">
              <span className="blind">blog</span>
            </a>
          </div>
          <div className="area-search" role="search">
            <form onSubmit={handleSearch}>
              <fieldset className="fieldset">
                <div className="search">
                  <div className="area-dropdown" data-set="search" ref={dropdownRef}>
                    <a
                      href="#"
                      className="selected-option"
                      role="button"
                      aria-haspopup="true"
                      aria-expanded={isDropdownOpen}
                      onClick={e => {
                        e.preventDefault();
                        toggleDropdown();
                      }}
                    >
                      {selectedOption}
                      <i className="sp-common icon-arrow">
                        <span className="blind">검색모드 펼치기</span>
                      </i>
                    </a>
                    {isDropdownOpen && (
                      <div className="dropdown-select">
                        {options.map(option => (
                          <div key={option}>
                            <a
                              href="#"
                              className={`item${selectedOption === option ? ' selected' : ''}`}
                              role="option"
                              aria-selected={selectedOption === option}
                              onClick={e => {
                                e.preventDefault();
                                handleSelect(option);
                              }}
                            >
                              {option}
                            </a>
                          </div>
                        ))}
                      </div>
                    )}
                  </div>
                  <input
                    type="text"
                    name="sectionBlogQuery"
                    className="textbox"
                    title="검색어를 입력하고 버튼을 누르세요"
                    maxLength="255"
                    autoComplete="off"
                    value={searchQuery}
                    onChange={e => setSearchQuery(e.target.value)}
                    placeholder=""
                  />
                </div>
                <button type="submit" className="button button-blog" aria-label="검색">
                  <i className="sp-common icon-search"></i>
                </button>
                <a
                  href={`http://search.naver.com/search.naver?sm=sta_hty.blog&ie=utf8&query=${encodeURIComponent(searchQuery)}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="button button-naver"
                  role="button"
                  aria-label="네이버 통합검색"
                >
                  통합검색
                </a>
              </fieldset>
            </form>
          </div>
        </div>
      </header>
    </>
  );
}

// MenuTabs 컴포넌트
function MenuTabs() {
  return (
    <>
      <style jsx>{`
        .menuBar {
          display: flex;
          border-top: 1px solid #e0e0e0;
          border-bottom: 1px solid #e0e0e0;
          font-family: 'NanumGothic', sans-serif;
          max-width: 1032px;
          margin: 0 auto;
          padding: 0 16px;
          height: 2.5em;
          align-items: center;
        }
        .menuLink {
          font-weight: bold;
          font-size: 14px;
          color: #222;
          line-height: 2.5em;
          margin-left: 24px;
          margin-right: 24px;
          border-bottom: 4px solid transparent;
          text-decoration: none;
          transition:
            color 0.2s,
            border-bottom 0.2s;
          padding-bottom: 2px;
        }
        .menuLink:hover,
        .menuLinkActive {
          color: #4caf50;
          border-bottom: 4px solid #4caf50;
        }
      `}</style>
      <nav className="menuBar">
        <a href="/" className="menuLink">
          블로그 홈
        </a>
        <a href="/category" className="menuLink menuLinkActive">
          주제별 보기
        </a>
        <a href="/write" className="menuLink">
          글쓰기
        </a>
      </nav>
    </>
  );
}

// BigChoiceMenu 컴포넌트
function BigChoiceMenu({ categories, selected, onSelect }) {
  return (
    <>
      <style jsx>{`
        .menu {
          display: flex;
          gap: 24px;
          max-width: 770px;
          padding: 16px;
        }
        .item {
          color: gray;
          font-weight: normal;
          cursor: pointer;
          padding-bottom: 4px;
          border-bottom: 4px solid transparent;
          transition:
            color 0.2s,
            border-bottom 0.2s;
          font-family: 'NanumGothic', sans-serif;
        }
        .itemSelected {
          color: black;
          font-weight: bold;
          border-bottom: 3px solid black;
        }
        .item:hover {
          color: black;
          font-weight: bold;
        }
      `}</style>
      <div className="menu">
        {categories.map(category => (
          <span
            key={category}
            onClick={() => onSelect(category)}
            className={`item ${selected === category ? 'itemSelected' : ''}`}
          >
            {category}
          </span>
        ))}
      </div>
    </>
  );
}

// ChoiceMenu 컴포넌트
function ChoiceMenu({ categories, selected, onSelect }) {
  return (
    <>
      <style jsx>{`
        .menu {
          display: flex;
          gap: 16px;
          border-bottom: 3px solid #ddd;
          border-top: 1px solid #ddd;
          max-width: 770px;
          padding: 16px;
          font-family: 'NanumGothic', sans-serif;
        }
        .item {
          color: black;
          font-weight: normal;
          cursor: pointer;
          transition: color 0.2s;
        }
        .itemSelected {
          color: green;
          font-weight: bold;
        }
        .item:hover {
          border-bottom: 1px solid black;
        }
      `}</style>
      <div className="menu">
        {categories.map(category => (
          <span
            key={category}
            onClick={() => onSelect(category)}
            className={`item ${selected === category ? 'itemSelected' : ''}`}
          >
            {category}
          </span>
        ))}
      </div>
    </>
  );
}

// BlogList 컴포넌트
function BlogList({ blogs }) {
  return (
    <>
      <style jsx>{`
        .blogList {
          margin: 16px;
          max-width: 770px;
          width: 100%;
          box-sizing: border-box;
        }
        .blogItem {
          margin-bottom: 24px;
          border-bottom: 1px solid #eee;
          padding-bottom: 25px;
        }
        .cardRow {
          display: flex;
          align-items: flex-start;
        }
        .cardContent {
          flex: 1 1 0;
          min-width: 0;
        }
        .thumbnailBox {
          display: flex;
          margin-left: 24px;
          width: 120px;
          height: 120px;
          align-items: center;
          flex-shrink: 0;
        }
        .thumbnailImage {
          border-radius: 2px;
          width: 100%;
          height: 100%;
          object-fit: cover;
        }
        .profileRow {
          display: flex;
          align-items: flex-start;
          margin-bottom: 12px;
        }
        .profileImage {
          border-radius: 50%;
          margin-right: 10px;
          vertical-align: middle;
        }
        .authorName {
          font-weight: bold;
          font-size: 14px;
          text-decoration: none;
          transition: text-decoration 0.2s;
          color: #8b00ff;
        }
        .authorName:hover {
          text-decoration: underline;
        }
        .authorDate {
          color: #888;
          font-size: 10px;
        }
        .titleLink {
          font-weight: bold;
          font-size: 17px;
          margin-bottom: 10px;
          display: block;
          text-decoration: none;
          transition: text-decoration 0.2s;
          color: #8b00ff;
        }
        .titleLink:hover {
          text-decoration: underline;
        }
        .contentLink {
          color: #444;
          font-size: 13px;
          line-height: 1.7;
          display: block;
          text-decoration: none;
          transition: text-decoration 0.2s;
        }
        .contentLink:hover {
          text-decoration: underline;
        }
        .metaRow {
          margin-top: 8px;
          display: flex;
          gap: 18px;
          color: #888;
          font-size: 13px;
          align-items: center;
        }
        .metaItem {
          display: flex;
          align-items: center;
          gap: 3px;
        }
      `}</style>
      <div className="blogList">
        {blogs.map(blog => (
          <div key={blog.id || blog.postId} className="blogItem">
            <div className="cardRow">
              <div className="cardContent">
                <div className="profileRow">
                  <img
                    src={
                      blog.profileImage || 'https://via.placeholder.com/32x32/cccccc/666666?text=U'
                    }
                    alt="프로필"
                    className="profileImage"
                    width="32"
                    height="32"
                  />
                  <div>
                    <a href="#" className="authorName">
                      {blog.nickname || blog.author || '맛도리'}
                    </a>
                    <div className="authorDate">{blog.createdAt || blog.date || '2025.7.14'}</div>
                  </div>
                </div>
                <a href="#" className="titleLink">
                  {blog.title}
                </a>
                <a href="#" className="contentLink">
                  {blog.content}
                </a>
                <div className="metaRow">
                  <div className="metaItem">공감 {blog.likeCount || 1}</div>
                  <div className="metaItem">댓글 {blog.commentCount || 20}</div>
                </div>
              </div>
              {blog.thumbnail && (
                <div className="thumbnailBox">
                  <img src={blog.thumbnail} alt="썸네일" className="thumbnailImage" />
                </div>
              )}
            </div>
          </div>
        ))}
      </div>
    </>
  );
}

// LoginModal 컴포넌트
function LoginModal() {
  return (
    <div
      style={{
        backgroundColor: '#f8f9fa',
        padding: '20px',
        borderRadius: '8px',
        textAlign: 'center',
        fontSize: '13px',
        color: '#666',
        lineHeight: '1.6',
        fontFamily: 'NanumGothic, sans-serif',
      }}
    >
      <p style={{ margin: '0 0 16px 0' }}>네이버를 보다 안전하고 편리하게 이용하세요.</p>
      <button
        style={{
          backgroundColor: '#03c75a',
          color: 'white',
          border: 'none',
          padding: '10px 20px',
          borderRadius: '4px',
          fontSize: '13px',
          fontWeight: 'bold',
          cursor: 'pointer',
          width: '100%',
        }}
      >
        NAVER로그인
      </button>
      <div
        style={{
          fontSize: '12px',
          color: '#999',
          marginTop: '12px',
        }}
      >
        회원가입
      </div>
    </div>
  );
}

// 메인 페이지 컴포넌트
export default function MainPage() {
  const [topics, setTopics] = useState([]);
  const [bigSelected, setBigSelected] = useState('');
  const [subSelected, setSubSelected] = useState('');
  const [posts, setPosts] = useState([]);

  // 목업 데이터 (이미지에서 보이는 실제 데이터)
  const mockTopics = [
    {
      topicTypeName: '엔터테인먼트 예술',
      subTopics: [
        { subTopicName: 'IT.컴퓨터', subTopic: 'IT_COMPUTER' },
        { subTopicName: '사회.정치', subTopic: 'SOCIETY_POLITICS' },
        { subTopicName: '건강.의학', subTopic: 'HEALTH_MEDICINE' },
      ],
    },
    {
      topicTypeName: '생활 노하우 쇼핑',
      subTopics: [
        { subTopicName: '요리.맛집', subTopic: 'COOKING_RESTAURANT' },
        { subTopicName: '육아.교육', subTopic: 'PARENTING_EDUCATION' },
      ],
    },
    {
      topicTypeName: '취미 여가 여행',
      subTopics: [
        { subTopicName: '여행.관광', subTopic: 'TRAVEL_TOURISM' },
        { subTopicName: '취미.레저', subTopic: 'HOBBY_LEISURE' },
      ],
    },
    {
      topicTypeName: '자치 동향',
      subTopics: [
        { subTopicName: 'IT.컴퓨터', subTopic: 'IT_COMPUTER' },
        { subTopicName: '사회.정치', subTopic: 'SOCIETY_POLITICS' },
        { subTopicName: '건강.의학', subTopic: 'HEALTH_MEDICINE' },
      ],
    },
  ];

  const mockPosts = [
    {
      id: 1,
      title: 'Spring Boot 엔터티 매핑',
      content: 'JPA 엔터티 매핑 실습입니다.',
      author: '맛도리',
      date: '2025.7.14',
      likeCount: 1,
      commentCount: 20,
      thumbnail: 'https://via.placeholder.com/120x120/8B4513/FFFFFF?text=Spring',
    },
    {
      id: 2,
      title: 'React useState vs useReducer 비교분석',
      content:
        'React의 상태 관리 훅들을 비교해보겠습니다. 언제 useState를 쓰고 언제 useReducer를 써야 할까요? 실제 예제와 함께 살펴보겠습니다.',
      author: '맛도리',
      date: '2025.7.15',
      likeCount: 1,
      commentCount: 16,
      thumbnail: 'https://via.placeholder.com/120x120/61DAFB/000000?text=React',
    },
    {
      id: 3,
      title: 'MSA 아키텍처 설계 경험담',
      content:
        '마이크로서비스 아키텍처를 도입하면서 겪었던 시행착오와 해결 방법들을 공유합니다. Gateway, Service Discovery 등을 다룹니다.',
      author: '맛도리',
      date: '2025.7.15',
      likeCount: 0,
      commentCount: 0,
      thumbnail: 'https://via.placeholder.com/120x120/FF6B6B/FFFFFF?text=MSA',
    },
    {
      id: 4,
      title: 'AWS Lambda 성능 최적화 팁',
      content:
        'AWS Lambda 함수의 성능을 최적화하는 다양한 방법들을 실습과 함께 알아보겠습니다. Cold Start 문제 해결책도 포함됩니다.',
      author: '맛도리',
      date: '2025.7.12',
      likeCount: 0,
      commentCount: 0,
      thumbnail: 'https://via.placeholder.com/120x120/FF9900/000000?text=AWS',
    },
  ];

  useEffect(() => {
    // 실제 API 대신 목업 데이터 사용
    setTopics(mockTopics);
    setBigSelected('자치 동향');
    setSubSelected('IT.컴퓨터');
    setPosts(mockPosts);

    // 실제 API 사용 시:
    // axios.get(`${process.env.NEXT_PUBLIC_API_BLOG}/blog-service/posts/topics`)
    //   .then(res => {
    //     const data = res.data.data || [];
    //     setTopics(data);
    //     if (data.length) {
    //       setBigSelected(data[0].topicTypeName);
    //       setSubSelected(data[0].subTopics[0].subTopicName);
    //     }
    //   })
    //   .catch(console.error);
  }, []);

  useEffect(() => {
    if (!subSelected) return;

    // 실제 API 사용 시:
    // const topicObj = topics.find(t => t.topicTypeName === bigSelected);
    // const subObj = topicObj?.subTopics.find(s => s.subTopicName === subSelected);
    // const code = subObj?.subTopic;
    //
    // if (!code) {
    //   setPosts([]);
    //   return;
    // }
    //
    // axios.get(`${process.env.NEXT_PUBLIC_API_BLOG}/blog-service/posts/subtopics`, {
    //   params: { subTopic: code },
    // })
    // .then(res => setPosts(res.data.data || []))
    // .catch(() => setPosts([]));

    // 목업 데이터 사용
    setPosts(mockPosts);
  }, [bigSelected, subSelected, topics]);

  const bigCategories = topics.map(t => t.topicTypeName);
  const subCategories =
    topics.find(t => t.topicTypeName === bigSelected)?.subTopics.map(s => s.subTopicName) || [];

  return (
    <div style={{ fontFamily: 'NanumGothic, sans-serif' }}>
      <Header />
      <MenuTabs />
      <div
        style={{
          display: 'flex',
          alignItems: 'flex-start',
          justifyContent: 'space-between',
          gap: '24px',
          padding: '0 16px',
          maxWidth: '1032px',
          margin: '0 auto',
          fontFamily: 'NanumGothic',
        }}
      >
        {/* 왼쪽: 본문 */}
        <div style={{ flex: 1, maxWidth: '720px' }}>
          <BigChoiceMenu
            categories={bigCategories}
            selected={bigSelected}
            onSelect={big => {
              setBigSelected(big);
              const first =
                topics.find(t => t.topicTypeName === big)?.subTopics[0]?.subTopicName || '';
              setSubSelected(first);
            }}
          />
          <ChoiceMenu categories={subCategories} selected={subSelected} onSelect={setSubSelected} />
          <BlogList blogs={posts} />
        </div>
        {/* 오른쪽: 사이드바 (로그인 모달/안내) */}
        <div style={{ width: '256px' }}>
          <LoginModal />
        </div>
      </div>
    </div>
  );
}
