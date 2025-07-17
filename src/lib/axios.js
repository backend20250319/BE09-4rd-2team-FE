// src/lib/axios.js 수정된 버전

import axios from 'axios';

const api = axios.create({
  baseURL: process.env.NEXT_PUBLIC_API_BLOG || 'http://localhost:8000/api/blog-service',
  timeout: 10000,
});

// 요청 인터셉터 (안전한 localStorage 접근)
api.interceptors.request.use(
  config => {
    // ✅ 안전한 localStorage 접근
    if (typeof window !== 'undefined') {
      const token = localStorage.getItem('accessToken');
      if (token) {
        config.headers.Authorization = `Bearer ${token}`;
        console.log('보내는 토큰:', token);
      }
    }
    return config;
  },
  error => {
    return Promise.reject(error);
  },
);

// 응답 인터셉터
api.interceptors.response.use(
  response => {
    return response;
  },
  error => {
    if (error.response?.status === 401) {
      // 토큰 만료 시 처리
      if (typeof window !== 'undefined') {
        localStorage.removeItem('accessToken');
        localStorage.removeItem('userId');
        window.location.href = '/login';
      }
    }
    return Promise.reject(error);
  },
);

export default api;
