import React from "react";
import { motion } from "framer-motion";
import { FaQuoteLeft, FaStar } from "react-icons/fa";

const testimonials = [
  {
    id: 1,
    name: "Sarah Johnson",
    role: "Book Blogger",
    content: "The best online bookstore I've used! Their collection is incredible and delivery was faster than promised.",
    rating: 5,
    image: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=200"
  },
  {
    id: 2,
    name: "Michael Chen",
    role: "Literature Professor",
    content: "I regularly order academic texts from here. Their packaging is excellent and books always arrive in perfect condition.",
    rating: 4,
    image: "https://images.unsplash.com/photo-1560250097-0b93528c311a?w=200"
  },
  {
    id: 3,
    name: "Emma Rodriguez",
    role: "Avid Reader",
    content: "Their recommendations are spot-on! Discovered three new favorite authors through their curated lists.",
    rating: 5,
    image: "https://images.unsplash.com/photo-1554151228-14d9def656e4?w=200"
  }
];

const Testimonials = () => {
  return (
    <div className="py-16 px-4 my-10 sm:px-6 lg:px-8 bg-gradient-to-b from-gray-50 to-white">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl font-bold text-gray-900 sm:text-4xl">
            What Readers Say
          </h2>
          <p className="mt-4 text-lg text-gray-600">
            Trusted by book lovers worldwide
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={testimonial.id}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
              whileHover={{ y: -10 }}
              className="bg-white p-8 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300"
            >
              <div className="flex items-center mb-6">
                <motion.div
                  whileHover={{ rotate: 5, scale: 1.05 }}
                  className="relative"
                >
                  <img
                    src={testimonial.image}
                    alt={testimonial.name}
                    className="w-16 h-16 rounded-full object-cover border-4 border-indigo-100"
                  />
                  <div className="absolute -bottom-2 -right-2 bg-indigo-500 rounded-full p-1">
                    <FaQuoteLeft className="text-white text-xs" />
                  </div>
                </motion.div>
                <div className="ml-4">
                  <h3 className="text-lg font-semibold text-gray-900">
                    {testimonial.name}
                  </h3>
                  <p className="text-indigo-600">{testimonial.role}</p>
                </div>
              </div>
              <p className="text-gray-600 mb-4 italic">"{testimonial.content}"</p>
              <div className="flex">
                {[...Array(5)].map((_, i) => (
                  <FaStar
                    key={i}
                    className={`text-${i < testimonial.rating ? 'yellow-400' : 'gray-300'} text-lg`}
                  />
                ))}
              </div>
            </motion.div>
          ))}
        </div>

      
      </div>
    </div>
  );
};

export default Testimonials;