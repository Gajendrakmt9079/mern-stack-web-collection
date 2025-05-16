import React from "react";

export const AboutUs15 = () => {
	return (
		<section className="ezy__about15 light py-14 md:py-24 bg-white nullbg-[#0b1727] text-zinc-900 nulltext-white relative z-[1]">
			<div className="absolute top-0 left-0 right-0 bottom-0 w-[30vw] bg-blue-600 bg-opacity-30 -z-[1]" />
			<div className="container px-4">
				<div className="grid grid-cols-12 gap-5 items-center">
					<div className="col-span-12 lg:col-span-4">
						<div>
							<img
								src="./section9.jpg"
								alt=""
								className="max-w-full h-auto"
							/>
						</div>
					</div>
					<div className="col-span-12 md:col-span-6 lg:col-span-4">
						<div>
							<h1 className="text-3xl md:text-5xl font-bold mb-4">About Us</h1>
							<p className="opacity-75">
                            Welcome to book online shop, where passion for books meets convenience and diversity. We believe that every book holds a world of knowledge, adventure, and inspiration, and our mission is to bring these worlds to your fingertips. Whether you're an avid reader, a student seeking academic resources, or someone exploring new genres, our extensive collection has something for everyone.
							</p>
						</div>
					</div>
					<div className="col-span-12 md:col-span-6 lg:col-span-4">
						<div>
							<p className="opacity-75 mt-4">
                            Beyond selling books, we strive to create a community of book lovers. We host virtual book clubs, author interviews, and exclusive literary events to engage readers in meaningful discussions. With our seamless ordering process, secure payment options, and fast delivery, your next favorite book is just a click away.
							</p>
						</div>
					</div>
				</div>
			</div>
		</section>
	);
};
