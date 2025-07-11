import BlogList from '@/src/app/(main)/(blog)/common/BlogList';
import Header from '@/src/app/(main)/searching/Header';
import MenuTabs from '@/src/components/header/MenuTabs';

export default function NeighborPost() {
  return (
    <div>
      <Header />
      <MenuTabs />
      <h1>이웃새글</h1>
      <BlogList blogs={neighbors} />
    </div>
  );
}
