import React from 'react';
import { Link } from 'react-router-dom';
import { Facebook, Twitter, Instagram, Mail } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-5">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div>
            <h3 className="text-lg font-semibold mb-4">About Skymapdrones</h3>
            <p className="text-gray-400">
              Your premier destination for high-quality drones and accessories.
            </p>
            <br />
            <h3 className="text-lg font-semibold mb-4">Follow Us</h3>
            <div className="flex space-x-4 mt-3">
              <a href="#" className="hover:text-blue-400 transition-colors"><Facebook /></a>
              <a href="#" className="hover:text-blue-400 transition-colors"><Twitter /></a>
              <a href="#" className="hover:text-blue-400 transition-colors"><Instagram /></a>
              <a href="#" className="hover:text-blue-400 transition-colors"><Mail /></a>
            </div>
          </div>

          <div>
            <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-2 text-gray-400">
              <li><Link to="/products" className="hover:text-white transition-colors">Products</Link></li>
              <li><Link to="/about" className="hover:text-white transition-colors">About Us</Link></li>
              <li><Link to="/contact" className="hover:text-white transition-colors">Contact</Link></li>
            </ul>
          </div>

          <div className=' md:w-[180%]'>
            <h3 className="text-lg font-semibold mb-4">Contact Info</h3>
            <ul className="space-y-2 text-gray-400">
              <li>Address : 1718 Fillmore St ,San Francisco,United States</li>
              <li>Phone: (415) 929-8883</li>

            </ul>
            <hr className='my-3' />
            <ul className="space-y-2 text-gray-400">
              <li>Address: Hull Rd ,	North Yorkshire,United Kingdom </li>

              <li>Phone : 01904 481898</li>
            </ul>
            <hr className='my-3' />
            <ul className="space-y-2 text-gray-400 mb-3">
            <li>Address : 4/213 Miller St ,Sydney , Australia </li>
            <li>Phone : 1300 880 610</li>

          </ul>
          </div>



         




        </div>

        <div className="border-t border-gray-800 mt-8 pt-1 text-center text-gray-400">
          <div className="flex justify-center space-x-4 mb-2">
            <Link to="/privacy-policy" className="hover:text-white transition-colors">Privacy Policy</Link>
            <span>•</span>
            <Link to="/terms" className="hover:text-white transition-colors">Terms of Service</Link>
          </div>
          <p>&copy; {new Date().getFullYear()} Skymapdrones. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}