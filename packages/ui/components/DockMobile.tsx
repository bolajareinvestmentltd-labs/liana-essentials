import React from 'react';

export const DockMobile = () => {
  return (
    <nav className="fixed bottom-0 left-0 w-full bg-white border-t border-gray-200 shadow-[0_-2px_10px_rgba(0,0,0,0.05)] z-50 md:hidden">
      <div className="flex justify-around items-center h-16 pb-safe">
        <button className="flex flex-col items-center text-gray-700 hover:text-green-700 transition-colors">
          <span className="text-xl">🏠</span>
          <span className="text-[10px] mt-1 font-medium">Home</span>
        </button>
        <button className="flex flex-col items-center text-gray-700 hover:text-green-700 transition-colors">
          <span className="text-xl">🗂️</span>
          <span className="text-[10px] mt-1 font-medium">Shop</span>
        </button>
        
        {/* Quick Switch Toggle */}
        <div className="relative -top-5">
          <button className="flex items-center justify-center w-14 h-14 bg-gray-900 text-white rounded-full shadow-lg border-4 border-white hover:bg-green-800 transition-colors">
            <span className="text-lg font-bold">⇄</span>
          </button>
        </div>

        <button className="flex flex-col items-center text-gray-700 hover:text-green-700 transition-colors">
          <span className="text-xl">🛍️</span>
          <span className="text-[10px] mt-1 font-medium">Cart</span>
        </button>
        <button className="flex flex-col items-center text-gray-700 hover:text-green-700 transition-colors">
          <span className="text-xl">👤</span>
          <span className="text-[10px] mt-1 font-medium">Profile</span>
        </button>
      </div>
    </nav>
  );
};
