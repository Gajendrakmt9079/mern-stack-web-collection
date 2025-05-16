import React, { useState } from 'react';
import {  ChevronDown, Check } from 'lucide-react';

interface TyreProduct {
  id: number;
  brand: string;
  model: string;
  size: string;
  season: 'Summer' | 'Winter' | 'All-Season';
  price: number;
  discountPrice?: number;
  rating: number;
  reviews: number;
  image: string;
  features: string[];
  stock: 'In Stock' | 'Low Stock' | 'Out of Stock';
}

const TyreProductSection: React.FC = () => {
  const [activeFilter, setActiveFilter] = useState<string>('All');
  const [showFilters, setShowFilters] = useState<boolean>(false);

  const tyreProducts: TyreProduct[] = [
    {
      id: 1,
      brand: 'Michelin',
      model: 'Pilot Sport 4',
      size: '225/45 R17',
      season: 'Summer',
      price: 159.99,
      discountPrice: 139.99,
      rating: 4.8,
      reviews: 124,
      image: 'https://dxm.contentcenter.michelin.com/api/wedia/dam/transform/b98rpyxf61b4qd8gwzn37xt9ow/4w-366_3528703891734_tire_michelin_primacy-4-st_225-slash-55-r17-101w-xl_a_main_1-30_nopad.webp?t=resize&height=500',
      features: ['High-performance', 'Excellent wet grip', 'Low noise', 'Fuel efficient'],
      stock: 'In Stock'
    },
    {
      id: 2,
      brand: 'Continental',
      model: 'WinterContact TS 860',
      size: '205/55 R16',
      season: 'Winter',
      price: 129.99,
      rating: 4.6,
      reviews: 89,
      image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQEig280HVkY77xAkWsyOfPiU2vU-6njM5uYg&s',
      features: ['Superior snow traction', 'Ice braking', 'Durable tread', 'M+S rated'],
      stock: 'Low Stock'
    },
    {
      id: 3,
      brand: 'Pirelli',
      model: 'Cinturato All Season',
      size: '215/60 R16',
      season: 'All-Season',
      price: 119.99,
      rating: 4.4,
      reviews: 67,
      image: '/tyre3.jpg',
      features: ['Year-round performance', 'Comfort ride', 'Long mileage', 'Eco-friendly'],
      stock: 'In Stock'
    },
    {
      id: 4,
      brand: 'Bridgestone',
      model: 'Turanza T005',
      size: '235/50 R18',
      season: 'Summer',
      price: 179.99,
      discountPrice: 149.99,
      rating: 4.7,
      reviews: 112,
      image: 'https://images.squarespace-cdn.com/content/v1/60a66c4ee7e1d63a6139aba5/1658131961975-J9GRWLR8AIZV12NQX3J5/Screenshot+2022-07-18+at+10.12.27.png',
      features: ['Premium comfort', 'Precision handling', 'Wet weather safety', 'Durable'],
      stock: 'In Stock'
    },
    {
      id: 5,
      brand: 'Two veheicles',
      model: 'UltraGrip Ice 2',
      size: '195/65 R15',
      season: 'Winter',
      price: 109.99,
      rating: 4.5,
      reviews: 78,
      image: '/tyre5.jpg',
      features: ['Ice performance', 'Special tread design', 'Stability control', '3PMSF rated'],
      stock: 'Out of Stock'
    },
    {
      id: 6,
      brand: 'Big wheels',
      model: 'SP348 Super All Season',
      size: '295/75 R22.5',
      season: 'All-Season',
      price: 99.99,
      rating: 4.2,
      reviews: 54,
      image: '/tyre6.jpg',
      features: ['Versatile performance', 'All-weather traction', 'Responsive handling', 'Value'],
      stock: 'In Stock'
    }
  ];

  const seasons = ['All', 'Summer', 'Winter', 'All-Season'];
  const filteredProducts = activeFilter === 'All' 
    ? tyreProducts 
    : tyreProducts.filter(product => product.season === activeFilter);

  const getStockColor = (stock: string) => {
    switch(stock) {
      case 'In Stock': return 'text-green-600';
      case 'Low Stock': return 'text-amber-600';
      case 'Out of Stock': return 'text-red-600';
      default: return 'text-gray-600';
    }
  };

  return (
    <section className="py-16 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Premium Tyre Selection</h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Choose from our range of high-quality tyres for all seasons and vehicle types
          </p>
        </div>

        {/* Filter controls */}
        <div className="mb-8 hidden flex-col sm:flex-row justify-between items-center gap-4">
          <div className="relative w-full sm:w-auto">
            <button 
              onClick={() => setShowFilters(!showFilters)}
              className="flex items-center justify-between w-full sm:w-48 px-4 py-2 bg-white border border-gray-300 rounded-lg shadow-sm"
            >
              <span>Filter: {activeFilter}</span>
              <ChevronDown className={`transition-transform duration-200 ${showFilters ? 'rotate-180' : ''}`} />
            </button>
            
            {showFilters && (
              <div className="absolute z-10 mt-1 w-full sm:w-48 bg-white border border-gray-200 rounded-lg shadow-lg py-1">
                {seasons.map(season => (
                  <button
                    key={season}
                    onClick={() => {
                      setActiveFilter(season);
                      setShowFilters(false);
                    }}
                    className={`w-full text-left px-4 py-2 hover:bg-gray-100 flex items-center ${activeFilter === season ? 'bg-blue-50 text-blue-600' : ''}`}
                  >
                    {activeFilter === season && <Check className="mr-2 h-4 w-4" />}
                    {season}
                  </button>
                ))}
              </div>
            )}
          </div>
          
          <div className="text-sm text-gray-500">
            Showing {filteredProducts.length} of {tyreProducts.length} products
          </div>
        </div>

        {/* Product grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredProducts.map((product) => (
            <div 
              key={product.id} 
              className="bg-white rounded-xl overflow-hidden shadow-md hover:shadow-lg transition-shadow duration-300 border border-gray-100 group"
            >
              {/* Product image with badge */}
              <div className="relative h-64 overflow-hidden">
                <img
                  src={product.image}
                  alt={`${product.brand} ${product.model}`}
                  className="w-full h-full transition-transform duration-500 group-hover:scale-105"
                  loading="lazy"
                />
                {/* Season badge */}
             
                {/* Stock status */}
                <div className={`absolute hidden top-4 right-4 px-3 py-1 rounded-full text-xs font-semibold bg-white ${getStockColor(product.stock)}`}>
                  {product.stock}
                </div>
              </div>

              {/* Product details */}
              <div className="p-5">
                <div className="flex justify-between items-start mb-2">
                  <div>
                    <h3 className="text-lg font-bold text-gray-900">{product.brand}</h3>
                    <p className="text-gray-600">{product.model}</p>
                  </div>
                  <div className="flex items-center bg-blue-50 px-2 py-1 rounded">
                    {/* <Star className="h-4 w-4 text-yellow-500 fill-yellow-500" /> */}
                    {/* <span className="ml-1 text-sm font-medium">{product.rating}</span> */}
                    {/* <span className="mx-1">·</span> */}
                    {/* <span className="text-sm text-gray-500">{product.reviews}</span> */}
                  </div>
                </div>

                <p className="text-gray-500 text-sm mb-4">{product.size}</p>

                {/* Features list */}
                <ul className="mb-4 space-y-1">
                  {product.features.slice(0, 3).map((feature, index) => (
                    <li key={index} className="flex items-center text-sm text-gray-600">
                      <Check className="h-4 w-4 text-green-500 mr-2" />
                      {feature}
                    </li>
                  ))}
                </ul>

                {/* Price and CTA */}
            
              </div>
            </div>
          ))}
        </div>

        {filteredProducts.length === 0 && (
          <div className="text-center py-12">
            <p className="text-gray-500">No products match your filter criteria</p>
          </div>
        )}
      </div>
    </section>
  );
};

export default TyreProductSection;