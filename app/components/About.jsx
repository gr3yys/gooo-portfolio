import React from 'react';
import Animation from './Animation';

// About section content stored in a constant object
const about = {
  description:
    "I am a student at the Interamerican University of Puerto Rico, Ponce Campus. I am currently in my last year of my bachelor's degree in Computer Science. My interests are in graphic design, programming and data analysis. Currently, I am taking courses in data analysis, where I have begun to master tools such as Python, SQL, Excel and Tableau. During my studies, I have done academic and personal projects, where I have applied my knowledge in programming languages such as C++, Visual Basic, C# and JavaScript. My areas of interest in Computer Science include Cybersecurity, UI/UX, Data Analytics and Data Science.",
};

// Functional component that renders the About section
const About = () => {
  return (
    <div
      id='about'
      className='h-auto w-full px-4 sm:px-8 md:px-12 scroll-mt-20 bg-[#d0e4ee] py-10'
    >
      {/* Section title */}
      <h2 className='text-center text-5xl my-20'>About me</h2>

      {/* Flex container for animation and text */}
      <div className='flex flex-col justify-center lg:flex-row items-center my-20 gap-10'>
        {/* Left side: animated code snippet */}
        <div className='flex-1'>
          <Animation />
        </div>

        {/* Right side: about text description */}
        <div className='flex-1'>
          <p className='w-full px-4'>{about.description}</p>
        </div>
      </div>
    </div>
  );
};

export default About;