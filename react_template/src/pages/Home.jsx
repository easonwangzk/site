// src/pages/Home.jsx
import React from 'react';
import PostList from '../components/content/PostList';
import Sidebar from '../components/layout/Sidebar';

function Home() {
  // Mock data
  const featuredPosts = [
    {
      id: 1,
      title: '2024年美国研究生申请全攻略',
      excerpt: '详细介绍申请流程、材料准备、院校选择等关键信息...',
      author: {
        name: 'John Doe',
        avatar: 'https://via.placeholder.com/40',
      },
      createdAt: '2024-01-20',
      views: 1200,
      comments: 45,
      likes: 89,
      tags: ['美国留学', '研究生申请'],
    },
    // More posts...
  ];

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
      <div className="flex gap-8">
        <main className="flex-1">
          <div className="mb-8">
            <h1 className="text-3xl font-bold text-gray-900 mb-4">
              欢迎来到留学咨询
            </h1>
            <p className="text-gray-600">
              在这里，你可以找到最新的留学资讯、申请攻略和求职指导。
            </p>
          </div>
          
          <section className="mb-8">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">热门文章</h2>
            <PostList posts={featuredPosts} />
          </section>
        </main>
        
        <aside className="hidden lg:block">
          <Sidebar />
        </aside>
      </div>
    </div>
  );
}

export default Home;