import SympathyItem from '@/src/components/sympathy/SympathyItem';

const testBloggers = [
  {
    id: 1,
    name: '김개발자',
    description: '프론트엔드 개발과 일상을 기록하는 블로그입니다.',
    profileImage: null,
    isNeighbor: false,
  },
  {
    id: 2,
    name: '박디자이너',
    description: 'UI/UX 디자인 트렌드와 포트폴리오를 공유합니다.',
    profileImage: null,
    isNeighbor: true,
  },
  {
    id: 3,
    name: '이백엔드',
    description: '서버 개발 경험담과 기술 스택을 다룹니다.',
    profileImage: null,
    isNeighbor: false,
  },
  {
    id: 4,
    name: '최마케터',
    description: '디지털 마케팅 인사이트와 성장 스토리',
    profileImage: null,
    isNeighbor: false,
  },
  {
    id: 5,
    name: '정작가',
    description: '일상 속 소소한 이야기와 여행 기록을 남깁니다.',
    profileImage: null,
    isNeighbor: true,
  },
  {
    id: 6,
    name: '달빛조각사',
    description: '밤하늘 아래, 책과 커피 이야기',
    profileImage: null,
    isNeighbor: false,
  },
  {
    id: 7,
    name: '지니의하루',
    description: '오늘도 기록하는 작은 순간들',
    profileImage: null,
    isNeighbor: false,
  },
  {
    id: 8,
    name: '하루한끼',
    description: '집밥 레시피와 건강한 생활',
    profileImage: null,
    isNeighbor: true,
  },
  {
    id: 9,
    name: '코딩하는감자',
    description: '개발자 일상 + 공부 기록',
    profileImage: null,
    isNeighbor: false,
  },
  {
    id: 10,
    name: '꽃보다다육',
    description: '다육이 키우며 마음도 자라요.',
    profileImage: null,
    isNeighbor: false,
  },
];

export default function SympathyListPage() {
  return (
    <div
      style={{
        maxWidth: '920px', // 네이버와 비슷한 너비
        margin: '0 auto', // 중앙 정렬
        padding: '20px',
        backgroundColor: '#ffffff', // ← 추가
        border: '1px solid #e1e5e9', // ← 추가
        borderRadius: '8px', // ← 추가
      }}
    >
      <div style={{ marginBottom: '24px' }}>
        <h1
          style={{
            fontSize: '20px',
            fontWeight: 'bold',
            color: '#111827',
          }}
        >
          이 글에 공감한 블로거
        </h1>
      </div>

      <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '20px' }}>
        {/* 왼쪽 열 */}
        <div>
          {testBloggers.slice(0, 5).map(blogger => (
            <SympathyItem key={blogger.id} blogger={blogger} />
          ))}
        </div>

        {/* 오른쪽 열 */}
        <div>
          {testBloggers.slice(5, 10).map(blogger => (
            <SympathyItem key={blogger.id} blogger={blogger} />
          ))}
        </div>
      </div>

      <div
        style={{
          padding: '17px 0 20px',
          textAlign: 'center',
          borderTop: '1px solid #eee',
          marginTop: '20px',
        }}
      >
        <span style={{ marginRight: '20px', cursor: 'not-allowed', color: '#ccc' }}>&lt; 이전</span>
        <span style={{ cursor: 'pointer' }}>다음 &gt;</span>
      </div>
    </div>
  );
}
