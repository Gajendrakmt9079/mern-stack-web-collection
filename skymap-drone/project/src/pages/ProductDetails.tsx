import React from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { useCart } from '../context/CartContext';
import drones from '../data/drones.json';
import { ShoppingCart, Package, Truck } from 'lucide-react';

export default function ProductDetails() {
  const { id } = useParams();
  const navigate = useNavigate();
  const { addToCart } = useCart();

  const drone = drones.drones.find(d => d.id === Number(id));

  if (!drone) {
    return (
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <p className="text-center text-xl">Product not found</p>
      </div>
    );
  }

  const handleAddToCart = () => {
    addToCart({
      id: drone.id,
      name: drone.name,
      price: drone.price.new,
      quantity: 1,
      img: drone.img
    });
    navigate('/cart');
  };

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
        <div>
          <img
            src={drone.img}
            alt={drone.name}
            className="w-full rounded-lg shadow-lg"
          />
        </div>
        
        <div>
          <h1 className="text-3xl font-bold mb-4">{drone.name}</h1>
          <p className="text-gray-600 mb-6">{drone.description}</p>
          
          <div className="mb-6">
            <span className="text-gray-400 line-through text-xl">${drone.price.old}</span>
            <span className="text-3xl font-bold text-blue-600 ml-3">
              ${drone.price.new}
            </span>
          </div>
          
          <div className="mb-8">
            <span className={`inline-flex items-center px-4 py-2 rounded-full text-sm ${
              drone.stock ? 'bg-green-100 text-green-800' : 'bg-red-100 text-red-800'
            }`}>
              {drone.stock ? 'In Stock' : 'Out of Stock'}
            </span>
          </div>
          
          <button
            onClick={handleAddToCart}
            disabled={!drone.stock}
            className={`w-full mb-6 flex items-center justify-center space-x-2 px-6 py-3 rounded-lg ${
              drone.stock
                ? 'bg-blue-600 text-white hover:bg-blue-700'
                : 'bg-gray-300 text-gray-500 cursor-not-allowed'
            }`}
          >
            <ShoppingCart className="h-5 w-5" />
            <span>Add to Cart</span>
          </button>
          
          <div className="border-t pt-6 space-y-4">
            <div className="flex items-center space-x-3 text-gray-600">
              <Package className="h-5 w-5" />
              <span>Free returns within 30 days</span>
            </div>
            <div className="flex items-center space-x-3 text-gray-600">
              <Truck className="h-5 w-5" />
              <span>Free shipping on orders over $500</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}