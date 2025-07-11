import React, { useState } from 'react';
import './AuthForm.css';

export default function LoginForm({ onSwitch }) {
  const [id, setId] = useState('');
  const [pw, setPw] = useState('');

  const handleSubmit = e => {
    e.preventDefault();
    // 로그인 처리 로직 (API 연동 등)
    alert(`ID: ${id}\nPW: ${pw}`);
  };

  return (
    <div className="auth-container">
      <h2 className="auth-title">PLAYBLOG</h2>
      <form className="auth-form" onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="아이디 또는 전화번호"
          value={id}
          onChange={e => setId(e.target.value)}
        />
        <input
          type="password"
          placeholder="비밀번호"
          value={pw}
          onChange={e => setPw(e.target.value)}
        />
        <button type="submit" className="auth-btn">
          로그인
        </button>
      </form>
      <div className="auth-footer">
        <button onClick={() => onSwitch('register')} className="switch-btn">
          회원가입
        </button>
      </div>
    </div>
  );
}
