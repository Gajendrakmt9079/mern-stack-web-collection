import React from 'react';
import { AboutUs2 } from '../components/About11';
import { AboutUs15 } from '../components/About12';

const HelpPage = () => {
  return (
    <>   <AboutUs15 />
      <AboutUs2 />

      <div className="container px-4">
        <div className="max-w-4xl mx-auto p-6">
          <h1 className="text-4xl font-bold text-center text-gray-800 mb-6">About Us</h1>
          <p className="text-lg text-gray-600 text-center mb-6">
            Welcome to <span className="font-semibold">book online shop</span> – your go-to destination for discovering and purchasing your favorite books.
            Whether you're a fan of timeless classics, thrilling mysteries, inspiring biographies, or educational resources,
            we have something for every book lover.
          </p>
          <div className="bg-gray-100 p-6 rounded-lg shadow-lg">
            <h2 className="text-2xl font-semibold text-gray-800 mb-4">Our Mission</h2>
            <p className="text-gray-700">
              At Book online store, our mission is to bring the joy of reading to everyone. We offer a vast collection of books
              at competitive prices with a seamless shopping experience. Whether you're looking for a novel to escape into
              or a textbook to support your studies, we ensure quality and affordability for all readers.
            </p>
          </div>
          <div className="mt-6">
            <h2 className="text-2xl font-semibold text-gray-800 mb-4">Why Choose Us?</h2>
            <ul className="list-disc list-inside text-gray-700">
              <li>Extensive collection across all genres and categories</li>
              <li>Convenient and secure online shopping experience</li>
              <li>Exclusive discounts and special offers for book enthusiasts</li>
              <li>Fast and reliable delivery service to your doorstep</li>
              <li>Dedicated customer support to assist you at every step</li>
            </ul>
          </div>
          <div className="mt-6 text-center">
            <p className="text-lg text-gray-600">
              Join us in exploring new stories, ideas, and perspectives. Let’s celebrate the love for books together!
              Happy reading!
            </p>
          </div>
        </div>
      </div>
    </>
  );
};

export default HelpPage;
