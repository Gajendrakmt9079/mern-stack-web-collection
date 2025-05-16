import React from 'react';
import { Link } from 'react-router-dom';
import { Facebook, Twitter, Instagram, Mail } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-[#333333] border-t border-gray-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div>
            <h3 className="text-lg font-semibold text-white mb-4">
              CulinaryMaster
            </h3>
            <p className="text-gray-400">
              Empowering aspiring chefs with professional culinary education since
              2020.
            </p>
          </div>

          <div>
            <h3 className="text-lg font-semibold text-white mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <Link to="/classes" className="text-gray-400 hover:text-orange-400">
                  Classes
                </Link>
              </li>
              <li>
                <Link to="/events" className="text-gray-400 hover:text-orange-400">
                  Events
                </Link>
              </li>
              <li>
                <Link to="/about" className="text-gray-400 hover:text-orange-400">
                  About Us
                </Link>
              </li>
              <li>
                <Link to="/contact" className="text-gray-400 hover:text-orange-400">
                  Contact
                </Link>
              </li>
              <li>
                <Link to="/privacy" className="text-gray-400 hover:text-orange-400">
                  Privacy Policy
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="text-lg font-semibold text-white mb-4">Contact Us</h3>
            <ul className="space-y-2 text-gray-400">
              <li>123 Cooking Street</li>
              <li>Culinary City, CC 12345</li>
              <li>Phone: (555) 123-4567</li>
              <li>Email: info@culinarymaster.com</li>
            </ul>
          </div>

          <div>
            <h3 className="text-lg font-semibold text-white mb-4">
              Follow Us
            </h3>
            <div className="flex space-x-4">
              <a
                href="#"
                className="text-gray-400 hover:text-orange-400"
                aria-label="Facebook"
              >
                <Facebook />
              </a>
              <a
                href="#"
                className="text-gray-400 hover:text-orange-400"
                aria-label="Twitter"
              >
                <Twitter />
              </a>
              <a
                href="#"
                className="text-gray-400 hover:text-orange-400"
                aria-label="Instagram"
              >
                <Instagram />
              </a>
              <a
                href="mailto:info@culinarymaster.com"
                className="text-gray-400 hover:text-orange-400"
                aria-label="Email"
              >
                <Mail />
              </a>
            </div>
          </div>
        </div>

        <div className="mt-8 pt-8 border-t border-gray-800 text-center text-gray-400">
          <p>&copy; 2024 CulinaryMaster. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;