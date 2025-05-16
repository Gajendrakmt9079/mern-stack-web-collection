import React from 'react'
import { FiStar } from 'react-icons/fi'

const testimonials = [
  {
    id: 1,
    name: 'Sarah Johnson',
    image: 'https://randomuser.me/api/portraits/women/1.jpg',
    text: `I've been using the Hydrating Serum for a month now, and my skin has never looked better! It's so gentle yet effective.'`,
    rating: 5,
  },
  {
    id: 2,
    name: 'Michael Chen',
    image: 'https://randomuser.me/api/portraits/men/2.jpg',
    text: 'The Acne Treatment Kit completely transformed my skin. After years of struggling with breakouts, I finally found something that works!',
    rating: 5,
  },
  {
    id: 3,
    name: 'Emily Rodriguez',
    image: 'https://randomuser.me/api/portraits/women/3.jpg',
    text: 'I love that these products are all natural and cruelty-free. The Vitamin C Serum has brightened my complexion so much!',
    rating: 4,
  },
  
]

const Testimonials = () => {
  return (
    <section className="py-12 bg-gray-200">
      <div className="container">
        <h2 className="mb-8 text-3xl font-serif text-center">What Our Customers Say</h2>
        <div className="grid grid-cols-1 gap-6 md:grid-cols-3">
          {testimonials.map((testimonial) => (
            <div key={testimonial.id} className="p-6 bg-white rounded-lg shadow-sm">
              <div className="flex mb-4">
                {[...Array(5)].map((_, i) => (
                  <FiStar
                    key={i}
                    className={`w-5 h-5 ${
                      i < testimonial.rating ? 'text-yellow-400 fill-yellow-400' : 'text-neutral'
                    }`}
                  />
                ))}
              </div>
              <p className="mb-4 italic text-neutral-dark">"{testimonial.text}"</p>
              <div className="flex items-center">
                <img
                  src={testimonial.image}
                  alt={testimonial.name}
                  className="w-10 h-10 mr-3 rounded-full"
                />
                <span className="font-medium">{testimonial.name}</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Testimonials