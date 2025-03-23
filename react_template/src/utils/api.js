// src/utils/api.js
const API_BASE_URL = 'http://localhost:3000/api';

export const fetchPosts = async () => {
  // TODO: Implement fetch posts API call
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve([
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
      ]);
    }, 1000);
  });
};

export const createPost = async (postData) => {
  // TODO: Implement create post API call
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve({
        id: Math.random(),
        ...postData,
        createdAt: new Date().toISOString(),
      });
    }, 1000);
  });
};

export const updatePost = async (id, postData) => {
  // TODO: Implement update post API call
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve({
        id,
        ...postData,
        updatedAt: new Date().toISOString(),
      });
    }, 1000);
  });
};

export const deletePost = async (id) => {
  // TODO: Implement delete post API call
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve({ success: true });
    }, 1000);
  });
};