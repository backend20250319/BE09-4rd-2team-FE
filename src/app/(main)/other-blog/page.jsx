'use client';
import { React, useState } from 'react';
import BlackHeader from './BlackHeader';
import BlogTitle from './BlogTitle';
import PostList from './PostList';
import Profile from './Profile';
import PostBox from '../../../components/other-blog-box/PostBox';

export default function myBlog() {
  // 🗝️샘플 글 데이터
  const [posts, setPosts] = useState([
    {
      category: '',
      blogTitle: '',
      nickName: '',
      date: '',
      profileImageUrl: '',
      content: ``,
      tags: ['', ''],
    },
  ]);

  return (
    <>
      <BlackHeader />
      <main>
        <div className="whole-border">
          {/* 🗝️타이틀 닉네임 받아오기*/}
          <BlogTitle nickname={posts[0].nickName} />
          <div>
            <PostList posts={posts} />
          </div>
          <div>
            {/* 🗝️카테고리, 제목, 닉네임, 작성일시, 이미지, 내용, 태그 받아오기 */}
            <PostBox
              posts={{
                category: '게시판',
                blogTitle: '기본 제목',
                nickName: '나는누구인가',
                date: '2025.6.29 13:47',
                profileImageUrl: '',
                content: `기본 텍스트 \n

                <img src="https://picsum.photos/300/200" alt="테스트 이미지" />

                기본 텍스트2
                
                <img src="https://picsum.photos/200" alt="테스트 이미지" />
                
                기본 텍스트3
                  `,
                tags: ['프론트엔드', '리액트'],
              }}
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
