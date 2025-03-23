// src/components/content/PostList.jsx
import React from 'react';
import PostCard from './PostCard';

function PostList({ posts }) {
  return (
    <div className="space-y-6">
      {posts?.map((post) => (
        <PostCard key={post.id} post={post} />
      ))}
    </div>
  );
}

export default PostList;