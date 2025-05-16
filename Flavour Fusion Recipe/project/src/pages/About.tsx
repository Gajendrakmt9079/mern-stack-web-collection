import React from 'react';
import { motion } from 'framer-motion';
import { Star } from 'lucide-react';
import AboutHeader from '../components/AboutHeader';

const chefs = [
  {
    name: 'Chef Maria Rodriguez',
    role: 'Head Chef & Founder',
    image: 'https://images.unsplash.com/photo-1583394293214-28ded15ee548?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80',
    bio: 'With over 20 years of experience in international cuisine, Chef Maria brings her passion for cooking and teaching to every class.'
  },
  {
    name: 'Chef James Chen',
    role: 'Asian Cuisine Specialist',
    image: 'https://images.unsplash.com/photo-1577219491135-ce391730fb2c?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80',
    bio: 'Specializing in Asian fusion cuisine, Chef James combines traditional techniques with modern innovation.'
  },
  {
    name: 'Chef Sophie Laurent',
    role: 'Pastry Chef',
    image: 'https://images.unsplash.com/photo-1595273670150-bd0c3c392e46?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80',
    bio: 'A graduate of Le Cordon Bleu, Chef Sophie brings French pastry expertise to our baking programs.'
  }
];

const testimonials = [
  {
    name: 'Sarah Thompson',
    text: 'The classes here transformed my cooking skills. The instructors are patient and knowledgeable.',
    rating: 5
  },
  {
    name: 'Michael Chen',
    text: 'An amazing experience! The hands-on approach really helps you learn the techniques properly.',
    rating: 5
  },
  {
    name: 'Emma Rodriguez',
    text: 'The perfect blend of professional training and fun. I look forward to every class.',
    rating: 4
  }
];

const About = () => {
  return (
    <div className="pt-16">
          
          <AboutHeader></AboutHeader>
         
      {/* Mission Section */}
      <section className="bg-[#333333] py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-center max-w-3xl mx-auto"
          >
            <h1 className="text-4xl font-bold text-white mb-6">Our Mission</h1>
            <p className="text-xl text-gray-300 mb-8">
              At CulinaryMaster, we believe that great cooking is about more than
              recipes—it's about techniques, passion, and the joy of creating
              something extraordinary.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Chefs Section */}
      <section className="bg-[#333333] py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-white mb-12 text-center">
            Meet Our Chefs
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {chefs.map((chef, index) => (
              <motion.div
                key={index}
                whileHover={{ y: -10 }}
                className="card text-center"
              >
                <img
                  src={chef.image}
                  alt={chef.name}
                  className="w-32 h-32 rounded-full mx-auto mb-4 object-cover"
                />
                <h3 className="text-xl font-semibold text-white mb-2">
                  {chef.name}
                </h3>
                <p className="text-orange-400 mb-4">{chef.role}</p>
                <p className="text-gray-400">{chef.bio}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="bg-[#333333] py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-white mb-12 text-center">
            What Our Students Say
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <motion.div
                key={index}
                whileHover={{ scale: 1.05 }}
                className="card"
              >
                <div className="flex mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star
                      key={i}
                      className="w-5 h-5 text-orange-400 fill-current"
                    />
                  ))}
                </div>
                <p className="text-gray-300 mb-4">"{testimonial.text}"</p>
                <p className="text-orange-400 font-semibold">
                  - {testimonial.name}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;