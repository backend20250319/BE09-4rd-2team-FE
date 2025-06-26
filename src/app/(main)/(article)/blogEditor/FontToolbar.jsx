import React from 'react';
import './FontToolbar.css';

const fonts = ['나눔고딕', '맑은 고딕', '돋움', 'Arial', 'Times New Roman'];
const sizes = [12, 14, 15, 16, 18, 20, 24];

const FontToolbar = ({ onChange }) => (
    <div className="font-toolbar">
        <select onChange={e => onChange('fontFamily', e.target.value)}>
            {fonts.map(font => (
                <option key={font} value={font}>{font}</option>
            ))}
        </select>
        <select onChange={e => onChange('fontSize', e.target.value)}>
            {sizes.map(size => (
                <option key={size} value={size}>{size}px</option>
            ))}
        </select>
        <button onClick={() => onChange('bold')} title="Bold"><b>B</b></button>
        <button onClick={() => onChange('italic')} title="Italic"><i>I</i></button>
        <button onClick={() => onChange('underline')} title="Underline"><u>U</u></button>
        {/* 필요시 추가 */}
    </div>
);

export default FontToolbar;
