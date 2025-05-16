import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCheck } from "@fortawesome/free-solid-svg-icons";
import { Link } from "react-router-dom";



 export  const Checkout = () => {
	return (
		<section className="py-14 md:py-24 bg-[#333]  text-zinc-900 e relative overflow-hidden z-10">
			<div className="container p-4 mx-auto">
				<div className="grid grid-cols-12">
					

					<div className="col-span-12">
						<div className="bg-[#333]  text-center flex flex-col justify-center items-center mt-12 px-6 md:px-10 py-10 md:py-16 rounded-md text-white">
							<div className="text-blue-600 text-2xl border border-blue-600 inline-flex justify-center items-center p-4 rounded-full">
								<FontAwesomeIcon icon={faCheck} />
							</div>
							<h1 className="text-3xl md:text-[44px] leading-tight font-medium mt-4 mb-2">
								Your Enrollment is Successful
							</h1>
							<p className="">
								In purus donec ac in nulla lobortis. Lectus massa erat odio
								turpis nulla sed.
							</p>
							<Link to={'/'} className="text-white bg-blue-600 hover:bg-opacity-90 p-4 px-9 flex justify-center items-center leading-none h-full rounded-md mt-12">
								Back To Home
							</Link>
						</div>
					</div>
				</div>
			</div>
		</section>
	);
};
