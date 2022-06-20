import React from "react";
export default function index() {
    return (
        <>
        <div className="bg-gray-100">
                <div className="container mx-auto">
                    <div role="article" className="bg-gray-100 py-12 md:px-8">
                        <div className="px-4 xl:px-0 py-10">
                            <div className="flex flex-col lg:flex-row flex-wrap">
                                <div className="mt-4 lg:mt-0 lg:w-3/5">
                                    <div>
                                        <h1 className="w-full flex justify-center items-center uppercase text-4xl font-bold text-transparent md:text-6xl bg-clip-text bg-gradient-to-b from-teal-400 via-teal-600 to-teal-800">COUNSELLINGS WE PROVIDE FOR
                                        </h1>
                                    </div>
                                </div>
                                <div className="lg:w-2/5 flex mt-10 ml-2 lg:ml-0 lg:mt-0 lg:justify-end">

                                </div>
                            </div>
                        </div>
                        <div className="px-6 xl:px-0">
                            <div className="grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-3 pb-6 gap-8">
                                <div role="cell" className="bg-gray-100">
                                    <div className="bg-white p-5 rounded-md relative h-full w-full">
                                        {/* className="absolute inset-0 object-center object-cover h-full w-full"  */}
                                        <span>
                                            <img className="bg-gray-200 p-2 mb-5 rounded-full" src="https://i.ibb.co/27R6nk5/home-1.png" alt="home-1" />
                                        </span>
                                        <h1 className="pb-4 text-2xl font-semibold">ENGINEERING </h1>
                                        <div className="my-5">
                                            <div className="flex items-center pb-4 dark:border-gray-700 cursor-pointer w-full space-x-3">
                                                <svg xmlns="http://www.w3.org/2000/svg" width="12.5" height={16} fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                                                </svg>
                                                <h4 className="text-md text-gray-900 ">JEE Mains , BITSAT</h4>
                                            </div>
                                            <div className="flex items-center pb-4 dark:border-gray-700 cursor-pointer w-full space-x-3">
                                                <div>
                                                    <svg xmlns="http://www.w3.org/2000/svg" width="12.5" height={16} fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                                                    </svg>
                                                </div>
                                                <h4 className="text-md text-gray-900 ">UPTU</h4>
                                            </div>

                                            <div className="flex items-center pb-4 dark:border-gray-700 cursor-pointer w-full">
                                                <div>
                                                    <svg xmlns="http://www.w3.org/2000/svg" width="12.5" height={16} fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                                                    </svg>
                                                </div>
                                                <h4 className="text-md text-gray-900 pl-4">JEE Advance</h4>
                                            </div>
                                            <div className="flex items-center pb-4 dark:border-gray-700 cursor-pointer w-full">
                                                <div>
                                                    <svg xmlns="http://www.w3.org/2000/svg" width="12.5" height={16} fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                                                    </svg>
                                                </div>
                                                <h4 className="text-md text-gray-900  pl-4">State Counselling Board</h4>
                                            </div>
                                            <div className="flex items-center pb-4 dark:border-gray-700 cursor-pointer w-full">
                                                <div>
                                                    <svg xmlns="http://www.w3.org/2000/svg" width="12.5" height={16} fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                                                    </svg>
                                                </div>
                                                <h4 className="text-md text-gray-900  pl-4">Nationalized Counselling (JAC Chandigarh/ Delhi)</h4>
                                            </div>
                                        </div>
                                        <a className="hover:text-indigo-500 hover:underline absolute bottom-5 text-sm text-indigo-700 font-bold cursor-pointer flex items-center" href="#">
                                            <p>Show All</p>
                                            <div>
                                                <svg xmlns="http://www.w3.org/2000/svg" className="icon icon-tabler icon-tabler-arrow-narrow-right" width={16} height={16} viewBox="0 0 24 24" strokeWidth="1.5" stroke="#4338CA" fill="none" strokeLinecap="round" strokeLinejoin="round">
                                                    <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                                                    <line x1={5} y1={12} x2={19} y2={12} />
                                                    <line x1={15} y1={16} x2={19} y2={12} />
                                                    <line x1={15} y1={8} x2={19} y2={12} />
                                                </svg>
                                            </div>
                                        </a>
                                    </div>
                                </div>
                                <div role="cell" className="bg-gray-100">
                                    <div className="bg-white p-5 rounded-md relative h-full w-full">
                                        {/* className="absolute inset-0 object-center object-cover h-full w-full"  */}
                                        <span>
                                            <img className="bg-gray-200 p-2 mb-5 rounded-full" src="https://i.ibb.co/bdGyLYk/pricetags-1.png" alt="pricetags-1" />
                                        </span>
                                        <h1 className="pb-4 text-2xl font-semibold">  MEDICAL  </h1>
                                        <div className="my-5">
                                            <div className="flex items-center pb-4 dark:border-gray-700 cursor-pointer w-full">
                                                <div>
                                                    <svg xmlns="http://www.w3.org/2000/svg" width="12.5" height={16} fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                                                    </svg>
                                                </div>
                                                <h4 className="text-md text-gray-900  pl-4">Exams like NEET/AlIMS </h4>
                                            </div>
                                            <div className="flex items-center pb-4 dark:border-gray-700 cursor-pointer w-full">
                                                <div>
                                                    <svg xmlns="http://www.w3.org/2000/svg" width="12.5" height={16} fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                                                    </svg>
                                                </div>
                                                <h4 className="text-md text-gray-900  pl-4">BDS (Bachelor of Dental Surgery)</h4>
                                            </div>
                                            <div className="flex items-center pb-4 dark:border-gray-700 cursor-pointer w-full">
                                                <div>
                                                    <svg xmlns="http://www.w3.org/2000/svg" width="12.5" height={16} fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                                                    </svg>
                                                </div>
                                                <h4 className="text-md text-gray-900  pl-4">MBBS</h4>
                                            </div>
                                            <div className="flex items-center pb-4 dark:border-gray-700 cursor-pointer w-full">
                                                <div>
                                                    <svg xmlns="http://www.w3.org/2000/svg" width="12.5" height={16} fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                                                    </svg>
                                                </div>
                                                <h4 className="text-md text-gray-900  pl-4">BAMS (Bachelor of Ayurveda, Medicine and Surgery)</h4>
                                            </div>


                                        </div>
                                        <a className="hover:text-indigo-500 hover:underline absolute bottom-5 text-sm text-indigo-700 font-bold cursor-pointer flex items-center" href="#">
                                            <p>Show All</p>
                                            <div>
                                                <svg xmlns="http://www.w3.org/2000/svg" className="icon icon-tabler icon-tabler-arrow-narrow-right" width={16} height={16} viewBox="0 0 24 24" strokeWidth="1.5" stroke="#4338CA" fill="none" strokeLinecap="round" strokeLinejoin="round">
                                                    <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                                                    <line x1={5} y1={12} x2={19} y2={12} />
                                                    <line x1={15} y1={16} x2={19} y2={12} />
                                                    <line x1={15} y1={8} x2={19} y2={12} />
                                                </svg>
                                            </div>
                                        </a>
                                    </div>
                                </div>
                                <div role="cell" className="bg-gray-100">
                                    <div className="bg-white p-5 rounded-md relative h-full w-full">
                                        {/* className="absolute inset-0 object-center object-cover h-full w-full"  */}
                                        <span>
                                            <img className="bg-gray-200 p-2 mb-5 rounded-full" src="https://i.ibb.co/GT4KHvJ/card-1.png" alt="home-1" />
                                        </span>
                                        <h1 className="pb-4 text-2xl font-semibold">LAW </h1>
                                        <div className="my-5">
                                            <div className="flex items-center pb-4 dark:border-gray-700 cursor-pointer w-full">
                                                <div>
                                                    <svg xmlns="http://www.w3.org/2000/svg" width="12.5" height={16} fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                                                    </svg>
                                                </div>
                                                <h4 className="text-md text-gray-900  pl-4">BA (Bachelor of Arts)</h4>
                                            </div>
                                            <div className="flex items-center pb-4 dark:border-gray-700 cursor-pointer w-full">
                                                <div>
                                                    <svg xmlns="http://www.w3.org/2000/svg" width="12.5" height={16} fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                                                    </svg>
                                                </div>
                                                <h4 className="text-md text-gray-900  pl-4">LLB (Bachelor of Legislative Law)</h4>
                                            </div>
                                            <div className="flex items-center pb-4 dark:border-gray-700 cursor-pointer w-full">
                                                <div>
                                                    <svg xmlns="http://www.w3.org/2000/svg" width="12.5" height={16} fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                                                    </svg>
                                                </div>
                                                <h4 className="text-md text-gray-900  pl-4">AILET (All India Law Entrance Test)</h4>
                                            </div>

                                        </div>
                                        <a className="hover:text-indigo-500 hover:underline absolute bottom-5 text-sm text-indigo-700 font-bold cursor-pointer flex items-center" href="#">
                                            <p>Show All</p>
                                            <div>
                                                <svg xmlns="http://www.w3.org/2000/svg" className="icon icon-tabler icon-tabler-arrow-narrow-right" width={16} height={16} viewBox="0 0 24 24" strokeWidth="1.5" stroke="#4338CA" fill="none" strokeLinecap="round" strokeLinejoin="round">
                                                    <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                                                    <line x1={5} y1={12} x2={19} y2={12} />
                                                    <line x1={15} y1={16} x2={19} y2={12} />
                                                    <line x1={15} y1={8} x2={19} y2={12} />
                                                </svg>
                                            </div>
                                        </a>
                                    </div>
                                </div>
                                <div role="cell" className="bg-gray-100">
                                    <div className="bg-white p-5 rounded-md  h-full relative w-full">
                                        {/* className="absolute inset-0 object-center object-cover h-full w-full"  */}
                                        <span>
                                            <img className="bg-gray-200 p-2 mb-5 rounded-full" src="https://i.ibb.co/rG4r6NJ/notifications-1.png" alt="home-1" />
                                        </span>
                                        <h1 className="pb-4 text-2xl font-semibold">FASHION DESIGNING </h1>
                                        <div className="my-5">
                                            <div className="flex items-center pb-4 dark:border-gray-700 cursor-pointer w-full">
                                                <div>
                                                    <svg xmlns="http://www.w3.org/2000/svg" width="12.5" height={16} fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                                                    </svg>
                                                </div>
                                                <h4 className="text-md text-gray-900  pl-4">NIFT (National Institute of Fashion Technology)</h4>
                                            </div>
                                            <div className="flex items-center pb-4 dark:border-gray-700 cursor-pointer w-full">
                                                <div>
                                                    <svg xmlns="http://www.w3.org/2000/svg" width="12.5" height={16} fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                                                    </svg>
                                                </div>
                                                <h4 className="text-md text-gray-900  pl-4">NID (National Institute of Design)</h4>
                                            </div>


                                        </div>
                                        <a className="hover:text-indigo-500 hover:underline absolute bottom-5 text-sm text-indigo-700 font-bold cursor-pointer flex items-center" href="#">
                                            <p>Show All</p>
                                            <div>
                                                <svg xmlns="http://www.w3.org/2000/svg" className="icon icon-tabler icon-tabler-arrow-narrow-right" width={16} height={16} viewBox="0 0 24 24" strokeWidth="1.5" stroke="#4338CA" fill="none" strokeLinecap="round" strokeLinejoin="round">
                                                    <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                                                    <line x1={5} y1={12} x2={19} y2={12} />
                                                    <line x1={15} y1={16} x2={19} y2={12} />
                                                    <line x1={15} y1={8} x2={19} y2={12} />
                                                </svg>
                                            </div>
                                        </a>
                                    </div>
                                </div>
                                <div role="cell" className="bg-gray-100">
                                    <div className="relative bg-white p-5 rounded-md  h-full w-full">
                                        {/* className="absolute inset-0 object-center object-cover h-full w-full"  */}
                                        <span>
                                            <img className="bg-gray-200 p-2 mb-5 rounded-full" src="https://i.ibb.co/HFC1hqn/people-1.png" alt="home-1" />
                                        </span>
                                        <h1 className="pb-4 text-2xl font-semibold">AGRICULTURE </h1>
                                        <div className="my-5">
                                            <div className="flex items-center pb-4 dark:border-gray-700 cursor-pointer w-full">
                                                <div>
                                                    <svg xmlns="http://www.w3.org/2000/svg" width="12.5" height={16} fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                                                    </svg>
                                                </div>
                                                <h4 className="text-md text-gray-900  pl-4">ICAR (Indian Council of Agricultural Research) </h4>
                                            </div>
                                            <div className="flex items-center pb-4 dark:border-gray-700 cursor-pointer w-full">
                                                <div>
                                                    <svg xmlns="http://www.w3.org/2000/svg" width="12.5" height={16} fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                                                    </svg>
                                                </div>
                                                <h4 className="text-md text-gray-900  pl-4">AIEEA UPCATET</h4>
                                            </div>
                                            <div className="flex items-center pb-4 dark:border-gray-700 cursor-pointer w-full">
                                                <div>
                                                    <svg xmlns="http://www.w3.org/2000/svg" width="12.5" height={16} fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                                                    </svg>
                                                </div>
                                                <h4 className="text-md text-gray-900  pl-4">UPCATET</h4>
                                            </div>
                                        </div>
                                        <a className="hover:text-indigo-500 hover:underline absolute bottom-5 text-sm text-indigo-700 font-bold cursor-pointer flex items-center" href="#">
                                            <p>Show All</p>
                                            <div>
                                                <svg xmlns="http://www.w3.org/2000/svg" className="icon icon-tabler icon-tabler-arrow-narrow-right" width={16} height={16} viewBox="0 0 24 24" strokeWidth="1.5" stroke="#4338CA" fill="none" strokeLinecap="round" strokeLinejoin="round">
                                                    <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                                                    <line x1={5} y1={12} x2={19} y2={12} />
                                                    <line x1={15} y1={16} x2={19} y2={12} />
                                                    <line x1={15} y1={8} x2={19} y2={12} />
                                                </svg>
                                            </div>
                                        </a>
                                    </div>
                                </div>
                                <div className="bg-white p-5 rounded-md relative h-full w-full">
                                        {/* className="absolute inset-0 object-center object-cover h-full w-full"  */}
                                        <span>
                                            <img className="bg-gray-200 p-2 mb-5 rounded-full" src="https://i.ibb.co/27R6nk5/home-1.png" alt="home-1" />
                                        </span>
                                        <h1 className="pb-4 text-2xl font-semibold">ART STUDENTS </h1>
                                        <div className="my-5">
                                            <div className="flex items-center pb-4 dark:border-gray-700 cursor-pointer w-full space-x-3">
                                                <svg xmlns="http://www.w3.org/2000/svg" width="12.5" height={16} fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                                                </svg>
                                                <h4 className="text-md text-gray-900 ">BBA + MBA 5 Year degree from lIMS</h4>
                                            </div>
                                            <div className="flex items-center pb-4 dark:border-gray-700 cursor-pointer w-full space-x-3">
                                                <div>
                                                    <svg xmlns="http://www.w3.org/2000/svg" width="12.5" height={16} fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                                                    </svg>
                                                </div>
                                                <h4 className="text-md text-gray-900 ">IPMAT - IIM Indore, Rohtak</h4>
                                            </div>

                                            <div className="flex items-center pb-4 dark:border-gray-700 cursor-pointer w-full">
                                                <div>
                                                    <svg xmlns="http://www.w3.org/2000/svg" width="12.5" height={16} fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                                                    </svg>
                                                </div>
                                                <h4 className="text-md text-gray-900 pl-4">JIPMAT - IM Jammu, Bodhgaya</h4>
                                            </div>
                                            
                                            
                                        </div>
                                        <a className="hover:text-indigo-500 hover:underline absolute bottom-5 text-sm text-indigo-700 font-bold cursor-pointer flex items-center" href="#">
                                            <p>Show All</p>
                                            <div>
                                                <svg xmlns="http://www.w3.org/2000/svg" className="icon icon-tabler icon-tabler-arrow-narrow-right" width={16} height={16} viewBox="0 0 24 24" strokeWidth="1.5" stroke="#4338CA" fill="none" strokeLinecap="round" strokeLinejoin="round">
                                                    <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                                                    <line x1={5} y1={12} x2={19} y2={12} />
                                                    <line x1={15} y1={16} x2={19} y2={12} />
                                                    <line x1={15} y1={8} x2={19} y2={12} />
                                                </svg>
                                            </div>
                                        </a>
                                    </div>
                                    <div className="bg-white p-5 rounded-md relative h-full w-full">
                                        {/* className="absolute inset-0 object-center object-cover h-full w-full"  */}
                                        <span>
                                            <img className="bg-gray-200 p-2 mb-5 rounded-full" src="https://i.ibb.co/27R6nk5/home-1.png" alt="home-1" />
                                        </span>
                                        <h1 className="pb-4 text-2xl font-semibold">TECHNICAL SHORT TERM COURSE
from ITs. NITs </h1>
                                        <div className="my-5">
                                            <div className="flex items-center pb-4 dark:border-gray-700 cursor-pointer w-full space-x-3">
                                                <svg xmlns="http://www.w3.org/2000/svg" width="12.5" height={16} fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                                                </svg>
                                                <h4 className="text-md text-gray-900 ">Artificial Intelligence</h4>
                                            </div>
                                            <div className="flex items-center pb-4 dark:border-gray-700 cursor-pointer w-full space-x-3">
                                                <div>
                                                    <svg xmlns="http://www.w3.org/2000/svg" width="12.5" height={16} fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                                                    </svg>
                                                </div>
                                                <h4 className="text-md text-gray-900 ">Machine Learning</h4>
                                            </div>

                                            <div className="flex items-center pb-4 dark:border-gray-700 cursor-pointer w-full">
                                                <div>
                                                    <svg xmlns="http://www.w3.org/2000/svg" width="12.5" height={16} fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                                                    </svg>
                                                </div>
                                                <h4 className="text-md text-gray-900 pl-4">Data Science</h4>
                                            </div>
                                            <div className="flex items-center pb-4 dark:border-gray-700 cursor-pointer w-full">
                                                <div>
                                                    <svg xmlns="http://www.w3.org/2000/svg" width="12.5" height={16} fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                                                    </svg>
                                                </div>
                                                <h4 className="text-md text-gray-900  pl-4">Python</h4>
                                            </div>
                                            <div className="flex items-center pb-4 dark:border-gray-700 cursor-pointer w-full">
                                                <div>
                                                    <svg xmlns="http://www.w3.org/2000/svg" width="12.5" height={16} fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                                                    </svg>
                                                </div>
                                                <h4 className="text-md text-gray-900  pl-4">C/C++ Programing for 10+ Application</h4>
                                            </div>
                                        </div>
                                        <a className="hover:text-indigo-500 hover:underline absolute bottom-5 text-sm text-indigo-700 font-bold cursor-pointer flex items-center" href="#">
                                            <p>Show All</p>
                                            <div>
                                                <svg xmlns="http://www.w3.org/2000/svg" className="icon icon-tabler icon-tabler-arrow-narrow-right" width={16} height={16} viewBox="0 0 24 24" strokeWidth="1.5" stroke="#4338CA" fill="none" strokeLinecap="round" strokeLinejoin="round">
                                                    <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                                                    <line x1={5} y1={12} x2={19} y2={12} />
                                                    <line x1={15} y1={16} x2={19} y2={12} />
                                                    <line x1={15} y1={8} x2={19} y2={12} />
                                                </svg>
                                            </div>
                                        </a>
                                    </div>
                                    <div className="bg-white p-5 rounded-md relative h-full w-full">
                                        {/* className="absolute inset-0 object-center object-cover h-full w-full"  */}
                                        <span>
                                            <img className="bg-gray-200 p-2 mb-5 rounded-full" src="https://i.ibb.co/27R6nk5/home-1.png" alt="home-1" />
                                        </span>
                                        <h1 className="pb-4 text-2xl font-semibold">AFTER 10th COURSE </h1>
                                        <div className="my-5">
                                            <div className="flex items-center pb-4 dark:border-gray-700 cursor-pointer w-full space-x-3">
                                                <svg xmlns="http://www.w3.org/2000/svg" width="12.5" height={16} fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                                                </svg>
                                                <h4 className="text-md text-gray-900 ">Diploma</h4>
                                            </div>
                                            <div className="flex items-center pb-4 dark:border-gray-700 cursor-pointer w-full space-x-3">
                                                <div>
                                                    <svg xmlns="http://www.w3.org/2000/svg" width="12.5" height={16} fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                                                    </svg>
                                                </div>
                                                <h4 className="text-md text-gray-900 ">Polytechnic Course</h4>
                                            </div>

                                            <div className="flex items-center pb-4 dark:border-gray-700 cursor-pointer w-full">
                                                <div>
                                                    <svg xmlns="http://www.w3.org/2000/svg" width="12.5" height={16} fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                                                    </svg>
                                                </div>
                                                <h4 className="text-md text-gray-900 pl-4">ITI Course</h4>
                                            </div>
                                            <div className="flex items-center pb-4 dark:border-gray-700 cursor-pointer w-full">
                                                <div>
                                                    <svg xmlns="http://www.w3.org/2000/svg" width="12.5" height={16} fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                                                    </svg>
                                                </div>
                                                <h4 className="text-md text-gray-900  pl-4">Vocational Courses</h4>
                                            </div>
                                            <div className="flex items-center pb-4 dark:border-gray-700 cursor-pointer w-full">
                                                <div>
                                                    <svg xmlns="http://www.w3.org/2000/svg" width="12.5" height={16} fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                                                    </svg>
                                                </div>
                                                <h4 className="text-md text-gray-900  pl-4">Paramedical Courses</h4>
                                            </div>
                                        </div>
                                        <a className="hover:text-indigo-500 hover:underline absolute bottom-5 text-sm text-indigo-700 font-bold cursor-pointer flex items-center" href="#">
                                            <p>Show All</p>
                                            <div>
                                                <svg xmlns="http://www.w3.org/2000/svg" className="icon icon-tabler icon-tabler-arrow-narrow-right" width={16} height={16} viewBox="0 0 24 24" strokeWidth="1.5" stroke="#4338CA" fill="none" strokeLinecap="round" strokeLinejoin="round">
                                                    <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                                                    <line x1={5} y1={12} x2={19} y2={12} />
                                                    <line x1={15} y1={16} x2={19} y2={12} />
                                                    <line x1={15} y1={8} x2={19} y2={12} />
                                                </svg>
                                            </div>
                                        </a>
                                    </div>
                                    <div className="bg-white p-5 rounded-md relative h-full w-full">
                                        {/* className="absolute inset-0 object-center object-cover h-full w-full"  */}
                                        <span>
                                            <img className="bg-gray-200 p-2 mb-5 rounded-full" src="https://i.ibb.co/27R6nk5/home-1.png" alt="home-1" />
                                        </span>
                                        <h1 className="pb-4 text-2xl font-semibold">UGEE Exam (IIIth) </h1>
                                        <div className="my-5">
                                            <div className="flex items-center pb-4 dark:border-gray-700 cursor-pointer w-full space-x-3">
                                                <svg xmlns="http://www.w3.org/2000/svg" width="12.5" height={16} fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                                                </svg>
                                                <h4 className="text-md text-gray-900 ">5 Year dual degree</h4>
                                            </div>
                                            <div className="flex items-center pb-4 dark:border-gray-700 cursor-pointer w-full space-x-3">
                                                <div>
                                                    <svg xmlns="http://www.w3.org/2000/svg" width="12.5" height={16} fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                                                    </svg>
                                                </div>
                                                <h4 className="text-md text-gray-900 ">4 year B-Tech through JEE Main</h4>
                                            </div>

                                            
                                            
                                           
                                        </div>
                                        <a className="hover:text-indigo-500 hover:underline absolute bottom-5 text-sm text-indigo-700 font-bold cursor-pointer flex items-center" href="#">
                                            <p>Show All</p>
                                            <div>
                                                <svg xmlns="http://www.w3.org/2000/svg" className="icon icon-tabler icon-tabler-arrow-narrow-right" width={16} height={16} viewBox="0 0 24 24" strokeWidth="1.5" stroke="#4338CA" fill="none" strokeLinecap="round" strokeLinejoin="round">
                                                    <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                                                    <line x1={5} y1={12} x2={19} y2={12} />
                                                    <line x1={15} y1={16} x2={19} y2={12} />
                                                    <line x1={15} y1={8} x2={19} y2={12} />
                                                </svg>
                                            </div>
                                        </a>
                                    </div>
                                    <div className="bg-white p-5 rounded-md relative h-full w-full">
                                        {/* className="absolute inset-0 object-center object-cover h-full w-full"  */}
                                        <span>
                                            <img className="bg-gray-200 p-2 mb-5 rounded-full" src="https://i.ibb.co/27R6nk5/home-1.png" alt="home-1" />
                                        </span>
                                        <h1 className="pb-4 text-2xl font-semibold">SOFT SKILL COURSE after 12th</h1>
                                        <div className="my-5">
                                            <div className="flex items-center pb-4 dark:border-gray-700 cursor-pointer w-full space-x-3">
                                                <svg xmlns="http://www.w3.org/2000/svg" width="12.5" height={16} fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                                                </svg>
                                                <h4 className="text-md text-gray-900 ">Digital Marketing</h4>
                                            </div>
                                            <div className="flex items-center pb-4 dark:border-gray-700 cursor-pointer w-full space-x-3">
                                                <div>
                                                    <svg xmlns="http://www.w3.org/2000/svg" width="12.5" height={16} fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                                                    </svg>
                                                </div>
                                                <h4 className="text-md text-gray-900 ">Web Designing</h4>
                                            </div>

                                            <div className="flex items-center pb-4 dark:border-gray-700 cursor-pointer w-full">
                                                <div>
                                                    <svg xmlns="http://www.w3.org/2000/svg" width="12.5" height={16} fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                                                    </svg>
                                                </div>
                                                <h4 className="text-md text-gray-900 pl-4">Photography</h4>
                                            </div>
                                            <div className="flex items-center pb-4 dark:border-gray-700 cursor-pointer w-full">
                                                <div>
                                                    <svg xmlns="http://www.w3.org/2000/svg" width="12.5" height={16} fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                                                    </svg>
                                                </div>
                                                <h4 className="text-md text-gray-900  pl-4">Graphics Designing</h4>
                                            </div>
                                            <div className="flex items-center pb-4 dark:border-gray-700 cursor-pointer w-full">
                                                <div>
                                                    <svg xmlns="http://www.w3.org/2000/svg" width="12.5" height={16} fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                                                    </svg>
                                                </div>
                                                <h4 className="text-md text-gray-900  pl-4">Content Writing</h4>
                                            </div>
                                        </div>
                                        <a className="hover:text-indigo-500 hover:underline absolute bottom-5 text-sm text-indigo-700 font-bold cursor-pointer flex items-center" href="#">
                                            <p>Show All</p>
                                            <div>
                                                <svg xmlns="http://www.w3.org/2000/svg" className="icon icon-tabler icon-tabler-arrow-narrow-right" width={16} height={16} viewBox="0 0 24 24" strokeWidth="1.5" stroke="#4338CA" fill="none" strokeLinecap="round" strokeLinejoin="round">
                                                    <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                                                    <line x1={5} y1={12} x2={19} y2={12} />
                                                    <line x1={15} y1={16} x2={19} y2={12} />
                                                    <line x1={15} y1={8} x2={19} y2={12} />
                                                </svg>
                                            </div>
                                        </a>
                                    </div>
                                    <div className="bg-white p-5 rounded-md relative h-full w-full">
                                        {/* className="absolute inset-0 object-center object-cover h-full w-full"  */}
                                        <span>
                                            <img className="bg-gray-200 p-2 mb-5 rounded-full" src="https://i.ibb.co/27R6nk5/home-1.png" alt="home-1" />
                                        </span>
                                        <h1 className="pb-4 text-2xl font-semibold">IISER Aptitude Test </h1>
                                        <div className="my-5">
                                            <div className="flex items-center pb-4 dark:border-gray-700 cursor-pointer w-full space-x-3">
                                                <svg xmlns="http://www.w3.org/2000/svg" width="12.5" height={16} fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                                                </svg>
                                                <h4 className="text-md text-gray-900 ">BS, MS degree from (ISER)T</h4>
                                            </div>
                                            <h1 className="pb-4 text-2xl font-semibold">NEST Entrance </h1>
                                            <div className="flex items-center pb-4 dark:border-gray-700 cursor-pointer w-full space-x-3">
                                                <div>
                                                    <svg xmlns="http://www.w3.org/2000/svg" width="12.5" height={16} fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                                                    </svg>
                                                </div>
                                                <h4 className="text-md text-gray-900 ">M.Sc. degree (NISER) Mumbai, Bhubneshwar</h4>
                                            </div>
                                            <h1 className="pb-4 text-2xl font-semibold">ISI Kolkata Entrance </h1>

                                            <div className="flex items-center pb-4 dark:border-gray-700 cursor-pointer w-full">
                                                <div>
                                                    <svg xmlns="http://www.w3.org/2000/svg" width="12.5" height={16} fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                                                    </svg>
                                                </div>
                                                <h4 className="text-md text-gray-900 pl-4">(B Math, B Stat., Research Course)</h4>
                                            </div>
                                            
                                            
                                        </div>
                                        <a className="hover:text-indigo-500 hover:underline absolute bottom-5 text-sm text-indigo-700 font-bold cursor-pointer flex items-center" href="#">
                                            <p>Show All</p>
                                            <div>
                                                <svg xmlns="http://www.w3.org/2000/svg" className="icon icon-tabler icon-tabler-arrow-narrow-right" width={16} height={16} viewBox="0 0 24 24" strokeWidth="1.5" stroke="#4338CA" fill="none" strokeLinecap="round" strokeLinejoin="round">
                                                    <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                                                    <line x1={5} y1={12} x2={19} y2={12} />
                                                    <line x1={15} y1={16} x2={19} y2={12} />
                                                    <line x1={15} y1={8} x2={19} y2={12} />
                                                </svg>
                                            </div>
                                        </a>
                                    </div>
                                <div role="cell" className="bg-gray-100">
                                    <div className="relative bg-white p-5 rounded-md relative h-full  w-full">
                                        {/* className="absolute inset-0 object-center object-cover h-full w-full"  */}
                                        <span>
                                            <img className="bg-gray-200 p-2 mb-5 rounded-full" src="https://i.ibb.co/QX80fYm/lock-closed-1.png" alt="home-1" />
                                        </span>
                                        <h1 className="pb-4 text-2xl font-semibold">MASS COMMUNICATION</h1>
                                        <div className="my-5">
                                            <div className="flex items-center pb-4 dark:border-gray-700 cursor-pointer w-full">
                                                <div>
                                                    <svg xmlns="http://www.w3.org/2000/svg" width="12.5" height={16} fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                                                    </svg>
                                                </div>
                                                <h4 className="text-md text-gray-900  pl-4"> IMC ENTRANCE EXAM </h4>
                                            </div>
                                            <div className="flex items-center pb-4 dark:border-gray-700 cursor-pointer w-full">
                                                <div>
                                                    <svg xmlns="http://www.w3.org/2000/svg" width="12.5" height={16} fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                                                    </svg>
                                                </div>
                                                <h4 className="text-md text-gray-900  pl-4">IISC Banalore
                                                    (Through JEE Main, NEET, Advance)
                                                </h4>
                                            </div>
                                            <div className="flex items-center pb-4 dark:border-gray-700 cursor-pointer w-full">
                                                <div>
                                                    <svg xmlns="http://www.w3.org/2000/svg" width="12.5" height={16} fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                                                    </svg>
                                                </div>
                                                <h4 className="text-md text-gray-900  pl-4">Research Course KVPY</h4>
                                            </div>

                                        </div>
                                        <a className="hover:text-indigo-500 hover:underline absolute bottom-5 text-sm text-indigo-700 font-bold cursor-pointer flex items-center" href="#">
                                            <p>Show All</p>
                                            <div>
                                                <svg xmlns="http://www.w3.org/2000/svg" className="icon icon-tabler icon-tabler-arrow-narrow-right" width={16} height={16} viewBox="0 0 24 24" strokeWidth="1.5" stroke="#4338CA" fill="none" strokeLinecap="round" strokeLinejoin="round">
                                                    <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                                                    <line x1={5} y1={12} x2={19} y2={12} />
                                                    <line x1={15} y1={16} x2={19} y2={12} />
                                                    <line x1={15} y1={8} x2={19} y2={12} />
                                                </svg>
                                            </div>
                                        </a>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        <div className="">
            <section className="mx-auto container py-20 ">
                <div className="flex justify-center items-center flex-col">
                    <div className="lg:text-6xl md:text-5xl mt-10 text-4xl font-black leading-10 text-center text-gray-800 ">
                        <h1 className="w-full flex justify-center items-center uppercase text-4xl font-bold text-transparent md:text-6xl bg-clip-text bg-gradient-to-b from-teal-400 via-teal-600 to-teal-800">Our Services</h1>
                    </div>
                    <div className="pt-16 grid lg:grid-cols-3 md:grid-cols-2 justify-center items-center xl:gap-y-16 gap-y-20 gap-x-16 lg:gap-x-20 xl:gap-x-0 lg:px-10 xl:px-0">
                        <div className="cursor-pointer hover:shadow py-6 xl:px-4 rounded xl:w-96 w-60 flex justify-center items-center flex-col">
                            <div className="mb-6">
                                <img src="https://s2.svgbox.net/illlustrations.svg?ic=power-of-pen&color=000000" width="70" height="70" />
                            </div>
                            <div className="text-gray-800  text-2xl font-semibold text-center">
                                <h2>Career Encylopedia</h2>
                            </div>
                            <div className="text-gray-600  mt-2 text-lg text-center ">
                                <p>Workflows can help streamline and automate repeatable business tasks.</p>
                            </div>
                        </div>
                        <div className="cursor-pointer hover:shadow py-6 xl:px-4 rounded xl:w-96 w-60 flex justify-center items-center flex-col">
                            <div className="mb-6">
                                <img src="https://s2.svgbox.net/illlustrations.svg?ic=forget-password&color=000000" width="70" height="70" />
                            </div>
                            <div className="text-gray-800  text-2xl font-semibold text-center">
                                <h2>Enterance Exams</h2>
                            </div>
                            <div className="text-gray-600  mt-2 text-lg text-center">
                                <p>A flexible software architecture is able to changes in usability requirements</p>
                            </div>
                        </div>
                        <div className="cursor-pointer hover:shadow py-6 xl:px-4 rounded xl:w-96 w-60 flex justify-center items-center flex-col">
                            <div className="mb-6">
                                <img src="https://s2.svgbox.net/illlustrations.svg?ic=wallet&color=000000" width="70" height="70" />
                            </div>
                            <div className="text-gray-800  text-2xl font-semibold text-center">
                                <h2>Scholarships/Internships</h2>
                            </div>
                            <div className="text-gray-600  mt-2 text-lg text-center">
                                <p>Good usability can improve a new software chances of successful adoption.</p>
                            </div>
                        </div>
                        <div className="cursor-pointer hover:shadow py-6 xl:px-4 rounded xl:w-96 w-60 flex justify-center items-center flex-col">
                            <div className="mb-6">
                                <img src="https://s2.svgbox.net/illlustrations.svg?ic=working&color=000000" width="70" height="70" />
                            </div>
                            <div className="text-gray-800  text-2xl font-semibold text-center">
                                <h2>Carrer Assesment</h2>
                            </div>
                            <div className="text-gray-600  mt-2 text-lg text-center">
                                <p>Smaller components are easier to maintain. Program can be divided</p>
                            </div>
                        </div>
                        <div className="cursor-pointer hover:shadow py-6 xl:px-4 rounded xl:w-96 w-60 flex justify-center items-center flex-col">
                            <div className="mb-6">
                                <img src="https://s2.svgbox.net/illlustrations.svg?ic=work-from-home-1&color=000000" width="70" height="70" />
                            </div>
                            <div className="text-gray-800  text-2xl font-semibold text-center">
                                <h2>One On One councelling sessions</h2>
                            </div>
                            <div className="text-gray-600  mt-2 text-lg text-center">
                                <p>Component-based design makes front-end web development faster.</p>
                            </div>
                        </div>
                        <div className="cursor-pointer hover:shadow py-6 xl:px-4 rounded xl:w-96 w-60 flex justify-center items-center flex-col">
                            <div className="mb-6">
                                <img src="https://s2.svgbox.net/illlustrations.svg?ic=building&color=000000" width="70" height="70" />
                            </div>
                            <div className="text-gray-800  text-2xl font-semibold text-center">
                                <h2>Seminar / Workshops at School and colleges</h2>
                            </div>
                            <div className="text-gray-600  mt-2 text-lg text-center">
                                <p>No more running around looking for things.When you write things and plan.</p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <div className="overflow-y-hidden bg-gray-100">
                <div className="mx-auto container f-f-p px-4 xl:px-0 py-24">
                    <h1 className="w-full flex justify-center items-center uppercase text-4xl font-bold text-transparent md:text-6xl bg-clip-text bg-gradient-to-b from-teal-400 via-teal-600 to-teal-800">How To Connect With Us?</h1>
                    <div className="md:mt-24 f-f-p">
                        <div className="hidden md:flex justify-center w-full">
                            <div className="flex flex-col items-center md:items-end md:pr-12 md:border-r-4 border-gray-300 relative md:w-1/2">
                                <div aria-label="sign up" role="img">
                                    <img className="focus:outline-none mt-10" src="https://tuk-cdn.s3.amazonaws.com/can-uploader/3_step_center_aligned_how_it_worksSvg1.svg" alt="how it work" />
                                </div>
                                <div aria-label={2} role="img">
                                    <img className="focus:outline-none mt-24" src="https://tuk-cdn.s3.amazonaws.com/can-uploader/3_step_center_aligned_how_it_worksSvg2.svg" alt />
                                </div>
                                <div className="flex mt-12 flex-col items-center lg:items-end md:w-8/12">
                                    <h1 className="focus:outline-none text-xl font-bold leading-5">Fill the Contact form</h1>
                                    <h2 className="focus:outline-none text-gray-500 mt-3 pl-3 text-center md:text-right text-base leading-6 tracking-wide">Create a wallet by linking a payment method that you’re comfortable with. Paypal, Visa and more </h2>
                                </div>
                                <div aria-label="transactions" role="img">
                                    <img className="focus:outline-none mt-24" src="https://tuk-cdn.s3.amazonaws.com/can-uploader/3_step_center_aligned_how_it_worksSvg3.svg" alt />
                                </div>
                                <img className="hidden md:block absolute right-0 top-0 -mt-2 -mr-1" src="https://cdn.tuk.dev/assets/components/111220/Fs7/line.png" alt />
                            </div>
                            <div className="flex flex-col items-center md:items-start md:pl-12 lg:border-gray-400 mt-20 md:mt-0 md:w-1/2">
                                <div aria-label={1} role="img">
                                    <img src="https://tuk-cdn.s3.amazonaws.com/can-uploader/3_step_center_aligned_how_it_worksSvg4.svg" alt />
                                </div>
                                <div className="flex mt-6 flex-col items-center md:items-start md:w-8/12">
                                    <h1 className="focus:outline-none text-xl font-bold leading-5">Click On Contact Us</h1>
                                    <h2 className="focus:outline-none text-gray-500 mt-3 text-base leading-6 tracking-wide">Sign up on our website and opt for a program that suits you the best . </h2>
                                </div>
                                <div aria-label="wallet" role="img">
                                    <img className="focus:outline-none mt-32" src="https://tuk-cdn.s3.amazonaws.com/can-uploader/3_step_center_aligned_how_it_worksSvg5.svg" alt />
                                </div>
                                <div aria-label={3} role="img">
                                    <img className="focus:outline-none mt-20" src="https://tuk-cdn.s3.amazonaws.com/can-uploader/3_step_center_aligned_how_it_worksSvg6.svg" alt />
                                </div>
                                <div className="flex mt-6 flex-col items-center md:items-start md:w-8/12">
                                    <h1 className="focus:outline-none text-xl font-bold leading-5">Rest we will handle</h1>
                                    <h2 className="focus:outline-none text-gray-500 mt-3 text-base leading-6 tracking-wide">Start transactions right away. No more complicated process for anything else.</h2>
                                </div>
                            </div>
                        </div>
                        <div className="md:hidden flex flex-col items-center w-full">
                            <img className="focus:outline-none my-10" src="https://tuk-cdn.s3.amazonaws.com/can-uploader/3_step_center_aligned_how_it_worksSvg1.svg" alt="how it work" />
                            <img src="https://tuk-cdn.s3.amazonaws.com/can-uploader/3_step_center_aligned_how_it_worksSvg4.svg" alt />
                            <div className="mt-10">
                                <h1 className="text-xl text-center tracking-wide leading-5 font-bold">SignUp for an Account</h1>
                                <h2 className="text-gray-500 mt-3 text-center text-base leading-6 tracking-wide">Sign up on our website and opt for a program that suits you the best .</h2>
                            </div>
                            <img className="focus:outline-none my-10" src="https://tuk-cdn.s3.amazonaws.com/can-uploader/3_step_center_aligned_how_it_worksSvg5.svg" alt />
                            <img src="https://tuk-cdn.s3.amazonaws.com/can-uploader/3_step_center_aligned_how_it_worksSvg2.svg" alt />
                            <div className="mt-10">
                                <h1 className="text-xl tracking-wide text-center leading-5 font-bold">Create a Wallet</h1>
                                <h2 className="text-gray-500 mt-3 pl-3 text-center text-base leading-6 tracking-wide">Create a wallet by linking a payment method that you’re comfortable with. Paypal, Visa and more</h2>
                            </div>
                            <img className="focus:outline-none my-10" src="https://tuk-cdn.s3.amazonaws.com/can-uploader/3_step_center_aligned_how_it_worksSvg3.svg" alt />
                            <img className src="https://tuk-cdn.s3.amazonaws.com/can-uploader/3_step_center_aligned_how_it_worksSvg6.svg" alt />
                            <div className="flex mt-10 flex-col items-center md:items-start md:w-8/12">
                                <h1 className="text-xl text-center tracking-wide leading-5 font-bold">Start your Transactions</h1>
                                <h2 className="text-gray-500 mt-3 text-center text-base leading-6 tracking-wide">Start transactions right away. No more complicated process for anything else.</h2>
                            </div>
                        </div>
                    </div>
                </div>
            </div>





        </div>
        </>
    );
}
