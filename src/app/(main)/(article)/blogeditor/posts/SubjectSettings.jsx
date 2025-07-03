import React, { useState } from 'react';
import './SubjectSettings.css';

export default function SubjectSettings({ onClose, onConfirm }) {
  const [selectedSubject, setSelectedSubject] = useState('주제 선택 안 함');
  const [alwaysUseCategory, setAlwaysUseCategory] = useState(false);

  const handleSubjectChange = e => setSelectedSubject(e.target.value);
  const handleConfirm = () => onConfirm(selectedSubject, alwaysUseCategory);

  return (
    <div className="subject-settings">
      <div className="header">
        <h3 className="title">주제 설정</h3>
        <button className="close-btn" onClick={onClose}>
          &times;
        </button>
      </div>

      <p className="description">
        주제를 선택하면 네이버 홈과 블로그 홈에서 주제별로 글을 볼 수 있습니다.
        <br />
        주제를 선택하지 않아도 "블로그 홈 &gt; 주제를 불러오기" 검색에서 볼 수 있습니다.
      </p>

      <div className="subject-groups">
        {/* 엔터테인먼트·예술 */}
        <div className="subject-group">
          <strong>엔터테인먼트·예술</strong>
          {[
            '연예',
            '영화',
            '미술·디자인',
            '공연·전시',
            '음악',
            '드라마',
            '스타·연예인',
            '만화·애니',
            '방송',
          ].map(item => (
            <label key={item}>
              <input
                type="radio"
                name="subject"
                value={item}
                checked={selectedSubject === item}
                onChange={handleSubjectChange}
              />{' '}
              {item}
            </label>
          ))}
        </div>

        {/* 생활·육아·쇼핑 */}
        <div className="subject-group">
          <strong>생활·육아·쇼핑</strong>
          {[
            '일상·생각',
            '육아·결혼',
            '반려동물',
            '공유·이미지',
            '패션·미용',
            '인테리어·DIY',
            '요리·레시피',
            '상품리뷰',
            '원예·재배',
          ].map(item => (
            <label key={item}>
              <input
                type="radio"
                name="subject"
                value={item}
                checked={selectedSubject === item}
                onChange={handleSubjectChange}
              />{' '}
              {item}
            </label>
          ))}
        </div>

        {/* 여가·여행 */}
        <div className="subject-group">
          <strong>여가·여행</strong>
          {['게임', '스포츠', '사진', '자동차', '취미', '국내여행', '세계여행'].map(item => (
            <label key={item}>
              <input
                type="radio"
                name="subject"
                value={item}
                checked={selectedSubject === item}
                onChange={handleSubjectChange}
              />{' '}
              {item}
            </label>
          ))}
        </div>

        {/* 지식·통찰 */}
        <div className="subject-group">
          <strong>지식·통찰</strong>
          {['IT·컴퓨터', '사회·정치', '건강·의학', '비즈니스·경제', '어학·외국어', '교육·학문'].map(
            item => (
              <label key={item}>
                <input
                  type="radio"
                  name="subject"
                  value={item}
                  checked={selectedSubject === item}
                  onChange={handleSubjectChange}
                />{' '}
                {item}
              </label>
            ),
          )}
        </div>
      </div>

      <div className="subject-extra">
        <label>
          <input
            type="radio"
            name="subject"
            value="주제 선택 안 함"
            checked={selectedSubject === '주제 선택 안 함'}
            onChange={handleSubjectChange}
          />{' '}
          주제 선택 안 함
        </label>
        <label>
          <input
            type="checkbox"
            checked={alwaysUseCategory}
            onChange={e => setAlwaysUseCategory(e.target.checked)}
          />{' '}
          이 카테고리의 글은 항상 이 주제로 분류
        </label>
      </div>

      <div className="actions">
        <button className="cancel-btn" onClick={onClose}>
          취소
        </button>
        <button className="confirm-btn" onClick={handleConfirm}>
          확인
        </button>
      </div>
    </div>
  );
}
