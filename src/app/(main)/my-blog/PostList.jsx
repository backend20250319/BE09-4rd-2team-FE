import React, { useState } from "react";
import "./PostList.css";

const posts = [
  {
    id: 1,
    title: "장마철의 시작, 빗소리와 함께",
    commentCount: 6,
    visibility: null, // 공개
    views: 14,
    date: "2025. 6. 15.",
  },
  {
    id: 2,
    title: "여름 바다에서의 하루",
    commentCount: 9,
    visibility: null, // 공개
    views: 38,
    date: "2025. 6. 20.",
  },
  {
    id: 3,
    title: "무더운 여름밤, 선풍기와 함께",
    commentCount: 0,
    visibility: null, // 공개
    views: 0,
    date: "2025. 6. 25.",
  },
  {
    id: 4,
    title: "장맛비에 젖은 도시 풍경",
    commentCount: 7,
    visibility: "비공개",
    views: 38,
    date: "2025. 6. 18.",
  },
  {
    id: 5,
    title: "여름철 시원한 음료 추천",
    commentCount: 4,
    visibility: null, // 공개
    views: 41,
    date: "2025. 6. 22.",
  },
  {
    id: 6,
    title: "봄맞이 방 청소 후기",
    commentCount: 2,
    visibility: null, // 공개
    views: 15,
    date: "2025. 2. 20.",
  },
  {
    id: 7,
    title: "친구와 함께한 제주 여행",
    commentCount: 5,
    visibility: "서로이웃공개",
    views: 32,
    date: "2025. 2. 10.",
  },
  {
    id: 8,
    title: "새로운 취미, 자전거 타기",
    commentCount: 1,
    visibility: null, // 공개
    views: 8,
    date: "2025. 1. 28.",
  },
  {
    id: 9,
    title: "2025년 목표 세우기",
    commentCount: 3,
    visibility: "비공개",
    views: 3,
    date: "2025. 1. 1.",
  },
  {
    id: 10,
    title: "겨울방학 알차게 보내는 법",
    commentCount: 6,
    visibility: "검색비허용",
    views: 27,
    date: "2024. 12. 22.",
  },
  {
    id: 11,
    title: "내가 사랑하는 카페 TOP3",
    commentCount: 0,
    visibility: null, // 공개
    views: 11,
    date: "2024. 12. 10.",
  },
  {
    id: 12,
    title: "첫 눈 오는 날의 기록",
    commentCount: 4,
    visibility: "서로이웃공개",
    views: 19,
    date: "2024. 11. 29.",
  },
  {
    id: 13,
    title: "가을 단풍 여행 사진첩",
    commentCount: 7,
    visibility: null, // 공개
    views: 44,
    date: "2024. 11. 12.",
  },
  {
    id: 14,
    title: "블로그 시작! 첫 글",
    commentCount: 2,
    visibility: null, // 공개
    views: 5,
    date: "2024. 10. 1.",
  },
];

function PostList() {
  // 목록 숨김 상태
  const [isCollapsed, setIsCollapsed] = useState(false);

  // 페이지네이션 상태
  const [currentPage, setCurrentPage] = useState(1);
  const [postsPerPage, setPostsPerPage] = useState(5);

  // 전체 페이지 수 계산
  const totalPages = Math.ceil(posts.length / postsPerPage);

  // 현재 페이지에 해당하는 posts만 잘라서 보여주기
  const indexOfLast = currentPage * postsPerPage;
  const indexOfFirst = indexOfLast - postsPerPage;
  const currentPosts = posts.slice(indexOfFirst, indexOfLast);

  // 목록 닫기 버튼 클릭 핸들러
  const handleCollapse = () => {
    setIsCollapsed(!isCollapsed);
  };

  // 페이지 버튼 클릭 핸들러
  const handlePageClick = (pageNum) => {
    setCurrentPage(pageNum);
  };

  // 줄 수 변경 핸들러
  const handlePostsPerPageChange = (e) => {
    setPostsPerPage(Number(e.target.value));
    setCurrentPage(1); // 줄 수 바꿀 때 1페이지로 이동
  };

  return (
    <div>
      <div className="menus">
        <div className="menu1">
          <ul>
            <li>
              <a href="#" className="link">
                프롤로그
              </a>
              <img
                src="https://blogimgs.pstatic.net/nblog/spc.gif"
                className="bar"
              ></img>
            </li>
            <li>
              <a href="#" className="link blog-link">
                블로그
              </a>
            </li>
          </ul>
        </div>
        <div className="menu2">
          <ul>
            <li>
              <a href="#" className="link">
                지도
              </a>
              <img
                src="https://blogimgs.pstatic.net/nblog/spc.gif"
                className="bar"
              ></img>
            </li>
            <li>
              <a href="#" className="link">
                서재
              </a>
              <img
                src="https://blogimgs.pstatic.net/nblog/spc.gif"
                className="bar"
              ></img>
            </li>
            <li>
              <a href="#" className="link">
                안부
              </a>
            </li>
          </ul>
        </div>
      </div>
      <div className="post-list-table">
        <div className="post-list-header">
          <span className="post-list-title">
            <span className="clickable-title" onClick={handleCollapse}>
              전체보기
            </span>{" "}
            <span className="post-count">{posts.length}개의 글</span>
          </span>
          <button className="collapse-btn" onClick={handleCollapse}>
            {isCollapsed ? "목록열기" : "목록닫기"}
          </button>
        </div>
        {!isCollapsed && (
          <>
            <table>
              <thead>
                <tr>
                  <th className="title-col">글 제목</th>
                  <th className="views-col">조회수</th>
                  <th className="date-col">작성일</th>
                </tr>
              </thead>
              <tbody>
                {currentPosts.map((post) => (
                  <tr key={post.id}>
                    <td className="title-cell">
                      <span className="main-title">{post.title}</span>
                      {post.commentCount > 0 && (
                        <span className="comment-count">
                          ({post.commentCount})
                        </span>
                      )}
                      {post.visibility && (
                        <span className="post-tag">{post.visibility}</span>
                      )}
                    </td>
                    <td className="views-cell">{post.views}</td>
                    <td className="date-cell">{post.date}</td>
                  </tr>
                ))}
              </tbody>
            </table>
            <div className="post-list-bottom">
              <button className="manage-btn">글관리 열기</button>
              <select
                className="row-select"
                value={postsPerPage}
                onChange={handlePostsPerPageChange}
              >
                <option value={5}>5줄 보기</option>
                <option value={10}>10줄 보기</option>
                <option value={15}>15줄 보기</option>
                <option value={20}>20줄 보기</option>
                <option value={30}>30줄 보기</option>
              </select>
            </div>
            <div className="pagination">
              {Array.from({ length: totalPages }, (_, i) => i + 1).map(
                (num) => (
                  <button
                    key={num}
                    className={`page-btn${
                      num === currentPage ? " active" : ""
                    }`}
                    onClick={() => handlePageClick(num)}
                  >
                    {num}
                  </button>
                )
              )}
            </div>
          </>
        )}
      </div>
    </div>
  );
}

export default PostList;
