'use client';
import { useState, useEffect } from 'react';
import ChoiceMenu from '@/src/app/(main)/(blog)/common/ChoiceMenu';
import BlogList from '@/src/app/(main)/(blog)/common/BlogList';
import Header from '@/src/app/(main)/searching/Header';
import MenuTabs from '@/src/components/header/MenuTabs';
import LoginModal from '@/src/app/(main)/(loginmodal)/LoginModal';
import axios from 'axios';
import process from 'next/dist/build/webpack/loaders/resolve-url-loader/lib/postcss';

export default function BlogHome() {
  const [blogs, setBlogs] = useState([]);
  const [selected, setSelected] = useState('전체');

  useEffect(() => {
    axios.get(`${process.env.NEXT_PUBLIC_API_BLOG}/posts/all`).then(res => {
      setBlogs(res.data.data.content ?? []);
    });
  }, []);

  const categories = ['전체', ...new Set(blogs.map(b => b.subTopic))];
  const filtered = selected === '전체' ? blogs : blogs.filter(b => b.subTopic === selected);

  return (
    <div style={{ fontFamily: 'NanumGothic' }}>
      <Header />
      <MenuTabs />
      <div style={{ textAlign: 'center', margin: '54px 0' }}>
        <p style={{ lineHeight: '2' }}>
          로그아웃 상태입니다. <br /> 로그인하여 이웃새글을 확인해보세요.
        </p>
      </div>
      <div
        style={{
          display: 'flex',
          alignItems: 'flex-start',
          justifyContent: 'space-between',
          gap: '24px', // 본문–사이드바 사이
          padding: '0 16px', // 화면 양쪽 패딩
          maxWidth: '1032px', // 컨테이너 전체 최대 너비
          margin: '0 auto', // 가운데 정렬
        }}
      >
        {/* 좌측 본문 */}
        <div style={{ flex: 1, maxWidth: '720px' }}>
          <ChoiceMenu categories={categories} selected={selected} onSelect={setSelected} />
          <BlogList blogs={filtered} />
        </div>
        {/* 우측 사이드바 */}
        <div style={{ width: '256px' }}>
          <LoginModal />
        </div>
      </div>
    </div>
  );
}
