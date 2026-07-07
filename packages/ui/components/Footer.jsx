export const Footer = () => {
  return (
    <footer className="bg-[#121212] text-gray-300 pt-16 pb-28 md:pb-16 px-6 rounded-t-[2.5rem] mt-12">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-10">
        {/* Brand Section */}
        <div className="flex flex-col gap-4">
          <h2 className="text-2xl font-serif text-white tracking-wide">LIANA ESSENTIALS</h2>
          <p className="text-sm text-gray-400 leading-relaxed">
            Elevating your lifestyle with premium clothing and signature fragrances. Designed for elegance.
          </p>
        </div>

        {/* Quick Links */}
        <div className="flex flex-col gap-3">
          <h3 className="text-white font-semibold tracking-wider text-sm uppercase mb-2">Explore</h3>
          <a href="#" className="text-sm hover:text-white transition-colors">Meet Eyitayo (CEO)</a>
          <a href="#" className="text-sm hover:text-white transition-colors">Our Story</a>
          <a href="#" className="text-sm hover:text-white transition-colors">Customer Support</a>
          <a href="#" className="text-sm hover:text-white transition-colors">FAQs</a>
        </div>

        {/* Contact & Newsletter */}
        <div className="flex flex-col gap-4">
          <h3 className="text-white font-semibold tracking-wider text-sm uppercase mb-2">Stay Connected</h3>
          <p className="text-sm">📞 +234 812 327 5829</p>
          <p className="text-sm mb-2">✉️ Olowojareayomide87@gmail.com</p>
          {/* AdSense Placeholder - Footer Banner */}
          <div className="w-full h-16 bg-gray-800 rounded-xl flex items-center justify-center border border-gray-700 border-dashed">
            <span className="text-xs text-gray-500">AdSense Space</span>
          </div>
        </div>
      </div>

      {/* Developer Credit */}
      <div className="max-w-7xl mx-auto mt-12 pt-8 border-t border-gray-800 text-center">
        <p className="text-xs text-gray-500">
          © {new Date().getFullYear()} Liana Essentials. All rights reserved.
        </p>
        <p className="text-xs text-gray-500 mt-2">
          Architect and seamlessly designed by{' '}
          <a 
            href="https://yourportfolio.com" 
            target="_blank" 
            rel="noopener noreferrer"
            className="text-white font-semibold underline decoration-gray-600 underline-offset-4 hover:decoration-white transition-all"
          >
            Jare's Choice Labs (JCLs)
          </a>
        </p>
      </div>
    </footer>
  );
};
