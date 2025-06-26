import Link from 'next/link';

export default function Header() {
  return (
    <div
      style={{
        fontFamily: 'NanumGothic',
        fontSize: '12px',
        margin: '10px',
        height: '30px',
        color: 'green',
      }}
    >
      <Link href="/" style={{ textDecoration: 'none' }}>
        <h1>N blog</h1>
      </Link>
    </div>
  );
}
