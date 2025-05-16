import React from 'react';
import { Clock, Star, ChefHat } from 'lucide-react';
import { Link } from 'react-router-dom';

const Classes: React.FC = () => {
  const classes = [
    {
      title: "Italian Cuisine Masterclass",
      image: "https://images.unsplash.com/photo-1498579150354-977475b7ea0b?auto=format&fit=crop&q=80",
      instructor: "Chef Marco Rossi",
      level: "Intermediate",
      duration: "8 weeks",
      price: "$299",
      description: "Master the art of Italian cooking with traditional techniques and authentic recipes."
    },
    {
      title: "French Pastry Fundamentals",
      image: "https://images.unsplash.com/photo-1652365283468-c507a8fc0dd8?w=600&auto=format&fit=crop&q=60",
      instructor: "Chef Marie Laurent",
      level: "Beginner",
      duration: "6 weeks",
      price: "$249",
      description: "Learn the secrets of French pastry making from basic to advanced techniques."
    },
    {
      title: "Asian Fusion Cooking",
      image: "https://images.unsplash.com/photo-1512058564366-18510be2db19?auto=format&fit=crop&q=80",
      instructor: "Chef James Chen",
      level: "Advanced",
      duration: "10 weeks",
      price: "$349",
      description: "Explore the fusion of Asian cuisines and create innovative dishes."
    },
    {
      title: "Mediterranean Cooking",
      image: "https://images.unsplash.com/photo-1504674900247-0877df9cc836?auto=format&fit=crop&q=80",
      instructor: "Chef Elena Santos",
      level: "Intermediate",
      duration: "8 weeks",
      price: "$299",
      description: "Discover healthy and delicious Mediterranean cooking techniques."
    },
    {
      title: "Plant-Based Cooking Essentials",
      image: "https://images.unsplash.com/photo-1583749808594-21260b734ca6?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8UGxhbnQlMjBCYXNlZCUyMENvb2tpbmd8ZW58MHx8MHx8fDA%3D",
      instructor: "Chef Olivia Green",
      level: "Beginner",
      duration: "5 weeks",
      price: "$199",
      description: "Learn how to prepare delicious and nutritious plant-based meals."
    },
    {
      title: "BBQ & Grilling Techniques",
      image: "https://images.unsplash.com/photo-1600891964599-f61ba0e24092?auto=format&fit=crop&q=80",
      instructor: "Chef Jack Dawson",
      level: "Intermediate",
      duration: "6 weeks",
      price: "$259",
      description: "Master the art of BBQ and grilling with expert techniques."
    },
    {
      title: "Sushi Making Masterclass",
      image: "https://images.unsplash.com/photo-1553621042-f6e147245754?auto=format&fit=crop&q=80",
      instructor: "Chef Hiroshi Tanaka",
      level: "Advanced",
      duration: "8 weeks",
      price: "$349",
      description: "Learn to prepare authentic Japanese sushi from scratch."
    },
    {
      title: "Baking for Beginners",
      image: "https://images.unsplash.com/photo-1666356011542-0acf82fb16a1?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8N3x8QmFraW5nJTIwZm9yJTIwQmVnaW5uZXJzfGVufDB8fDB8fHww",
      instructor: "Chef Emma Baker",
      level: "Beginner",
      duration: "4 weeks",
      price: "$179",
      description: "Start your baking journey with easy-to-follow techniques and recipes."
    },
    {
      title: "Street Food Around the World",
      image: "https://images.unsplash.com/photo-1505253758473-96b7015fcd40?auto=format&fit=crop&q=80",
      instructor: "Chef Carlos Rivera",
      level: "Intermediate",
      duration: "7 weeks",
      price: "$279",
      description: "Explore the flavors of global street food and recreate them at home."
    },
    {
      title: "Gourmet Desserts & Chocolates",
      image: "https://images.unsplash.com/photo-1565958011703-44f9829ba187?auto=format&fit=crop&q=80",
      instructor: "Chef Amelia White",
      level: "Advanced",
      duration: "6 weeks",
      price: "$299",
      description: "Create luxurious desserts and artisan chocolates."
    },
    {
      title: "Authentic Indian Cuisine",
      image: "https://images.unsplash.com/photo-1680359873864-43e89bf248ac?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8QXV0aGVudGljJTIwSW5kaWFuJTIwQ3Vpc2luZXxlbnwwfHwwfHx8MA%3D%3D",
      instructor: "Chef Raj Patel",
      level: "Intermediate",
      duration: "8 weeks",
      price: "$299",
      description: "Learn the rich flavors and techniques of Indian cooking."
    },
    {
      title: "Fermentation & Pickling Techniques",
      image: "https://plus.unsplash.com/premium_photo-1721199111994-c56bf6a368dc?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NXx8RmVybWVudGF0aW9uJTIwJTI2JTIwUGlja2xpbmclMjBUZWNobmlxdWVzfGVufDB8fDB8fHww",
      instructor: "Chef Nathan Kim",
      level: "Beginner",
      duration: "4 weeks",
      price: "$189",
      description: "Discover the science behind fermentation and pickling for enhanced flavors."
    },
    {
      title: "Healthy Meal Prep & Nutrition",
      image: "https://images.unsplash.com/photo-1720983197848-39f51a5e4544?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8SGVhbHRoeSUyME1lYWwlMjBQcmVwJTIwJTI2JTIwTnV0cml0aW9ufGVufDB8fDB8fHww",
      instructor: "Chef Sophia Lee",
      level: "Beginner",
      duration: "6 weeks",
      price: "$249",
      description: "Plan and prepare nutritious meals for a healthier lifestyle."
    },
    {
      title: "Classic French Cuisine",
      image: "https://plus.unsplash.com/premium_photo-1677686707023-9ac1e4f75a87?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OXx8Q2xhc3NpYyUyMEZyZW5jaCUyMEN1aXNpbmV8ZW58MHx8MHx8fDA%3D",
      instructor: "Chef Pierre Dupont",
      level: "Advanced",
      duration: "10 weeks",
      price: "$349",
      description: "Master traditional French cooking techniques and recipes."
    }
];


  return (
    <div className="space-y-12">
      <div className="text-center">
        <h1 className="text-4xl font-bold mb-4 dark:text-white">Cooking Classes</h1>
        <p className="text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
          Transform your culinary skills with our professional cooking classes. 
          Learn from expert chefs and master new techniques.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {classes.map((course, index) => (
          <div key={index} className="bg-white dark:bg-gray-800 rounded-lg hover:shadow-2xl hover:scale-105 overflow-hidden shadow-lg">
            <img 
              src={course.image} 
              alt={course.title} 
              className="w-full h-64 object-cover"
            />
            <div className="p-6">
              <h2 className="text-2xl font-bold mb-2 dark:text-white">{course.title}</h2>
              <p className="text-gray-600 dark:text-gray-400 mb-4">{course.description}</p>
              
              <div className="space-y-2 mb-6">
                <div className="flex items-center text-gray-600 dark:text-gray-300">
                  <ChefHat className="w-5 h-5 mr-2" />
                  <span>{course.instructor}</span>
                </div>
                <div className="flex items-center text-gray-600 dark:text-gray-300">
                  <Clock className="w-5 h-5 mr-2" />
                  <span>{course.duration}</span>
                </div>
                <div className="flex items-center text-gray-600 dark:text-gray-300">
                  <Star className="w-5 h-5 mr-2" />
                  <span>{course.level}</span>
                </div>
              </div>

              <div className="flex justify-between items-center">
                <span className="text-2xl font-bold text-orange-500">{course.price}</span>
                <Link to={"/enrolment"} className="bg-orange-500 text-white px-6 py-2 rounded-lg hover:bg-orange-600 transition-colors">
                  Enroll Now
                </Link>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Classes;