import { assets } from '@/assets/assets'
import Image from 'next/image'
import React from 'react'

const Experience = () => {
  return (
    <div id='experience' className='w-full px-[12%] scroll-mt-20 py-20'>
      <h2 className='text-center text-5xl mb-10'>Education</h2>
        <div className='flex w-full flex-col lg:flex-row text-center items-center gap-20'>
          
          {/* Education Section */}
          <div className='flex-1'>
            <div className='flex items-center gap-4 mb-6'>
              <div>
                <Image src={assets.edu_icon} alt='' className='w-6'/>
              </div>
              <div className="text-left">
                <p className="text-xl">2021 - 2025</p>
                <p className="text-xl">Inter American University of Puerto Rico</p>
                <p className="text-md">Bachelor of Science in Computer Science</p>
              </div>
            </div>

            {/* 2 Education */}
            <div className='flex items-center gap-4 mb-6'>
              <div>
                <Image src={assets.edu_icon} alt='' className='w-6'/>
              </div>
              <div className='text-left'>
                <p className='text-xl'>2024</p>
                <p className='text-xl'>Coursera</p>
                <p className='text-md'>Google Cybersecurity Certificate</p>
              </div>
            </div>
              <div className='flex items-center gap-4 mb-6'>
                <div>
                  <Image src={assets.project_icon} alt='' className='w-6'/>
                </div>
              <div className='text-left items-center'>
                <p className='text-xl'>2024 - 2025</p>
                <p className='text-xl'>Secretary</p>
                <p className='text-md'>Students Association of Computers and Technology</p>
              </div>
            </div>

            {/* 2 Experience */}
            <div className='flex items-center gap-4 mb-6'>
              <div>
                <Image src={assets.project_icon} alt='' className='w-6'/>
              </div>
              <div className='text-left items-center'>
                <p className='text-xl'>2025</p>
                <p className='text-xl'>Practicum</p>
                <p className='text-md'>Dean of Students Department</p>
              </div>
            </div>
          </div>

      </div>
    </div>
  )
}

export default Experience
