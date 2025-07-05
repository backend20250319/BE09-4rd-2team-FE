'use client';
import { React, useState } from 'react';
import BlackHeader from './BlackHeader';
import BlogTitle from './BlogTitle';
import PostList from './PostList';
import Profile from './Profile';
import MyPostBox from '@/src/components/my-blog-box/MyPostBox';

export default function myBlog() {
  // 샘플 글 데이터
  const [posts, setPosts] = useState([
    { id: 1, title: '첫 번째 글', content: '안녕하세요, 꼬미의 블로그입니다.' },
  ]);

  return (
    <>
      <BlackHeader />
      <main>
        <div className="whole-border">
          <BlogTitle />
          <div>
            <PostList posts={posts} />
          </div>
          <div>
            <MyPostBox
              post={{
                category: '게시판',
                blogTitle: '프로젝트',
                nickName: '꼬미',
                date: '2025.6.29 13:47',
                imageUrls: '',
                content: '프론트엔드가 어렵다...\n' + '\n' + '리액트도 어렵다...\n',
                tags: ['프론트엔드', '리액트'],
              }}
              onEdit={() => console.log('수정')}
              onDelete={() => console.log('삭제')}
            />
          </div>
          <div>
            <Profile />
          </div>
        </div>
      </main>
    </>
  );
}
