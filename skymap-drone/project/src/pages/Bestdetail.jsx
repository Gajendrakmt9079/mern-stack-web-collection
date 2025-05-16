import React from 'react'

const Bestdeals = () => {
    return (
        <>
            <div className='flex justify-center items-center w-[100vw] p-10 flex-col'>
                <h1 className='text-5xl mb-10' >Best Deals</h1>
                <div className='flex justify-center flex-row space-x-6'>


                    <div className="max-w-[20vw] max-h-[50vh]    bg-white border border-gray-200 rounded-lg shadow-sm nullbg-gray-800 nullborder-gray-700">
                        <a href="#" className=''>
                            <img className="rounded-t-lg bg-gray-100 h-[60%] w-full" src="/prduct11.png" alt="" />
                        </a>
                        <div className="p-5">
                            <a href="#">
                                <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 nulltext-white">Drow K3</h5>
                            </a>
                            <p className="mb-3 font-normal text-gray-700 nulltext-gray-400">$1999</p>
                            <a href="#" className="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 nullbg-blue-600 nullhover:bg-blue-700 nullfocus:ring-blue-800">
                                Add to card
                                <svg className="rtl:rotate-180 w-3.5 h-3.5 ms-2" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 10">
                                    <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M1 5h12m0 0L9 1m4 4L9 9" />
                                </svg>
                            </a>
                        </div>
                    </div>
                    <div className="max-w-[20vw] max-h-[50vh]    bg-white border border-gray-200 rounded-lg shadow-sm nullbg-gray-800 nullborder-gray-700">
                        <a href="#" className=''>
                            <img className="rounded-t-lg bg-gray-100 h-[60%] w-full" src="/product2.png" alt="" />
                        </a>
                        <div className="p-5">
                            <a href="#">
                                <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 nulltext-white">Ki 16f5</h5>
                            </a>
                            <p className="mb-3 font-normal text-gray-700 nulltext-gray-400">$1199</p>
                            <a href="#" className="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 nullbg-blue-600 nullhover:bg-blue-700 nullfocus:ring-blue-800">
                                Add to card
                                <svg className="rtl:rotate-180 w-3.5 h-3.5 ms-2" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 10">
                                    <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M1 5h12m0 0L9 1m4 4L9 9" />
                                </svg>
                            </a>
                        </div>
                    </div>
                    <div className="max-w-[20vw] max-h-[50vh]    bg-white border border-gray-200 rounded-lg shadow-sm nullbg-gray-800 nullborder-gray-700">
                        <a href="#" className=''>
                            <img className="rounded-t-lg bg-gray-100 h-[60%] w-full py-5" src="/product.3.png" alt="" />
                        </a>
                        <div className="p-5">
                            <a href="#">
                                <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 nulltext-white">Arise 236</h5>
                            </a>
                            <p className="mb-3 font-normal text-gray-700 nulltext-gray-400">$2999</p>
                            <a href="#" className="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 nullbg-blue-600 nullhover:bg-blue-700 nullfocus:ring-blue-800">
                                Add to card
                                <svg className="rtl:rotate-180 w-3.5 h-3.5 ms-2" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 10">
                                    <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M1 5h12m0 0L9 1m4 4L9 9" />
                                </svg>
                            </a>
                        </div>
                    </div>
                   

                </div>
            </div>
        </>
    )
}

export default Bestdeals
