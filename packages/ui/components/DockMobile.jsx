import React from 'react';

export const DockMobile = ({ currentStore }) => {
  const isCosmetics = currentStore === 'cosmetics';
  const switchUrl = isCosmetics ? 'http://localhost:3001' : 'http://localhost:3000';
  const switchLabel = isCosmetics ? '👚 Clothing' : '✨ Essentials';

  return (
    <nav className="fixed bottom-4 left-4 right-4 bg-white/90 backdrop-blur-md shadow-lg rounded-2xl border border-gray-200 p-3 flex justify-between items-center z-50 md:hidden">
      <a href="/" className="flex flex-col items-center text-gray-500 hover:text-black">
        <span className="text-xl">🏠</span>
        <span className="text-[10px] font-medium mt-1">Home</span>
      </a>
      <a href="#" className="flex flex-col items-center text-gray-500 hover:text-black">
        <span className="text-xl">🗂️</span>
        <span className="text-[10px] font-medium mt-1">Shop</span>
      </a>
      <a href={switchUrl} className="flex flex-col items-center bg-black text-white px-4 py-2 rounded-xl shadow-md transform transition active:scale-95">
        <span className="text-sm font-bold">{switchLabel}</span>
      </a>
      <a href="#" className="flex flex-col items-center text-gray-500 hover:text-black">
        <span className="text-xl">🛒</span>
        <span className="text-[10px] font-medium mt-1">Cart</span>
      </a>
      <a href="#" className="flex flex-col items-center text-gray-500 hover:text-black">
        <span className="text-xl">👤</span>
        <span className="text-[10px] font-medium mt-1">Profile</span>
      </a>
    </nav>
  );
};
