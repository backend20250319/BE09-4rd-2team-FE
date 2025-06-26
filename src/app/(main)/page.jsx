import MenuTabs from '@/src/components/header/MenuTabs';

export default function MainPage() {
  return (
    <div
      style={{
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'space-between',
        fontFamily: 'NanumGothic',
      }}
    >
      <h1 style={{ margin: '10px' }}>Naver blog</h1>
      <MenuTabs />
    </div>
  );
}
