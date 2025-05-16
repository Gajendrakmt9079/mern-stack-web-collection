import React from 'react';
import { Link } from 'react-router-dom';
import { ChefHat, Calendar, Star, Users } from 'lucide-react';
import { motion } from 'framer-motion';

const Home = () => {
  return (
    <div className="pt-16">
      {/* Hero Section */}
      <section className="relative h-[90vh] flex items-center">
        <div
          className="absolute inset-0 z-0"
          style={{
            backgroundImage:
              'url(https://images.unsplash.com/photo-1556910103-1c02745aae4d?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=2850&q=80)',
            backgroundSize: 'cover',
            backgroundPosition: 'center',
          }}
        >
          <div className="absolute inset-0 bg-[#333333] bg-opacity-60"></div>
        </div>

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center"
          >
            <h1 className="text-5xl md:text-6xl font-bold text-white mb-6">
              Master the Art of Cooking
            </h1>
            <p className="text-xl text-gray-200 mb-8 max-w-3xl mx-auto">
              Join our expert chefs and discover the secrets of culinary excellence
              through hands-on classes and workshops.
            </p>
            <Link to="/classes" className="btn-primary">
              Join Our Classes Today
            </Link>
          </motion.div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 bg-[#333333]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <motion.div
              whileHover={{ scale: 1.05 }}
              className="card text-center"
            >
              <ChefHat className="w-12 h-12 text-orange-500 mx-auto mb-4" />
              <h3 className="text-xl font-semibold mb-2">Expert Chefs</h3>
              <p className="text-gray-400">
                Learn from professional chefs with years of experience
              </p>
            </motion.div>

            <motion.div
              whileHover={{ scale: 1.05 }}
              className="card text-center"
            >
              <Calendar className="w-12 h-12 text-orange-500 mx-auto mb-4" />
              <h3 className="text-xl font-semibold mb-2">Flexible Schedule</h3>
              <p className="text-gray-400">
                Choose from various time slots that fit your schedule
              </p>
            </motion.div>

            <motion.div
              whileHover={{ scale: 1.05 }}
              className="card text-center"
            >
              <Star className="w-12 h-12 text-orange-500 mx-auto mb-4" />
              <h3 className="text-xl font-semibold mb-2">
                Hands-on Experience
              </h3>
              <p className="text-gray-400">
                Practice techniques with personalized guidance
              </p>
            </motion.div>

            <motion.div
              whileHover={{ scale: 1.05 }}
              className="card text-center"
            >
              <Users className="w-12 h-12 text-orange-500 mx-auto mb-4" />
              <h3 className="text-xl font-semibold mb-2">Small Groups</h3>
              <p className="text-gray-400">
                Intimate class sizes for better learning
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Featured Classes Section */}
      <section className="py-20 bg-[#333333]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="section-title text-center">Featured Classes</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                title: 'Italian Pasta Making',
                image:
                  'https://images.unsplash.com/photo-1556761175-b413da4baf72?ixlib=rb-1.2.1&auto=format&fit=crop&w=1567&q=80',
                difficulty: 'Intermediate',
              },
              {
                title: 'French Pastry Basics',
                image:
                  'https://images.unsplash.com/photo-1509440159596-0249088772ff?ixlib=rb-1.2.1&auto=format&fit=crop&w=1552&q=80',
                difficulty: 'Beginner',
              },
              {
                title: 'Asian Fusion Cuisine',
                image:
                  'https://images.unsplash.com/photo-1512003867696-6d5ce6835040?ixlib=rb-1.2.1&auto=format&fit=crop&w=1552&q=80',
                difficulty: 'Advanced',
              },
            ].map((course, index) => (
              <motion.div
                key={index}
                whileHover={{ y: -10 }}
                className="card overflow-hidden"
              >
                <img
                  src={course.image}
                  alt={course.title}
                  className="w-full h-48 object-cover rounded-lg mb-4"
                />
                <h3 className="text-xl font-semibold mb-2">{course.title}</h3>
                <p className="text-gray-400 mb-4">
                  Difficulty: {course.difficulty}
                </p>
                <Link to="/classes" className="btn-primary inline-block">
                  Learn More
                </Link>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;