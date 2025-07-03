'use client';
import Header from '@/src/app/(main)/searching/Header';
import MenuTabs from '@/src/components/header/MenuTabs';
import { useState, useEffect } from 'react';
import { useSearchParams } from 'next/navigation';
import OptionMenu from '@/src/app/(main)/(blog)/searchResult/OptionMenu';
import BlogResult from '@/src/app/(main)/(blog)/searchResult/BlogResult';
import ContentResult from '@/src/app/(main)/(blog)/searchResult/ContentResult';
import IdResult from '@/src/app/(main)/(blog)/searchResult/IdResult';

export default function SearchResult() {
  const categories = ['글', '블로그', '별명.아이디']; // Header와 일치해야 함
  const searchParams = useSearchParams();
  const modeParam = searchParams.get('mode');

  // URL에서 넘어온 mode 값이 유효한 카테고리인지 확인 후 selected 초기화
  const defaultCategory = categories.includes(modeParam) ? modeParam : categories[0];
  const [selected, setSelected] = useState(defaultCategory);

  // URL의 mode가 변경되었을 때 상태를 동기화
  useEffect(() => {
    if (modeParam && categories.includes(modeParam)) {
      setSelected(modeParam);
    }
  }, [modeParam]);

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
