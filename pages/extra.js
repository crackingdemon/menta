<div className="py-8 bg-white text-white">
<div className="w-full flex flex-wrap">
    {/* simple heading in robot font */}
    <div className="w-full text-black text-6xl flex flex-wrap justify-center items-center text-center">
        Our Best Videos
    </div>

    <div className="flex flex-col w-full pt-4">
        <div className="flex flex-col md:flex-row items-center justify-center w-full">
            <Ytube />
            <Ytube />
        </div>
        {/* <div className="flex w-full">
            <Ytube />
            <Ytube />
        </div> */}
        {/* <div className="flex w-full">
            <Ytube />
            <Ytube />
        </div> */}
    </div>
</div>
</div>



//corosell


<div className="w-full text-black text-5xl md:text-6xl flex flex-wrap justify-center items-center text-center">
                Some Of Our Seminars
            </div>
            <div className="2xl:mx-auto 2xl:container flex justify-center">
                <div className="2xl:px-10 px-2 py-12 h-96 md:h-full w-full lg:w-4/5">
                    {/* Carousel for Small-Sized Screen */}
                    <CarouselProvider className="relative block sm:hidden" naturalSlideWidth={400} isIntrinsicHeight={true} totalSlides={6} visibleSlides={1} step={1} infinite={true}>
                        <div className="js-flickity flex justify-center items-center">
                            <ButtonBack role="button" aria-label="slide backward" className="w-8 h-8 md:w-14 md:h-14 rounded-full flex justify-center items-center bg-white border border-gray-300 hover:bg-gray-400 absolute z-30 left-0 ml-8 focus:outline-none focus:bg-gray-400 focus:ring-2 focus:ring-offset-2 focus:ring-gray-400 cursor-pointer" id="prev">
                                <svg width={8} height={14} viewBox="0 0 8 14" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M7 1L1 7L7 13" stroke="black" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" />
                                </svg>
                            </ButtonBack>
                            <Slider>
                                {data.map((item, index) => (
                                    <Slide key={index} index={index}>
                                        <Mobileslider Img={item.img} Title={item.title} />
                                    </Slide>
                                ))}
                            </Slider>
                            <ButtonNext role="button" aria-label="slide forward" className="w-8 h-8 md:w-14 md:h-14 rounded-full flex justify-center items-center bg-white border border-gray-300 hover:bg-gray-400 absolute z-30 right-0 mr-8 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-800" id="next">
                                <svg width={8} height={14} viewBox="0 0 8 14" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M1 1L7 7L1 13" stroke="black" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" />
                                </svg>
                            </ButtonNext>
                        </div>
                    </CarouselProvider>

                    {/* Carousel for Medium and Large-Sized Screen */}
                    <CarouselProvider className=" relative hidden sm:block" naturalSlideWidth={150} isIntrinsicHeight={true} totalSlides={6} visibleSlides={1.4} step={1} infinite={true} currentSlide={1}>
                        <div className="js-flickity flex justify-center items-center">
                            <ButtonBack role="button" aria-label="slide backward" className="w-12 h-12 md:w-14 md:h-14 rounded-full flex justify-center items-center bg-white border border-gray-300 hover:bg-gray-400 absolute z-30 left-0 ml-8 focus:outline-none focus:bg-gray-400 focus:ring-2 focus:ring-offset-2 focus:ring-gray-400 cursor-pointer" id="prev">
                                <svg width={8} height={14} viewBox="0 0 8 14" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M7 1L1 7L7 13" stroke="black" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" />
                                </svg>
                            </ButtonBack>

                            <Slider className="carousel__sliderLarge">
                                {data.map((item, index) => (
                                    <Slide key={index} className="carousel__inner-slideLarge" index={index}>
                                        <Webslider Img={item.img} Title={item.title} />
                                    </Slide>
                                ))}
                            </Slider>

                            <ButtonNext role="button" aria-label="slide forward" className="w-12 h-12 md:w-14 md:h-14 rounded-full flex justify-center items-center bg-white border border-gray-300 hover:bg-gray-400 absolute z-30 right-0 mr-8 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-800" id="next">
                                <svg width={8} height={14} viewBox="0 0 8 14" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M1 1L7 7L1 13" stroke="black" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" />
                                </svg>
                            </ButtonNext>
                        </div>
                    </CarouselProvider>
                </div>

                <style jsx>
                    {`
                    .gallery-cell {
                        height: 386px;
                        padding-right:15px;
                    }
                    @media (min-width: 300px) and (max-width: 420px) {
                        .gallery-cell {
                            height: 286px !important;
                            import webslider from './webslider';
import data from './../../data/data';

                        }
                    }
                    
                    @media (max-width: 640px) {
                        .gallery-cell {
                            padding-right:0;
                        }
                    }

                    .carousel__sliderLarge {
                        padding-left: 20%;
                        padding-right: 20%;
                    }

                    /* gives us the illusion of spaces between the slides */
                    .carousel__inner-slideLarge {
                        width: calc(100% - 20px);
                        height: calc(100% - 20px);
                        left: 10px;
                        top: 10px;
                        
                    }
                `}
                </style>
            </div>