import Image from "next/image";
import { Instagram, Telegram, Whatsapp, Youtube } from "../../../assets";
import Ytube from './Youtube';

export default function Achievments() {
    return (
        <div>
            <div className="p-0 md:p-10 bg-white">
                <div className="w-full mb-4 text-black text-5xl md:text-6xl flex flex-wrap justify-center items-center uppercase text-center bg-white">
                    OUR ACHIEVEMENTS
                </div>

                {/* Social Achievements */}
                {/* web */}
                <div className="hidden sm:flex justify-center items-centers space-between flex-wrap ">
                    <div className="flex mx-4 justify-center items-center">
                        <Image src={Youtube}
                            height={130}
                            width={130} />
                        <div className="text-5xl">35K+</div>
                    </div>
                    <div className="flex mx-4 justify-center items-center">
                        <Image src={Instagram}
                            height={110}
                            width={110} />
                        <div className="ml-4 text-5xl">35K+</div>
                    </div>
                    <div className="flex mx-4 justify-center items-center">
                        <Image src={Whatsapp}
                            height={130}
                            width={130} />
                        <div className="text-5xl">35K+</div>
                    </div>
                    <div className="flex mx-4 justify-center items-center">
                        <Image src={Telegram}
                            height={130}
                            width={130} />
                        <div className="text-5xl">35K+</div>
                    </div>
                </div>

                <div className="flex sm:hidden justify-center items-centers space-between flex-wrap ">
                    <div className="flex mx-4 justify-center items-center">
                        <Image src={Youtube}
                            height={70}
                            width={70} />
                        <div className="text-4xl">35K+</div>
                    </div>
                    <div className="flex mx-4 justify-center items-center">
                        <Image src={Instagram}
                            height={70}
                            width={70} />
                        <div className="ml-4 text-4xl">35K+</div>
                    </div>
                    <div className="flex mx-4 justify-center items-center">
                        <Image src={Whatsapp}
                            height={70}
                            width={70} />
                        <div className="text-4xl">35K+</div>
                    </div>
                    <div className="flex mx-4 justify-center items-center">
                        <Image src={Telegram}
                            height={70}
                            width={70} />
                        <div className="text-4xl">35K+</div>
                    </div>
                </div>

                <div className="mx-auto container py-12 px-6 xl:px-0 flex justify-center items-center flex-col">
                    <div className="flex justify-between bg-gray-50 items-stretch flex-row">
                        <div className="flex items-center bg-gray-800 justify-center">
                            <p className="transform flex flex-shrink-0 -rotate-90 text-2xl font-semibold tracking-wide leading-normal text-white">50% OFF</p>
                        </div>
                        <div className="flex justify-center items-start flex-col xl:w-2/5 md:w-5/12 xl:px-7 px-6 md:px-0 md:py-0 py-5">
                            <div>
                                <p className="text-3xl xl:text-4xl font-semibold leading-9 text-gray-800">Purchase Our Counselling Book</p>
                            </div>
                            <div className="xl:mt-4 mt-2">
                                <p className="text-base xl:text-xl leading-7 text-gray-600 pr-4">More than 16k students have downloaded our book get yours too.</p>
                            </div>
                        </div>
                        <div className="hidden md:block h-44 md:h-60 xl:h-72">
                            <img className="hidden h-full xl:block" src="https://i.ytimg.com/vi/TUQxQM6AMs0/maxresdefault.jpg" alt="pexels-dmitry-zvolskiy-2082090-1" />
                            <img className="xl:hidden h-full" src="https://i.ytimg.com/vi/TUQxQM6AMs0/maxresdefault.jpg" alt="pexels-dmitry-zvolskiy-2082090-1-1" />
                        </div>
                    </div>
                    <div className="md:hidden mt-6 w-full">
                        <img src="https://i.ytimg.com/vi/TUQxQM6AMs0/maxresdefault.jpg" alt="pexels-dmitry-zvolskiy-2082090-1" className="w-full" />
                    </div>
                </div>




               


            </div>
        </div>
    );
}