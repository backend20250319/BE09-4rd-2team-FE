'use client';
import Header from '@/src/app/(main)/searching/Header';
import MenuTabs from '@/src/components/header/MenuTabs';
import { useState } from 'react';
import OptionMenu from '@/src/app/(main)/(blog)/searchResult/OptionMenu';
import BlogResult from '@/src/app/(main)/(blog)/searchResult/BlogResult';
import ContentResult from '@/src/app/(main)/(blog)/searchResult/ContentResult';
import IdResult from '@/src/app/(main)/(blog)/searchResult/IdResult';

export default function SearchResult() {
  const categories = ['글', '블로그', '별명/아이디'];
  const [selected, setSelected] = useState(categories[0]);
  const renderComponents = {
    [categories[0]]: <ContentResult />,
    [categories[1]]: <BlogResult />,
    [categories[2]]: <IdResult />,
  };

  return (
    <div>
      <Header selected={selected} />
      <MenuTabs />
      <OptionMenu categories={categories} selected={selected} onSelect={setSelected} />
      {renderComponents[selected] || <div>카테고리를 선택하세요.</div>}
    </div>
  );
}
