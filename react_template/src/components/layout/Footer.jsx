// src/components/layout/Footer.jsx
import React from 'react';

function Footer() {
  return (
    <footer className="bg-gray-800 text-white">
      <div className="max-w-7xl mx-auto py-8 px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div>
            <h3 className="text-lg font-bold mb-4">关于我们</h3>
            <p className="text-gray-300">
              留学咨询平台致力于为学生提供专业的留学规划和职业发展建议。
            </p>
          </div>
          <div>
            <h3 className="text-lg font-bold mb-4">快速链接</h3>
            <ul className="space-y-2">
              <li><a href="#" className="text-gray-300 hover:text-white">帮助中心</a></li>
              <li><a href="#" className="text-gray-300 hover:text-white">联系我们</a></li>
              <li><a href="#" className="text-gray-300 hover:text-white">隐私政策</a></li>
            </ul>
          </div>
          <div>
            <h3 className="text-lg font-bold mb-4">关注我们</h3>
            <div className="flex space-x-4">
              <a href="#" className="text-gray-300 hover:text-white">微信</a>
              <a href="#" className="text-gray-300 hover:text-white">微博</a>
              <a href="#" className="text-gray-300 hover:text-white">知乎</a>
            </div>
          </div>
        </div>
        <div className="mt-8 pt-8 border-t border-gray-700 text-center text-gray-300">
          <p>&copy; 2024 留学咨询. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}

export default Footer;