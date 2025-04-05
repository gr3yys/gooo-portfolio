import { assets } from '@/assets/assets'
import Image from 'next/image'
import React from 'react'

const About = () => {
  return (
    <div id='about' className='w-full px-[12%] py-10 scroll-mt-20 bg-[#dde4de]'>
        <h2 className='text-center text-5xl'>About me</h2>
    
        <div className='flex w-full flex-col lg:flex-row items-center gap-20 my-20'>
            <div className='w-full max-w-xs sm:max-w-sm md:max-w lg:max-w xl:max-w-[400px]'>
                <Image src={assets.user_image} alt='user' className='w-full'/>
            </div>
            <div className='flex-1'>
                <p className='mb-10 max-w-2xl'>
                    I'm a Computer Science student at the Interamerican University of Puerto Rico, Ponce Campus with a growing passion for data analytics. I’m currently expanding my knowledge through courses in data analysis, and data visualization, building a strong foundation in turning data into actionable insights. As a motivated learner, I’m eager to develop my skills in tools like Python, SQL, Tableu, and Excel while exploring real-world applications of data analytics. Excited about the journey ahead and always open to new learning opportunities!
                </p>
            </div>
        </div>

    </div>
  )
}

export default About