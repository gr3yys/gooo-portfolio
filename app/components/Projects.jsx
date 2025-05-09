import { assets } from '@/assets/assets'
import Image from 'next/image'
import React from 'react'

const projectsList = {
  projects: [
    {
      image: assets.project1,
      alternate: 'novelreads project image',
      title: 'Reading Tracker App',
      description: 'Swift | Firebase',
      icon: assets.github,
      alt: 'Github Icon',
      href: 'https://gr3yys.github.io/Novelreads/',
    },
    {
      image: assets.project2,
      alternate: 'reserveme project image',
      title: 'Reservation Website',
      description: 'Html | Css | Js | Supabase',
      icon: assets.github,
      alt: 'Github Icon',
      href: 'https://gr3yys.github.io/reserveme/',
    },
    {
      image: assets.project3,
      alternate: 'car loan calculator project image',
      title: 'Car Loan Calculator',
      description: 'ASP.NET | C#',
      icon: assets.github,
      alt: 'Github Icon',
      href: 'https://github.com/gr3yys/WebAppGOO/',
    },
    {
      image: assets.project4,
      alternate: 'portfolio project image',
      title: 'Portfolio Website',
      description: 'JS | Next.Js | React',
      icon: assets.github,
      alt: 'Github Icon',
      href: 'https://gooo-portfolio.vercel.app',
    },
  ]
};

const Projects = () => {
  return (
    <div id='projects' className='w-full px-[12%] py-20 scroll-mt-20 bg-[#d0e4ee]'>
      <h2 className='text-center text-5xl mb-12'>My Projects</h2>

      {/* Flex wrapper */}
      <div className='flex flex-col justify-center items-center min-h-[60vh]'>
        <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-10 justify-items-center'>
          {projectsList.projects.map((project, index) => (
            <div key={index} className='max-w-60 h-[350px] rounded-sm p-3 relative bg-[#a1bcc8]'>
              <div className='w-full h-[60%] rounded-sm'>
                <Image src={project.image} alt={project.alternate} />
              </div>
              <div className='pt-7'>
                <p className='font-bold leading-6'>{project.title}</p>
                <p className='pb-4 text-sm'>{project.description}</p>
                <a href={project.href} target='_blank' rel='noreferrer' className='px-12 rounded-sm bg-white text-[#253342] flex items-center gap-2'>
                  <Image src={project.icon} alt={project.alt} className='w-4' />
                  View Code
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};


export default Projects
