import React from 'react';
import { Check } from 'lucide-react';
import { Link } from './ui/Link';

interface ServiceCardProps {
  title: string;
  description: string;
  image: string;
  features: string[];
  className?: string;
}

const ServiceCard: React.FC<ServiceCardProps> = ({ 
  title, 
  description, 
  image, 
  features,
  className = ''
}) => {
  return (
    <div className={`relative bg-white rounded-xl md:h-[600px] overflow-hidden shadow-lg transition-all duration-300 hover:shadow-xl group isolate ${className}`}>
      {/* Decorative elements */}
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-black/20 z-10 pointer-events-none" />
      <div className="absolute inset-0 border border-gray-200 rounded-xl pointer-events-none" />
      
      {/* Image container with parallax effect */}
      <div className="h-64 overflow-hidden relative">
        <img 
          src={image} 
          alt={title} 
          className="w-full h-full object-cover transition-all duration-700 ease-out group-hover:scale-105"
          loading="lazy"
        />
        {/* Image overlay */}
        <div className="absolute inset-0 bg-black/10 transition-all duration-500 group-hover:bg-black/20" />
      </div>
      
      {/* Content container */}
      <div className="p-6 relative z-20">
        {/* Title with subtle underline animation */}
        <h3 className="text-2xl font-bold text-gray-900 mb-3 inline-block relative">
          {title}
          <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-black transition-all duration-500 group-hover:w-full"></span>
        </h3>
        
        {/* Description with smooth fade-in effect */}
        <p className="text-gray-600 mb-4 transition-opacity duration-300 group-hover:opacity-90">
          {description}
        </p>
        
        {/* Features list with staggered animation */}
        <ul className="mb-6 space-y-3">
          {features.map((feature, index) => (
            <li 
              key={index} 
              className="flex items-center text-gray-700 transition-all duration-300 hover:translate-x-1"
              style={{ transitionDelay: `${index * 50}ms` }}
            >
              <Check 
                size={18} 
                className="text-gray-900 mr-3 flex-shrink-0 transition-transform duration-300 group-hover:scale-110" 
                strokeWidth={2.5}
              />
              <span className="group-hover:font-medium transition-all">{feature}</span>
            </li>
          ))}
        </ul>
        
        {/* Animated CTA button */}
       
      </div>
    </div>
  );
};

export default ServiceCard;