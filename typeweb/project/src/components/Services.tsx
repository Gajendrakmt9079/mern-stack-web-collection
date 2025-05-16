import React from "react";
import { Check } from "lucide-react";
import ServiceCard from "./ServiceCard";

const services = [
  {
    id: 1,
    title: "Tyre Replacement",
    description:
      "Professional fitting of new tyres with computerized wheel balancing for a safe and smooth driving experience.",
    image:
      "https://images.pexels.com/photos/2244746/pexels-photo-2244746.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    features: [
      "Premium tyre brands",
      "Expert installation",
      "Computerized wheel balancing",
    ],
  },
  {
    id: 2,
    title: "Wheel Alignment",
    description:
      "Accurate wheel alignment to enhance vehicle stability, improve tyre life, and ensure safer handling.",
    image:
      "https://images.unsplash.com/photo-1697396248143-e6fa96564d35?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8V2hlZWwlMjBBbGlnbm1lbnR8ZW58MHx8MHx8fDA%3D",
    features: [
      "Computerized alignment check",
      "Suspension and steering inspection",
      "Precise adjustments",
    ],
  },
  {
    id: 3,
    title: "Puncture Repair",
    description:
      "Quick and reliable tyre puncture repairs using high-quality materials for safe driving.",
    image:
      "https://garageshop24x7.com/wp-content/uploads/2023/03/truck-tyre-2.png",
    features: [
      "Thorough damage inspection",
      "Internal patching",
      "External sealing",
    ],
  },
  {
    id: 4,
    title: "Seasonal Tyre ",
    description:
      "Effortless switching between summer and winter tyres to maximize performance and safety in all seasons.",
    image:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRlJ5q2GkjoE4WuXLzKrPmBJlPW7Maa-B5xGQ&s",
    features: [
      "Tyre removal and refitting",
      "Tyre storage service available",
      "Condition and tread depth check",
    ],
  },
  {
    id: 5,
    title: "Tyre Rotation",
    description:
      "Rotating your tyres at regular intervals to promote even wear and extend tyre life.",
    image:
      "https://www.power-steering.co.uk/wp-content/uploads/2019/03/tyre-rotation.jpg",
    features: [
      "Front-to-rear rotation",
      "Wear pattern analysis",
      "Pressure check",
    ],
  },
  {
    id: 6,
    title: "Nitrogen Tyre Inflation",
    description:
      "Inflate your tyres with nitrogen for more consistent pressure, better fuel economy, and longer tyre life.",
    image:
      "https://images.ctfassets.net/2sam6k0rncvg/4p2SkKxAbb6KZgLnPKYnY8/30893e194143b71cee8adc3ceaca959c/nitrogen-tyre-inflation-in-cars.jpg",
    features: [
      "Enhanced pressure retention",
      "Better fuel efficiency",
      "Extended tyre life",
    ],
  },
  {
    id: 7,
    title: "Car Accessories",
    description:
      "High-quality car accessories to enhance the style, comfort, and functionality of your vehicle.",
    image:
      "https://images.unsplash.com/photo-1627913434632-b4717be3485a?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8Q2FyJTIwYWNjZXNzb3JpZXN8ZW58MHx8MHx8fDA%3D",
    features: [
      "Seat covers and mats",
      "Dash cams and sensors",
      "Car cleaning kits",
    ],
  },
  {
    id: 8,
    title: "Car Washing",
    description:
      "Professional car wash services to maintain your vehicle’s appearance and protect its paint.",
    image:
      "https://plus.unsplash.com/premium_photo-1661454209648-4764099a9be9?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NXx8Q2FyJTIwd2FzaGluZ3xlbnwwfHwwfHx8MA%3D%3D",
    features: [
      "Exterior hand wash",
      "Interior vacuuming",
      "Wax and polish options",
    ],
  },
];


const tyreTypes = [
  {
    name: "Summer Tyres",
    description: "Optimized for warm weather performance",
  },
  {
    name: "Winter Tyres",
    description: "Enhanced grip in cold and snowy conditions",
  },
  { name: "All-Season Tyres", description: "Balanced performance year-round" },
  {
    name: "Run-Flat Tyres",
    description: "Can be driven on temporarily after a puncture",
  },
  {
    name: "Performance Tyres",
    description: "Superior handling for sports vehicles",
  },
  {
    name: "SUV Tyres",
    description: "Designed for durability and comfort in larger vehicles",
  },
];

const Services: React.FC = () => {
  return (
    <section
      id="services"
      className="py-20 bg-gradient-to-b from-gray-50 to-gray-100 relative overflow-hidden"
    >
      {/* Decorative elements */}
      <div className="absolute -top-20 -right-20 w-64 h-64 bg-blue-900 rounded-full opacity-10 blur-3xl"></div>
      <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-red-600 rounded-full opacity-10 blur-3xl"></div>

      <div className="container mx-auto px-4 relative z-10">
        {/* Animated header */}
        <div className="text-center mb-16 animate-fade-in-up">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            <span className="relative inline-block">
              Our Premium Services
              <span className="absolute bottom-0 left-0 w-full h-1 bg-gradient-to-r from-blue-600 to-red-600 rounded-full transform scale-x-0 origin-left transition-transform duration-500 group-hover:scale-x-100"></span>
            </span>
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto leading-relaxed">
            We offer comprehensive tyre services performed by certified
            technicians using state-of-the-art equipment.
          </p>
        </div>

        {/* Staggered service cards */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-16">
          {services.map((service, index) => (
            <div
              key={service.id}
              className="animate-fade-in-up"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              <ServiceCard {...service} />
            </div>
          ))}
        </div>

        {/* Tyre types section with hover animations */}
        <div className="bg-white rounded-xl shadow-lg p-8 mt-16 relative overflow-hidden group">
          {/* Background gradient animation */}
          <div className="absolute inset-0 bg-gradient-to-r from-blue-50 to-red-50 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>

          <h3 className="text-2xl font-bold text-gray-900 mb-6 text-center relative z-10">
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-blue-600 to-red-600">
              Tyre Types We Offer
            </span>
          </h3>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 relative z-10">
            {tyreTypes.map((type, index) => (
              <div
                key={index}
                className="flex items-start p-4 border border-gray-100 rounded-lg hover:shadow-md transition-all duration-300 hover:-translate-y-1 bg-white/90 hover:bg-white backdrop-blur-sm"
              >
                <div className="p-1.5 bg-gradient-to-br from-blue-600 to-red-600 rounded-full mr-3">
                  <Check className="text-white w-4 h-4" strokeWidth={3} />
                </div>
                <div>
                  <h4 className="font-semibold text-gray-800">{type.name}</h4>
                  <p className="text-gray-600 text-sm mt-1">
                    {type.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Add these animations to your global CSS or Tailwind config */}
      <style jsx global>{`
        @keyframes fadeInUp {
          from {
            opacity: 0;
            transform: translateY(20px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
        .animate-fade-in-up {
          animation: fadeInUp 0.6s ease-out forwards;
          opacity: 0;
        }
      `}</style>
    </section>
  );
};

export default Services;
