import { assets } from '@/assets/assets'
import Image from 'next/image'
import React, { useRef, useState} from 'react'

const Navbar = () => {

    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const sideMenuRef = useRef();

    const openMenu = ()=>{
        setIsMenuOpen(true);
        sideMenuRef.current.style.transform = 'translateX(0)'
    }

    const closeMenu = ()=>{
        setIsMenuOpen(false);
        sideMenuRef.current.style.transform = 'translateX(16rem)'
    }

    return (
        <>
            <nav className='w-full fixed bg-[#dde4de] px-5 lg:px-8 xl:px-[8%]
            flex items-center justify-between z-50'>
                <a href="#top">
                    <Image src={assets.logo} alt='' width={70} className='cursor-pointer mr-14'/>
                </a>
 
                <ul className='hidden md:flex items-center gap-6 lg:gap-8
                px-12 py-3 bg-opacity-50'>
                    <li><a href="#top" className='hover:opacity-75'>Home</a></li>
                    <li><a href="#about" className='hover:opacity-75'>About</a></li>
                    <li><a href="#experience" className='hover:opacity-75'>Experience</a></li>
                    <li><a href="#projects" className='hover:opacity-75'>Projects</a></li>
                    <li><a href="#certificates" className='hover:opacity-75'>Certificates</a></li>
                </ul>

                <div className='flex items-center gap-4'>
                    <a href="#contact" className='hidden lg:flex 
                    items-center gap-3 px-10 py-2.5 border border-gray-500
                    rounded-full ml-4'>Contact
                    </a>

                    <button className='block md:hidden ml-3' onClick={openMenu}>
                        <Image src={assets.menu_black} alt='' className='w-8' />
                    </button>
                </div>

                {/* Mobile navbar */}

                <ul ref={sideMenuRef} className={`flex md:hidden flex-col gap-4 py-20 px-10 fixed -right-0 
                    top-0 bottom-0 w-64 z-50 h-screen bg-[#dde4de] shadow-xl text-black transition-transform duration-500 
                    ${isMenuOpen ? 'transform-none' : 'transform translate-x-full'}`}>

                    <div className="absolute right-6 top-6" onClick={closeMenu}>
                        <Image src={assets.close_black} alt='' className='w-5 cursor-pointer'/>
                    </div>

                    <li><a onClick={closeMenu} href="#top" className='hover:opacity-75'>Home</a></li>
                    <li><a onClick={closeMenu} href="#about" className='hover:opacity-75'>About</a></li>
                    <li><a onClick={closeMenu} href="#experience" className='hover:opacity-75'>Experience</a></li>
                    <li><a onClick={closeMenu} href="#projects" className='hover:opacity-75'>Projects</a></li>
                    <li><a onClick={closeMenu} href="#certificates" className='hover:opacity-75'>Certificates</a></li>
                    <li><a onClick={closeMenu} href="#contact" className='hover:opacity-75'>Contact</a></li>
                </ul>

            </nav>
        </>
    )
}

export default Navbar