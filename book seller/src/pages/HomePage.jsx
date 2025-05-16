import React from 'react'
import { Link } from 'react-router-dom'
import HeroCarousel from './hero'
import { HeroHeader25 } from '../components/section2';
import { Team20 } from '../components/Feasturetitkes';
import { AboutUs17 } from '../components/Bestseller';
import { AboutUs16 } from '../components/featurebook';
import BrandLogos from '../components/BrandLogo';
import Testimonials from './Testmon';




function HomePage() {
  return (
    <div className='flex justify-center flex-col'>
      <div className='flex  justify-center w-[100vw] h-fit '>
        <div className="relative w-screen bg-[url(./section1.jpg)] h-full  bg-cover bg-center">
          <div className="mx-auto max-w-7xl">
            <div className="relative z-10 lg:w-full lg:max-w-2xl">
              <div className="relative px-6 py-24 sm:py-40 lg:px-5 lg:py-40 lg:pr-0">
                <div className="mx-auto max-w-2xl lg:mx-0 lg:max-w-xl">
                  <h1 className="text-4xl font-bold tracking-tight text-gray-900 sm:text-6xl">
                  Discover the Joy of this world
                  </h1>
                  <p className="mt-6 text-lg leading-8 text-gray-600">
                  Welcome to our book-online shop, where we offer a curated selection of thought-provoking literature, captivating narratives
                  </p>
                  <div className="mt-10 flex md:items-center items-start md:flex-row  gap-6">
                    <Link
                      to="/shop"
                      className="rounded-md bg-[#EF723D] px-3.5 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-orange-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary-600"
                    >
                     Shop Now
                    </Link>
                    <Link
                      to="/help"
                      className="rounded-md bg-white px-3.5 py-2.5 text-sm font-semibold text-black shadow-sm hover:bg-[#EF723D] hover:text-white focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary-600"
                    >
                     Learn More
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

    <HeroHeader25/>
    <Team20/>
    <AboutUs17/>
    <Testimonials/>
 <AboutUs16/>
 <BrandLogos/>
      
    </div>
  );
}

export default HomePage