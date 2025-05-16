import React from 'react';
import { Link, useSearchParams } from 'react-router-dom';
import { products } from '../data/products';

function ShopPage() {
  const [searchParams] = useSearchParams();
  const selectedCategory = searchParams.get('category') || 'All';

  // Get unique categories from products
  const categories = ['All', ...new Set(products.map(product => product.category))];

  // Filter products based on the selected category
  const filteredProducts = selectedCategory === 'All'
    ? products
    : products.filter(product => product.category === selectedCategory);

  return (
    <div className="bg-white">
      <div className="mx-auto max-w-2xl px-4 py-16 sm:px-6 sm:py-24 lg:max-w-7xl lg:px-8">
        <h2 className="text-3xl font-bold tracking-tight text-gray-900">Our Products</h2>

        {/* Category Links */}
        <div className="mt-4 flex gap-3 flex-wrap">
          {categories.map((category) => (
            <Link
              key={category}
              to={`/shop?category=${category}`}
              className={`px-4 py-2 text-sm font-medium ${selectedCategory === category
                  ? 'bg-[#EE5E48] text-white'
                  : 'bg-orange-50 text-gray-700 hover:bg-orange-100'
                } rounded-md h-fit w-fit`}
            >
              {category}
            </Link>
          ))}
        </div>

        {/* Product Grid */}
        <div className="mt-6 grid grid-cols-1 gap-x-6 gap-y-10 sm:grid-cols-2 lg:grid-cols-4 xl:gap-x-8">
          {filteredProducts.map((product) => (
            <div key={product.id} className="group relative">
              <div className=" aspect-w-1 w-full overflow-hidden rounded-lg bg-gray-200">
                <img
                  src={product.imageSrc}
                  alt={product.name}
                  className=" object-cover object-center group-hover:opacity-75"
                />
              </div>
              <div className="mt-4 flex justify-between">
                <div>
                  <h3 className="text-sm text-gray-700">
                    <Link to={`/product/${product.id}`}>
                      <span aria-hidden="true" className="absolute inset-0" />
                      {product.name}
                    </Link>
                  </h3>
                  <p className="mt-1 text-sm text-gray-500">{product.category}</p>
                </div>
                <p className="text-sm font-medium text-gray-900">${product.price}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default ShopPage;