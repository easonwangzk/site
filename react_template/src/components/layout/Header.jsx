// src/components/layout/Header.jsx
import React from 'react';
import { Link } from 'react-router-dom';

function Header() {
  return (
    <header className="bg-white shadow-md">
      <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16">
          <div className="flex">
            <Link to="/" className="flex items-center">
              <span className="text-xl font-bold text-blue-600">留学咨询</span>
            </Link>
            <div className="hidden sm:ml-6 sm:flex sm:space-x-8">
              <Link to="/" className="text-gray-900 inline-flex items-center px-1 pt-1 border-b-2 border-transparent hover:border-blue-500">
                首页
              </Link>
              <Link to="/posts" className="text-gray-900 inline-flex items-center px-1 pt-1 border-b-2 border-transparent hover:border-blue-500">
                帖子
              </Link>
              <Link to="/profile" className="text-gray-900 inline-flex items-center px-1 pt-1 border-b-2 border-transparent hover:border-blue-500">
                个人中心
              </Link>
            </div>
          </div>
          <div className="flex items-center">
            <Link to="/login" className="text-gray-900 hover:text-blue-600 px-3 py-2">
              登录
            </Link>
            <Link to="/register" className="bg-blue-500 text-white px-4 py-2 rounded-md hover:bg-blue-600">
              注册
            </Link>
          </div>
        </div>
      </nav>
    </header>
  );
}

export default Header;