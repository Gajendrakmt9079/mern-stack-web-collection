import React from "react";
import {
  ChefHat,
  Clock,
  Star,
  Book,
  Video,
  Users,
  Award,
  Utensils,
} from "lucide-react";
import { Link } from "react-router-dom";
import { Carousel } from "react-responsive-carousel";

const Home: React.FC = () => {
  const carouselImages = [
    "https://images.unsplash.com/photo-1528712306091-ed0763094c98?w=600&auto=format&fit=crop&q=60",
    "https://plus.unsplash.com/premium_photo-1683707120097-0fafdfb332c7?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8Y29va2luZyUyMGNsYXNzZXN8ZW58MHx8MHx8fDA%3D",
    "https://images.unsplash.com/photo-1578366941741-9e517759c620?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8Y29va2luZyUyMGNsYXNzZXN8ZW58MHx8MHx8fDA%3D",
  ];
  return (
    <div className="space-y-16">
      {/* Hero Section */}
      <section className="relative rounded-xl md:h-[80vh] h-[70vh]  overflow-hidden flex items-center">
        <Carousel
          autoPlay
          infiniteLoop
          showThumbs={false}
          showStatus={false}
          className="w-full  h-[80vh] "
        >
          {carouselImages.map((image, index) => (
            <div key={index} className="relative ">
              <img
                src={image}
                className="w-full h-[80vh]  object-cover"
                alt="Cooking class"
              />
            </div>
          ))}
        </Carousel>
        <div className="absolute inset-0 flex flex-col items-center justify-center text-center px-4">
          <h1 className="text-5xl md:text-6xl font-bold text-white mb-6">
            Cook what you want to eat
          </h1>
          <p className="text-xl text-white mb-8 max-w-2xl">
            Join our expert-led classes and discover the secrets of professional
            cooking. From basics to advanced techniques, we'll help you become
            the chef you've always wanted to be.
          </p>
          <Link
            to="/classes"
            className="bg-orange-500 text-white px-8 py-3 rounded-lg text-lg font-semibold hover:bg-orange-600 transition-colors"
          >
            Start Learning
          </Link>
        </div>
      </section>
      {/* Featured Recipes */}
      <section className="bg-gray-100 dark:bg-gray-800 py-16">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12 dark:text-white">
            Featured Recipes
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                title: "Italian Pasta Masterclass",
                image:
                  "https://images.unsplash.com/photo-1551183053-bf91a1d81141?auto=format&fit=crop&q=80",
                level: "Intermediate",
                duration: "2 hours",
              },
              {
                title: "French Pastry Basics",
                image:
                  "https://images.unsplash.com/photo-1702742322469-36315505728f?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8RnJlbmNoJTIwUGFzdHJ5JTIwQmFzaWNzfGVufDB8fDB8fHww",
                level: "Beginner",
                duration: "1.5 hours",
              },
              {
                title: "Asian Fusion Cooking",
                image:
                  "https://images.unsplash.com/photo-1512058564366-18510be2db19?auto=format&fit=crop&q=80",
                level: "Advanced",
                duration: "2.5 hours",
              },
            ].map((recipe, index) => (
              <Link
                to={"/classes"}
                key={index}
                className="bg-white dark:bg-gray-700 rounded-lg hover:scale-105  overflow-hidden shadow-lg"
              >
                <img
                  src={recipe.image}
                  alt={recipe.title}
                  className="w-full h-48 object-cover"
                />
                <div className="p-6">
                  <h3 className="text-xl font-semibold mb-2 dark:text-white">
                    {recipe.title}
                  </h3>
                  <div className="flex items-center text-gray-600 dark:text-gray-300 space-x-4">
                    <span className="flex items-center">
                      <Clock size={16} className="mr-1" /> {recipe.duration}
                    </span>
                    <span className="flex items-center">
                      <Star size={16} className="mr-1" /> {recipe.level}
                    </span>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>
      {/* Features Section */}
      <section className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-12 dark:text-white">
          Why Choose CulinaryMaster?
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {[
            {
              icon: <ChefHat className="w-8 h-8" />,
              title: "Expert Instructors",
            },
            { icon: <Video className="w-8 h-8" />, title: "HD Video Lessons" },
            { icon: <Book className="w-8 h-8" />, title: "Detailed Recipes" },
            { icon: <Users className="w-8 h-8" />, title: "Community Support" },
          ].map((feature, index) => (
            <div
              key={index}
              className="text-center p-6 rounded-lg hover:scale-105 duration-100   bg-white dark:bg-gray-800 shadow-lg"
            >
              <div className="text-orange-500 mb-4 flex justify-center">
                {feature.icon}
              </div>
              <h3 className="text-xl  font-semibold mb-2 dark:text-white">
                {feature.title}
              </h3>
            </div>
          ))}
        </div>
      </section>

      {/* Testimonials */}
      <section className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-12  dark:text-white">
          What Our Students Say
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {[
            {
              name: "Sarah Johnson",
              role: "Home Chef",
              image:
                "https://img.freepik.com/premium-photo/png-young-indian-business-woman-portrait-blouse-pink_53876-863708.jpg?ga=GA1.1.1383859022.1741084632&semt=ais_hybrid",
              text: "The courses have transformed my cooking skills. I've learned techniques I never knew existed!",
            },
            {
              name: "Michael Chen",
              role: "Food Blogger",
              image:
                "https://img.freepik.com/free-photo/photo-handsome-unshaven-guy-looks-with-pleasant-expression-directly-camera_176532-8164.jpg?ga=GA1.1.1383859022.1741084632&semt=ais_hybrid",
              text: "Incredible instructors and well-structured lessons. I'm now confident in creating my own recipes.",
            },
            {
              name: "Emma Davis",
              role: "Restaurant Owner",
              image:
                "https://img.freepik.com/free-photo/indian-man-smiling-mockup-psd-cheerful-expression-closeup-portra_53876-143269.jpg?ga=GA1.1.1383859022.1741084632&semt=ais_hybrid",
              text: "The professional techniques taught here have helped me improve my restaurant's menu significantly.",
            },
          ].map((testimonial, index) => (
            <div
              key={index}
              className="bg-white hover:shadow-xl hover:scale-105 hover:shadow-orange-600 hover:text-orange-500 dark:bg-gray-800 p-6 rounded-lg shadow-lg"
            >
              <div className="flex items-center mb-4">
                <img
                  src={testimonial.image}
                  alt={testimonial.name}
                  className="w-14 h-14 rounded-full mr-4"
                />
                <div>
                  <h4 className="font-semibold dark:text-white">
                    {testimonial.name}
                  </h4>
                  <p className="text-gray-600 dark:text-gray-400">
                    {testimonial.role}
                  </p>
                </div>
              </div>
              <p className="text-gray-700 dark:text-gray-300">
                {testimonial.text}
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* Statistics */}
      <section className="bg-orange-500 text-white py-16">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8 text-center">
            {[
              {
                icon: <Users className="w-8 h-8" />,
                number: "10,000+",
                label: "Students",
              },
              {
                icon: <Video className="w-8 h-8" />,
                number: "200+",
                label: "Video Lessons",
              },
              {
                icon: <Utensils className="w-8 h-8" />,
                number: "500+",
                label: "Recipes",
              },
              {
                icon: <Award className="w-8 h-8" />,
                number: "50+",
                label: "Awards",
              },
            ].map((stat, index) => (
              <div key={index}>
                <div className="flex justify-center mb-4">{stat.icon}</div>
                <div className="text-4xl font-bold mb-2">{stat.number}</div>
                <div className="text-lg">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="container mx-auto px-4 text-center py-16">
        <h2 className="text-3xl font-bold mb-6 dark:text-white">
          Ready to Start Your Culinary Journey?
        </h2>
        <p className="text-xl text-gray-600 dark:text-gray-400 mb-8 max-w-2xl mx-auto">
          Join thousands of students who have transformed their cooking skills
          with our expert-led classes.
        </p>
        <Link
          to={"/classes"}
          className="bg-orange-500 text-white px-8 py-3 rounded-lg text-lg font-semibold hover:bg-orange-600 transition-colors"
        >
          Browse Classes
        </Link>
      </section>
    </div>
  );
};

export default Home;
