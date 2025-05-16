import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import drones from '../data/drones.json';

export default function Products() {
  const [category, setCategory] = useState('all');
  const categories = ['all', ...new Set(drones.drones.map(drone => drone.category))];

  const filteredDrones = category === 'all'
    ? drones.drones
    : drones.drones.filter(drone => drone.category === category);

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      <h1 className="text-3xl font-bold mb-8">Our Drones</h1>
      
      {/* Category Filter */}
      <div className="mb-8">
        <div className="flex space-x-4">
          {categories.map(cat => (
            <button
              key={cat}
              onClick={() => setCategory(cat)}
              className={`px-4 py-2 rounded-lg ${
                category === cat
                  ? 'bg-blue-600 text-white'
                  : 'bg-gray-200 text-gray-700 hover:bg-gray-300'
              }`}
            >
              {cat.charAt(0).toUpperCase() + cat.slice(1)}
            </button>
          ))}
        </div>
      </div>

      {/* Products Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {filteredDrones.map(drone => (
          <Link
            key={drone.id}
            to={`/product/${drone.id}`}
            className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-xl transition"
          >
            <img
              src={drone.img}
              alt={drone.name}
              className="w-full h-64 object-cover"
            />
            <div className="p-6">
              <h2 className="text-xl font-semibold mb-2">{drone.name}</h2>
              <p className="text-gray-600 mb-4">{drone.description}</p>
              <div className="flex justify-between items-center">
                <div>
                  <span className="text-gray-400 line-through">${drone.price.old}</span>
                  <span className="text-2xl font-bold text-blue-600 ml-2">
                    ${drone.price.new}
                  </span>
                </div>
                <span className={`px-3 py-1 rounded-full text-sm ${
                  drone.stock ? 'bg-green-100 text-green-800' : 'bg-red-100 text-red-800'
                }`}>
                  {drone.stock ? 'In Stock' : 'Out of Stock'}
                </span>
              </div>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
}