import React from 'react';

export const GlobalFooter = () => {
  return (
    <footer className="bg-gray-50 pt-10 pb-24 md:pb-10 border-t border-gray-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          
          <div className="text-center md:text-left">
            <h3 className="text-lg font-bold text-gray-900 tracking-tight">LIANA ESSENTIALS</h3>
            <p className="mt-2 text-sm text-gray-600">Premium perfumes, diffusers, and exclusive apparel.</p>
          </div>

          <div className="text-center md:text-left">
            <h4 className="text-sm font-bold text-gray-900 uppercase tracking-wider">Quick Links</h4>
            <ul className="mt-4 space-y-2">
              <li><a href="#" className="text-sm text-gray-600 hover:text-gray-900">Meet Eyitayo (CEO)</a></li>
              <li><a href="#" className="text-sm text-gray-600 hover:text-gray-900">Customer Service</a></li>
              <li><a href="#" className="text-sm text-gray-600 hover:text-gray-900">FAQs</a></li>
            </ul>
          </div>

          <div className="text-center md:text-left">
            <h4 className="text-sm font-bold text-gray-900 uppercase tracking-wider">Contact</h4>
            <ul className="mt-4 space-y-2">
              <li className="text-sm text-gray-600">WhatsApp: 07060801416</li>
              <li className="text-sm text-gray-600">Call: 08123275829</li>
              <li className="text-sm text-gray-600">Olowojareayomide87@gmail.com</li>
            </ul>
          </div>

          <div className="text-center md:text-left">
            <h4 className="text-sm font-bold text-gray-900 uppercase tracking-wider">Newsletter</h4>
            <p className="mt-4 text-sm text-gray-600">Subscribe for restocks and exclusive drops.</p>
            <form className="mt-4 flex max-w-sm mx-auto md:mx-0">
              <input type="email" placeholder="Email address" className="flex-1 min-w-0 px-4 py-2 text-sm text-gray-900 bg-white border border-gray-300 rounded-l-md focus:outline-none focus:ring-1 focus:ring-gray-900" />
              <button type="submit" className="px-4 py-2 text-sm font-medium text-white bg-gray-900 border border-transparent rounded-r-md hover:bg-gray-800">Sign Up</button>
            </form>
          </div>
          
        </div>
        <div className="mt-8 border-t border-gray-200 pt-8 flex justify-center space-x-6">
          <p className="text-xs text-gray-500">&copy; 2026 Liana Essentials. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};
