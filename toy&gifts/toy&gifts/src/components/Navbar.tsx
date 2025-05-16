import React, { useState } from 'react';
import { ShoppingCart, Heart, User, Menu } from 'lucide-react';
import { Link, useNavigate } from 'react-router-dom';
import { useAuthStore } from '../store/authStore';

export function Navbar() {
  const { isAuthenticated, logout } = useAuthStore();
  const navigate = useNavigate();
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const handleAuthClick = () => {
    if (isAuthenticated) {
      logout();
    } else {
      navigate('/auth');
    }
  };

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  return (
    <nav className="bg-white shadow-sm w-[100vw] top-12 z-20 fixed">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Left side: Logo and Menu Button */}
          <div className="flex items-center space-x-8">
            <button className="sm:hidden p-2" onClick={toggleMobileMenu}>
              <Menu className="h-6 w-6" />
            </button>
            <Link to="/" className="text-2xl font-bold text-indigo-600">
              <img src="./logo1.png" alt="Logo" width={130} />
            </Link>
          </div>

          {/* Right side: Desktop Navigation and Icons */}
          <div className="hidden sm:flex items-center space-x-6">
          <Link to="/" className="text-gray-700 hover:text-indigo-600">
              Home
            </Link>
            <Link to="/shop" className="text-gray-700 hover:text-indigo-600">
              Shop
            </Link>
            <Link to="/about" className="text-gray-700 hover:text-indigo-600">
              About
            </Link>
            <Link to="/contact" className="text-gray-700 hover:text-indigo-600">
              Contact
            </Link>
          
          </div>

          {/* Right side: Icons (Heart, Cart, User) */}
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

        {/* Mobile Menu */}
        {isMobileMenuOpen && (
          <div className="sm:hidden flex flex-col space-y-4 py-4">
            <Link to="/" className="text-gray-700 hover:text-indigo-600">
              Home
            </Link>
            <Link to="/shop" className="text-gray-700 hover:text-indigo-600">
              Shop
            </Link>
            <Link to="/about" className="text-gray-700 hover:text-indigo-600">
              About
            </Link>
            <Link to="/contact" className="text-gray-700 hover:text-indigo-600">
              Contact
            </Link>
          </div>
        )}
      </div>
    </nav>
  );
}
