"use client";
import { useState, useRef, useEffect } from "react";
import "./Header.css"; // 스타일은 별도 작성 필요

export default function Header() {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const [selectedOption, setSelectedOption] = useState("글");
  const dropdownRef = useRef(null);

  const options = ["글", "블로그", "별명.아이디"];

  // 드롭다운 토글
  const toggleDropdown = () => setIsDropdownOpen((prev) => !prev);

  // 옵션 선택
  const handleSelect = (option) => {
    setSelectedOption(option);
    setIsDropdownOpen(false);
  };

  // 외부 클릭 시 드롭다운 닫기
  useEffect(() => {
    const handleClickOutside = (e) => {
      if (dropdownRef.current && !dropdownRef.current.contains(e.target)) {
        setIsDropdownOpen(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  return (
    <header className="header-common">
      <div className="inner">
        <div className="area-logo">
          <a className="link-naver" href="http://www.naver.com">
            <span className="blind">blog</span>
          </a>
          <a className="link-blog" href="/searching">
            <span className="blind">naver</span>
          </a>
        </div>
        <div className="area-search" role="search">
          <fieldset className="fieldset">
            <div className="search">
              <div
                className="area-dropdown"
                data-set="search"
                ref={dropdownRef}
              >
                <a
                  href="#"
                  className="selected-option"
                  role="button"
                  aria-haspopup="true"
                  aria-expanded={isDropdownOpen}
                  onClick={(e) => {
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
                    {options.map((option) => (
                      <div key={option}>
                        <a
                          href="#"
                          className={`item${
                            selectedOption === option ? " selected" : ""
                          }`}
                          aria-selected={selectedOption === option}
                          onClick={(e) => {
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
                placeholder=""
              />
            </div>
            <a
              href="#"
              className="button button-blog"
              role="button"
              aria-label="블로그 검색"
              onClick={(e) => {
                e.preventDefault();
                // 검색 함수 구현 필요
              }}
            >
              <i className="sp-common icon-search"></i>
            </a>
            <a
              href="http://search.naver.com/search.naver?sm=sta_hty.blog&amp;ie=utf8&amp;query="
              target="_blank"
              className="button button-naver"
              role="button"
              aria-label="네이버 통합검색"
            >
              통합검색
            </a>
          </fieldset>
        </div>
      </div>
    </header>
  );
}
