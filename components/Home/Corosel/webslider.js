// import React from 'react'
// import Image from 'next/image'

// export default function webslider({ Img, Title }) {
//     return (
//         <div className="gallery-cell w-full h-full">
//             <div className="relative w-full h-full lg:block hidden">
//                 <Image height={400} width={700} src={Img} className="object-center object-cover" />
//                 <div className="pl-6 pb-6 lg:pl-8 lg:pb-8 absolute left-0 bottom-0">
//                     <h1 className="text-xl leading-5 lg:text-2xl lg:leading-normal font-medium text-white">{Title}</h1>
//                 </div>
//             </div>
//             <div className="relative w-full h-full lg:hidden">
//                 <Image height={400} width={700} src={Img} alt="sitting area" className="object-center object-cover w-full h-full" />
//                 <div className="pl-6 pb-6 lg:pl-8 lg:pb-8 absolute left-0 bottom-0">
//                     <h1 className="text-xl leading-5 lg:text-2xl lg:leading-normal font-medium text-white">{Title}</h1>
//                 </div>
//             </div>
//         </div>
//     )
// }