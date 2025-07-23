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
    <div
      className="w-screen h-screen bg-cover bg-center flex justify-center md:justify-start items-center text-white relative"
      style={{ backgroundImage: `url(${assets.header_img.src})` }}
    >
      {/* Overlay */}
      <div className="absolute inset-0 bg-black opacity-40 z-0" />

      {/* Text */}
      <div className="relative z-10 text-center md:text-left px-4 max-w-3xl flex flex-col items-center md:items-start md:ml-24">
        <h1 className="text-md md:text-lg text-gray-100 mb-2">Hello,</h1>
        <h1 className="text-4xl md:text-6xl lg:text-[66px] font-bold">I'm {name}</h1>
        <h3 className="text-xl md:text-2xl mt-4">{occupation}</h3>

        {/* <div className="flex flex-col sm:flex-row justify-center md:justify-start items-center gap-4 mt-6">
          <a
            href="/gooo-resume.pdf"
            download
            className="px-8 py-3 bg-[#FFFAB4] text-[#1f1f1f] rounded flex items-center gap-2 transition-transform duration-300 hover:-translate-y-1 hover:scale-105 hover:bg-[#eee99b]"
          >
            {btn}
            <Image src={icon} alt={alt} className="w-4" />
          </a>

          <a
            href="https://github.com/gr3yys"
            target="_blank"
            rel="noopener noreferrer"
            className="px-10 py-3 border border-[#FFFAB4] rounded flex items-center gap-2 transition-transform duration-300 hover:-translate-y-1 hover:scale-105"
          >
            Github
            <Image src={assets.github} alt="github" className="w-4" />
          </a>
        </div> */}

        <div className="flex flex-row justify-center md:justify-start items-center gap-4 mt-6">
          <a
              href="/gooo-resume.pdf"
              download
              className="p-2 bg-[#FFFAB4] text-[#1f1f1f] rounded-sm flex items-center gap-2 transition-transform duration-300 hover:-translate-y-1 hover:scale-105 hover:bg-[#eee99b]"
            >
              <Image src={icon} alt={alt} className="w-3" />
          </a>

          <a
            href="https://github.com/gr3yys"
            target="_blank"
            rel="noopener noreferrer"
            className="p-4 transition-transform duration-300 hover:-translate-y-1 hover:scale-105"
          >
            <Image src={assets.github_icon} alt="github" className="w-7" />
          </a>

          <a
            href="https://linkedin.com/in/greychel-ocasio"
            target="_blank"
            rel="noopener noreferrer"
            className="transition-transform duration-300 hover:-translate-y-1 hover:scale-105"
          >
            <Image src={assets.linkedin} alt="linkedin" className="w-7" />
          </a>
        </div>
      </div>
    </div>
  );
};

export default Header;