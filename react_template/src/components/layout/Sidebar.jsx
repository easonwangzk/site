// src/components/layout/Sidebar.jsx
import React from 'react';

function Sidebar() {
  const categories = [
    { id: 1, name: '留学申请' },
    { id: 2, name: '专业选择' },
    { id: 3, name: '语言考试' },
    { id: 4, name: '签证办理' },
    { id: 5, name: '海外生活' },
    { id: 6, name: '职业发展' },
  ];

  return (
    <div className="w-64 bg-white shadow-md p-4">
      <h3 className="text-lg font-bold mb-4">分类</h3>
      <ul className="space-y-2">
        {categories.map((category) => (
          <li key={category.id}>
            <a
              href={`#${category.id}`}
              className="block px-4 py-2 text-gray-700 hover:bg-blue-50 hover:text-blue-600 rounded-md"
            >
              {category.name}
            </a>
          </li>
        ))}
      </ul>
      
      <div className="mt-8">
        <h3 className="text-lg font-bold mb-4">热门标签</h3>
        <div className="flex flex-wrap gap-2">
          <span className="px-3 py-1 bg-gray-100 text-gray-700 rounded-full text-sm">
            #美国留学
          </span>
          <span className="px-3 py-1 bg-gray-100 text-gray-700 rounded-full text-sm">
            #英国留学
          </span>
          <span className="px-3 py-1 bg-gray-100 text-gray-700 rounded-full text-sm">
            #考研
          </span>
          <span className="px-3 py-1 bg-gray-100 text-gray-700 rounded-full text-sm">
            #求职
          </span>
        </div>
      </div>
    </div>
  );
}

export default Sidebar;