import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { useNavigate } from 'react-router-dom';

type Category = 'all' | 'baking' | 'italian' | 'asian' | 'french' | 'vegan' | 'japanese' | 'grilling' | 'mexican' | 'indian' | 'mediterranean';

interface Class {
  id: number;
  title: string;
  description: string;
  image: string;
  difficulty: 'Beginner' | 'Intermediate' | 'Advanced';
  category: Category;
  price: number;
  duration: string;
}

const classes: Class[] = [
  {
    id: 1,
    title: 'Italian Pasta Making',
    description: 'Learn the art of making fresh pasta from scratch, including various shapes and classic sauces.',
    image: 'https://images.unsplash.com/photo-1556761175-b413da4baf72?ixlib=rb-1.2.1&auto=format&fit=crop&w=1567&q=80',
    difficulty: 'Intermediate',
    category: 'italian',
    price: 89,
    duration: '3 hours'
  },
  {
    id: 2,
    title: 'French Pastry Basics',
    description: 'Master the fundamentals of French pastry, from croissants to éclairs.',
    image: 'https://images.unsplash.com/photo-1509440159596-0249088772ff?ixlib=rb-1.2.1&auto=format&fit=crop&w=1552&q=80',
    difficulty: 'Beginner',
    category: 'french',
    price: 99,
    duration: '4 hours'
  },
  {
    id: 3,
    title: 'Asian Fusion Cuisine',
    description: 'Explore the exciting world of Asian fusion cooking, combining traditional techniques with modern twists.',
    image: 'https://images.unsplash.com/photo-1512003867696-6d5ce6835040?ixlib=rb-1.2.1&auto=format&fit=crop&w=1552&q=80',
    difficulty: 'Advanced',
    category: 'asian',
    price: 129,
    duration: '4 hours'
  },
  {
    id: 4,
    title: 'Artisan Bread Making',
    description: 'Learn to make crusty artisan breads using traditional European techniques.',
    image: 'https://images.unsplash.com/photo-1549931319-a545dcf3bc73?ixlib=rb-1.2.1&auto=format&fit=crop&w=1567&q=80',
    difficulty: 'Intermediate',
    category: 'baking',
    price: 79,
    duration: '3 hours'
  },
  {
    id: 5,
    title: 'Plant-Based Essentials',
    description: 'Discover the fundamentals of vegan cooking with creative and nutritious recipes.',
    image: 'https://images.unsplash.com/photo-1512621776951-a57141f2eefd?ixlib=rb-1.2.1&auto=format&fit=crop&w=1567&q=80',
    difficulty: 'Beginner',
    category: 'vegan',
    price: 89,
    duration: '3 hours'
  },
  {
    id: 6,
    title: 'Sushi Rolling Masterclass',
    description: 'Learn the art of sushi making, from rolling techniques to selecting the best ingredients.',
    image: 'https://images.unsplash.com/photo-1512132411229-c30391241dd8?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    difficulty: 'Intermediate',    
    category: 'japanese',
    price: 119,
    duration: '3 hours'
  },
  {
    id: 7,
    title: 'BBQ & Grilling Techniques',
    description: 'Master the secrets of barbecue and grilling, from smoking meats to marinades.',
    image: 'https://images.unsplash.com/photo-1470406601945-7a6890b947b6?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8QkJRJTIwJTI2JTIwR3JpbGxpbmclMjBUZWNobmlxdWVzfGVufDB8fDB8fHww',
    difficulty: 'Advanced',
    category: 'grilling',
    price: 109,
    duration: '4 hours'
  },
  {
    id: 8,
    title: 'Mexican Street Food',
    description: 'Explore the bold flavors of Mexican street food, including tacos, salsas, and tamales.',
    image: 'https://images.unsplash.com/photo-1565299624946-b28f40a0ae38?ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=800&q=80',
    difficulty: 'Beginner',
    category: 'mexican',
    price: 79,
    duration: '3 hours'
  },
  {
    id: 9,
    title: 'Indian Curry Mastery',
    description: 'Learn the secrets of authentic Indian curries, from rich spices to slow-cooked perfection.',
    image: 'https://plus.unsplash.com/premium_photo-1726769145769-7ff764c537c6?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NXx8SW5kaWFuJTIwQ3VycnklMjBNYXN0ZXJ5fGVufDB8fDB8fHww',
    difficulty: 'Intermediate',
    category: 'indian',
    price: 99,
    duration: '3.5 hours'
  },
  {
    id: 10,
    title: 'Mediterranean Cooking',
    description: 'Discover the fresh and healthy dishes of the Mediterranean, from hummus to grilled seafood.',
    image: 'https://images.unsplash.com/photo-1625938393850-10f1f23de467?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8TWVkaXRlcnJhbmVhbiUyMENvb2tpbmd8ZW58MHx8MHx8fDA%3D',
    difficulty: 'Beginner',
    category: 'mediterranean',
    price: 89,
    duration: '3 hours'
  }
];


const Classes = () => {
  const [selectedCategory, setSelectedCategory] = useState<Category>('all');
  const navigate = useNavigate();

  const filteredClasses = classes.filter(
    (c) => selectedCategory === 'all' || c.category === selectedCategory
  );

  const categories: { value: Category; label: string }[] = [
    { value: 'all', label: 'All Classes' },
    { value: 'baking', label: 'Baking' },
    { value: 'italian', label: 'Italian' },
    { value: 'asian', label: 'Asian' },
    { value: 'french', label: 'French' },
    { value: 'vegan', label: 'Vegan' },
    { value: 'japanese', label: 'Japanese' },
    { value: 'grilling', label: 'Grilling' },
    { value: 'mexican', label: 'Mexican' },
    { value: 'indian', label: 'Indian' },
    { value: 'mediterranean', label: 'Mediterranean' }
  ];

  return (
    <div className="pt-16">
      <div className="bg-[#333333] py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-4xl font-bold text-white mb-8">Our Classes</h1>
          
          {/* Category Filter */}
          <div className="flex flex-wrap gap-4 mb-8">
            {categories.map((category) => (
              <button
                key={category.value}
                onClick={() => setSelectedCategory(category.value)}
                className={`px-4 py-2 rounded-lg transition-colors duration-200 ${
                  selectedCategory === category.value
                    ? 'bg-orange-500 text-white'
                    : 'bg-gray-700 text-gray-300 hover:bg-gray-600'
                }`}
              >
                {category.label}
              </button>
            ))}
          </div>

          {/* Classes Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredClasses.map((classItem) => (
              <motion.div
                key={classItem.id}
                whileHover={{ y: -10 }}
                className="card overflow-hidden"
              >
                <img
                  src={classItem.image}
                  alt={classItem.title}
                  className="w-full h-48 object-cover rounded-lg mb-4"
                />
                <h3 className="text-xl font-semibold mb-2">{classItem.title}</h3>
                <p className="text-gray-400 mb-4">{classItem.description}</p>
                <div className="flex justify-between items-center mb-4">
                  <span className="text-orange-400 font-semibold">
                    ${classItem.price}
                  </span>
                  <span className="text-gray-400">{classItem.duration}</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className={`px-3 py-1 rounded-full text-sm ${
                    classItem.difficulty === 'Beginner'
                      ? 'bg-green-500/20 text-green-400'
                      : classItem.difficulty === 'Intermediate'
                      ? 'bg-yellow-500/20 text-yellow-400'
                      : 'bg-red-500/20 text-red-400'
                  }`}>
                    {classItem.difficulty}
                  </span>
                  <button className="btn-primary" onClick={() => navigate(`/enrollnow`, { state: { eventPrice: classItem.price, eventName: classItem.title } })}>Enroll Now</button>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Classes;