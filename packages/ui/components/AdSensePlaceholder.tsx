import React from 'react';

export const AdSensePlaceholder = ({ format = 'horizontal' }: { format?: 'horizontal' | 'rectangle' }) => {
  const isHorizontal = format === 'horizontal';
  return (
    <div className={`w-full flex items-center justify-center bg-gray-100 border border-dashed border-gray-300 rounded-md my-6 overflow-hidden ${isHorizontal ? 'h-24' : 'h-64'}`}>
      <div className="text-center">
        <span className="text-xs font-semibold text-gray-400 uppercase tracking-widest block mb-1">Advertisement</span>
        <span className="text-sm text-gray-500">Google AdSense Space</span>
      </div>
    </div>
  );
};
