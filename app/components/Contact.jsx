import { assets } from '@/assets/assets'
import Image from 'next/image'
import React from 'react'

const contactInfo = {
  info: [
    {
      icon: assets.mail_icon,
      alt: 'Mail Icon',
      title: 'Email Address',
      contact: 'example@email.com',
      href: 'mailto:example@email.com',
    },
    {
      icon: assets.phone_icon,
      alt: 'Phone Icon',
      title: 'Phone Number',
      contact: '+1 787 123 4567',
      href: 'tel:+17871234567',
    },
    {
      icon: assets.social_icon,
      alt: 'Social Media Icon',
      title: 'Social Media',
      contact: 'LinkedIn',
      href: 'https://linkedin.com/in/example',
    },
  ],
}

const Contact = () => {
  return (
    <div id='contact' className='w-full px-[12%] scroll-mt-20'>
      <h2 className='text-center text-5xl'>Contact me</h2>

      <div className='flex w-full flex-col lg:flex-row text-center items-center gap-20 my-20'>
        {contactInfo.info.map((item, index) => (
          <div key={index} className='flex-1 flex flex-col items-center'>
            <span className='flex text-center items-center gap-2'>
              <Image src={item.icon} alt={item.alt} className='w-4' />
              {item.title}
            </span>
            {item.href ? (
              <a href={item.href} className='cursor-pointer' target='_blank' rel='noopener noreferrer'>
                {item.contact}
              </a>
            ) : (
              <p className='cursor-pointer'>{item.contact}</p>
            )}
          </div>
        ))}
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
