import React from 'react';
import { Search, ShoppingCart, Heart, User, Menu } from 'lucide-react';

export function Navbar() {
  return (
    <nav className="bg-white shadow-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16 items-center">
          <div className="flex items-center">
            <button className="sm:hidden p-2">
              <Menu className="h-6 w-6" />
            </button>
            <div className="text-2xl font-bold text-indigo-600">GiftHub</div>
          </div>
          
          <div className="hidden sm:flex flex-1 max-w-xl px-8">
            <div className="relative w-full">
              <input
                type="text"
                placeholder="Search for gifts and toys..."
                className="w-full px-4 py-2 rounded-lg border border-gray-300 focus:ring-2 focus:ring-indigo-500 focus:border-transparent"
              />
              <Search className="absolute right-3 top-2.5 h-5 w-5 text-gray-400" />
            </div>
          </div>

          <div className="flex items-center space-x-4">
            <button className="p-2 hover:bg-gray-100 rounded-full">
              <Heart className="h-6 w-6" />
            </button>
            <button className="p-2 hover:bg-gray-100 rounded-full">
              <ShoppingCart className="h-6 w-6" />
            </button>
            <button className="p-2 hover:bg-gray-100 rounded-full">
              <User className="h-6 w-6" />
            </button>
          </div>
        </div>
      </div>
    </nav>
  );
}