// src/components/content/PostCard.jsx
import React from 'react';
import { Link } from 'react-router-dom';

function PostCard({ post }) {
  return (
    <div className="bg-white rounded-lg shadow-md overflow-hidden">
      <div className="p-6">
        <div className="flex items-center mb-4">
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
        <Link to={`/posts/${post.id}`}>
          <h3 className="text-xl font-bold text-gray-900 mb-2 hover:text-blue-600">
            {post.title}
          </h3>
        </Link>
        <p className="text-gray-600 mb-4">{post.excerpt}</p>
        <div className="flex items-center justify-between">
          <div className="flex space-x-4 text-gray-500">
            <span>{post.views} 浏览</span>
            <span>{post.comments} 评论</span>
            <span>{post.likes} 点赞</span>
          </div>
          <div className="flex space-x-2">
            {post.tags.map((tag) => (
              <span
                key={tag}
                className="px-2 py-1 bg-blue-100 text-blue-600 rounded text-sm"
              >
                {tag}
              </span>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

export default PostCard;