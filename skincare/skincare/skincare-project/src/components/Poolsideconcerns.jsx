import { title } from "framer-motion/client";
import { Filter } from "lucide-react";
import React, { useState } from "react";

export const Poolside = () => {

    const [selected, setSelected] = useState("Dryskin");
    const images = {
        Dryskin: {
            before: "https://www.trihard.co/cdn/shop/files/Skin_Before_600x600.png?v=1707989225",
            title: `Both skin and hair can become dry and brittle due to extended exposure to chlorinated water.`,
            detail: `Chlorine in pool water strips away the natural oils from both skin and hair, leading to dryness and brittleness. This can result in flaky skin and hair that breaks easily.`,

        },
        hairskin: {
            before: "https://www.trihard.co/cdn/shop/files/Hair_Before_600x600.png?v=1707989219",
            title: `Chlorine exposure can cause irritation, resulting in an itchy scalp and skin discomfort.`,
            detail: `Chlorine disrupts the natural pH balance, leading to itchy skin and scalp, resulting in discomfort and flakiness.`,

        },
        thin: {
            before: "https://www.trihard.co/cdn/shop/files/Eye_Gel_After_600x600.png?v=1707989207",
            title: `Blonde or light-colored hair can turn green after extended periods in the pool.`,
            detail: `This discoloration is due to copper deposits from the pool water that bind to the protein in the hair, which, when oxidized by chlorine, turns green.`,

        },
        inretcion: {
            before: "https://cdn.shopify.com/s/files/1/0142/3668/0278/files/best_seller_5_400x.jpg",
            title: `Skin irritation after swimming can occur due to prolonged exposure to chlorine.`,
            detail: `Chlorine can strip the skin of its natural oils, leading to dryness, itching, and irritation. It can also disrupt the skin's pH balance, causing redness and discomfort.`,

        },
    };

    return (

        <>
            <div className="flex justify-center p-3 items-center  h-fit m-5 w-full  flex-col  " >
                <h1 className=" text-xl  md:text-6xl font-mono uppercase m-5">Poolside concerns</h1>

                <div className="md:w-[70vw] w-[98vw] relative z-10 pt-5  rounded-xl flex justify-center h-[70vh] md:h-[60vh] bg-cover bg-center"
                    style={{ backgroundImage: `url(${images[selected].before})` }}
                >
                    <div className="bg-white h-fit px-2 md:px-5 py-2 rounded-full space-x-1 items-center md:space-x-3  flex justify-center" >
                        <button onClick={() => setSelected("Dryskin")} className={`text-[10px] md:text-sm capitalize  hover:bg-gray-100 h-fit md:h-10 rounded-full px-4 md:py-2 py-1 ${selected == "Dryskin" ? `bg-[#E1FB00]` : `bg-transparent`}`}>Dry skin </button>
                        <button onClick={() => setSelected("hairskin")} className={`capitalize text-[10px] md:text-sm  hover:bg-gray-100 h-fit md:h-10 rounded-full px-5 md:py-2 py-1 ${selected == "hairskin" ? `bg-[#E1FB00]` : `bg-transparent`}`}> sclap skin </button>
                        <button onClick={() => setSelected("thin")} className={`capitalize text-[10px] md:text-sm hover:bg-gray-100 h-fit md:h-10 rounded-full px-4 md:py-2 py-1 ${selected == "thin" ? `bg-[#E1FB00]` : `bg-transparent`}`}>green thin  </button>
                        <button onClick={() => setSelected("inretcion")} className={`capitalize text-[10px] md:text-sm  hover:bg-gray-100 h-fit md:h-10 rounded-full px-4 md:py-2 py-1 ${selected == "inretcion" ? `bg-[#E1FB00]` : `bg-transparent`}`}>skin inreaction  </button>
                    </div>
                    <div
                        className="backdrop-blur-sm bg-blue-950 bg-opacity-30 p-3 sm:w-[80%]   text-white  rounded-xl h-fit w-[90%] md:w-[80%] lg:w-1/2 absolute bottom-3 md:right-3"
                    >
                        <p className="md:text-lg text-sm text-left mb-3">
                            {images[selected].title}
                        </p>
                        <strong className="text-sm md:text-xl   text-[#E1FB00] ">Why?</strong>
                        <p className="mt-3 text-[10px]  md:text-sm">{images[selected].detail}</p>
                    </div>

                </div>

            </div></>
    )
}