import React from "react";

export const AboutUs2 = () => {
	return (
		<section className="ezy__about2 light py-14 md:py-24 bg-white text-zinc-900">
			<div className="container px-4">
				<div className="grid lg:grid-cols-3 gap-x-6">
					<div>
						<h2 className="lg:text-end text-4xl md:text-5xl leading-tight md:leading-normal tracking-wide font-light lg:pl-6 mb-0">
							Discover a World of Stories – Your Ultimate Bookstore
						</h2>
					</div>
					<div className="lg:px-4 my-6 lg:my-0">
						<div
							className="min-h-[300px] md:h-full bg-center bg-cover"
							style={{
								backgroundImage:
									"url(./modiji.jpg)",
							}}
						></div>
					</div>
					<div className="pr-6">
						<p className="text-base tracking-widest opacity-80 mb-0">
							Welcome to our online bookstore, where stories come to life! Whether you are a fiction lover, a history buff, or seeking knowledge, we have an extensive collection of books across all genres to satisfy your reading appetite.
						</p>
						<p className="text-base tracking-widest opacity-80 mt-6 mb-0">
							From timeless classics to modern bestsellers, our carefully curated selection ensures that every reader finds their next favorite book. With user-friendly browsing and seamless purchasing, your next adventure is just a click away.
						</p>
						<p className="text-base tracking-widest opacity-80 mt-6 mb-0">
							Join our community of book lovers and explore new worlds, ideas, and perspectives. Let’s embark on a journey of knowledge and imagination together!
						</p>
					</div>
				</div>
			</div>
		</section>
	);
}
