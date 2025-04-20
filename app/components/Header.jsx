import { assets } from '@/assets/assets'
import Image from 'next/image'
import React from 'react'

const intro = {
  items: {
    name: 'Greychel Ocasio Ortiz',
    ocupation: 'Computer Science Student',
    btn: 'download resume',
    icon: assets.download_icon,
    alt: 'download icon',
  }
};

const Header = () => {
  const { name, ocupation, btn, icon, alt } = intro.items;

  return (
    <div className='w-11/12 max-w-3xl text-center mx-auto h-screen flex flex-col items-center justify-center gap-4'>
      <div>
        <Image src={assets.profile_img} alt='profile' className='rounded-full w-32' />
      </div>

      <h3 className='flex items-end gap-2 text-xl md:text-2xl mb-3'>{ocupation}</h3>

      <h1 className='text-3xl sm:text-6xl lg:text-[66px]'>{name}</h1>

      <div className='flex flex-col sm:flex-row items-center gap-4 mt-4'>
        <a href="/gooo-resume.pdf" download className='px-10 py-3 rounded-full bg-[#d0e4ee] flex items-center gap-2 transition delay-150 duration-300 ease-in-out hover:-translate-y-1 hover:scale-100'>{btn}
          <Image src={icon} alt={alt} className='w-4'/>
        </a>
      </div>
    </div>
  )
}

export default Header
