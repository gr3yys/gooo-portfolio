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
        className="w-full bg-[#1f1f1f] fixed px-5 lg:px-8 xl:px-[8%]
        flex items-center justify-between z-50"
      >
        {/* Logo that links to the top of the page */}
        <a href="#top">
          <Image
            src={assets.logo_dark}
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
          <li><a href="#top" className="hover:text-[#FFFAB4]">Home</a></li>
          <li><a href="#about" className="hover:text-[#FFFAB4]">About</a></li>
          <li><a href="#experience" className="hover:text-[#FFFAB4]">Resume</a></li>
          <li><a href="#skills" className="hover:text-[#FFFAB4]">Skills</a></li>
          <li><a href="#projects" className="hover:text-[#FFFAB4]">Projects</a></li>
        </ul>

        {/* Contact button (desktop) and hamburger menu (mobile) */}
        <div className="flex items-center gap-4">
          {/* Contact button visible only on large screens */}
          <a
            href="#contact"
            className="hidden lg:flex items-center gap-3 px-10 py-2.5
            rounded-full ml-4 text-[#1f1f1f] bg-[#FFFAB4]"
          >
            Contact
            <Image src={assets.contact_mail} alt="contact mail icon" className="w-6" />
          </a>

          {/* Hamburger menu icon shown on mobile screens */}
          <button className="block md:hidden ml-3" onClick={openMenu}>
            <Image src={assets.menu_white} alt="menu icon" className="w-8" />
          </button>
        </div>

        {/* Mobile Side Menu */}
        <ul
          ref={sideMenuRef}
          className={`flex md:hidden flex-col gap-4 py-20 px-10 fixed -right-0 
            top-0 bottom-0 w-64 z-50 h-screen bg-[#1f1f1f] shadow-xl transition-transform duration-500 
            ${isMenuOpen ? 'transform-none' : 'transform translate-x-full'}`}
        >
          {/* Close icon at the top right */}
          <div className="absolute right-6 top-6" onClick={closeMenu}>
            <Image src={assets.close_white} alt="close icon" className="w-5 cursor-pointer" />
          </div>

          {/* Mobile Nav Links (clicking also closes the menu) */}
          <li><a onClick={closeMenu} href="#top" className="hover:text-[#FFFAB4]">Home</a></li>
          <li><a onClick={closeMenu} href="#about" className="hover:text-[#FFFAB4]">About</a></li>
          <li><a onClick={closeMenu} href="#experience" className="hover:text-[#FFFAB4]">Resume</a></li>
          <li><a onClick={closeMenu} href="#skills" className="hover:text-[#FFFAB4]">Skills</a></li>
          <li><a onClick={closeMenu} href="#projects" className="hover:text-[#FFFAB4]">Projects</a></li>
          <li><a onClick={closeMenu} href="#contact" className="hover:text-[#FFFAB4]">Contact</a></li>
        </ul>
      </nav>
    </>
  );
};

export default Navbar;