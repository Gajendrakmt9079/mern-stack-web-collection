import React from 'react';
import { Link } from 'react-router-dom';

export default function Footer() {
  return (
    <footer className="bg-white dark:bg-gray-900">
      <div className="mx-auto max-w-7xl px-6 py-12 md:flex md:items-center md:justify-between lg:px-8">
        <div className="flex justify-center space-x-6 md:order-2">
          <Link to="/privacy" className="text-gray-500 hover:text-gray-600 dark:hover:text-gray-400">
            Privacy Policy
          </Link>
          <Link to="/terms" className="text-gray-500 hover:text-gray-600 dark:hover:text-gray-400">
            Terms & Conditions
          </Link>
          <Link to="/contact" className="text-gray-500 hover:text-gray-600 dark:hover:text-gray-400">
            Contact
          </Link>
        </div>
        <div className="mt-8 md:order-1 md:mt-0 flex justify-center items-center">
        <img src="./logo.png" alt="" className='w-20 dark:hidden'  />
        <img src="./blacklogo.png" alt="" className='w-20 hidden dark:block'  />
          <p className="text-center text-xs leading-5 text-gray-500">
            &copy; {new Date().getFullYear()} Astro world . All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}