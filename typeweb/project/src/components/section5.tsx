import React from "react";


const stories = [
	{
		title: "Explore Our ",
		description:
			"As a leading tyre supplier, we take pride in our collaborations with prestigious automotive brands, ensuring that our customers have access to the most innovative and reliable tyre solutions on the",
		image: "car1.jpg",
	},
	{
		title: "Experience the Thrill of the ",
		description:
			"Combining striking design, potent performance, and advanced technology, the BMW 2 Series Gran Coupé offers a truly exhilarating driving experience. Explore this exceptional vehicle and discover the future of driving",
		image: "car2.jpg",
	},
];

const StoryItem = ({ item, index }) => {
	const { title, description, image } = item;
	return (
		<>
			<div
				className={`col-span-12 md:col-span-5 ${
					index % 2 === 0
						? "order-1 md:order-2 md:col-start-7"
						: "order-2 md:order-1 md:col-start-2"
				}`}
			>
				<div
					className={`flex flex-col justify-center ${
						index % 2 === 0 ? "lg:pl-4" : "lg:pr-4"
					}`}
				>
					<h4 className="text-2xl font-bold mb-4">{title}</h4>
					<p className="text-base leading-relaxed text-justify opacity-70 mb-0 md:pr-6">
						{description}
					</p>
				</div>
			</div>
			<div
				className={`${
					index % 2 === 0
						? "order-1 md:col-start-2"
						: "order-1 md:order-2 md:col-start-7"
				} col-span-12 md:col-span-5  mb-6 md:mb-0 mt-6 md:mt-0`}
			>
				<div>
					<img
						src={image}
						alt={title}
						className="max-w-full h-auto "
					/>
				</div>
			</div>
		</>
	);
};



 export const AboutUs6 = () => {
	return (
		<section className="ezy__about6 light py-14 md:py-24 bg-white nullbg-[#0b1727] text-zinc-900 nulltext-white">
			<div className="container px-4">
				

				{stories.map((item, i) => (
					<div
						className="grid grid-cols-12 justify-center items-center mt-12"
						key={i}
					>
						<StoryItem item={item} index={i + 1} />
					</div>
				))}
			</div>
		</section>
	);
};
