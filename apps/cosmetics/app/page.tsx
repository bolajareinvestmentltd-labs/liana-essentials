import { ProductCard, AdSensePlaceholder } from '@liana/ui';

export default function CosmeticsHome() {
  return (
    <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
      <header className="mb-10 text-center">
        <h1 className="text-3xl font-bold tracking-tight text-brand-green">Liana Essentials</h1>
        <p className="mt-2 text-sm text-gray-600">Premium Perfumes & Diffusers</p>
      </header>

      {/* Cross-Sell CTA to Clothing */}
      <div className="bg-gray-900 text-white rounded-lg p-6 mb-10 text-center">
        <h2 className="text-lg font-bold">Looking for Liana Clothing?</h2>
        <p className="text-sm mt-1 mb-4 text-gray-300">Discover our exclusive apparel collection.</p>
        <a href="http://localhost:3001" className="inline-block bg-white text-gray-900 px-6 py-2 rounded-full text-sm font-bold hover:bg-gray-100 transition-colors">
          Shop Clothing ➔
        </a>
      </div>

      <AdSensePlaceholder format="horizontal" />

      <section>
        <h2 className="text-xl font-bold mb-4">Featured Essentials</h2>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          <ProductCard title="Oud Wood Intense" price="₦35,000" category="Perfume" />
          <ProductCard title="Vanilla Bean Mist" price="₦12,000" category="Body Mist" />
          <ProductCard title="Ceramic Diffuser" price="₦25,000" category="Diffuser" />
          <ProductCard title="Rose Water Spray" price="₦8,000" category="Essentials" />
        </div>
      </section>

      <AdSensePlaceholder format="rectangle" />
    </main>
  );
}
