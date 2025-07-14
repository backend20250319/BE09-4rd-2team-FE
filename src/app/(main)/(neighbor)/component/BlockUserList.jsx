'use client';

import { useEffect, useState } from 'react';
import { deleteNeighbor, getBlockedUsers, unblockUser } from '../services/neighborApi';

export default function BlockedList() {
  const [blockedUsers, setBlockedUsers] = useState([]);

  useEffect(() => {
    const fetchBlocked = async () => {
      try {
        const res = await getBlockedUsers();
        setBlockedUsers(res.data);
      } catch (e) {
        console.error('차단 목록 불러오기 실패', e);
      }
    };
    fetchBlocked();
  }, []);

  const handleUnblock = async userId => {
    try {
      await deleteNeighbor(userId);
      setBlockedUsers(prev => prev.filter(u => u.id !== userId));
    } catch (e) {
      console.error('차단 해제 실패', e);
    }
  };

  return (
    <div style={{ padding: '20px' }}>
      <h2>차단된 사용자</h2>
      {blockedUsers.length === 0 ? (
        <p>차단된 사용자가 없습니다.</p>
      ) : (
        <ul>
          {blockedUsers.map(user => (
            <li key={user.id}>
              {user.nickname} ({user.blogId})
              <button onClick={() => handleUnblock(user.id)} style={{ marginLeft: '10px' }}>
                차단 해제
              </button>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}
