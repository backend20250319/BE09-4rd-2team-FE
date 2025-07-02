// PublishOptions.jsx
'use client';

import React, { useState } from 'react';
import './PublishOptions.css';
import SubjectSettings from './SubjectSettings.jsx';

export default function PublishOptions({ onClose, onConfirm }) {
  // 주제 설정 모달 표시 여부 상태
  const [showSubjectSettings, setShowSubjectSettings] = useState(false);
  // 선택된 주제 라벨 상태
  const [selectedSubject, setSelectedSubject] = useState('주제 선택 안 함');

  // 주제 설정창에서 '확인' 버튼을 눌렀을 때 호출되는 콜백
  // subject: 선택된 주제 문자열
  const handleSubjectConfirm = subject => {
    setSelectedSubject(subject); // 선택값 업데이트
    setShowSubjectSettings(false); // 모달 닫기
    onConfirm(subject); // 부모에게 선택값 전달
  };

  return (
    <div className="publish-options">
      <h3 className="title">발행 설정</h3>

      {/* 카테고리 선택 */}
      <div className="option-row">
        <label className="label">카테고리</label>
        <select>
          <option value="">게시판</option>
          <option value="">공지사항</option>
          <option value="">일상</option>
        </select>
      </div>

      {/* 주제 선택: 버튼 클릭 시 SubjectSettings 모달 오픈 */}
      <div className="option-row">
        <label className="label">주제</label>
        <button
          type="button"
          className="subject-trigger"
          onClick={() => setShowSubjectSettings(true)} // 모달 열기
        >
          {selectedSubject} &gt;
        </button>
      </div>

      {/* 모달 렌더링: showSubjectSettings가 true일 때만 표시 */}
      {showSubjectSettings && (
        <SubjectSettings
          onClose={() => setShowSubjectSettings(false)} // 모달 닫기
          onConfirm={handleSubjectConfirm} // 선택값 콜백
        />
      )}

      {/* 공개 설정 */}
      <div className="option-row">
        <label className="label">공개 설정</label>
        <div className="checkbox-group">
          <label>
            <input type="radio" name="public" defaultChecked /> 전체공개
          </label>
          <label>
            <input type="radio" name="public" /> 이웃공개
          </label>
          <label>
            <input type="radio" name="public" /> 서로이웃공개
          </label>
          <label>
            <input type="radio" name="public" /> 비공개
          </label>
        </div>
      </div>

      {/* 발행 설정 */}
      <div className="option-row">
        <label className="label">발행 설정</label>
        <div className="checkbox-group">
          <label>
            <input type="checkbox" defaultChecked /> 댓글 허용
          </label>
          <label>
            <input type="checkbox" defaultChecked /> 공감 허용
          </label>
          <label>
            <input type="checkbox" /> 검색 허용
          </label>
          <label>
            <input type="checkbox" defaultChecked /> 블로그카페 공유 링크 허용
          </label>
          <label>
            <input type="checkbox" /> 일부 공유 허용
          </label>
        </div>
      </div>

      {/* 태그 편집 */}
      <div className="option-row">
        <label className="label">태그 편집</label>
        <input type="text" placeholder="#태그 입력 (최대 30개)" />
      </div>

      {/* 발행 시간 */}
      <div className="option-row">
        <label className="label">발행 시간</label>
        <div className="checkbox-group">
          <label>
            <input type="radio" name="time" defaultChecked /> 현재
          </label>
          <label>
            <input type="radio" name="time" /> 예약
          </label>
        </div>
      </div>

      {/* 공지사항 등록 */}
      <div className="option-row">
        <label>
          <input type="checkbox" /> 공지사항으로 등록
        </label>
      </div>

      {/* 하단 버튼 */}
      <div className="actions">
        <button onClick={onClose}>닫기</button>
        <button className="publish-btn">발행</button>
      </div>
    </div>
  );
}
