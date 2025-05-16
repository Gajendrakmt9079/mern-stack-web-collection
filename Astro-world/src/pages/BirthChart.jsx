import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

export default function BirthChart() {
  const navigate = useNavigate();

 

  const [birthData, setBirthData] = useState({
    name: '',
    date: '',
    time: '',
    location: ''
  });

  const handleSubmit = (e) => {
    e.preventDefault();
   
    navigate('/birth-chart-result', { state: { birthData } });


    // Handle birth chart calculation here
  };

  return (
    <div className="py-12 px-6 max-w-7xl mx-auto">
      <div className="text-center mb-12">
        <h1 className="text-4xl font-bold text-gray-900 dark:text-white mb-4">
          Birth Chart Calculator
        </h1>
        <p className="text-lg text-gray-600 dark:text-gray-300">
          Discover your unique astrological blueprint
        </p>
      </div>

      <div className="max-w-xl mx-auto">
        <form onSubmit={handleSubmit} className="space-y-6  px-5  py-3 hover:scale-105 transition-all duration-300   shadow-lg   rounded-xl">
          <div>
            <label htmlFor="name" className="block text-sm font-medium text-gray-700 dark:text-gray-300">
              Name
            </label>
            <input
              type="text"
              id="name"
              value={birthData.name}
              onChange={(e) => setBirthData({ ...birthData, name: e.target.value })}
              className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-purple-500 focus:ring-purple-500 dark:bg-gray-700 dark:border-gray-600"
              required
            />
          </div>

          <div>
            <label htmlFor="date" className="block text-sm font-medium text-gray-700 dark:text-gray-300">
              Birth Date
            </label>
            <input
              type="date"
              id="date"
              value={birthData.date}
              onChange={(e) => setBirthData({ ...birthData, date: e.target.value })}
              className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-purple-500 focus:ring-purple-500 dark:bg-gray-700 dark:border-gray-600"
              required
            />
          </div>

          <div>
            <label htmlFor="time" className="block text-sm font-medium text-gray-700 dark:text-gray-300">
              Birth Time (if known)
            </label>
            <input
              type="time"
              id="time"
              value={birthData.time}
              onChange={(e) => setBirthData({ ...birthData, time: e.target.value })}
              className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-purple-500 focus:ring-purple-500 dark:bg-gray-700 dark:border-gray-600"
            />
          </div>

          <div>
            <label htmlFor="location" className="block text-sm font-medium text-gray-700 dark:text-gray-300">
              Birth Location
            </label>
            <input
              type="text"
              id="location"
              value={birthData.location}
              onChange={(e) => setBirthData({ ...birthData, location: e.target.value })}
              placeholder="City, Country"
              className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-purple-500 focus:ring-purple-500 dark:bg-gray-700 dark:border-gray-600"
              required
            />
          </div>

          <button
            type="submit"

            className="w-full flex justify-center py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-purple-600 hover:bg-purple-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-purple-500"
          >
            Generate Birth Chart
          </button>
        </form>

        <div className="mt-8 p-6 bg-white dark:bg-gray-800 rounded-lg shadow-2xl hover:scale-105 transition-all duration-300 ">
          <h2 className="text-xl font-semibold mb-4 text-gray-900 dark:text-white">
            What is a Birth Chart?
          </h2>
          <p className="text-gray-600 dark:text-gray-300">
            A birth chart, also known as a natal chart, is a snapshot of the sky at the exact moment 
            of your birth. It reveals the positions of the sun, moon, planets, and other astrological 
            points at the time you were born. This Astro world blueprint can provide insights into your 
            personality, life path, and potential.
          </p>
        </div>
      </div>
      <div className="absolute inset-x-0 -top-40 -z-10 transform-gpu overflow-hidden blur-3xl sm:-top-80">
          <div className="relative   aspect-[1155/678] w-[36.125rem] -translate-y-1/2 rotate-[30deg] bg-gradient-to-tr from-purple-600 to-indigo-600 opacity-30 sm:left-[calc(50%-30rem)] sm:w-[72.1875rem]" />
        </div>  
    </div>
  );
}