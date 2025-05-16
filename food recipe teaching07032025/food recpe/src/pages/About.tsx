import React from 'react';
import { Award, Users, Heart, Coffee } from 'lucide-react';

const About: React.FC = () => {
  const team = [
    {
      name: "Chef Marco Rossi",
      role: "Head Chef & Founder",
      image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?auto=format&fit=crop&q=80",
      description: "With over 20 years of experience in Italian and French cuisine."
    },
    {
      name: "Chef Marie Laurent",
      role: "Pastry Chef",
      image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&q=80",
      description: "Specializing in French pastries and desserts."
    },
    {
      name: "Chef James Chen",
      role: "Asian Cuisine Expert",
      image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&q=80",
      description: "Master of Asian fusion and traditional cooking techniques."
    }
  ];

  return (
    <div className="space-y-16">
      {/* Hero Section */}
      <section className="relative h-[400px] flex items-center">
        <div className="absolute inset-0">
          <img
            src="https://plus.unsplash.com/premium_photo-1661717448748-650b6c184e5b?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MjV8fGFib3V0JTIwY29va2luZ3xlbnwwfHwwfHx8MA%3D%3D"
            alt="Cooking Class"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-black bg-opacity-50"></div>
        </div>
        <div className="relative container mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">About CulinaryMaster</h1>
          <p className="text-xl text-white max-w-2xl mx-auto">
            Empowering home chefs with professional culinary education since 2010
          </p>
        </div>
      </section>

      {/* Mission Section */}
      <section className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-3xl font-bold mb-6 dark:text-white">Our Mission</h2>
          <p className="text-gray-600 dark:text-gray-400 text-lg">
            At CulinaryMaster, we believe that everyone deserves to experience the joy of cooking. 
            Our mission is to make professional culinary education accessible to all, 
            empowering individuals to create amazing dishes and memories in their own kitchens.
          </p>
        </div>
      </section>

      {/* Values Section */}
      <section className="bg-gray-100 dark:bg-gray-800 py-16">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12 dark:text-white">Our Values</h2>
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            {[
              { icon: <Award className="w-8 h-8" />, title: "Excellence", description: "We strive for excellence in everything we do" },
              { icon: <Users className="w-8 h-8" />, title: "Community", description: "Building a supportive cooking community" },
              { icon: <Heart className="w-8 h-8" />, title: "Passion", description: "Sharing our passion for cooking" },
              { icon: <Coffee className="w-8 h-8" />, title: "Innovation", description: "Constantly innovating our teaching methods" }
            ].map((value, index) => (
              <div key={index} className="text-center p-6 bg-white dark:bg-gray-700 rounded-lg shadow-lg">
                <div className="text-orange-500 mb-4 flex justify-center">{value.icon}</div>
                <h3 className="text-xl font-semibold mb-2 dark:text-white">{value.title}</h3>
                <p className="text-gray-600 dark:text-gray-400">{value.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-12 dark:text-white">Meet Our Team</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {team.map((member, index) => (
            <div key={index} className="bg-white dark:bg-gray-800 rounded-lg overflow-hidden shadow-lg">
              <img 
                src={member.image} 
                alt={member.name} 
                className="w-full h-64 object-cover"
              />
              <div className="p-6">
                <h3 className="text-xl font-bold mb-2 dark:text-white">{member.name}</h3>
                <p className="text-orange-500 mb-2">{member.role}</p>
                <p className="text-gray-600 dark:text-gray-400">{member.description}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* History Section */}
      <section className="container mx-auto px-4 mb-16">
        <div className="max-w-3xl mx-auto">
          <h2 className="text-3xl font-bold text-center mb-8 dark:text-white">Our History</h2>
          <div className="prose dark:prose-invert max-w-none">
            <p className="text-gray-600 dark:text-gray-400 mb-4">
              Founded in 2010, CulinaryMaster began as a small cooking school with a big dream: 
              to make professional culinary education accessible to everyone. What started with 
              just three instructors and a handful of students has grown into a global community 
              of food lovers and aspiring chefs.
            </p>
            <p className="text-gray-600 dark:text-gray-400 mb-4">
              Over the years, we've expanded our curriculum to include a wide range of cuisines 
              and cooking techniques, always staying true to our core mission of empowering home 
              chefs with professional-grade skills and knowledge.
            </p>
            <p className="text-gray-600 dark:text-gray-400">
              Today, CulinaryMaster is proud to have helped thousands of students achieve their 
              culinary dreams, whether that's cooking better meals for their families, starting 
              their own food businesses, or simply exploring their passion for cooking.
            </p>
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;