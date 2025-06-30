"use client";

import { useState } from 'react';

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
            <div style={{
                width: '32px',
                height: '32px',
                borderRadius: '50%',
                backgroundColor: '#3b82f6',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                color: 'white',
                fontSize: '12px',
                fontWeight: 'bold',
                marginRight: '12px'  // 이미지와 텍스트 사이 간격
            }}>
                {blogger.name.charAt(0)}
            </div>

            {/* 이름 + 설명 (세로로) */}
            <div style={{ flex: 1 }}>
                <div style={{ fontWeight: 'bold', fontSize: '14px' }}>
                    {blogger.name}
                </div>
                <div style={{ color: '#666', fontSize: '12px', marginTop: '2px' }}>
                    {blogger.description}
                </div>
            </div>

            {/* 이웃추가 버튼 */}
            <button onClick={handleNeighborToggle}>
                이웃추가
            </button>
        </div>
    );
}