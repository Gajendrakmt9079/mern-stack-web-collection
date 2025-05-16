import React from "react";
import { Link } from "react-router-dom";

export const AboutUs16 = () => {
    return (
        <section className="w-full p-4 sm:p-8 md:p-16 lg:p-32 bg-sky-300 my-6 sm:my-8 md:my-12 overflow-hidden">

            <div className="px-4 sm:px-6 md:px-8 py-8 sm:py-12 bg-white rounded-xl md:rounded-2xl lg:rounded-3xl h-auto md:h-[80vh] relative overflow-hidden">
                <div className="flex flex-col lg:flex-row justify-between items-center gap-8">

                    <div className="w-full lg:w-[50%] flex justify-center">
                        <img 
                            src="https://i.gr-assets.com/images/S/compressed.photo.goodreads.com/books/1611937942l/56732449.jpg" 
                            alt="Our Bestsellers" 
                            className="h-auto max-h-[50vh] md:max-h-[75vh] w-auto object-contain" 
                        />
                    </div>

                    <div className="w-full lg:w-[50%] text-center lg:text-left">
                        <div>
                            <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold mt-4">
                            Pride and Prejudice
                            </h2>
                            <p className="text-base sm:text-lg leading-relaxed opacity-80 my-4 sm:my-6 lg:pr-0 xl:pr-12">
                            Immerse yourself in the captivating world of "The Cravings of the Night," our latest release. This gripping novel blends elements of suspense, mystery, and supernatural intrigue, taking readers on a thrilling journey through the shadows of the night
                            </p>
                            <Link
                                to={"/product/3"}
                                className="inline-block px-6 sm:px-8 md:px-10 py-2 sm:py-3 bg-[#F36C33] font-bold text-lg sm:text-xl text-white rounded-full transition hover:opacity-90"
                            >
                                Buy now
                            </Link>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};