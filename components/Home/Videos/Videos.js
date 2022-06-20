import React from 'react'
import Ytube from './Youtube';

const Videos = () => {
  return (
    <>
    <section>
  <div class="max-w-screen-xl px-4 py-12 mx-auto sm:px-6 lg:px-8 bg-white">
    <div class="grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-3 lg:items-stretch">
      <div class="flex items-center p-8 bg-gray-100 rounded">
        <div class="mx-auto text-center lg:text-left">
          <h2 class="text-2xl font-bold">
          Our Best Videos

          </h2>

          <p class="mt-4 text-sm text-gray-700 max-w-[45ch]">
            Here is the link of our Youtube Channel
          </p>

          <a
            href="/collections/watches"
            class="inline-block px-6 py-3 mt-6 text-sm text-white bg-black rounded"
          >
            View 
          </a>
        </div>
      </div>

      <div class="grid grid-cols-2 gap-3 lg:col-span-2 lg:grid-cols-3 lg:py-12">
        <a
          href="/product/simple-watch"
          class="block"
        >
          <div class="aspect-w-1 aspect-h-1">
            <Ytube/>
          </div>

          <div class="mt-2">
            <h5 class="font-medium">
             
            </h5>

            <p class="mt-1 text-sm text-gray-700">
            
            </p>
          </div>
        </a>

        <a
          href="/product/simple-watch"
          class="block"
        >
          <div class="aspect-w-1 aspect-h-1">
          <Ytube/>
          </div>

          <div class="mt-2">
            <h5 class="font-medium">
             
            </h5>

            <p class="mt-1 text-sm text-gray-700">
             
            </p>
          </div>
        </a>

        <a
          href="/product/simple-watch"
          class="block"
        >
          <div class="aspect-w-1 aspect-h-1">
          <Ytube/>
          </div>

          <div class="mt-2">
            <h5 class="font-medium">
              
            </h5>

            <p class="mt-1 text-sm text-gray-700">
             
            </p>
          </div>
        </a>
      </div>
    </div>
  </div>
</section></>
  )
}

export default Videos
