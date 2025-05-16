import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { ShoppingCart,Menu,X, Bone as Drone, User } from 'lucide-react';
import { useCart } from '../context/CartContext';


export default function Navbar() {
  const { cart } = useCart();
  const itemCount = cart.reduce((sum, item) => sum + item.quantity, 0);

  
    const [menuOpen, setMenuOpen] = useState(false);
  
  return (
    <nav className=" w-full  justify-center flex  mb-24  ">
      <div className="w-[90vw] mx-auto flex justify-between fixed top-3   z-50   shadow-lg bg-white items-center p-4 rounded-full mt-3">

        {/* Logo */}
        <Link to="/" className="flex items-center space-x-2">
          <img src="/logo-2.png" className="h-8" alt="logo" />
        </Link>

        {/* Desktop Menu */}
        <div className="hidden md:flex justify-cent items-center md:space-x-8">
          <Link to="/" className="text-gray-700 hover:text-blue-600">Home</Link>
          <Link to="/products" className="text-gray-700 hover:text-blue-600">Shop</Link>
          <Link to="/about" className="text-gray-700 hover:text-blue-600">About</Link>
          <Link to="/contact" className="text-gray-700 hover:text-blue-600">Contact</Link>
          <User className="h-6 w-6 text-gray-700 hover:text-blue-600 hover:text-gray-900 hover:scale-105" />
          <Link to="/cart" className="relative">
            <ShoppingCart className="h-6 w-6 text-gray-700 hover:text-blue-600" />
            
            {itemCount > 0 && (
              <span className="absolute -top-2 -right-2 bg-blue-600 text-white rounded-full h-5 w-5 flex items-center justify-center text-xs">
                {itemCount}
              </span>
            )}
          </Link>
        </div>

        {/* Mobile Menu Button */}
        <button className="md:hidden text-gray-700" onClick={() => setMenuOpen(!menuOpen)}>
          {menuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
        </button>

        {/* Mobile Menu */}
        {menuOpen && (
          <div className="absolute top-full left-0 w-full bg-white shadow-lg rounded-lg mt-2 p-4 flex flex-col space-y-3 md:hidden">
            <Link to="/" className="text-gray-700 hover:text-blue-600" onClick={() => setMenuOpen(false)}>Home</Link>
            <Link to="/products" className="text-gray-700 hover:text-blue-600" onClick={() => setMenuOpen(false)}>Shop</Link>
            <Link to="/about" className="text-gray-700 hover:text-blue-600" onClick={() => setMenuOpen(false)}>About</Link>
            <Link to="/contact" className="text-gray-700 hover:text-blue-600" onClick={() => setMenuOpen(false)}>Contact</Link>
            <Link to="/cart" className="relative flex items-center space-x-1" onClick={() => setMenuOpen(false)}>
              <ShoppingCart className="h-6 w-6 text-gray-700 hover:text-blue-600" />
              {itemCount > 0 && (
                <span className="bg-blue-600 text-white rounded-full h-5 w-5 flex items-center justify-center text-xs">
                  {itemCount}
                </span>
              )}
            </Link>
          </div>
        )}
      </div>
    </nav>
  );
}