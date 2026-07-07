export const ProductCard = ({ title, category, price, placeholderImg }) => {
  return (
    <div className="group flex flex-col bg-white rounded-3xl shadow-sm hover:shadow-xl transition-all duration-300 overflow-hidden border border-gray-100">
      {/* Image Container with 4:5 Aspect Ratio */}
      <div className="relative aspect-[4/5] w-full overflow-hidden bg-gray-100">
        <img 
          src={placeholderImg} 
          alt={title}
          className="object-cover w-full h-full group-hover:scale-105 transition-transform duration-700 ease-in-out"
          loading="lazy"
        />
        {/* Quick Add Button - Floating */}
        <button className="absolute bottom-4 right-4 bg-black text-white w-10 h-10 rounded-full flex items-center justify-center shadow-lg active:scale-95 transition-transform md:opacity-0 md:group-hover:opacity-100">
          +
        </button>
      </div>
      
      {/* Product Details */}
      <div className="p-4 flex flex-col gap-1">
        <p className="text-xs font-medium tracking-widest text-gray-400 uppercase">{category}</p>
        <h3 className="text-sm font-semibold text-gray-900 leading-tight line-clamp-1">{title}</h3>
        <p className="text-sm font-bold text-black mt-1">₦{price.toLocaleString()}</p>
      </div>
    </div>
  );
};
