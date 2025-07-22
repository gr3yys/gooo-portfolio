import React from 'react';
import Animation from './Animation';

// About section content stored in a constant object
const about = {
  description:
    "I am a recent graduate from the Interamerican University of Puerto Rico, Ponce Campus. I completed a bachelor's degree in Computer Science, and my interests are in graphic design, programming and front-end development.",
};

// Functional component that renders the About section
const About = () => {
  return (
    <div
      id='about'
      className='h-auto w-full px-4 sm:px-8 md:px-12 scroll-mt-20 py-10'
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
          <p className='w-full px-12 text-justify'>{about.description}</p>
        </div>
      </div>
    </div>
  );
};

export default About;