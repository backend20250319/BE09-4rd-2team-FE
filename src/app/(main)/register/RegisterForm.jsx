import React, { useState } from 'react';
import { useRouter } from 'next/navigation'; // ✅ Next.js용 라우터

export default function RegisterForm({ onSwitch }) {
  const [id, setId] = useState('');
  const [pw, setPw] = useState('');
  const [pw2, setPw2] = useState('');
  const [phone, setPhone] = useState('');
  const router = useRouter();

  const handleSubmit = e => {
    e.preventDefault();
    if (pw !== pw2) {
      alert('비밀번호가 일치하지 않습니다.');
      return;
    }
    // 회원가입 처리 로직 (API 연동 등)
    alert(`ID: ${id}\nPW: ${pw}\nPhone: ${phone}`);
  };

  return (
    <div className="auth-container">
      <h2 className="auth-title">NAVER</h2>
      <form className="auth-form" onSubmit={handleSubmit}>
        <input type="text" placeholder="아이디" value={id} onChange={e => setId(e.target.value)} />
        <input
          type="password"
          placeholder="비밀번호"
          value={pw}
          onChange={e => setPw(e.target.value)}
        />
        <input
          type="password"
          placeholder="비밀번호 확인"
          value={pw2}
          onChange={e => setPw2(e.target.value)}
        />
        <button type="submit" className="auth-btn">
          회원가입
        </button>
      </form>
      <div className="auth-footer">
        <button onClick={() => router.push('/login')} className="switch-btn">
          로그인 화면으로
        </button>
      </div>
    </div>
  );
}
