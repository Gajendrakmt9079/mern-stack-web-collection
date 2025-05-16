import React from "react";
import PropTypes from "prop-types";

const ProductItem = ({ imageUrl, description }) => {
	return (
		<div className="w-full md:w-1/2">
			<div className="py-4">
				<div className="text-center md:mt-4">
					<img
						src={imageUrl}
						alt=""
						className="max-w-full h-auto w-full rounded mx-auto"
					/>
				</div>
				<p className="mt-4 md:mx-4 text-[17px] opacity-70">{description}</p>
			</div>
		</div>
	);
};

ProductItem.propTypes = {
	imageUrl: PropTypes.string.isRequired,
	description: PropTypes.string.isRequired,
};

const AboutHero = () => {
	return (
		<section className="py-14 md:py-24 bg-white text-zinc-900  relative overflow-hidden z-10">
			<div className="container px-4 mx-auto">
				<div className="flex justify-center mx-auto">
					<div>
						<h1 className="text-3xl text-center font-bold md:text-[40px] leading-tight mb-2">
							Know More About Us 
						</h1>
						<p className="text-lg opacity-70 leading-normal my-6 lg:mx-12">
						Welcome to ToyGifty, your one-stop destination for finding the perfect gifts for your loved ones! We are a team of passionate individuals who believe that gifting is an art and we strive to make it as effortless and enjoyable as possible for our customers.
						</p>
					</div>
				</div>

				<div className="flex flex-col md:flex-row justify-center gap-6">
					<ProductItem
						imageUrl="https://images.unsplash.com/photo-1512909006721-3d6018887383?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8Z2lmdCUyMGZhdG9yeXxlbnwwfHwwfHx8MA%3D%3D"
						description="Whether you're looking for a birthday present, anniversary gift, or a token of appreciation for someone special, we have got you covered."
					/>
					<ProductItem
						imageUrl="https://media.istockphoto.com/id/485442240/photo/santa-claus-painting-nutcracker.webp?a=1&b=1&s=612x612&w=0&k=20&c=ZnraVzED-S4BbX43Mkpa40ToTdcjpbJJzKu6LRd4w1E="
						description=" Our team comprises experienced and creative professionals who work hard to source the best quality products from all over the world"
					/>
				</div>
			</div>
		</section>
	);
};

export default AboutHero