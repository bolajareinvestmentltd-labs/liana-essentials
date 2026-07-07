import { ProductCard } from '@liana/ui';

// Professional Category & Product Placeholders
const categories = ['Summer Collection', 'Loungewear', 'Two-Piece Sets', 'Accessories'];
const featuredProducts = [
  { id: 1, title: 'Silk Slip Dress', category: 'Summer Collection', price: 35000, img: 'https://images.unsplash.com/photo-1515886657613-9f3515b0c78f?auto=format&fit=crop&w=600&q=80' },
  { id: 2, title: 'Ribbed Lounge Set', category: 'Loungewear', price: 42000, img: 'https://images.unsplash.com/photo-1571513722275-4b41940f54b4?auto=format&fit=crop&w=600&q=80' },
  { id: 3, title: 'Linen Wide Trousers', category: 'Two-Piece Sets', price: 25000, img: 'https://images.unsplash.com/photo-1509631179647-0177331693ae?auto=format&fit=crop&w=600&q=80' },
  { id: 4, title: 'Oversized Blazer', category: 'Outerwear', price: 55000, img: 'https://images.unsplash.com/photo-1591047139829-d91aecb6caea?auto=format&fit=crop&w=600&q=80' },
];

export default function ClothingHome() {
  return (
    <main className="min-h-screen bg-[#FAFAFA]">
      {/* Hero Section */}
      <section className="px-4 pt-10 pb-6">
        <div className="w-full h-[40vh] bg-black rounded-3xl overflow-hidden relative flex items-center justify-center">
          <img src="https://images.unsplash.com/photo-1490481651871-ab68de25d43d?auto=format&fit=crop&w=1200&q=80" alt="Clothing Hero" className="absolute inset-0 w-full h-full object-cover opacity-70" />
          <div className="relative z-10 text-center px-4">
            <h1 className="text-3xl font-serif text-white mb-2">Redefine Your Style</h1>
            <p className="text-gray-200 text-sm">Curated fashion for the modern minimalist.</p>
          </div>
        </div>
      </section>

      {/* AdSense Placeholder - In Feed */}
      <div className="px-4 my-6">
        <div className="w-full h-24 bg-gray-100 rounded-2xl flex items-center justify-center border border-gray-200 border-dashed">
          <span className="text-sm text-gray-400 font-medium">Google AdSense Banner</span>
        </div>
      </div>

      {/* Categories */}
      <section className="px-4 mb-8 overflow-x-auto hide-scrollbar">
        <div className="flex gap-3 min-w-max">
          {categories.map(cat => (
            <button key={cat} className="px-5 py-2.5 bg-white border border-gray-200 rounded-full text-sm font-medium text-gray-700 shadow-sm active:bg-gray-50">
              {cat}
            </button>
          ))}
        </div>
      </section>

      {/* Product Grid */}
      <section className="px-4 mb-10">
        <div className="flex justify-between items-end mb-6">
          <h2 className="text-2xl font-serif text-gray-900">New Arrivals</h2>
          <a href="#" className="text-sm font-medium text-gray-500 underline">Shop All</a>
        </div>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          {featuredProducts.map(product => (
            <ProductCard 
              key={product.id}
              title={product.title}
              category={product.category}
              price={product.price}
              placeholderImg={product.img}
            />
          ))}
        </div>
      </section>
    </main>
  );
}
