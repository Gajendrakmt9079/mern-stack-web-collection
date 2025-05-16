import React from 'react';
import { motion } from 'framer-motion';
import { Calendar as CalendarIcon, Clock, MapPin } from 'lucide-react';
import { format } from 'date-fns';
import { useNavigate } from 'react-router-dom';


interface Event {
  id: number;
  title: string;
  description: string;
  date: Date;
  time: string;
  location: string;
  image: string;
  price: number;
}

const events: Event[] = [
  {
    id: 1,
    title: 'Summer Cooking Festival',
    description: 'Join us for a day of culinary demonstrations, tastings, and workshops with renowned chefs.',
    date: new Date(2024, 6, 15),
    time: '10:00 AM - 6:00 PM',
    location: 'Central Park Culinary Center',
    image: 'https://images.unsplash.com/photo-1414235077428-338989a2e8c0?ixlib=rb-1.2.1&auto=format&fit=crop&w=1567&q=80',
    price: 149
  },
  {
    id: 2,
    title: 'Wine & Dine Masterclass',
    description: 'Learn the art of food and wine pairing with our sommelier and head chef.',
    date: new Date(2024, 6, 22),
    time: '6:30 PM - 9:30 PM',
    location: 'The Grand Kitchen',
    image: 'https://images.unsplash.com/photo-1515779122185-2390ccdf060b?ixlib=rb-1.2.1&auto=format&fit=crop&w=1567&q=80',
    price: 199
  },
  {
    id: 3,
    title: 'Farm to Table Workshop',
    description: 'Experience the journey from farm to plate with local farmers and our culinary team.',
    date: new Date(2024, 7, 5),
    time: '9:00 AM - 2:00 PM',
    location: 'Green Acres Farm',
    image: 'https://plus.unsplash.com/premium_photo-1722945739078-f1c1b3965594?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NXx8RmFybSUyMHRvJTIwVGFibGUlMjBXb3Jrc2hvcHxlbnwwfHwwfHx8MA%3D%3D',
    price: 129
  },
  {
    id: 4,
    title: 'Gourmet Burger Showdown',
    description: 'A competition to create the best gourmet burger, judged by top chefs.',
    date: new Date(2024, 7, 12),
    time: '12:00 PM - 5:00 PM',
    location: 'City Food Arena',
    image: 'https://images.unsplash.com/photo-1568901346375-23c9450c58cd?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OHx8R291cm1ldCUyMEJ1cmdlciUyMFNob3dkb3dufGVufDB8fDB8fHww',
    price: 89
  },
  {
    id: 5,
    title: 'Seafood Lovers Night',
    description: 'A seafood extravaganza featuring fresh catches, cooking demos, and tastings.',
    date: new Date(2024, 7, 20),
    time: '6:00 PM - 10:00 PM',
    location: 'Harbor View Restaurant',
    image: 'https://images.unsplash.com/photo-1522202176988-66273c2fd55f?ixlib=rb-1.2.1&auto=format&fit=crop&w=1567&q=80',
    price: 159
  },
  {
    id: 6,
    title: 'Chocolate & Dessert Workshop',
    description: 'A sweet experience where you’ll learn to make gourmet chocolate desserts.',
    date: new Date(2024, 7, 25),
    time: '2:00 PM - 5:00 PM',
    location: 'Sweet Treats Studio',
    image: 'https://images.unsplash.com/photo-1551024709-8f23befc6f87?ixlib=rb-1.2.1&auto=format&fit=crop&w=1567&q=80',
    price: 99
  },
  {
    id: 7,
    title: 'Vegan Cooking Showcase',
    description: 'Explore innovative plant-based recipes and cooking techniques.',
    date: new Date(2024, 8, 5),
    time: '11:00 AM - 3:00 PM',
    location: 'Nature’s Table',
    image: 'https://plus.unsplash.com/premium_photo-1664476002571-ead0cbfc6d74?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NXx8VmVnYW4lMjBDb29raW5nJTIwU2hvd2Nhc2V8ZW58MHx8MHx8fDA%3D',
    price: 119
  },
  {
    id: 8,
    title: 'Street Food Fiesta',
    description: 'A celebration of global street food, from tacos to dim sum.',
    date: new Date(2024, 8, 10),
    time: '5:00 PM - 11:00 PM',
    location: 'Downtown Market Square',
    image: 'https://plus.unsplash.com/premium_photo-1731953243063-c4e055d8ed3f?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTN8fFN0cmVldCUyMEZvb2QlMjBGaWVzdGF8ZW58MHx8MHx8fDA%3D',
    price: 79
  },
  {
    id: 9,
    title: 'MasterChef Junior Workshop',
    description: 'A hands-on cooking experience for young aspiring chefs.',
    date: new Date(2024, 8, 18),
    time: '10:00 AM - 2:00 PM',
    location: 'Kids Culinary Academy',
    image: 'https://plus.unsplash.com/premium_photo-1687893210982-9c1c202d435b?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OXx8TWFzdGVyQ2hlZiUyMEp1bmlvciUyMFdvcmtzaG9wJTIwZm9vZHxlbnwwfHwwfHx8MA%3D%3D',
    price: 69
  }
  
];


const Events = () => {
  const navigate  = useNavigate();
  return (
    <div className="pt-16">
      <div className="bg-[#333333] py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-4xl font-bold text-white mb-8">Upcoming Events</h1>
          
          <div className="grid grid-cols-1 gap-8">
            {events.map((event) => (
              <motion.div
                key={event.id}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                className="card overflow-hidden"
              >
                <div className="md:flex">
                  <div className="md:w-1/3">
                    <img
                      src={event.image}
                      alt={event.title}
                      className="w-full h-64 md:h-full object-cover rounded-lg md:rounded-r-none"
                    />
                  </div>
                  <div className="md:w-2/3 p-6">
                    <h3 className="text-2xl font-semibold mb-2">{event.title}</h3>
                    <p className="text-gray-400 mb-4">{event.description}</p>
                    
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-6">
                      <div className="flex items-center text-gray-300">
                        <CalendarIcon className="w-5 h-5 mr-2 text-orange-400" />
                        {format(event.date, 'MMMM d, yyyy')}
                      </div>
                      <div className="flex items-center text-gray-300">
                        <Clock className="w-5 h-5 mr-2 text-orange-400" />
                        {event.time}
                      </div>
                      <div className="flex items-center text-gray-300">
                        <MapPin className="w-5 h-5 mr-2 text-orange-400" />
                        {event.location}
                      </div>
                    </div>
                    
                    <div className="flex justify-between items-center">
                      <span className="text-2xl font-bold text-orange-400">
                        ${event.price}
                      </span>
                      <button className="btn-primary" onClick={() => navigate("/register", { state: { eventPrice: event.price, eventName: event.title } })
}> Register Now</button>
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Events;