import React from 'react';
import { ShoppingCart, Heart, User, Menu } from 'lucide-react';
import { Link, useNavigate } from 'react-router-dom';
import { useAuthStore } from '../store/authStore';

export function Navbar() {
  const { isAuthenticated, logout } = useAuthStore();
  const navigate = useNavigate();

  const handleAuthClick = () => {
    if (isAuthenticated) {
      logout();
    } else {
      navigate('/auth');
    }
  };

  return (
    <nav className="bg-white shadow-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16 items-center">
          <div className="flex items-center space-x-8">
            <button className="sm:hidden p-2">
              <Menu className="h-6 w-6" />
            </button>
            <Link to="/" className="text-2xl font-bold text-indigo-600">
              GiftHub
            </Link>
            <div className="hidden sm:flex items-center space-x-6">
              <Link to="/shop" className="text-gray-700 hover:text-indigo-600">
                Shop
              </Link>
              <Link to="/about" className="text-gray-700 hover:text-indigo-600">
                About
              </Link>
              <Link to="/contact" className="text-gray-700 hover:text-indigo-600">
                Contact
              </Link>
              <Link to="/terms" className="text-gray-700 hover:text-indigo-600">
                Terms
              </Link>
            </div>
          </div>

          <div className="flex items-center space-x-4">
            <button className="p-2 hover:bg-gray-100 rounded-full">
              <Heart className="h-6 w-6" />
            </button>
            <Link to="/cart" className="p-2 hover:bg-gray-100 rounded-full">
              <ShoppingCart className="h-6 w-6" />
            </Link>
            <button 
              onClick={handleAuthClick}
              className="p-2 hover:bg-gray-100 rounded-full"
            >
              <User className="h-6 w-6" />
            </button>
          </div>
        </div>
      </div>
    </nav>
  );
}