// src/pages/PostDetail.jsx
import React from 'react';
import { useParams } from 'react-router-dom';
import CommentSection from '../components/content/CommentSection';

function PostDetail() {
  const { id } = useParams();
  
  // Mock data
  const post = {
    id: 1,
    title: '2024年美国研究生申请全攻略',
    content: '详细内容...',
    author: {
      name: 'John Doe',
      avatar: 'https://via.placeholder.com/40',
    },
    createdAt: '2024-01-20',
    views: 1200,
    comments: [
      {
        id: 1,
        content: '非常感谢分享！',
        author: {
          name: 'User1',
          avatar: 'https://via.placeholder.com/40',
        },
        createdAt: '2024-01-21',
      },
      // More comments...
    ],
  };

  return (
    <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
      <article className="bg-white rounded-lg shadow-md p-6">
        <header className="mb-6">
          <h1 className="text-3xl font-bold text-gray-900 mb-4">{post.title}</h1>
          <div className="flex items-center">
            <img
              className="h-10 w-10 rounded-full"
              src={post.author.avatar}
              alt={post.author.name}
            />
            <div className="ml-3">
              <p className="text-sm font-medium text-gray-900">{post.author.name}</p>
              <p className="text-sm text-gray-500">{post.createdAt}</p>
            </div>
          </div>
        </header>
        
        <div className="prose max-w-none">
          {post.content}
        </div>
        
        <CommentSection comments={post.comments} />
      </article>
    </div>
  );
}

export default PostDetail;