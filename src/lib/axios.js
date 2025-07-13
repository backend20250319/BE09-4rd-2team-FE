import axios from 'axios';
import process from 'next/dist/build/webpack/loaders/resolve-url-loader/lib/postcss';

const api = axios.create({
  baseURL: process.env.NEXT_PUBLIC_API_BLOG,
  headers: {
    'Content-Type': 'application/json',
  },
});

export default api;
