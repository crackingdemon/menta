import { CarouselProvider, Slider, Slide, ButtonBack, ButtonNext } from "pure-react-carousel";
import "pure-react-carousel/dist/react-carousel.es.css";
import React, { useState } from "react";
import Image from "next/image";
import { Sem1, Sem2, Sem3, Sem4 } from "../../../assets/seminars";
import Webslider from "./webslider";
import Mobileslider from "./mobileslider";
export default function corosel() {
    const data = [
        {
            title: 'Seminar',
            img: Sem1,
        },
        {
            title: 'Seminar',
            img: Sem2,
        },
        {
            title: 'Seminar',
            img: Sem3,
        },
        {
            title: 'Seminar',
            img: Sem4,
        },
        {
            title: 'Seminar',
            img: Sem2,
        },
        {
            title: 'Seminar',
            img: Sem3,
        },
    ];
    // const [ind, setInd] = useState(0);
    return (
        <>
            <aside>
  <div class="px-4 py-16 mx-auto max-w-screen-2xl sm:px-6 lg:px-8 bg-white">
    <div class="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4">
      <div class="p-8 text-center text-white bg-indigo-600 sm:col-span-2 sm:p-16 lg:py-24">
        <div class="max-w-lg mx-auto space-y-8">
          <p class="text-3xl font-bold sm:text-4xl">
            Some of our Seminars
          </p>

          <p class="text-sm">
           Seminar Photos 
          </p>

          <a
            href=""
            class="inline-flex items-center px-5 py-3 mt-8 font-medium text-indigo-600 bg-white rounded-lg hover:opacity-75"
          >
            Come and see

            <svg
              xmlns="http://www.w3.org/2000/svg"
              class="flex-shrink-0 w-4 h-4 ml-3"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M14 5l7 7m0 0l-7 7m7-7H3" />
            </svg>
          </a>
        </div>
      </div>

      <div class="relative h-64 lg:order-first lg:h-full">
      <div class="relative h-64 lg:h-full">
      <div class="h-96 carousel carousel-vertical rounded-box">
  <div class="carousel-item h-full">
    <img src="https://api.lorem.space/image/game?w=256&h=400&hash=8B7BCDC2" />
  </div> 
  <div class="carousel-item h-full">
    <img src="https://api.lorem.space/image/game?w=256&h=400&hash=500B67FB" />
  </div> 
  <div class="carousel-item h-full">
    <img src="https://api.lorem.space/image/game?w=256&h=400&hash=A89D0DE6" />
  </div> 
  <div class="carousel-item h-full">
    <img src="https://api.lorem.space/image/game?w=256&h=400&hash=225E6693" />
  </div> 
  <div class="carousel-item h-full">
    <img src="https://api.lorem.space/image/game?w=256&h=400&hash=9D9539E7" />
  </div> 
  <div class="carousel-item h-full">
    <img src="https://api.lorem.space/image/game?w=256&h=400&hash=BDC01094" />
  </div> 
  <div class="carousel-item h-full">
    <img src="https://api.lorem.space/image/game?w=256&h=400&hash=7F5AE56A" />
  </div>
</div>
      </div>
      </div>

      <div class="relative h-64 lg:h-full">
      <div class="h-96 carousel carousel-vertical rounded-box">
  <div class="carousel-item h-full">
    <img src="https://api.lorem.space/image/game?w=256&h=400&hash=8B7BCDC2" />
  </div> 
  <div class="carousel-item h-full">
    <img src="https://api.lorem.space/image/game?w=256&h=400&hash=500B67FB" />
  </div> 
  <div class="carousel-item h-full">
    <img src="https://api.lorem.space/image/game?w=256&h=400&hash=A89D0DE6" />
  </div> 
  <div class="carousel-item h-full">
    <img src="https://api.lorem.space/image/game?w=256&h=400&hash=225E6693" />
  </div> 
  <div class="carousel-item h-full">
    <img src="https://api.lorem.space/image/game?w=256&h=400&hash=9D9539E7" />
  </div> 
  <div class="carousel-item h-full">
    <img src="https://api.lorem.space/image/game?w=256&h=400&hash=BDC01094" />
  </div> 
  <div class="carousel-item h-full">
    <img src="https://api.lorem.space/image/game?w=256&h=400&hash=7F5AE56A" />
  </div>
</div>
      </div>
    </div>
  </div>
</aside>
        </>
    )
}