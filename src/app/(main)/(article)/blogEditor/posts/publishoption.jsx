'use client';

import React from 'react';
import './publishoptions.css';

export default function PublishOptions({ onClose }) {


    return (
        <div className="publish-options">
            <h3 className="title">발행 설정</h3>

            {/* 카테고리 */}
            <div className="option-row">
                <label className="label">카테고리</label>
                <select>
                    <option value="">게시판</option>
                    <option value="">공지사항</option>
                    <option value="">일상</option>
                </select>
            </div>

            {/* 주제 */}
            <div className="option-row">
                <label className="label">주제</label>
                <select>
                    <option>주제 선택 안 함</option>
                    <option>IT</option>
                    <option>일상</option>
                    <option>여행</option>
                </select>
            </div>

            {/* 공개 설정 */}
            <div className="option-row">
                <label className="label">공개 설정</label>
                <div className="checkbox-group">
                    <label><input type="radio" name=" 공개" defaultChecked /> 검색 허용</label>
                    <label><input type="radio" name=" 공개" /> 이웃 공개</label>
                    <label><input type="radio" name=" 공개" /> 서이추 공개</label>
                    <label><input type="radio" name=" 공개" /> 비공개</label>
                </div>
            </div>

            {/* 발행 설정 */}
            <div className="option-row">
                <label className="label">발행 설정</label>
                <div className="checkbox-group">
                    <label><input type="checkbox" defaultChecked /> 댓글 허용</label>
                    <label><input type="checkbox" defaultChecked /> 공감 허용</label>
                    <label><input type="checkbox" /> 검색 허용</label>
                    <label><input type="checkbox" defaultChecked /> 블로그카페 공유 링크 허용</label>
                    <label><input type="checkbox" /> 일부 공유 허용</label>
                </div>
            </div>

            {/* 태그 */}
            <div className="option-row">
                <label className="label">태그 편집</label>
                <input type="text" placeholder="#태그 입력 (최대 30개)" />
            </div>

            {/* 발행 시간 */}
            <div className="option-row">
                <label className="label">발행 시간</label>
                <div className="checkbox-group">
                    <label><input type="radio" name="time" defaultChecked /> 현재</label>
                    <label><input type="radio" name="time" /> 예약</label>
                </div>
            </div>

            {/* 공지사항 등록 */}
            <div className="option-row">
                <label><input type="checkbox" /> 공지사항으로 등록</label>
            </div>

            {/* 버튼 */}
            <div className="actions">
                <button onClick={onClose}>닫기</button>
                <button className="publish-btn">발행</button>
            </div>
        </div>
    );
}
