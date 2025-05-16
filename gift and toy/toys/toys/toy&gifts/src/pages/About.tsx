import React from 'react';
import { Building, Users, Target, Award } from 'lucide-react';

export function About() {
  return (
    <div className="bg-gray-50 min-h-screen">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="text-center mb-16">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">About GiftHub</h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            We're passionate about bringing joy through carefully curated gifts and toys.
            Our mission is to make gift-giving a delightful experience for everyone.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
          <div className="text-center p-6">
            <div className="bg-indigo-100 p-4 rounded-full w-16 h-16 mx-auto mb-4 flex items-center justify-center">
              <Building className="h-8 w-8 text-indigo-600" />
            </div>
            <h3 className="text-xl font-semibold mb-2">Founded in 2020</h3>
            <p className="text-gray-600">Started with a vision to revolutionize gift shopping</p>
          </div>
          <div className="text-center p-6">
            <div className="bg-indigo-100 p-4 rounded-full w-16 h-16 mx-auto mb-4 flex items-center justify-center">
              <Users className="h-8 w-8 text-indigo-600" />
            </div>
            <h3 className="text-xl font-semibold mb-2">50,000+ Customers</h3>
            <p className="text-gray-600">Trusted by thousands of happy customers</p>
          </div>
          <div className="text-center p-6">
            <div className="bg-indigo-100 p-4 rounded-full w-16 h-16 mx-auto mb-4 flex items-center justify-center">
              <Target className="h-8 w-8 text-indigo-600" />
            </div>
            <h3 className="text-xl font-semibold mb-2">1000+ Products</h3>
            <p className="text-gray-600">Carefully curated selection of unique gifts</p>
          </div>
          <div className="text-center p-6">
            <div className="bg-indigo-100 p-4 rounded-full w-16 h-16 mx-auto mb-4 flex items-center justify-center">
              <Award className="h-8 w-8 text-indigo-600" />
            </div>
            <h3 className="text-xl font-semibold mb-2">Quality First</h3>
            <p className="text-gray-600">Only the highest quality products make the cut</p>
          </div>
        </div>

        <div className="bg-white rounded-lg shadow-lg p-8 mb-16">
          <h2 className="text-3xl font-bold text-gray-900 mb-6">Our Story</h2>
          <div className="prose max-w-none text-gray-600">
            <p className="mb-4">
              GiftHub was born from a simple idea: make gift-giving easier and more meaningful.
              We understand the joy of finding the perfect gift and the smile it brings to
              someone's face.
            </p>
            <p className="mb-4">
              Our team of gift experts works tirelessly to curate a selection of unique,
              high-quality products that cater to all ages and occasions. We believe that
              every gift tells a story, and we're here to help you tell yours.
            </p>
            <p>
              From educational toys that spark curiosity to personalized gifts that create
              lasting memories, we're committed to bringing joy to every doorstep.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}