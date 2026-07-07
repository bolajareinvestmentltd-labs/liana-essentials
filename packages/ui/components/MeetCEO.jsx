export const MeetCEO = () => {
  return (
    <div className="max-w-4xl mx-auto px-4 py-12 md:py-20">
      <div className="flex flex-col md:flex-row gap-10 items-center">
        {/* CEO Portrait Placeholder */}
        <div className="w-full md:w-1/2 aspect-[4/5] bg-gray-200 rounded-[2rem] overflow-hidden shadow-xl relative">
          <img 
            src="https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&w=800&q=80" 
            alt="Eyitayo - CEO of Liana Essentials" 
            className="w-full h-full object-cover"
          />
          <div className="absolute bottom-4 left-4 bg-white/90 backdrop-blur px-4 py-2 rounded-full shadow-lg">
            <p className="text-sm font-bold text-black">Eyitayo</p>
            <p className="text-xs text-gray-600">CEO & Founder</p>
          </div>
        </div>

        {/* Bio & Contact Details */}
        <div className="w-full md:w-1/2 flex flex-col gap-6">
          <div>
            <h1 className="text-4xl font-serif text-gray-900 mb-4">Meet Eyitayo</h1>
            <p className="text-gray-600 leading-relaxed text-sm md:text-base">
              Welcome to Liana Essentials. My vision is to elevate your lifestyle by curating premium clothing designs, signature perfumes, and elegant home diffusers. Every piece is selected with intention, ensuring you experience nothing but professional, international-standard quality.
            </p>
          </div>

          <div className="w-full h-px bg-gray-200"></div>

          {/* Socials & Contact Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <a href="https://wa.me/2347060801416" target="_blank" className="flex items-center gap-3 p-3 rounded-xl border border-gray-200 hover:border-black transition">
              <span className="text-xl">💬</span>
              <div>
                <p className="text-xs text-gray-500">WhatsApp</p>
                <p className="text-sm font-medium text-black">07060801416</p>
              </div>
            </a>
            <a href="tel:08123275829" className="flex items-center gap-3 p-3 rounded-xl border border-gray-200 hover:border-black transition">
              <span className="text-xl">📞</span>
              <div>
                <p className="text-xs text-gray-500">Direct Call</p>
                <p className="text-sm font-medium text-black">08123275829</p>
              </div>
            </a>
            <a href="mailto:Olowojareayomide87@gmail.com" className="flex items-center gap-3 p-3 rounded-xl border border-gray-200 hover:border-black transition sm:col-span-2">
              <span className="text-xl">✉️</span>
              <div>
                <p className="text-xs text-gray-500">Email</p>
                <p className="text-sm font-medium text-black truncate">Olowojareayomide87@gmail.com</p>
              </div>
            </a>
          </div>

          {/* Social Media */}
          <div className="flex gap-4 mt-2">
            <a href="#" className="px-5 py-2 bg-black text-white text-sm font-medium rounded-full shadow-md active:scale-95 transition">
              TikTok: Liana essentials3
            </a>
            <a href="#" className="px-5 py-2 border border-gray-300 text-black text-sm font-medium rounded-full hover:bg-gray-50 active:scale-95 transition">
              IG: Liana essentials
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};
