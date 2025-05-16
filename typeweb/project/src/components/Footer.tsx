import React from 'react';
import { Facebook, Instagram, Twitter, Linkedin, ArrowUp } from 'lucide-react';
import { Link } from './ui/Link';

const Footer: React.FC = () => {
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  };

  return (
    <footer className="bg-blue-900 text-white">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          <div className="mb-8 md:mb-0">
            <h3 className="text-2xl font-bold mb-4">KHORANIYA TYRES</h3>
            <p className="text-blue-200 mb-4">
              Your trusted partner for all your tyre needs. Quality products and expert service since 2013.
            </p>
            <div className="flex space-x-4">
              <a 
                href="#" 
                className="text-white hover:text-red-400 transition-colors"
                aria-label="Facebook"
              >
                <Facebook size={20} />
              </a>
              <a 
                href="#" 
                className="text-white hover:text-red-400 transition-colors"
                aria-label="Instagram"
              >
                <Instagram size={20} />
              </a>
              <a 
                href="#" 
                className="text-white hover:text-red-400 transition-colors"
                aria-label="Twitter"
              >
                <Twitter size={20} />
              </a>
              <a 
                href="#" 
                className="text-white hover:text-red-400 transition-colors"
                aria-label="LinkedIn"
              >
                <Linkedin size={20} />
              </a>
            </div>
          </div>
          
          <div>
            <h4 className="text-lg font-semibold mb-4">Quick Links</h4>
            <ul className="space-y-2">
              <li>
                <Link href="#home" className="text-blue-200 hover:text-white transition-colors">
                  Home
                </Link>
              </li>
              <li>
                <Link href="#services" className="text-blue-200 hover:text-white transition-colors">
                  Services
                </Link>
              </li>
              <li>
                <Link href="#about" className="text-blue-200 hover:text-white transition-colors">
                  About Us
                </Link>
              </li>
           
              
              <li>
                <Link href="#contact" className="text-blue-200 hover:text-white transition-colors">
                  Contact
                </Link>
              </li>
            </ul>
          </div>
          
          <div>
            <h4 className="text-lg font-semibold mb-4">Services</h4>
            <ul className="space-y-2">
              <li>
                <p  className="text-blue-200 hover:text-white transition-colors">
                  Tyre Replacement
                </p>
              </li>
              <li>
                <p  className="text-blue-200 hover:text-white transition-colors">
                  Wheel Alignment
                </p>
              </li>
              <li>
                <p  className="text-blue-200 hover:text-white transition-colors">
                  Puncture Repair
                </p>
              </li>
              <li>
                <p  className="text-blue-200 hover:text-white transition-colors">
                  Seasonal Tyre Change
                </p>
              </li>
              <li>
                <p  className="text-blue-200 hover:text-white transition-colors">
                  Balancing
                </p>
              </li>
              <li>
                <p  className="text-blue-200 hover:text-white transition-colors">
                  Tyre Pressure Check
                </p>
              </li>
            </ul>
          </div>
          
          <div>
            <h4 className="text-lg font-semibold mb-4">Contact Info</h4>
            <address className="not-italic text-blue-200">
              <p className="mb-2">Station road bypass tiraha kuchaman city dist kuchaman didwana Rajsthan ,341508</p>
             
              <p className="mb-2">
                <span className="font-semibold text-white">Phone:</span>+91 8619195354 , 9460777239
              </p>
              <p className="mb-2">
                <span className="font-semibold text-white">Email:</span>{' '}
                <a href="mailto:hemantkumawataccs69@gmail.com" className="hover:text-white transition-colors">
                hemantkumawataccs69@gmail.com
                </a>
              </p>
              <p>
                <span className="font-semibold text-white">Hours:</span> Mon-Fri: 8AM-7PM
              </p>
            </address>
          </div>
        </div>
      </div>
      
      <div className="border-t border-blue-800">
        <div className="container mx-auto px-4 py-6 flex flex-col md:flex-row justify-between items-center">
          <p className="text-sm text-blue-200 mb-4 md:mb-0">
            &copy; {new Date().getFullYear()} PremiumTyres. All rights reserved.
          </p>
          
          <div className="flex space-x-4 items-center">
          
            <button 
              onClick={scrollToTop} 
              className="bg-red-600 hover:bg-red-700 p-2 rounded-full transition-colors ml-4"
              aria-label="Scroll to top"
            >
              <ArrowUp size={16} />
            </button>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;