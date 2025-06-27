import MenuTabs from '@/src/components/header/MenuTabs';
import Header from '@/src/app/(main)/searching/Header';

export default function RootLayout({ children }) {
  return (
    <html lang="ko">
      <body style={{ marginLeft: '100px', marginRight: '100px' }}>
        <Header />
        <MenuTabs />
        {children}
      </body>
    </html>
  );
}
