'use client';

import { useEffect, useState } from 'react';
import { useParams } from 'next/navigation';
import axios from 'axios';
import Header from '@/src/app/(main)/searching/Header';
import MenuTabs from '@/src/components/header/MenuTabs';

const API_BASE = process.env.NEXT_PUBLIC_API_BLOG;

export default function BlogDetail() {
  const { postId } = useParams();
  const [post, setPost] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    if (!postId) return;
    setLoading(true);
    axios
      .get(`${API_BASE}/blog-service/posts/main/${postId}`)
      .then(res => setPost(res.data))
      .catch(() => setPost(null))
      .finally(() => setLoading(false));
  }, [postId]);

  if (loading) return <div>로딩중...</div>;
  if (!post) return <div>게시글을 불러올 수 없습니다.</div>;

  // 지환님 페이지 구조로 바꾸시면 됩니다!
  return (
    <div>
      <Header />
      <MenuTabs />
      <h2>{post.title}</h2>
      <p>{post.content}</p>
      <p>블로그명: {post.blogTitle}</p>
      <p>작성자: {post.nickname}</p>
      <img
        src={post.profileImageUrl}
        alt={post.nickname}
        width={40}
        height={40}
        style={{ borderRadius: '50%' }}
      />
      <div>공감수: {post.likeCount}</div>
      <div>공개여부: {post.visibility === 'PUBLIC' ? '전체공개' : '비공개'}</div>
      <div>
        댓글허용: {post.allowComment ? 'O' : 'X'} / 공감허용: {post.allowLike ? 'O' : 'X'} /
        검색허용: {post.allowSearch ? 'O' : 'X'}
      </div>
      {/* 썸네일 있을 때만 표시 */}
      {post.thumbnailImageUrl && (
        <div>
          <img src={post.thumbnailImageUrl} alt="썸네일" width={200} />
        </div>
      )}
      {/* 주제 정보 */}
      <div>
        주제: {post.mainTopic || '(없음)'} / {post.subTopic || '(없음)'}
      </div>
    </div>
  );
}
