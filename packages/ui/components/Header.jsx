export const Header = ({ currentStore }) => {
  const storeName = currentStore === 'cosmetics' ? 'LIANA ESSENTIALS' : 'LIANA CLOTHING';
  
  return (
    <header className="fixed top-0 left-0 right-0 h-16 bg-white/80 backdrop-blur-md border-b border-gray-100 z-50 flex items-center justify-between px-4 md:px-8">
      {/* Menu / Search Icon */}
      <button className="text-gray-900 p-2 -ml-2">
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16"></path></svg>
      </button>
      
      {/* Brand Logo / Text */}
      <a href="/" className="text-lg md:text-xl font-serif font-bold tracking-widest text-black">
        {storeName}
      </a>
      
      {/* Cart Icon */}
      <button className="relative text-gray-900 p-2 -mr-2">
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M16 11V7a4 4 0 00-8 0v4M5 9h14l1 12H4L5 9z"></path></svg>
        <span className="absolute top-1 right-1 bg-black text-white text-[10px] font-bold w-4 h-4 rounded-full flex items-center justify-center">0</span>
      </button>
    </header>
  );
};
