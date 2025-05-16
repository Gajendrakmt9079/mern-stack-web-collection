import React from 'react';
import { Link } from 'react-router-dom';

export default function Home() {
  return (
    <div className="relative isolate">
      {/* Hero section */}
      <div className="relative pt-14">
        <div className="absolute inset-x-0 -top-40 -z-10 transform-gpu overflow-hidden blur-3xl sm:-top-80">
          <div className="relative left-[calc(50%-11rem)] aspect-[1155/678] w-[36.125rem] -translate-x-1/2 rotate-[30deg] bg-gradient-to-tr from-purple-600 to-indigo-600 opacity-30 sm:left-[calc(50%-30rem)] sm:w-[72.1875rem]" />
        </div>
        
        <div className="mx-auto max-w-7xl px-6 py-24 sm:py-32 lg:px-8 ">
          <div className="mx-auto max-w-2xl text-center">
            <h1 className="text-4xl font-bold tracking-tight text-gray-900 dark:text-white sm:text-6xl">
              Discover Your Cosmic Path
            </h1>
            <p className="mt-6 text-lg leading-8 text-gray-600 dark:text-gray-300">
              Explore the ancient wisdom of astrology and unlock the secrets written in the stars. 
              Get personalized insights into your life's journey through daily horoscopes, birth charts, 
              and Astro world guidance.
            </p>
            <div className="mt-10 flex items-center justify-center gap-x-6">
              <Link
                to="/birth-chart"
                className="rounded-md bg-purple-600 px-3.5 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-purple-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-purple-600"
              >
                Get Your Birth Chart
              </Link>
              <Link
                to="/daily-horoscope"
                className="text-sm font-semibold leading-6 text-gray-900 dark:text-white"
              >
                Daily Horoscope <span aria-hidden="true">→</span>
              </Link>
            </div>
          </div>
        </div>
      </div>

      {/* Features section */}
      <div className="mx-auto max-w-7xl px-6 py-24 sm:py-32 lg:px-8 ">
        <div className="mx-auto max-w-2xl lg:text-center">
          <h2 className="text-base font-semibold leading-7 text-purple-600">Astro world Services</h2>
          <p className="mt-2 text-3xl font-bold tracking-tight text-gray-900 dark:text-white sm:text-4xl">
            Everything you need for your astrological journey
          </p>
        </div>

        <div className="mx-auto mt-16 max-w-2xl sm:mt-20 lg:mt-24 lg:max-w-none ">
          <dl className="grid max-w-xl grid-cols-1 gap-x-8 gap-y-16 lg:max-w-none lg:grid-cols-3">
            {[
              {
                title: 'Daily Horoscopes',
                description: 'Get personalized daily insights based on your zodiac sign and planetary positions.',
                link: '/daily-horoscope'
              },
              {
                title: 'Birth Chart Analysis',
                description: 'Discover your unique cosmic blueprint with a detailed natal chart reading.',
                link: '/birth-chart'
              },
              {
                title: 'Compatibility Guide',
                description: 'Explore relationship dynamics with our comprehensive compatibility analysis.',
                link: '/compatibility'
              }
            ].map((feature) => (
              <div key={feature.title} className="flex flex-col hover:scale-105 bg-purple-50 dark:bg-gray-800 hover:shadow-xl hover:bg-purple-100 dark:hover:bg-gray-700 p-4 rounded-lg">
                <dt className="text-lg font-semibold leading-7 text-gray-900 dark:text-white">
                  {feature.title}
                </dt>
                <dd className="mt-4 flex flex-auto flex-col text-base leading-7 text-gray-600 dark:text-gray-300">
                  <p className="flex-auto">{feature.description}</p>
                  <p className="mt-6">
                    <Link
                      to={feature.link}
                      className="text-sm font-semibold leading-6 text-purple-600  dark:text-purple-400"
                    >
                      Learn more <span aria-hidden="true">→</span>
                    </Link>
                  </p>
                </dd>
              </div>
            ))}
          </dl>
        </div>
      </div>
    </div>
  );
}