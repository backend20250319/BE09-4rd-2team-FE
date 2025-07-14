import axios from 'axios';
import process from 'next/dist/build/webpack/loaders/resolve-url-loader/lib/postcss';

const api = axios.create({
  baseURL: process.env.NEXT_PUBLIC_API_BLOG,
  headers: {
    'Content-Type': 'application/json',
  },
});

api.interceptors.request.use(config => {
  const token = localStorage.getItem('accessToken');
  if (token) config.headers.Authorization = `Bearer ${token}`;
  return config;
  console.log('보내는 토큰:', localStorage.getItem('accessToken'));
});

export default api;
