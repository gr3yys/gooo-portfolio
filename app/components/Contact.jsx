import { assets } from '@/assets/assets'
import Image from 'next/image'
import React from 'react'

const Contact = () => {
  return (
    <div id='contact' className='w-full px-[12%] scroll-mt-20'>
        <h2 className='text-center text-5xl'>Contact me</h2>

        <div className='flex w-full flex-col lg:flex-row text-center items-center gap-20 my-20'>
            <div className='flex-1 flex flex-col items-center'>
              <span className='flex text-center items-center gap-2'><Image src={assets.mail_icon} alt='mail' className='w-4'/>Email adress</span>
              <a href='mailto: greyocasio@gmail.com' className='cursor-pointer'>example@gmail.com</a>
            </div>
            <div className='flex-1 flex flex-col items-center'>
              <span className='flex text-center items-center gap-2'><Image src={assets.phone_icon} alt='phone' className='w-4'/>Phone number</span>
              <p className='cursor-pointer'>+1 787 123 4567</p>
            </div>
            <div className='flex-1 flex flex-col items-center'>
              <span className='flex text-center items-center gap-2'><Image src={assets.social_icon} alt='social media' className='w-4'/>Social media</span>
              <a href='#' className='cursor-pointer'>Linkedin</a>
            </div>
        </div>

        {/* Footer */}
        <div className='items-center text-center mb-6'>
            <p className='text-xs'>
                &copy; 2025 All rights reserved. Developed by Greychel Ocasio Ortiz
            </p>
        </div>
    
    </div>
  )
}

export default Contact