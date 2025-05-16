import React from 'react';
import { Star, ShoppingCart, Heart } from 'lucide-react';
import type { Product } from '../types';

interface ProductCardProps {
  product: Product;
}

export function ProductCard({ product }: ProductCardProps) {
  return (
    <div className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow">
      <div className="relative">
        <img
          src={product.image}
          alt={product.name}
          className="w-full h-48 object-cover"
        />
        <button className="absolute top-2 right-2 p-1.5 bg-white rounded-full shadow-sm hover:bg-gray-100">
          <Heart className="h-5 w-5 text-gray-600" />
        </button>
      </div>
      
      <div className="p-4">
        <h3 className="text-lg font-semibold text-gray-800">{product.name}</h3>
        <p className="text-sm text-gray-600 mt-1">{product.description}</p>
        
        <div className="flex items-center mt-2">
          <div className="flex items-center">
            <Star className="h-4 w-4 fill-current text-yellow-400" />
            <span className="ml-1 text-sm text-gray-600">{product.rating}</span>
          </div>
          <span className="mx-2 text-gray-400">•</span>
          <span className="text-sm text-gray-600">{product.reviews} reviews</span>
        </div>
        
        <div className="mt-4 flex items-center justify-between">
          <span className="text-xl font-bold text-indigo-600">${product.price}</span>
          <button className="flex items-center px-3 py-2 bg-indigo-600 text-white rounded-lg hover:bg-indigo-700">
            <ShoppingCart className="h-4 w-4 mr-1" />
            Add to Cart
          </button>
        </div>
      </div>
    </div>
  );
}