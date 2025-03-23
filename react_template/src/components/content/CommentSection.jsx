// src/components/content/CommentSection.jsx
import React, { useState } from 'react';

function CommentSection({ comments }) {
  const [newComment, setNewComment] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    // TODO: Implement comment submission
    setNewComment('');
  };

  return (
    <div className="mt-8">
      <h3 className="text-lg font-bold mb-4">评论 ({comments?.length || 0})</h3>
      
      <form onSubmit={handleSubmit} className="mb-6">
        <textarea
          className="w-full p-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
          rows="3"
          placeholder="写下你的评论..."
          value={newComment}
          onChange={(e) => setNewComment(e.target.value)}
        />
        <button
          type="submit"
          className="mt-2 px-4 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600"
        >
          发表评论
        </button>
      </form>

      <div className="space-y-4">
        {comments?.map((comment) => (
          <div key={comment.id} className="bg-gray-50 p-4 rounded-lg">
            <div className="flex items-center mb-2">
              <img
                className="h-8 w-8 rounded-full"
                src={comment.author.avatar}
                alt={comment.author.name}
              />
              <div className="ml-2">
                <p className="font-medium text-gray-900">{comment.author.name}</p>
                <p className="text-sm text-gray-500">{comment.createdAt}</p>
              </div>
            </div>
            <p className="text-gray-700">{comment.content}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default CommentSection;