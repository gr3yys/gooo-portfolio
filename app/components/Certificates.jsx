import { assets } from '@/assets/assets'
import Image from 'next/image'
import React from 'react'

const certificates = {
  items: [
    {
      name: 'Merit Certificates',
      institution: 'UIPR',
      image: assets.merit_2022,
      alt: 'Merit Certificate',
    },
    {
      name: 'Google Cybersecurity',
      institution: 'Coursera',
      image: assets.cybersecurity_cert,
      alt: 'Cybersecurity Certificate',
    },
    {
      name: 'Google AI Essentials',
      institution: 'Coursera',
      image: assets.ai_cert,
      alt: 'AI Essentials Certificate',
    },
  ]
};

const Certificates = () => {
  return (
    <div id='certificates' className='w-full px-[12%] py-20 scroll-mt-20'>
      <h2 className='text-center text-5xl'>My Certificates</h2>

      <div className='flex w-full flex-col lg:flex-row text-center items-center gap-20 my-20'>
        {certificates.items.map((cert, index) => (
          <div key={index} className='flex-1 flex flex-col items-center'>
            <div className='flex items-center gap-4'>
              <div className="text-center">
                <Image src={cert.image} alt={cert.alt} className='mb-6' />
                <p className="text-xl font-semibold">{cert.name}</p>
                <p className="text-md font-semibold">{cert.institution}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}

export default Certificates
