import Header from '@/src/components/header/Header';
import MenuTabs from '@/src/components/header/MenuTabs';

export default function RootLayout({ children }) {
  return (
    <html lang="ko">
      <body style={{ marginLeft: '180px', marginRight: '150px' }}>
        <Header />
        <MenuTabs />
        {children}
      </body>
    </html>
  );
}
