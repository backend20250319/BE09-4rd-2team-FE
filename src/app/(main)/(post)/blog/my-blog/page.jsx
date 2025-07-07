'use client';
import { React, useState } from 'react';
import BlackHeader from '@/src/components/post/blog-header-footer/BlackHeader';
import BlogTitle from '@/src/components/post/blog-header-footer/BlogTitle';
import PostList from '@/src/components/post/blog-header-footer/PostList';
import Profile from '@/src/components/post/blog-header-footer/Profile';
import MyPostBox from '/src/components/post/my-blog-box/MyPostBox';

export default function myBlog() {
  // 🗝️ 게시글 글 데이터 입력
  const posts = [{ id: 1, title: '첫 번째 글', content: '안녕하세요, 꼬미의 블로그입니다.' }];

  // 🗝️ MyPostBox 샘플 데이터 입력
  const myPost = {
    category: '게시판',
    blogTitle: '프로젝트',
    nickName: '꼬미',
    date: '2025.6.29 13:47',
    profileImageUrl: '',
    content: '프론트엔드가 어렵다...\n\n리액트도 어렵다...\n',
    tags: ['프론트엔드', '리액트'],
  };

  // 🗝️ 프로필 샘플 데이터 입력
  const profileData = {
    blogTitle: '꼬미의 블로그',
    nickname: '꼬미',
    blogId: 1,
    profileIntro: '안녕하세요, 꼬미입니다.',
    profileImageUrl: 'https://example.com/myimage.jpg',
  };

  return (
    <>
      <BlackHeader />
      <main>
        <div className="whole-border">
          {/* 🗝️내 블로그 타이틀 받아오기 */}
          <BlogTitle />
          <div>
            {/* 🗝️내 게시글 리스트 받아오기 */}
            <PostList posts={posts} />
          </div>
          <div>
            {/* 🗝️내 게시글 받아오기 */}
            <MyPostBox
              post={myPost}
              onEdit={() => console.log('수정')}
              onDelete={() => console.log('삭제')}
            />
          </div>
          <div>
            <Profile profileData={profileData} />
          </div>
        </div>
      </main>
    </>
  );
}
