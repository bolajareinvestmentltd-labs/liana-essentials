import React from 'react';

export const ProductCard = ({ title, price, category }: { title?: string, price?: string, category?: string }) => {
  return (
    <div className="group relative bg-white border border-gray-100 rounded-lg shadow-sm hover:shadow-md transition-shadow overflow-hidden">
      <div className="aspect-w-4 aspect-h-5 bg-gray-100 flex items-center justify-center p-6">
        <span className="text-4xl text-gray-300">📸</span>
      </div>
      <div className="p-4">
        <p className="text-xs text-gray-500 uppercase tracking-wider mb-1">{category || 'Category'}</p>
        <h3 className="text-sm font-medium text-gray-900 truncate">
          {title || 'Premium Liana Item'}
        </h3>
        <p className="mt-2 text-sm font-bold text-gray-900">{price || '₦0.00'}</p>
        <button className="mt-4 w-full bg-gray-50 text-gray-900 border border-gray-200 py-2 text-xs font-bold uppercase tracking-wider rounded hover:bg-gray-900 hover:text-white transition-colors">
          Add to Cart
        </button>
      </div>
    </div>
  );
};
