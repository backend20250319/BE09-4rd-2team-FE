// src/lib/axios.js
import axios from 'axios';

const api = axios.create({
  baseURL: 'http://localhost:8000/api/blog-service', // 직접 설정
  headers: {
    'Content-Type': 'application/json',
  },
});

export default api;
