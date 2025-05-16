import React from "react";
import { Link } from "react-router-dom";

const Shape = () => (
	<img
		src="https://cdn.easyfrontend.com/pictures/hero/hero_28.svg"
		alt=""
		className="absolute left-1/2 -translate-x-1/2 bottom-0 -z-[1] rounded-[50px] img-fluid"
	/>
);

export const HeroHeader25 = () => {
	return (
		<section className="flex justify-center md:my-12 light pt-12 bg-white nullbg-[#0b1727] text-zinc-900 nulltext-white relative overflow-hidden z-[1]">
			<div className=" px-4 ">
				<div className="grid grid-cols-12 gap-y-6 lg:gap-x-6 text-center lg:text-start items-center">
					<div className="col-span-10 lg:col-span-6 py-12 ml-6 md:ml-16 justify-items-center w-[100%] md:w-[70%]">
						<h1 className="text-3xl font-bold leading-[1.1] md:text-[62px] mb-2">
						Explore Our Wide Selection
						</h1>
						<p className="text-[22px] text-gray-500 text-justify leading-snug opacity-80 my-6">
						At our book-online shop, we pride ourselves on offering a diverse and ever-expanding collection of books that cater to a wide range of literary tastes

						</p>
					

						<div>
							<Link
								to={"/shop"}
								className="bg-[#F86D3C] rounded-2xl py-3 px-8 hover:bg-opacity-90 duration-300 text-white text-xl inline-flex mt-6 md:mt-12"
							>
								Browse Books
							</Link>
						</div>
					</div>
					<div className="col-span-12 lg:col-span-6">
						<div className="relative ml-6 ">
							<Shape />
							<img
								src="./section2.jpg"
								alt=""
								className="relative left-1/2 -translate-x-[55%] img-fluid"
							/>
						</div>
					</div>
				</div>
			</div>
		</section>
	);
};
