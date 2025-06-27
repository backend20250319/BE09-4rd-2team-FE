import React from 'react';
import './FontToolbar.css';

/*const typeface = ['본문', '소제목', '인용구'];*/
const fonts = ['나눔고딕', '맑은 고딕', '돋움', 'Arial', 'Times New Roman'];
const sizes = [12, 14, 15, 16, 18, 20, 24];

const FontToolbar = ({ onChange }) => (
  <div className="font-toolbar">
    <select onChange={e => onChange('fontFamily', e.target.value)}>
      {fonts.map(font => (
        <option key={font} value={font}>
          {font}
        </option>
      ))}
    </select>
    <select onChange={e => onChange('fontSize', e.target.value)}>
      {sizes.map(size => (
        <option key={size} value={size}>
          {size}px
        </option>
      ))}
    </select>
    {/* 버튼 */}
    <button onClick={() => onChange('bold')} title="굵기 적용">
      <b>B</b>
    </button>
    <button onClick={() => onChange('italic')} title="기울이기 적용">
      <i>I</i>
    </button>
    <button onClick={() => onChange('underline')} title="밑줄 적용">
      <u>U</u>
    </button>
    {/* 필요시 추가 */}
  </div>
);

export default FontToolbar;
