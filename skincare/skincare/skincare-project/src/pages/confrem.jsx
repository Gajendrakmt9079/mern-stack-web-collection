import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCheck } from "@fortawesome/free-solid-svg-icons";
import { useNavigate } from "react-router-dom";




export const OrderConfirmation = () => {
     const navigate = useNavigate(); 
	return (
		<section className=" md:py-0 bg-white  text-zinc-900  relative overflow-hidden z-10">
			<div className="container p-4 mx-auto">
				<div className="grid grid-cols-12">
					
					<div className="col-span-12">
						<div className="bg-gray-100  text-center flex flex-col justify-center items-center mt-12 px-6 md:px-10 py-10 md:py-16 rounded-md">
							<div className="text-pink-300 text-2xl border inline-flex justify-center items-center p-4 rounded-full">
								<FontAwesomeIcon icon={faCheck} />
							</div>
							<h1 className="text-3xl md:text-[44px] leading-tight font-medium mt-4 mb-2">
								Your Order is Successful
							</h1>
							<p className="">
								Thank You For Purchase
							</p>
							<button className="text-white  hover:bg-opacity-90 btn btn-primary p-4 px-9 flex justify-center items-center leading-none h-full rounded-md mt-12" onClick={()=>{navigate("/")}}>
								Back To Home
							</button>
						</div>
					</div>
				</div>
			</div>
		</section>
	);
};