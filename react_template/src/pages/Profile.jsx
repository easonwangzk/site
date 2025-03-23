// src/pages/Profile.jsx
import React, { useState } from 'react';

function Profile() {
  const [profile, setProfile] = useState({
    name: 'John Doe',
    email: 'john@example.com',
    avatar: 'https://via.placeholder.com/100',
    bio: '留学咨询平台用户',
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    // TODO: Implement profile update
  };

  return (
    <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
      <div className="bg-white rounded-lg shadow-md p-6">
        <h1 className="text-2xl font-bold text-gray-900 mb-6">个人资料</h1>
        
        <div className="mb-6 flex items-center">
          <img
            className="h-24 w-24 rounded-full"
            src={profile.avatar}
            alt={profile.name}
          />
          <button className="ml-4 px-4 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600">
            更换头像
          </button>
        </div>
        
        <form onSubmit={handleSubmit}>
          <div className="mb-4">
            <label className="block text-gray-700 text-sm font-bold mb-2">
              用户名
            </label>
            <input
              type="text"
              className="w-full px-3 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
              value={profile.name}
              onChange={(e) => setProfile({ ...profile, name: e.target.value })}
            />
          </div>
          
          <div className="mb-4">
            <label className="block text-gray-700 text-sm font-bold mb-2">
              邮箱
            </label>
            <input
              type="email"
              className="w-full px-3 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
              value={profile.email}
              onChange={(e) => setProfile({ ...profile, email: e.target.value })}
            />
          </div>
          
          <div className="mb-6">
            <label className="block text-gray-700 text-sm font-bold mb-2">
              个人简介
            </label>
            <textarea
              className="w-full px-3 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
              rows="4"
              value={profile.bio}
              onChange={(e) => setProfile({ ...profile, bio: e.target.value })}
            />
          </div>
          
          <button
            type="submit"
            className="w-full bg-blue-500 text-white font-bold py-2 px-4 rounded-lg hover:bg-blue-600"
          >
            保存修改
          </button>
        </form>
      </div>
    </div>
  );
}

export default Profile;