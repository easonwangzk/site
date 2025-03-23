// src/components/auth/AuthLayout.jsx
import React from 'react';

function AuthLayout({ children }) {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-50 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-md w-full space-y-8">
        <div className="text-center">
          <h1 className="text-3xl font-bold text-gray-900 mb-2">留学咨询</h1>
          <p className="text-gray-600">你的留学规划专家</p>
        </div>
        {children}
      </div>
    </div>
  );
}

export default AuthLayout;