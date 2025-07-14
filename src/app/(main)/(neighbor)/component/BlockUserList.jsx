'use client';

import { useEffect, useState } from 'react';

export default function BlockedUserList() {
  const [blockedUsers, setBlockedUsers] = useState([]);

  // 차단된 사용자 목록 불러오기
  useEffect(() => {
    const fetchBlockedUsers = async () => {
      try {
        const token = localStorage.getItem('accessToken');
        const res = await fetch(`${process.env.NEXT_PUBLIC_API_USER}/blocked`, {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        });
        const data = await res.json();
        setBlockedUsers(data);
      } catch (err) {
        console.error('차단 목록 불러오기 실패:', err);
      }
    };

    fetchBlockedUsers();
  }, []);

  const handleUnblock = async userId => {
    try {
      const token = localStorage.getItem('accessToken');
      await fetch(`${process.env.NEXT_PUBLIC_API_USER}/blocked/${userId}`, {
        method: 'DELETE',
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });
      setBlockedUsers(prev => prev.filter(user => user.id !== userId));
    } catch (err) {
      console.error('차단 해제 실패:', err);
    }
  };

  return (
    <div style={{ padding: '20px' }}>
      <h2 style={{ fontSize: '24px', fontWeight: 'bold' }}>차단된 사용자 목록</h2>
      <hr style={{ marginTop: '10px', marginBottom: '20px' }} />
      {blockedUsers.length === 0 ? (
        <p>차단한 사용자가 없습니다.</p>
      ) : (
        <ul style={{ listStyle: 'none', padding: 0 }}>
          {blockedUsers.map(user => (
            <li key={user.id} style={{ marginBottom: '10px' }}>
              <span>
                {user.blogId} ({user.nickname})
              </span>
              <button
                onClick={() => handleUnblock(user.id)}
                style={{
                  marginLeft: '10px',
                  padding: '4px 8px',
                  backgroundColor: '#ccc',
                  border: 'none',
                  cursor: 'pointer',
                }}
              >
                차단 해제
              </button>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}
