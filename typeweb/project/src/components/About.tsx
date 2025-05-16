import React from 'react';
import { Users, Trophy, Clock, ShieldCheck } from 'lucide-react';

const About: React.FC = () => {
  return (
    <section id="about" className="relative py-24 bg-gradient-to-b from-gray-50 to-white overflow-hidden">
      {/* Decorative elements */}
      <div className="absolute top-0 left-0 w-full h-full opacity-5">
        <div className="absolute top-20 left-10 w-32 h-32 bg-blue-600 rounded-full blur-3xl"></div>
        <div className="absolute bottom-10 right-10 w-40 h-40 bg-red-600 rounded-full blur-3xl"></div>
      </div>
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="flex flex-col lg:flex-row gap-12 xl:gap-20 items-center">
          {/* Text content with animations */}
          <div className="lg:w-1/2 space-y-8">
            <div className="animate-fade-in-up">
              <h2 className="text-4xl md:text-4xl font-bold text-gray-900 mb-6 leading-tight">
                <span className="relative inline-block">
                  About <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-red-600">KHORANIYA TYRES</span>
                  <span className="absolute bottom-0 left-0 w-full h-1.5 bg-gradient-to-r from-blue-600 to-red-600 rounded-full transform origin-left transition-all duration-700 scale-x-0 group-hover:scale-x-100"></span>
                </span>
              </h2>
              
              <p className="text-gray-700 mb-6 text-lg leading-relaxed animate-fade-in-up" style={{ animationDelay: '100ms' }}>
                Since 2013, KHORANIYA TYRES has been the trusted name in automotive care, specializing in premium tyre services for all types of vehicles. Our team of certified technicians brings decades of combined experience to every job.
              </p>
              
              <p className="text-gray-700 mb-8 text-lg leading-relaxed animate-fade-in-up" style={{ animationDelay: '200ms' }}>
                We pride ourselves on honest advice, quality workmanship, and exceptional customer service. Our state-of-the-art facilities and diagnostic equipment ensure your vehicle gets the best care possible.
              </p>
            </div>
            
            {/* Features grid with hover animations */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mb-8">
              {[
                { icon: <Users size={24} />, title: "Expert Team", description: "Certified professionals with years of experience" },
                { icon: <Trophy size={24} />, title: "Quality Guarantee", description: "Only premium brands and parts" },
                { icon: <Clock size={24} />, title: "Fast Service", description: "Efficient work without cutting corners" },
                { icon: <ShieldCheck size={24} />, title: "Safety First", description: "Your safety is our top priority" }
              ].map((item, index) => (
                <div 
                  key={index}
                  className="flex items-start p-4 rounded-xl bg-white shadow-sm hover:shadow-md transition-all duration-300 hover:-translate-y-1 border border-gray-100 animate-fade-in-up"
                  style={{ animationDelay: `${300 + (index * 100)}ms` }}
                >
                  <div className="bg-gradient-to-br from-blue-600 to-red-600 p-3 rounded-full text-white mr-4 flex-shrink-0 shadow-md">
                    {item.icon}
                  </div>
                  <div>
                    <h3 className="font-bold text-gray-900 mb-1 text-lg">{item.title}</h3>
                    <p className="text-gray-600 text-sm leading-relaxed">{item.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
          
          {/* Image gallery with parallax effect */}
          <div className="lg:w-[60%] grid grid-cols-2 gap-4 relative border border-gray-200 rounded-lg overflow-hidden shadow-lg">
          
          <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d263.94030091128144!2d74.84634123104071!3d27.120297783082403!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x396b794a6313f8f1%3A0x13e245e676af1eed!2sKhoraniya%20Tyres!5e0!3m2!1sen!2sin!4v1745835207298!5m2!1sen!2sin" className='md:w-[700px] w-96 h-[300px] md:h-[500px]'   loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
          </div>
        </div>
      </div>

      {/* Animation styles */}
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
          animation: fadeInUp 0.8s ease-out forwards;
          opacity: 0;
        }
      `}</style>
    </section>
  );
};

export default About;