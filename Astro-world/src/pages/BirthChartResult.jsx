import { SunIcon } from '@heroicons/react/24/outline';
import React from 'react'
import { GoMoon } from "react-icons/go";
import { FaMercury, FaVenus, FaMars } from "react-icons/fa";
import { GiJupiter } from "react-icons/gi";
import { SiSaturn } from "react-icons/si";


import { useLocation } from 'react-router-dom';
const BirthChartResult = () => {
    const location = useLocation();
    const { birthData } = location.state;
    console.log(birthData);

    return (
        <div className='md:px-[20%] md:py-[5%]'>

            <div className='flex flex-col items-center justify-center'>

                <div className=' bg-red-500 w-full '>
                    <img src="brithchart.png" alt="birth-chart" className='md:h-full h-[50vh] w-full object-cover' />
                </div>

            </div>
            <div className='flex flex-col p-3 '>

                <p className='capitalize font-bold text-2xl'>{birthData.name}</p>
                <p>{birthData.location} <br /> {birthData.date} , {birthData.time}pm </p>

            </div>
            <div className='flex flex-col justify-between p-3 md:flex-row '>
                <div className='flex flex-col justify-start  items-center w-1/2 gap-3'>
                    <span className='flex flex-row font-serif   text-gray-600 w-full  items-center   gap-3'> <SunIcon className='w-7 text-gray-800' /> <strong className='text-gray-800'>Sun</strong> in 12° 37'
                        Cancer
                    </span>
                    <span className='flex flex-row font-serif  text-gray-600 items-center  w-full    gap-4'><GoMoon className='text-xl text-gray-800' /> <strong className='text-gray-800'>Moon</strong> in 8° 20'
                        Aquarius

                    </span>
                    <span className='flex flex-row font-serif  text-gray-600 items-center  w-full    gap-4'><FaMercury className='text-xl text-gray-800' /> <strong className='text-gray-800'>Mercury</strong> in
                        29° 23'
                        Cancer


                    </span>
                    <span className='flex flex-row font-serif  text-gray-600 items-center  w-full    gap-4'><FaVenus className='text-xl text-gray-800' /> <strong className='text-gray-800'>Venus</strong> in
                        9° 58'
                        Gemini

                    </span>
                    <span className='flex flex-row font-serif  text-gray-600 items-center  w-full    gap-4'><FaMars className='text-xl text-gray-800' /> <strong className='text-gray-800'>Mars
                    </strong> in
                        6° 33'
                        Leo


                    </span>
                    <span className='flex flex-row font-serif  text-gray-600 items-center  w-full    gap-4'><GiJupiter className='text-xl text-gray-800' /> <strong className='text-gray-800'>Jupiter</strong> in 8° 20'
                        Aquarius

                    </span>
                    <span className='flex flex-row font-serif  text-gray-600 items-center  w-full    gap-4'><SiSaturn className='text-xl text-gray-800' /> <strong className='text-gray-800'>Saturn</strong> in
                        16° 15'
                        Cancer

                    </span>

                </div>
                
            </div>
        </div>
    )
}

export default BirthChartResult
