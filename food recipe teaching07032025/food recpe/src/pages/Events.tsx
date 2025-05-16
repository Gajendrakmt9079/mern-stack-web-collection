import React from 'react';
import { Calendar, MapPin, Users } from 'lucide-react';
import { Link } from 'react-router-dom';

const Events: React.FC = () => {
  const events = [
    {
      title: "Summer Cooking Festival",
      image: "https://images.unsplash.com/photo-1414235077428-338989a2e8c0?auto=format&fit=crop&q=80",
      date: "July 15-17, 2024",
      location: "Central Park, New York",
      capacity: "500 attendees",
      description: "Join us for three days of cooking demonstrations, tastings, and workshops with renowned chefs."
    },
    {
      title: "Wine & Dine Workshop",
      image: "https://images.unsplash.com/photo-1510812431401-41d2bd2722f3?auto=format&fit=crop&q=80",
      date: "August 5, 2024",
      location: "Grand Hotel, Chicago",
      capacity: "100 attendees",
      description: "Learn the art of food and wine pairing with expert sommeliers and chefs."
    },
    {
      title: "Baking Championship",
      image: "https://images.unsplash.com/photo-1483695028939-5bb13f8648b0?auto=format&fit=crop&q=80",
      date: "September 10, 2024",
      location: "Culinary Institute, San Francisco",
      capacity: "200 attendees",
      description: "Compete in our annual baking championship and showcase your pastry skills."
    }
  ];

  return (
    <div className="space-y-12">
      <div className="text-center">
        <h1 className="text-4xl font-bold mb-4 dark:text-white">Upcoming Events</h1>
        <p className="text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
          Join our exciting culinary events and connect with fellow food enthusiasts.
          From workshops to competitions, there's something for everyone.
        </p>
      </div>

      <div className="space-y-8">
        {events.map((event, index) => (
          <div key={index} className="bg-white dark:bg-gray-800 rounded-lg overflow-hidden shadow-lg">
            <div className="md:flex">
              <div className="md:w-1/3">
                <img 
                  src={event.image} 
                  alt={event.title} 
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="md:w-2/3 p-6">
                <h2 className="text-2xl font-bold mb-2 dark:text-white">{event.title}</h2>
                <p className="text-gray-600 dark:text-gray-400 mb-4">{event.description}</p>
                
                <div className="space-y-2 mb-6">
                  <div className="flex items-center text-gray-600 dark:text-gray-300">
                    <Calendar className="w-5 h-5 mr-2" />
                    <span>{event.date}</span>
                  </div>
                  <div className="flex items-center text-gray-600 dark:text-gray-300">
                    <MapPin className="w-5 h-5 mr-2" />
                    <span>{event.location}</span>
                  </div>
                  <div className="flex items-center text-gray-600 dark:text-gray-300">
                    <Users className="w-5 h-5 mr-2" />
                    <span>{event.capacity}</span>
                  </div>
                </div>

                <Link to={'/Register'} className="bg-orange-500 text-white px-6 py-2 rounded-lg hover:bg-orange-600 transition-colors">
                  Register Now
                </Link>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Events;