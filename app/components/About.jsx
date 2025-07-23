import React from 'react';
import Animation from './Animation';

// About section content stored in a constant object
const about = {
  description:
    "I'm a recent Computer Science graduate from the Interamerican University of Puerto Rico, Ponce Campus, with a strong interest in front-end development, programming, and graphic design. I'm dedicated, hardworking, and eager to gain hands-on experience in a dynamic and creative environment. I'm always looking for ways to grow, improve, and take on new challenges. Fluent in both Spanish and English, I bring strong communication skills that help me collaborate effectively with diverse teams.",
};

const About = () => {
  return (
    <div
      className='h-auto w-full px-4 sm:px-8 md:px-12 scroll-mt-20 py-10'
    >
      <span id='about'></span>
      {/* Section title */}
      <h2 className='text-center text-5xl my-20 tracking-wide'>About me</h2>

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