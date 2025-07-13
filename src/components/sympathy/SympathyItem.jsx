'use client';

import { useState } from 'react';
import Link from 'next/link';

export default function SympathyItem({ blogger }) {
  const [isNeighbor, setIsNeighbor] = useState(blogger.isNeighbor);

  const handleNeighborToggle = () => {
    setIsNeighbor(!isNeighbor);
    // 실제로는 여기서 API 호출해서 이웃 추가/삭제 처리
    console.log(`${blogger.name} ${!isNeighbor ? '이웃 추가' : '이웃 삭제'}`);
  };

  return (
    <div style={{ display: 'flex', alignItems: 'center', padding: '12px' }}>
      {/* 프로필 이미지 */}
      <img
        src={`https://i.pravatar.cc/50?u=${blogger.name}`}
        alt={blogger.name}
        style={{
          width: '50px',
          height: '50px',
          borderRadius: '50%',
          objectFit: 'cover',
          marginRight: '12px',
        }}
      />

      {/* 이름 + 설명 (세로로) */}
      <div style={{ flex: 1 }}>
        <div style={{ fontWeight: 'bold', fontSize: '14px' }}>{blogger.name}</div>
        <div style={{ color: '#666', fontSize: '12px', marginTop: '2px' }}>
          {blogger.description}
        </div>
      </div>

      {/* 이웃추가 버튼 */}
      <button onClick={handleNeighborToggle}>
        <Link href="/popup">이웃추가</Link>
      </button>
    </div>
  );
}
