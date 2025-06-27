import neighbors from './neighbors.json';
import BlogList from '@/src/app/(main)/(blog)/common/BlogList';

export default function NeighborPost() {
  return (
    <div>
      <h1>이웃새글</h1>
      <BlogList blogs={neighbors} />
    </div>
  );
}
