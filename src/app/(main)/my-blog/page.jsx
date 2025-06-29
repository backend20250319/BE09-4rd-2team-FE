"use client";
import { React, useState } from "react";
import BlackHeader from "./BlackHeader";
import BlogTitle from "./BlogTitle";
import PostList from "./PostList";
import Profile from "./Profile";
import "./MyBlog.css";

export default function myBlog() {
  // 샘플 글 데이터
  const [posts, setPosts] = useState([
    { id: 1, title: "첫 번째 글", content: "안녕하세요, 꼬미의 블로그입니다." },
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
            <Profile />
          </div>
        </div>
      </main>
    </>
  );
}
