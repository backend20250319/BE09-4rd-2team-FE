import Link from 'next/link';

export default function Header() {
  return (
    <div
      style={{
        fontFamily: 'NanumGothic',
        fontSize: '12px',
        marginTop: '20px',
        marginBottom: '20px',
        height: '30px',
      }}
    >
      <Link href="/" style={{ textDecoration: 'none' }}>
        <h1 style={{ marginLeft: '10px' }}>N blog</h1>
      </Link>
    </div>
  );
}
