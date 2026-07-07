import { ProductCard } from '@liana/ui';

// Professional Category & Product Placeholders
const categories = ['Signature Oud', 'Home Diffusers', 'Body Mists', 'Scented Candles'];
const featuredProducts = [
  { id: 1, title: 'Midnight Oud Bloom', category: 'Signature Oud', price: 45000, img: 'https://images.unsplash.com/photo-1594035910387-fea47794261f?auto=format&fit=crop&w=600&q=80' },
  { id: 2, title: 'Vanilla Bean Diffuser', category: 'Home Diffusers', price: 28000, img: 'https://images.unsplash.com/photo-1602928321679-560bb453f190?auto=format&fit=crop&w=600&q=80' },
  { id: 3, title: 'Rosewood Mist', category: 'Body Mists', price: 15000, img: 'https://images.unsplash.com/photo-1592945403244-b3fbafd7f539?auto=format&fit=crop&w=600&q=80' },
  { id: 4, title: 'Amber Gold', category: 'Signature Oud', price: 52000, img: 'https://images.unsplash.com/photo-1541643600914-78b084683601?auto=format&fit=crop&w=600&q=80' },
];

export default function CosmeticsHome() {
  return (
    <main className="min-h-screen bg-[#FAFAFA]">
      {/* Hero Section */}
      <section className="px-4 pt-10 pb-6">
        <div className="w-full h-[40vh] bg-black rounded-3xl overflow-hidden relative flex items-center justify-center">
          <img src="https://images.unsplash.com/photo-1616949755610-8c9bbc08f138?auto=format&fit=crop&w=1200&q=80" alt="Cosmetics Hero" className="absolute inset-0 w-full h-full object-cover opacity-60" />
          <div className="relative z-10 text-center px-4">
            <h1 className="text-3xl font-serif text-white mb-2">The Essence of Elegance</h1>
            <p className="text-gray-200 text-sm">Discover our signature fragrances and home diffusers.</p>
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
          <h2 className="text-2xl font-serif text-gray-900">Featured Essentials</h2>
          <a href="#" className="text-sm font-medium text-gray-500 underline">View All</a>
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
