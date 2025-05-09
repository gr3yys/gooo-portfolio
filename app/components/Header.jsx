// import { assets } from '@/assets/assets'
// import Image from 'next/image'
// import React from 'react'

// const intro = {
//   items: {
//     name: 'G',
//     ocupation: 'Computer Science Student',
//     btn: 'download resume',
//     icon: assets.download_icon,
//     alt: 'download icon',
//   }
// };

// const Header = () => {
//   const { name, ocupation, btn, icon, alt } = intro.items;

//   return (
//     <div className='w-11/12 max-w-3xl text-center mx-auto h-screen flex flex-col items-center justify-center gap-4'>
//       <div>
//         <Image src={assets.profile_img} alt='profile' className='rounded-full w-32' />
//       </div>

//       <h1 className='text-3xl sm:text-6xl lg:text-[66px]'>{name}</h1>

//       <h3 className='flex items-end gap-2 text-xl md:text-lg mb-3'>{ocupation}</h3>

//       <div className='flex flex-col sm:flex-row items-center gap-4 mt-4'>
//         <a href="/gooo-resume.pdf" download className='px-10 py-3 rounded-full bg-[#d0e4ee] flex items-center gap-2 transition delay-150 duration-300 ease-in-out hover:-translate-y-1 hover:scale-100'>{btn}
//           <Image src={icon} alt={alt} className='w-4'/>
//         </a>
//       </div>
//     </div>
//   )
// }
// import { assets } from '@/assets/assets'
// import Image from 'next/image'
// import React from 'react'

// const intro = {
//   items: {
//     name: 'G',
//     ocupation: 'Computer Science Student',
//     btn: 'download resume',
//     icon: assets.download_icon,
//     alt: 'download icon',
//   }
// };

// const Header = () => {
//   const { name, ocupation, btn, icon, alt } = intro.items;

//   return (
//     <div className='w-screen h-screen pt-16 flex flex-col md:flex-row'>
//       {/* Image Section */}
//       <div className='w-full md:w-1/2  md:h-full'>
//         <Image src={assets.profile_img} alt='profile' className='w-full h-full object-cover' />
//       </div>

//       {/* Text Section */}
//       <div className='w-full md:w-1/2 h-1/2 md:h-full flex items-center'>
//         <div className='p-8 md:p-25 text-left'>
//           <h1 className='text-3xl sm:text-6xl lg:text-[66px] pb-4'>{name}</h1>
//           <h3 className='flex items-end gap-2 text-xl md:text-lg mb-3'>{ocupation}</h3>

//           <div className='flex items-center gap-4 mt-4'>
//             <a href="/gooo-resume.pdf" download className='px-10 py-3 rounded-full bg-[#d0e4ee] flex items-center gap-2 transition delay-150 duration-300 ease-in-out hover:-translate-y-1 hover:scale-100'>
//               {btn}
//               <Image src={icon} alt={alt} className='w-4' />
//             </a>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default Header;
import { assets } from '@/assets/assets';
import Image from 'next/image';
import React from 'react';

const intro = {
  items: {
    name: 'Greychel',
    last: 'Ocasio Ortiz',
    ocupation: 'Computer Science Student',
    btn: 'Download Resume',
    icon: assets.download_icon,
    alt: 'Download icon',
  },
};

const Header = () => {
  const { name, last, ocupation, btn, icon, alt } = intro.items;

  return (
    <div className="w-screen h-screen pt-16 flex flex-col md:flex-row relative overflow-hidden">
      {/* Image Section */}
      <div className="relative w-full md:w-1/2 h-full overflow-hidden">
        <Image
          src={assets.profile_img}
          alt="Profile"
          className="w-full h-full object-cover block"
          layout="fill"
          priority
        />

        {/* Overlay */}
        <div className="absolute inset-0 bg-black/50 z-10" />

        {/* Overlay - Mobile */}
        <div className="absolute inset-0 flex items-center justify-center text-white md:hidden p-4">
          <div className="text-center z-10 px-4 max-w-full">
            <h1 className="text-4xl sm:text-6xl lg:text-[66px]">{name}</h1>
            <h1 className="text-4xl sm:text-6xl lg:text-[66px]">{last}</h1>

            <h3 className="text-xl mt-2">{ocupation}</h3>
            <div className="flex justify-center items-center gap-4 mt-4">
              <a
                href="/gooo-resume.pdf"
                download
                className="px-8 py-3 rounded-full bg-[#d0e4ee] flex items-center gap-2 transition-transform duration-300 hover:-translate-y-1 hover:scale-105 text-black"
              >
                {btn}
                <Image src={icon} alt={alt} className="w-4" />
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* Desktop Text Section */}
      <div className="hidden md:flex w-full md:w-1/2 items-center justify-start py-8">
        <div className="p-20 text-left">
          <h1 className="text-3xl sm:text-6xl lg:text-[66px] pb-4">{name}</h1>
          <h1 className="text-3xl sm:text-6xl lg:text-[66px] pb-4">{last}</h1>
          <h3 className="flex items-end gap-2 text-xl md:text-lg mb-3">{ocupation}</h3>
          <div className="flex items-center gap-4 mt-4">
            <a
              href="/gooo-resume.pdf"
              download
              className="px-10 py-3 bg-[#d0e4ee] flex items-center gap-2 transition-transform duration-300 hover:-translate-y-1 hover:scale-105"
            >
              {btn}
              <Image src={icon} alt={alt} className="w-4" />
            </a>
          </div>
        </div>
      </div>
    </div>

  );
};


export default Header;
