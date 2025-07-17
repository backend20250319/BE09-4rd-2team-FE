'use client';
const styles = {};
import { Suspense } from 'react';
import Header from '@/src/app/(main)/searching/Header';
import MenuTabs from '@/src/components/header/MenuTabs';
import { useState, useEffect } from 'react';
import { useSearchParams, useRouter } from 'next/navigation';
import OptionMenu from '@/src/app/(main)/(blog)/searchResult/OptionMenu';
import BlogResult from '@/src/app/(main)/(blog)/searchResult/components/BlogResult';
import ContentResult from '@/src/app/(main)/(blog)/searchResult/components/ContentResult';
import IdResult from '@/src/app/(main)/(blog)/searchResult/components/IdResult';

// ✅ useSearchParams 사용하는 부분을 별도 컴포넌트로 분리
function SearchResultContent() {
  const categories = ['글', '블로그', '별명.아이디'];
  const searchParams = useSearchParams(); // 이제 Suspense 안에서 사용
  const router = useRouter();
  const mode = searchParams.get('mode');
  const query = searchParams.get('query');

  const defaultCategory = categories.includes(mode) ? mode : categories[0];
  const [selected, setSelected] = useState(defaultCategory);

  useEffect(() => {
    if (mode && categories.includes(mode)) {
      setSelected(mode);
    }
  }, [mode]);

  const handleCategorySelect = category => {
    setSelected(category);
    router.push(
      `/searchResult?mode=${encodeURIComponent(category)}&query=${encodeURIComponent(query ?? '')}`,
    );
  };

  const renderComponents = {
    [categories[0]]: <ContentResult mode={selected} query={query} />,
    [categories[1]]: <BlogResult mode={selected} query={query} />,
    [categories[2]]: <IdResult mode={selected} query={query} />,
  };

  return (
    <div>
      <Header selected={selected} />
      <MenuTabs />
      <OptionMenu categories={categories} selected={selected} onSelect={handleCategorySelect} />
      {renderComponents[selected] || <div>카테고리를 선택하세요.</div>}
    </div>
  );
}

// ✅ 메인 컴포넌트에서 Suspense로 감싸기
export default function SearchResult() {
  return (
    <Suspense fallback={<div>검색 결과 로딩 중...</div>}>
      <SearchResultContent />
    </Suspense>
  );
}
