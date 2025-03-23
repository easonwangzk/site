// src/pages/Posts.jsx
import React, { useState } from 'react';
import PostList from '../components/content/PostList';
import Sidebar from '../components/layout/Sidebar';

function Posts() {
  const [searchTerm, setSearchTerm] = useState('');
  
  // Mock data
  const allPosts = [
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
          <div className="mb-6">
            <input
              type="text"
              placeholder="搜索文章..."
              className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
            />
          </div>
          
          <PostList posts={allPosts} />
        </main>
        
        <aside className="hidden lg:block">
          <Sidebar />
        </aside>
      </div>
    </div>
  );
}

export default Posts;