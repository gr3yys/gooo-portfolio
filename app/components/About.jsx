import React from 'react'

const about = {
    description: "I am a student at the Interamerican University of Puerto Rico, Ponce Campus. I am currently in my last year of my bachelor's degree in Computer Science. My interests are in graphic design, programming and data analysis. Currently, I am taking courses in data analysis, where I have begun to master tools such as Python, SQL, Excel and Tableau. During my studies, I have done academic and personal projects, where I have applied my knowledge in programming languages such as C++, Visual Basic, C# and JavaScript. My areas of interest in Computer Science include Cybersecurity, UI/UX, Data Analytics and Data Science.",
};

const About = () => {
  return (
    <div id='about' className='w-full px-[12%] py-10 scroll-mt-20 bg-[#d0e4ee]'>
        <h2 className='text-center text-5xl'>About me</h2>
    
        <div className='flex w-full flex-col lg:flex-row items-center gap-20 my-10'>
            <p className='w-full'>{about.description}</p>
        </div>
    </div>
  )
}

export default About