'use client';
import Header from '@/src/app/(main)/searching/Header';
import MenuTabs from '@/src/components/header/MenuTabs';
import { useState } from 'react';
import OptionMenu from '@/src/app/(main)/(blog)/searchResult/OptionMenu';
import BlogList from '@/src/app/(main)/(blog)/common/BlogList';

export default function SearchResult() {
  const categories = ['글', '블로그', '별명/아이디'];
  const [selected, setSelected] = useState(categories[0]);
  return (
    <div>
      <Header />
      <MenuTabs />
      <OptionMenu categories={categories} selected={selected} onSelect={setSelected} />
    </div>
  );
}
