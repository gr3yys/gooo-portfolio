import { assets } from '@/assets/assets';
import Image from 'next/image';
import React, { useRef, useState } from 'react';

// Navbar component provides both a desktop and mobile navigation menu
const Navbar = () => {
  // State to control mobile side menu visibility
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  // Ref to the mobile menu container (could be used for animations or focus control)
  const sideMenuRef = useRef();

  // Open mobile menu
  const openMenu = () => {
    setIsMenuOpen(true);
  };

  // Close mobile menu
  const closeMenu = () => {
    setIsMenuOpen(false);
  };

  return (
    <>
      {/* Top Navigation Bar */}
      <nav
        className="w-full bg-white shadow-md fixed px-5 lg:px-8 xl:px-[8%]
        flex items-center justify-between z-50"
      >
        {/* Logo that links to the top of the page */}
        <a href="#top">
          <Image
            src={assets.logo}
            alt="site logo"
            width={70}
            className="cursor-pointer mr-14"
          />
        </a>

        {/* Desktop Navigation Links */}
        <ul
          className="hidden md:flex items-center gap-6 lg:gap-8
          px-12 py-3 bg-opacity-50"
        >
          <li><a href="#top" className="hover:text-[#A1BCC8]">Home</a></li>
          <li><a href="#about" className="hover:text-[#A1BCC8]">About</a></li>
          <li><a href="#experience" className="hover:text-[#A1BCC8]">Resume</a></li>
          <li><a href="#projects" className="hover:text-[#A1BCC8]">Projects</a></li>
          <li><a href="#certificates" className="hover:text-[#A1BCC8]">Certificates</a></li>
        </ul>

        {/* Contact button (desktop only) and hamburger menu (mobile only) */}
        <div className="flex items-center gap-4">
          {/* Contact button visible only on large screens */}
          <a
            href="#contact"
            className="hidden lg:flex items-center gap-3 px-10 py-2.5 
            rounded-full ml-4 hover:text-[#A1BCC8]"
          >
            Contact
            <Image src={assets.contact_mail} alt="contact mail icon" className="w-6" />
          </a>

          {/* Hamburger menu icon shown on mobile screens */}
          <button className="block md:hidden ml-3" onClick={openMenu}>
            <Image src={assets.menu_black} alt="menu icon" className="w-8" />
          </button>
        </div>

        {/* Mobile Side Menu (Slides in/out) */}
        <ul
          ref={sideMenuRef}
          className={`flex md:hidden flex-col gap-4 py-20 px-10 fixed -right-0 
            top-0 bottom-0 w-64 z-50 h-screen bg-white shadow-xl transition-transform duration-500 
            ${isMenuOpen ? 'transform-none' : 'transform translate-x-full'}`}
        >
          {/* Close icon at the top right */}
          <div className="absolute right-6 top-6" onClick={closeMenu}>
            <Image src={assets.close_black} alt="close icon" className="w-5 cursor-pointer" />
          </div>

          {/* Mobile Nav Links (clicking also closes the menu) */}
          <li><a onClick={closeMenu} href="#top" className="hover:text-[#A1BCC8]">Home</a></li>
          <li><a onClick={closeMenu} href="#about" className="hover:text-[#A1BCC8]">About</a></li>
          <li><a onClick={closeMenu} href="#experience" className="hover:text-[#A1BCC8]">Resume</a></li>
          <li><a onClick={closeMenu} href="#projects" className="hover:text-[#A1BCC8]">Projects</a></li>
          <li><a onClick={closeMenu} href="#certificates" className="hover:text-[#A1BCC8]">Certificates</a></li>
          <li><a onClick={closeMenu} href="#contact" className="hover:text-[#A1BCC8]">Contact</a></li>
        </ul>
      </nav>
    </>
  );
};

export default Navbar;