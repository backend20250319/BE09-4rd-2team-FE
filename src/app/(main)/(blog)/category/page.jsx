'use client';

import ChoiceMenu from '@/src/app/(main)/(blog)/common/ChoiceMenu';
import blogs from '@/src/app/(main)/(blog)/common/blogs.json';
import { useState } from 'react';
import BlogList from '@/src/app/(main)/(blog)/common/BlogList';
import BigChoiceMenu from '@/src/app/(main)/(blog)/common/BigChoiceMenu';

export default function CategoryPage() {
  // 대주제 목록
  const bigCategories = [...new Set(blogs.map(blog => blog.bigCategory))];
  // 소주제 목록
  const categories = [...new Set(blogs.map(b => b.category))];

  // 선택 상태
  const [bigSelected, setBigSelected] = useState('주제설정');
  const [selected, setSelected] = useState(categories[0]);

  // 필터링 로직
  const filteredCategories =
    bigSelected === '주제설정'
      ? categories
      : [...new Set(blogs.filter(b => b.bigCategory === bigSelected).map(b => b.category))];
  // 소주제 필터링
  const filtered = blogs.filter(blog => {
    // 대주제만 선택: 소주제 무시
    if (bigSelected !== '주제설정' && selected === '') return blog.bigCategory === bigSelected;
    // 대주제 전체, 소주제만 선택
    if (bigSelected === '주제설정' && selected) return blog.category === selected;
    // 대주제, 소주제 모두 선택
    if (bigSelected !== '주제설정' && selected)
      return blog.bigCategory === bigSelected && blog.category === selected;
    // 아무것도 선택 안 했을 때 전체 반환 (예외 처리)
    return true;
  });

  return (
    <div>
      <BigChoiceMenu
        categories={['주제설정', ...bigCategories]}
        selected={bigSelected}
        onSelect={setBigSelected}
      />
      <ChoiceMenu categories={filteredCategories} selected={selected} onSelect={setSelected} />
      <BlogList blogs={filtered} />
    </div>
  );
}
