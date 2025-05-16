import React from 'react';
import { Star } from 'lucide-react';
import type { Testimonial } from '../types';

interface TestimonialCardProps {
  testimonial: Testimonial;
}

export function TestimonialCard({ testimonial }: TestimonialCardProps) {
  return (
    <div className="bg-white p-6 rounded-lg shadow-md">
      <div className="flex items-center mb-4">
        <img
          src={testimonial.avatar}
          alt={testimonial.name}
          className="w-12 h-12 rounded-full object-cover"
        />
        <div className="ml-4">
          <h4 className="font-semibold text-gray-800">{testimonial.name}</h4>
          <div className="flex items-center">
            {Array.from({ length: testimonial.rating }).map((_, i) => (
              <Star key={i} className="h-4 w-4 fill-current text-yellow-400" />
            ))}
          </div>
        </div>
      </div>
      <p className="text-gray-600 italic">{testimonial.content}</p>
    </div>
  );
}