import { ProductCard, AdSensePlaceholder } from '@liana/ui';

export default function ClothingHome() {
  return (
    <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
      <header className="mb-10 text-center">
        <h1 className="text-3xl font-bold tracking-tight text-gray-900">Liana Clothing</h1>
        <p className="mt-2 text-sm text-gray-600">Exclusive Fashion & Apparel</p>
      </header>

      {/* Cross-Sell CTA to Cosmetics */}
      <div className="bg-gray-100 border border-gray-200 rounded-lg p-6 mb-10 text-center">
        <h2 className="text-lg font-bold text-gray-900">Shop Fragrances & Essentials</h2>
        <p className="text-sm mt-1 mb-4 text-gray-600">Complete your look with our premium scents.</p>
        <a href="http://localhost:3000" className="inline-block bg-gray-900 text-white px-6 py-2 rounded-full text-sm font-bold hover:bg-gray-800 transition-colors">
          Shop Essentials ➔
        </a>
      </div>

      <AdSensePlaceholder format="horizontal" />

      <section>
        <h2 className="text-xl font-bold mb-4">New Arrivals</h2>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          <ProductCard title="Silk Summer Dress" price="₦18,000" category="Dresses" />
          <ProductCard title="Linen Blend Top" price="₦10,500" category="Tops" />
          <ProductCard title="Tailored Trousers" price="₦22,000" category="Bottoms" />
          <ProductCard title="Minimalist Tote" price="₦15,000" category="Accessories" />
        </div>
      </section>

      <AdSensePlaceholder format="rectangle" />
    </main>
  );
}
