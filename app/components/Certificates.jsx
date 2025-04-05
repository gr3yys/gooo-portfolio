import { assets } from '@/assets/assets'
import Image from 'next/image'
import React from 'react'

const Certificates = () => {
  return (
    <div id='certificates' className='w-full px-[12%] scroll-mt-20'>
        <h2 className='text-center text-5xl'>My Certificates</h2>

        <div className='flex w-full flex-col lg:flex-row text-center items-center gap-20 my-20'>
          
          {/* Cert 1, 3 certs */}
          <div className='flex-1 flex flex-col items-center'>
            <div className='flex items-center gap-4 mb-6'>
              <div className="text-center">
                <p className="text-xl text-semibold">Merit Certificates</p>
                <p className="text-md font-semibold">UIPRP</p>
              </div>
            </div>
          </div>

          {/* Cert 2 */}
          <div className='flex-1 flex flex-col items-center'>
            <div className='flex items-center gap-4 mb-6'>
              <div className="text-center">
                <p className="text-xl">Google Cybersecurity</p>
                <p className="text-md font-semibold">Coursera</p>
              </div>
            </div>
          </div>

          {/* Cert 3 */}
          <div className='flex-1 flex flex-col items-center'>
            <div className='flex items-center gap-4 mb-6'>
              <div className="text-center">
                <p className="text-xl">Google AI Essentials</p>
                <p className="text-md font-semibold">Coursera</p>
              </div>
            </div>
          </div>

      </div>
    </div>
  )
}

export default Certificates