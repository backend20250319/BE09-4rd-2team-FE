'use client';
const styles = {};

import React, { useState, useEffect } from 'react';
import { useRouter } from 'next/navigation'; // ✅ Next.js용 라우터
// import './AuthForm.css';
import axios from 'axios';

function generateUUID() {
  // 간단한 UUID 생성 함수 (RFC4122 버전4 형식)
  return 'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx'.replace(/[xy]/g, c => {
    const r = (Math.random() * 16) | 0;
    const v = c === 'x' ? r : (r & 0x3) | 0x8;
    return v.toString(16);
  });
}

function parseJwt(token) {
  try {
    const base64Url = token.split('.')[1]; // payload 부분
    const base64 = base64Url.replace(/-/g, '+').replace(/_/g, '/');
    const jsonPayload = decodeURIComponent(
      atob(base64)
        .split('')
        .map(c => '%' + ('00' + c.charCodeAt(0).toString(16)).slice(-2))
        .join(''),
    );
    return JSON.parse(jsonPayload);
  } catch (e) {
    return null;
  }
}

export default function LoginForm() {
  const [id, setId] = useState('');
  const [pw, setPw] = useState('');
  const router = useRouter(); // ✅ 페이지 이동용
  const [deviceId, setDeviceId] = useState('');

  useEffect(() => {
    // 기기에 저장된 deviceId가 있으면 불러오고, 없으면 새로 생성해서 저장
    let storedDeviceId = localStorage.getItem('deviceId');
    if (!storedDeviceId) {
      storedDeviceId = generateUUID();
      localStorage.setItem('deviceId', storedDeviceId);
    }
    setDeviceId(storedDeviceId);
  }, []);

  const handleSubmit = async e => {
    e.preventDefault();
    console.log('[✅ handleSubmit 호출됨]');

    try {
      const url = `${process.env.NEXT_PUBLIC_API_USER}/user-management/auth/login`;
      console.log('[로그인 요청 경로]', url); // 🔍 실제 요청 URL 확인

      const response = await axios.post(url, {
        emailId: id,
        password: pw,
        deviceId, // 자동 생성된 deviceId 사용
      });

      console.log('서버 응답:', response.data);

      // 로그인 성공 시 처리
      // 예) 토큰 저장, 페이지 이동 등
      // 서버에서 토큰 받는다고 가정
      const { accessToken } = response.data.data;

      if (accessToken) {
        // 예: 로컬 스토리지에 저장
        localStorage.setItem('accessToken', accessToken);
        // 사용 예
        const token = localStorage.getItem('accessToken');
        const payload = parseJwt(token);
        const userId = payload ? payload.userId : null;
        localStorage.setItem('userId', userId);
        console.log('userId:', localStorage.getItem('userId'));
        alert('로그인 성공!');
        router.push('/neighborPost'); // 이웃새글 페이지로 이동
      }
    } catch (error) {
      console.error('로그인 실패:', error);
      if (axios.isAxiosError(error)) {
        const status = error.response?.status;
        if (status === 401) {
          alert('아이디 또는 비밀번호가 올바르지 않습니다.');
        } else {
          alert(
            '로그인 실패! ' +
              (typeof error.response?.data === 'string'
                ? error.response.data
                : error.response?.data?.message || '서버 오류'),
          );
        }
      } else {
        alert('로그인 실패! 알 수 없는 오류가 발생했습니다.');
      }
    }
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
        <button onClick={() => router.push('/register')} className="switch-btn">
          회원가입
        </button>
      </div>
    </div>
  );
}
