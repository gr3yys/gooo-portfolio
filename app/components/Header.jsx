import { assets } from '@/assets/assets';
import Image from 'next/image';
import React from 'react';

// assets used in header
const intro = {
  items: {
    name: 'Greychel Ocasio',
    occupation: 'Front-end developer',
    btn: 'Resume',
    icon: assets.download_icon,
    alt: 'Download icon',
  },
};

const Header = () => {
  const { name, occupation, btn, icon, alt } = intro.items;

  return (
    <div className="w-screen h-screen pt-16 flex flex-col md:flex-row relative overflow-hidden shadow-md">

      {/* Left Side: Image Section */}
      <div className="relative w-full md:w-1/2 h-full overflow-hidden">

        {/* Overlay */}
        <div className="absolute inset-0 bg-black opacity-10  z-10"></div>

        {/* Desktop Background Image (md and up) */}
        <div className="hidden md:block w-full h-full relative">
          <Image
            src={assets.profile_img_sm}
            alt="Profile"
            fill
            className="w-full h-full object-cover block"
            priority
          />
        </div>

        {/* Mobile Layout */}
        <div className='block md:hidden w-full h-full items-center justify-center'>
          <div className='w-11/12 max-w-3xl text-center mx-auto h-full flex flex-col items-center justify-center gap-4'>
            {/* Circular Profile Image */}
            <div>
              <Image
                src={assets.profile_img_sm}
                alt='Mobile Profile'
                className="rounded-full w-32"
              />
            </div>

            {/* Name & Occupation */}
            <div>
              <h1 className='pb-2 text-gray-100'>Hello, I'm</h1>
              <h1 className="text-4xl sm:text-6xl lg:text-[66px]">{name}</h1>
              <h3 className="text-xl mt-4">{occupation}</h3>
            </div>

            {/* Buttons */}
            <div className="grid justify-center items-center gap-4 mt-2">
              <a
                href="/gooo-resume.pdf"
                download
                className="px-8 py-3 bg-[#FFFAB4] rounded flex items-center gap-2 transition-transform duration-300 hover:-translate-y-1 hover:scale-105 hover:bg-[#eee99b] text-[#1f1f1f]"
              >
                {btn}
                <Image src={icon} alt={alt} className="w-4" />
              </a>

              <a
                href="https://github.com/gr3yys"
                target="_blank"
                rel="noopener noreferrer"
                className="px-10 py-3 text-[#1f1f1f] border border-[#FFFAB4] rounded flex justify-center items-center gap-2 transition-transform duration-300 hover:-translate-y-1 hover:scale-105 hover:border-[#eee99b]"
              >
                <Image src={assets.github} alt="github" className="w-4 m-2" />
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* Right Side: Desktop Text Section */}
      <div className="hidden md:flex w-full md:w-1/2 items-center justify-start py-8">
        <div className="p-20 text-left">
          <h1 className='pb-2 text-gray-100'>Hello, I'm</h1>
          <h1 className="text-3xl sm:text-6xl lg:text-[66px] pb-4">{name}</h1>
          <h3 className="flex items-end gap-2 text-xl md:text-lg mb-3">{occupation}</h3>

          <div className="flex items-center gap-4 mt-4">
            <a
              href="/gooo-resume.pdf"
              download
              className="px-10 py-3 bg-[#FFFAB4] flex items-center gap-2 transition-transform duration-300 hover:-translate-y-1 hover:scale-105 text-[#1f1f1f]"
            >
              {btn}
              <Image src={icon} alt={alt} className="w-4" />
            </a>

            <a
              href="https://github.com/gr3yys"
              target="_blank"
              rel="noopener noreferrer"
              className="px-10 py-3 border border-[#FFFAB4] flex items-center gap-2 transition-transform duration-300 hover:-translate-y-1 hover:scale-105"
            >
              Github
              <Image src={assets.github} alt="github" className="w-4" />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;