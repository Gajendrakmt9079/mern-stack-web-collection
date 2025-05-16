import React from 'react';
import { Award, Users, Globe, Shield, Clock, HeartHandshake } from 'lucide-react';

export default function About() {
  const features = [
    {
      icon: <Award className="h-8 w-8 text-blue-600" />,
      title: "Premium Quality",
      description: "We offer only the highest quality drones from trusted manufacturers."
    },
    {
      icon: <Users className="h-8 w-8 text-blue-600" />,
      title: "Expert Support",
      description: "Our team of drone experts is always ready to help you make the right choice."
    },
    {
      icon: <Globe className="h-8 w-8 text-blue-600" />,
      title: "Worldwide Shipping",
      description: "We deliver our drones to drone enthusiasts around the globe."
    },
    {
      icon: <Shield className="h-8 w-8 text-blue-600" />,
      title: "Secure Shopping",
      description: "Your security is our priority with encrypted transactions and secure payments."
    },
    {
      icon: <Clock className="h-8 w-8 text-blue-600" />,
      title: "Fast Delivery",
      description: "Quick processing and shipping to get your drone to you as soon as possible."
    },
    {
      icon: <HeartHandshake className="h-8 w-8 text-blue-600" />,
      title: "Customer Satisfaction",
      description: "We're committed to ensuring 100% satisfaction with every purchase."
    }
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <div className="relative bg-gray-900 h-[400px]">
        <img
          src="https://images.unsplash.com/photo-1506947411487-a56738267384?ixlib=rb-4.0.3&auto=format&fit=crop&w=1920&q=80"
          alt="Drone flying"
          className="w-full h-full object-cover opacity-50"
        />
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="text-center text-white">
            <h1 className="text-5xl font-bold mb-4">About Skymapdrones</h1>
            <p className="text-xl">Leading the Future of Aerial Technology</p>
          </div>
        </div>
      </div>

      {/* Our Story */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="text-3xl font-bold mb-6">Our Story</h2>
            <p className="text-gray-600 mb-4">
              Founded in 2020, Skymapdrones emerged from a passion for aerial technology and a vision to make high-quality drones accessible to everyone. What started as a small online store has grown into one of the leading drone retailers in the industry.
            </p>
            <p className="text-gray-600 mb-4">
              Our team consists of drone enthusiasts, professional pilots, and tech experts who are dedicated to providing the best drone shopping experience. We carefully curate our selection to ensure that every product meets our high standards for quality and performance.
            </p>
            <p className="text-gray-600">
              At Skymapdrones, we're not just selling drones; we're building a community of aerial photography enthusiasts, professional cinematographers, and hobbyists who share our passion for flying.
            </p>
          </div>
          <div className="relative h-[400px]">
            <img
              src="https://images.unsplash.com/photo-1527977966376-1c8408f9f108?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
              alt="Drone in action"
              className="w-full h-full object-cover rounded-lg shadow-xl"
            />
          </div>
        </div>
      </div>

      {/* Why Choose Us */}
      <div className="bg-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-center mb-12">Why Choose Skymapdrones</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {features.map((feature, index) => (
              <div key={index} className="bg-gray-50 p-6 rounded-lg">
                <div className="mb-4">{feature.icon}</div>
                <h3 className="text-xl font-semibold mb-2">{feature.title}</h3>
                <p className="text-gray-600">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Our Mission */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="text-center max-w-3xl mx-auto">
          <h2 className="text-3xl font-bold mb-6">Our Mission</h2>
          <p className="text-gray-600 mb-8">
            Our mission is to democratize access to high-quality drones and aerial technology. We believe in providing not just products, but complete solutions that enable our customers to achieve their aerial photography and videography goals.
          </p>
          <div className="bg-blue-600 text-white p-8 rounded-lg">
            <p className="text-xl font-semibold">
              "We're committed to advancing the future of aerial technology while ensuring safety, quality, and customer satisfaction remain our top priorities."
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}