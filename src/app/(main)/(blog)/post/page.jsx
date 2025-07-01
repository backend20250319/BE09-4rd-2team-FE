'use client';

import { useState } from 'react';
import CommentSection from '@/src/components/comment/CommentSection';
import SympathyList from '@/src/app/(main)/(blog)/sympathyList/page';

export default function PostPage() {
  const [activeTab, setActiveTab] = useState(null); // 'sympathy' | 'comments' | null

  const sympathyCount = 10;
  const commentCount = 5;

  return (
    <div
      style={{
        maxWidth: '920px',
        margin: '40px auto',
        padding: '20px',
      }}
    >
      {/* 공감/댓글 버튼 영역 */}
      <div
        style={{
          display: 'flex',
          gap: '8px',
          marginBottom: '20px',
          paddingBottom: '16px',
          borderBottom: '1px solid #f1f3f4',
        }}
      >
        {/* 공감 버튼 */}
        <button
          onClick={() => setActiveTab(activeTab === 'sympathy' ? null : 'sympathy')}
          style={{
            display: 'flex',
            alignItems: 'center',
            gap: '6px',
            padding: '8px 12px',
            border: '1px solid #ddd',
            borderRadius: '4px',
            backgroundColor: activeTab === 'sympathy' ? '#f8f9fa' : '#fff',
            cursor: 'pointer',
            fontSize: '14px',
            color: '#333',
          }}
        >
          <span
            style={{
              fontSize: '13px',
              color: '#666',
              letterSpacing: '-4px',
            }}
          >
            ♡♡
          </span>

          <span>공감 {sympathyCount}</span>
          <span style={{ fontSize: '12px', color: '#999' }}>
            {activeTab === 'sympathy' ? '▲' : '▼'}
          </span>
        </button>

        {/* 댓글 버튼 */}
        <button
          onClick={() => setActiveTab(activeTab === 'comments' ? null : 'comments')}
          style={{
            display: 'flex',
            alignItems: 'center',
            gap: '6px',
            padding: '8px 12px',
            border: '1px solid #ddd',
            borderRadius: '4px',
            backgroundColor: activeTab === 'comments' ? '#f8f9fa' : '#fff',
            cursor: 'pointer',
            fontSize: '14px',
            color: '#333',
          }}
        >
          <span>💬</span>
          <span>댓글 {commentCount}</span>
          <span
            style={{
              fontSize: '10px',
              backgroundColor: '#ff4757',
              color: 'white',
              padding: '2px 4px',
              borderRadius: '2px',
              marginLeft: '2px',
            }}
          >
            NEW
          </span>
          <span style={{ fontSize: '12px', color: '#999' }}>
            {activeTab === 'comments' ? '▲' : '▼'}
          </span>
        </button>
      </div>

      {/* 토글 컨텐츠 영역 */}
      {activeTab === 'sympathy' && (
        <div style={{ marginTop: '20px' }}>
          <SympathyList />
        </div>
      )}

      {activeTab === 'comments' && (
        <div style={{ marginTop: '20px' }}>
          {/* 댓글 영역 - 테두리 없이 */}
          <div style={{ border: 'none' }}>
            <CommentSection />
          </div>
        </div>
      )}
    </div>
  );
}
