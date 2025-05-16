import React from "react";

import PropTypes from "prop-types";
import { Link } from "react-router-dom";








export const AboutUs17 = () => {
    return (
        <section className="ezy__about17 light pt-14 md:pt-24 pb-14 lg:pb-0 bg-white nullbg-[#0b1727] text-zinc-900 nulltext-white relative overflow-hidden z-[1]">

            <div className=" px-4">
                <div className="grid grid-cols-12 justify-between items-center md:space-x-28">
                    <div className="col-span-12 md:col-span-5">
                        <div className="relative">
                            <img src="./section6.jpg" alt="" />
                        </div>
                    </div>
                    <div className="col-span-12 md:col-span-6 md:mr-4">
                        <div>
                            <h2 className="text-2xl leading-tight font-bold md:text-5xl mt-4">
                                Our Bestsellers
                            </h2>
                            <p className="text-base sm:text-lg leading-relaxed opacity-80 my-6 lg:pr-12">

                            Discover the books that readers love the most! Our bestsellers list features top-rated books across different genres, handpicked based on customer reviews and sales. Whether you're into thrilling mysteries, heartwarming romances, or insightful non-fiction, there's a bestseller waiting for you.
                            </p>

                        </div>
                        <div className="flex flex-col sm:flex-row mt-12">
                            <Link
                               to={"/shop"}
                                className="px-10 py-3  nullborder-white text-center bg-[#F36C33] font-bold text-xl text-white  rounded-full transition"
                            >
                                shop now
                            </Link>
                           
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};
