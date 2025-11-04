import React from 'react';

const products = [
  {
    id: 1,
    name: 'Aero Tech Tee',
    price: 39,
    color: 'Jet Black',
    img: 'https://images.unsplash.com/photo-1512436991641-6745cdb1723f?q=80&w=1200&auto=format&fit=crop',
  },
  {
    id: 2,
    name: 'CloudWeave Hoodie',
    price: 79,
    color: 'Storm Grey',
    img: 'https://images.unsplash.com/photo-1544025162-d76694265947?q=80&w=1200&auto=format&fit=crop',
  },
  {
    id: 3,
    name: 'Motion Cargo Pants',
    price: 69,
    color: 'Olive Drab',
    img: 'https://images.unsplash.com/photo-1523381210434-271e8be1f52b?q=80&w=1200&auto=format&fit=crop',
  },
  {
    id: 4,
    name: 'Studio Denim Jacket',
    price: 119,
    color: 'Indigo',
    img: 'https://images.unsplash.com/photo-1520974722073-b98e0be9c8df?q=80&w=1200&auto=format&fit=crop',
  },
];

const FeaturedProducts = () => {
  return (
    <section id="products" className="py-16 bg-gray-50">
      <div className="container mx-auto px-6 sm:px-8">
        <div className="flex items-end justify-between gap-4">
          <div>
            <h2 className="text-3xl sm:text-4xl font-semibold tracking-tight">Featured drops</h2>
            <p className="mt-2 text-gray-600">Premium fits designed for movement and everyday wear.</p>
          </div>
          <a href="#" className="hidden sm:inline-flex text-sm font-medium text-black underline underline-offset-4">View all</a>
        </div>

        <div className="mt-8 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {products.map((p) => (
            <div key={p.id} className="group bg-white rounded-2xl border border-gray-200 overflow-hidden hover:shadow-md transition">
              <div className="aspect-[4/5] overflow-hidden">
                <img src={p.img} alt={p.name} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" />
              </div>
              <div className="p-4">
                <div className="flex items-center justify-between">
                  <h3 className="font-semibold">{p.name}</h3>
                  <span className="font-semibold">${p.price}</span>
                </div>
                <p className="text-sm text-gray-600 mt-1">{p.color}</p>
                <button className="mt-4 w-full rounded-lg bg-black text-white py-2 font-medium hover:bg-black/90 transition">
                  Add to cart
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeaturedProducts;
