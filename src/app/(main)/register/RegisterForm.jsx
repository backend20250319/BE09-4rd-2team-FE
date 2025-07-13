import React, { useState } from 'react';
import { useRouter } from 'next/navigation'; // ✅ Next.js용 라우터
import axios from 'axios';

export default function RegisterForm({ onSwitch }) {
  const [id, setId] = useState('');
  const [pw, setPw] = useState('');
  const [pw2, setPw2] = useState('');
  const router = useRouter();

  const handleRegister = async e => {
    e.preventDefault();
    console.log('[✅ handleRegister 호출됨]');
    if (pw !== pw2) {
      alert('비밀번호가 일치하지 않습니다.');
      return;
    }

    try {
      const url = `${process.env.NEXT_PUBLIC_API_USER}/user-management/users/register`;
      console.log('[회원가입 요청 경로]', url); // 🔍 실제 요청 URL 확인
      const response = await axios.post(url, {
        emailId: id,
        password: pw,
      });

      alert('회원가입 성공!');
      console.log('서버 응답:', response.data);
      router.push('/login'); // 성공 시 로그인 페이지로 이동
    } catch (error) {
      console.error('회원가입 실패:', error);
      if (axios.isAxiosError(error)) {
        const status = error.response?.status;
        if (status === 409) {
          alert('이미 존재하는 이메일입니다.');
        } else {
          const msg =
            typeof error.response?.data === 'string'
              ? error.response.data
              : error.response?.data?.message || '서버 오류';
          alert('회원가입 실패! ' + msg);
        }
      } else {
        alert('회원가입 실패! 알 수 없는 오류가 발생했습니다.');
      }
    }
  };

  return (
    <div className="auth-container">
      <h2 className="auth-title">PLAYBLOG</h2>
      <form className="auth-form" onSubmit={handleRegister}>
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
