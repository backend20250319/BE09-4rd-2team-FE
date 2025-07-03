import test from './test.json';
import ResultList from '@/src/app/(main)/(blog)/searchResult/ResultList';

export default function ContentResult() {
  return (
    <div>
      <h1> {test.query} 검색결과</h1>
      {/*<ResultList />*/}
    </div>
  );
}
