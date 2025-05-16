import React from 'react';
import { Link } from 'react-router-dom';

const Hero = () => {
  return (
    <section className="flex max-h-[80%] items-center  justify-center min-h-screen relative bg-[url(https://www.trihard.co/cdn/shop/files/mobile-banner_1_c6c9514c-794f-4d13-a062-54942fa6c830_300x.webp?v=1729010374)] md:bg-[url(https://www.trihard.co/cdn/shop/files/desktop-banner_1450x.webp?v=1727187073)] bg-center bg-cover">
      <div className="container flex flex-col items-center justify-center text-center ">
        <h1 className="mb-4 uppercase font-mono text-4xl  md:text-5xl lg:text-8xl text-white">
        Swim & Pool Lovers’ <br />
        Personal Care
        </h1>
        <p className="mb-6  text-xl text-white max-w-2xl">
        The ultimate chlorine and saltwater defense
        </p>
        {/* <div className="flex flex-wrap gap-4 justify-center">
          <Link to="/bestsellers" className="btn bg-gray-500 ring-gray-500 ring-1 hover:bg-gray-600 text-gray-100">
            Shop Bestsellers
          </Link>
          <Link to="/skin-care" className="btn ring-gray-500 ring-1 hover:bg-gray-500 text-gray-100">
            Explore Skincare
          </Link>
        </div> */}
      </div>
    </section>
  );
};

export default Hero;
