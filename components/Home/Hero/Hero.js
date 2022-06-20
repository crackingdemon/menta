import { useState } from "react";
import Image from "next/image";
import {
    black,
    blue,
    green,
    red,
    doubt,
    stats,
    seminars,
    sir
} from "../../../assets/background";
import { motion, AnimatePresence } from 'framer-motion'

export default function Hero() {
    const [bgImage, setbgImage] = useState(green);
    const [sideImage, setsideImage] = useState(sir);
    setTimeout(() => {
        if (bgImage === green) {
            setbgImage(black);
        } else if (bgImage === black) {
            setbgImage(red);
        } else if (bgImage === red) {
            setbgImage(blue);
        } else if (bgImage === blue) {
            setbgImage(green);
        }
    }, 8000);
    setTimeout(() => {
        // console.log('image changed');
        if (sideImage === sir) {
            setsideImage(stats);
        } else if (sideImage === stats) {
            setsideImage(doubt);
        } else if (sideImage === doubt) {
            setsideImage(seminars);
        } else if (sideImage === seminars) {
            setsideImage(sir);
        }
    }, 8000);

    return (
        <motion.div style={{ backgroundImage: `url('${blue}')` }}
            className="flex  h-screen justify-between 2xl:px-20 w-screen px-4">
            <Image className="-z-10 relative"
                src={bgImage}
                layout="fill"
                objectFit="cover"
                quality={100}
            />
            <div className="z-10 flex justify-center items-center mt-20">
                <div className="text-white md:ml-10 px-1 md:px-6">
                    <h1 className="text-4xl md:text-5xl 2xl:text-7xl font-bold">
                        We Are Trustworthy <br /> Counselors for all Cources
                    </h1>
                    <p className="text-xl 2xl:text-3xl mt-4">
                        We help students find details on Colleges,Courses,<br />Fee Structures,exams,cut-offs,admission process.
                    </p>
                    <button className="hover:cursor-pointer hover:bg-gray-200 p-3 mt-5 bg-white rounded-lg text-lg md:text-xl 2xl:text-2xl text-black">
                        Contact us
                    </button>
                </div>
            </div>
            <div className="hidden md:flex justify-end items-end right-0 pr-10">
                <motion.div
                    initial={{ x: 570 }}
                    transition={{ duration: 1, repeatDelay: 3, repeatType: "mirror", repeat: Infinity }}
                    animate={{ x: 0 }}
                    style={{ "margin-bottom": "-5px" }} className="p-0 m-0">
                    <Image className="p-0 m-0 relative" src={sideImage} height={550} width={520} />
                </motion.div>
                {/* <AnimatePresence>
                    {sideImage === 0 && (
                        <motion.div
                            initial={{ y: 420 }}
                            transition={{ ease: "easeOut", duration: 1 }}
                            animate={{ y: 0 }}
                            exit={{ y: 450 }}
                            style={{ "margin-bottom": "-5px" }} className="p-0 m-0">
                            <Image className="p-0 m-0" src={sir} height={550} width={520} />
                        </motion.div>
                    )}
                </AnimatePresence>
                <AnimatePresence>
                    {sideImage === 1 && (
                        <motion.div
                            initial={{ y: 420 }}
                            transition={{ type: "fade", duration: 1 }}
                            animate={{ y: 0 }}
                            exit={{ y: 450 }}
                            style={{ "margin-bottom": "-5px" }} className="p-0 m-0">
                            <Image className="p-0 m-0" src={stats} height={550} width={520} />
                        </motion.div>
                    )}
                </AnimatePresence>
                <AnimatePresence>
                    {sideImage === 2 && (
                        <motion.div
                            initial={{ y: 420 }}
                            transition={{ type: "fade", duration: 1 }}
                            animate={{ y: 0 }}
                            exit={{ y: 450 }}
                            style={{ "margin-bottom": "-5px" }} className="p-0 m-0">
                            <Image className="p-0 m-0" src={doubt} height={550} width={520} />
                        </motion.div>
                    )}
                </AnimatePresence>
                <AnimatePresence>
                    {sideImage === 3 && (
                        <motion.div
                            initial={{ y: 420 }}
                            transition={{ type: "fade", duration: 1 }}
                            animate={{ y: 0 }}
                            exit={{ y: 450 }}
                            style={{ "margin-bottom": "-5px" }} className="p-0 m-0">
                            <Image className="p-0 m-0" src={seminars} height={570} width={520} />
                        </motion.div>
                    )}
                </AnimatePresence> */}

            </div>
        </motion.div >
    )
}

// import SVGBG from "../../assets/sun-tornado.svg";
// import { CardA, Herotext } from "./Hero.styles.js"

// function IndexPage() {
//     const [menu, setMenu] = useState(false);
//     return (
//         <>
//             <div className="relative w-full md:h-screen ">
//                 <div className="hidden overflow-hidden md:block ">
//                     <div className="absolute hidden md:flex justify-end overflow-hidden bg-cover bg-center h-screen right-0 w-3/5 ">
//                         <Image
//                             width={500}
//                             height={1000}
//                             src={SVGBG}
//                         />
//                     </div>

//                 </div>
//                 <div className="relative mt-4 text-center sm:text-left sm:mt-0 px-4 xl:px-0 container mx-auto grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-2 xl:grid-cols-2 pt-16 lg:pt-24 2xl:pt-36 gap-8">
//                     <div className="text-color px-6">
//                         <Herotext >
//                             We help you <span className="text-blue-500 inline-flex rounded-xl border-2 p-2">choose.</span>
//                         </Herotext>
//                         <Herotext >
//                             A guidance for your <span className="text-red-500 inline-flex rounded-xl border-2 p-2">future.</span>
//                         </Herotext>
//                         <a href="https://linktr.ee/aptel"><button className="hover:opacity-90 text-xl rounded-xl w-full xl:text-2xl xl:w-10/12 mt-4 xl:mt-11 f-f-r py-6 bg-black text-white text-bold">
//                             Join Us
//                         </button></a>
//                     </div>

//                     <div className="flex justify-center items-center">
//                         <CardA>
//                             <h1 className=" font-medium text-white text-xl tracking-wide">Director&apos;s Message...🖊️</h1>
//                             <h2 className="font-normal tracking-wide text-base text-white lg:w-5/5">Board Exam is considered as a important step in your life specially when you are appearing for your 12 board exam.But truth is student should have also a glance at their career option.In present student has many drafting career option available but they should choose the course in which they are really intereste d and no one can know better then them. This decission can change their Future that is why student should take Career Counselor help to choose the best for their own </h2>
//                             <div className="flex flex-col">
//                                 <backquotes className="font-normal text-white text-sm tracking-wider">Neeraj </backquotes>
//                                 <backqoutes className="font-normal text-white text-sm tracking-wider">CEO </backqoutes>
//                             </div>
//                         </CardA>
//                     </div>
//                 </div>
//             </div>

//             <style>{`
//         .top-100 {
//             animation: slideDown .5s ease-in-out;
//         }

//         @keyframes slideDown {
//             0% {
//                 top: -50%;
//             }

//             100% {
//                 top: 0;
//             }
//         }

//         * {
//             outline: none !important;
//             -webkit-tap-highlight-color: rgba(0, 0, 0, 0);
//             -webkit-tap-highlight-color: transparent;
//         } `}</style>
//         </>
//     );
// }

// export default IndexPage;
