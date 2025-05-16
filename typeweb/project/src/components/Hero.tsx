import React from 'react';
import { ChevronRight } from 'lucide-react';
import { Link } from './ui/Link';

const Hero: React.FC = () => {
  return (
    <section 
      id="home" 
      className="md:h-screen bg-gradient-to-b from-gray-900 to-blue-900 text-white relative flex items-center"
      style={{
        backgroundImage: `url('./hero.jpg')`,
        backgroundSize: 'cover',
        backgroundPosition: 'center'
      }}
    >
      {/* <div className="absolute inset-0 bg-gradient-to-r from-blue-900/70 to-gray-900/50"></div> */}
      
      <div className="container mx-auto px-4 z-10 py-20">
        <div className="max-w-3xl">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 leading-tight animate-[fadeIn_1s_ease-in]">
            Your Journey Deserves <span className="text-red-500">Premium Tyres</span>
          </h1>
          
          <p className="text-xl md:text-2xl mb-8 text-gray-200 max-w-2xl animate-[fadeIn_1.2s_ease-in]">
            We provide expert tyre fitting services and premium quality tyres for all vehicles. Your safety is our priority.
          </p>
          
          <div className="flex flex-row sm:flex-row gap-4 animate-[fadeIn_1.4s_ease-in]">
            <Link 
              href="#services" 
              className="bg-red-600 hover:bg-red-700 w-52 text-white py-3 px-8 rounded-md text-lg font-medium transition-all transform hover:scale-105 inline-flex items-center group"
            >
              Our Services
              <ChevronRight size={20} className="ml-2 transform transition-transform group-hover:translate-x-1" />
            </Link>
            
            <Link 
              href="#contact" 
              className="bg-transparent hover:bg-white/10 w-52 text-white border-2 border-white py-3 px-8 rounded-md text-lg font-medium transition-all"
            >
              Contact Us
            </Link>
          </div>
          
          <div className="mt-12 grid grid-cols-2 md:grid-cols-4 gap-6 max-w-2xl animate-[fadeIn_1.6s_ease-in]">
            <div className="bg-white/10 backdrop-blur-sm p-4 rounded-lg">
              <p className="text-3xl font-bold mb-1">10+</p>
              <p className="text-gray-300">Years Experience</p>
            </div>
            
            <div className="bg-white/10 backdrop-blur-sm p-4 rounded-lg">
              <p className="text-3xl font-bold mb-1">5K+</p>
              <p className="text-gray-300">Happy Customers</p>
            </div>
            
            <div className="bg-white/10 backdrop-blur-sm p-4 rounded-lg">
              <p className="text-3xl font-bold mb-1">20+</p>
              <p className="text-gray-300">Tyre Brands</p>
            </div>
            
            <div className="bg-white/10 backdrop-blur-sm p-4 rounded-lg">
              <p className="text-3xl font-bold mb-1">1</p>
              <p className="text-gray-300">Locations</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;