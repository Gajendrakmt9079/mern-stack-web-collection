import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCheck } from "@fortawesome/free-solid-svg-icons";
import { useNavigate } from "react-router-dom";

const progressBardetails = [
	{ value: "1", active: true },
	{ value: "2", active: true },
	{ value: "3", active: true },
];

const ProgressBar = () => {
	return (
		<div className="col-span-12">
			<div className="flex items-center justify-between relative mb-12">
				<div className="absolute top-5 right-0 left-0 border-t-2 border-dashed border-blue-600"></div>
				{progressBardetails.map((item, i) => (
					<span
						className={`relative w-10 h-10 shadow flex justify-center items-center text-lg z-20 cursor-pointer rounded-full border ${
							item.active
								? "bg-blue-600 text-white  border-blue-600"
								: "bg-gray-100 dark:bg-slate-700 dark:border-slate-600"
						} `}
						key={i}
					>
						{item.value}
					</span>
				))}
			</div>
		</div>
	);
};

const Sucess = () => {
    const navigate = useNavigate();
	return (
		<section className="py-14 md:py-24 bg-white    text-zinc-900  relative overflow-hidden z-10">
			<div className="container p-4 mx-auto">
				<div className="grid grid-cols-12">
					{/* progress bar */}
		

					<div className="col-span-12">
						<div className="bg-gray-100  text-center flex flex-col justify-center items-center mt-12 px-6 md:px-10 py-10 md:py-16 rounded-md">
							<div className="text-blue-600 text-2xl border border-blue-600 inline-flex justify-center items-center p-4 rounded-full">
								<FontAwesomeIcon icon={faCheck} />
							</div>
							<h1 className="text-3xl md:text-[44px] leading-tight font-medium mt-4 mb-2">
								Your Order is Successful
							</h1>
							<p className="">
								Thanks For Shopping 
							</p>
							<button  onClick={()=>{navigate('/')}} className="text-white bg-blue-600 hover:bg-opacity-90 p-4 px-9 flex justify-center items-center leading-none h-full rounded-md mt-12">
								Continue Shopping
							</button>
						</div>
					</div>
				</div>
			</div>
		</section>
	);
};

export default Sucess