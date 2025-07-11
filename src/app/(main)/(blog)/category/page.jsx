'use client';

import { useState, useEffect } from 'react';
import axios from 'axios';

import Header from '@/src/app/(main)/searching/Header';
import MenuTabs from '@/src/components/header/MenuTabs';
import BigChoiceMenu from '@/src/app/(main)/(blog)/common/BigChoiceMenu';
import ChoiceMenu from '@/src/app/(main)/(blog)/common/ChoiceMenu';
import BlogList from '@/src/app/(main)/(blog)/common/BlogList';

export default function CategoryPage() {
  const [topics, setTopics] = useState([]); // { topicType, topicName, subTopics[] }[]
  const [bigSelected, setBigSelected] = useState('');
  const [subSelected, setSubSelected] = useState('');
  const [posts, setPosts] = useState([]);

  // 1) 마운트 시 전체 주제(topicName, subTopics) 받아오기
  useEffect(() => {
    axios
      .get(`${process.env.NEXT_PUBLIC_API_BLOG}/posts/topics`)
      .then(res => {
        const data = res.data.data || [];
        setTopics(data);
        if (data.length) {
          // 첫번째 대주제(topicTypeName)와 첫번째 소주제(subTopicName)를 기본 선택
          setBigSelected(data[0].topicTypeName);
          setSubSelected(data[0].subTopics[0].subTopicName);
        }
      })
      .catch(console.error);
  }, []);

  // 2) subSelected(소주제 이름)가 바뀔 때마다 실제 코드(subTopic) 찾아서 게시글 조회
  useEffect(() => {
    if (!subSelected) return;

    // 대주제 객체에서 subTopics 배열을 찾고
    const topicObj = topics.find(t => t.topicTypeName === bigSelected);
    // 선택된 subTopicName에 매핑되는 subTopic 코드를 꺼냄
    const subObj = topicObj?.subTopics.find(s => s.subTopicName === subSelected);
    const code = subObj?.subTopic;

    if (!code) {
      setPosts([]);
      return;
    }

    axios
      .get(`${process.env.NEXT_PUBLIC_API_BLOG}/posts/subtopics`, {
        params: { subTopic: code },
      })
      .then(res => setPosts(res.data.data || []))
      .catch(() => setPosts([]));
  }, [bigSelected, subSelected, topics]);

  // 대주제 메뉴에 뿌릴 topicName 리스트
  const bigCategories = topics.map(t => t.topicTypeName);

  // 현재 bigSelected에 딸린 subTopics 이름 리스트
  const subCategories =
    topics.find(t => t.topicTypeName === bigSelected)?.subTopics.map(s => s.subTopicName) || [];

  return (
    <div>
      <Header />
      <MenuTabs />

      {/* 대주제 선택 */}
      <BigChoiceMenu
        categories={bigCategories}
        selected={bigSelected}
        onSelect={big => {
          setBigSelected(big);
          // 대주제 변경 시 첫 소주제로 자동 전환
          const first = topics.find(t => t.topicTypeName === big)?.subTopics[0]?.subTopicName || '';
          setSubSelected(first);
        }}
      />

      {/* 소주제 선택 */}
      <ChoiceMenu categories={subCategories} selected={subSelected} onSelect={setSubSelected} />

      {/* 결과 리스트 */}
      <BlogList blogs={posts} />
    </div>
  );
}
