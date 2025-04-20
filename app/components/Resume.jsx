"use client"
import { assets } from '@/assets/assets'
import React from 'react'
import Image from 'next/image'
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from "@/components/ui/tooltip"

const education = {
    title: "Education",
    items: [
        {
            institution: "UIPR",
            degree: "Bachelor of Science in Computer Science",
            duration: "August 2021 - May 2025",
        },
        {
            institution: "Coursera",
            degree: "Google Cybersecurity Certificate",
            duration: "June 2024 - July 2024",
        }
    ]
};

const experience = {
    title: "Experience",
    items: [
        {
            company: "UIPR",
            position: "Practicum, Dean of Students Department",
            duration: "January 2025 - April 2025",
        },
        {
            company: "UIPR",
            position: "Work-study, Distance Learning Department",
            duration: "October 2021 - May 2022",
        }
    ]
};

const skills = {
    title: "Skills",
    skillList: [
        {
            icon: assets.html_icon,
            name: "html",
            alt: "HTML 5 Icon",
        },
        {
            icon: assets.css_icon,
            name: "css",
            alt: "Css 3 Icon",
        },
        {
            icon: assets.js_icon,
            name: "javascript",
            alt: "Javascript Icon",
        },
        {
            icon: assets.react,
            name: "react.js",
            alt: "react js Icon",
        },
        {
            icon: assets.python_icon,
            name: "python",
            alt: "Python Icon",
        },
        {
            icon: assets.tailwind,
            name: "tailwind.css",
            alt: "Tailwind Css Icon",
        },
        {
            icon: assets.nextjs_icon,
            name: "next.js",
            alt: "Next Js Icon",
        },
        {
            icon: assets.figma,
            name: "Figma",
            alt: "Figma Icon",
        },
    ],
};

const Resume = () => {
    return (
        <div className='flex items-center justify-center py-10'>
            <div id='experience' className='w-full px-[12%] scroll-mt-20'>
                <h2 className='text-center text-5xl my-20'>Resume</h2>
                <Tabs defaultValue='education' className='flex flex-col xl:flex-row gap-[60px]'>
                    <TabsList className='flex flex-col w-full max-w-[380px] mx-auto xl:mx-0 gap-6'>
                        <TabsTrigger value='education'>Education</TabsTrigger>
                        <TabsTrigger value='experience'>Experience</TabsTrigger>
                        <TabsTrigger value='skills'>Skills</TabsTrigger>
                    </TabsList>

                    <div className='w-full'>
                        {/* Education */}
                        <TabsContent value="education" className='w-full'>
                            <div className='flex flex-col gap-[30px] text-center xl:text-left'>
                                <h3 className='text-4xl font-bold'>{education.title}</h3>
                                <ul className='grid grid-cols-1 lg:grid-cols-2 gap-[30px]'>
                                    {education.items.map((item, index) => {
                                        return (
                                            <li key={index} className='bg-[#d0e4ee] h-[184px] py-10 rounded-xl flex flex-col justify-center items-center lg:items-start lg:px-10 gap-1'>
                                                <span className='text-[#253342]'>{item.duration}</span>
                                                <h3 className='text-xl max-w-[260px] min-h-[60px] text-center lg:text-left'>{item.degree}</h3>
                                                <div className='flex items-center gap-3'>
                                                    <span className='w-[6px] h-[6px] rounded-full bg-[#253342]'></span>
                                                    <p>{item.institution}</p>
                                                </div>
                                            </li>
                                        );
                                    })}
                                </ul>
                            </div>
                        </TabsContent>

                        {/* Experience */}
                        <TabsContent value="experience" className="w-full">
                            <div className='flex flex-col gap-[30px] text-center xl:text-left'>
                                <h3 className='text-4xl font-bold'>{experience.title}</h3>
                                <ul className='grid grid-cols-1 lg:grid-cols-2 gap-[30px]'>
                                    {experience.items.map((item, index) => {
                                        return (
                                            <li key={index} className='bg-[#d0e4ee] h-[184px] py-10 rounded-xl flex flex-col justify-center items-center lg:items-start lg:px-10 gap-1'>
                                                <span className='text-[#253342]'>{item.duration}</span>
                                                <h3 className='text-xl max-w-[260px] min-h-[60px] text-center lg:text-left'>{item.position}</h3>
                                                <div className='flex items-center gap-3'>
                                                    <span className='w-[6px] h-[6px] rounded-full bg-[#253342]'></span>
                                                    <p>{item.company}</p>
                                                </div>
                                            </li>
                                        );
                                    })}
                                </ul>
                            </div>
                        </TabsContent>

                        {/* Skills */}
                        <TabsContent value="skills" className="w-full h-full">
                            <div className='flex flex-col gap-[30px]'>
                                <div className='flex flex-col gap-[30px] text-center xl:text-left'>
                                    <h3 className='text-4xl font-bold'>{skills.title}</h3>
                                </div>
                                <ul className='grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4 xl:gap-[30px]'>
                                    {skills.skillList.map((skill, index) => (
                                        <li key={index}>
                                            <TooltipProvider delayDuration={100}>
                                                <Tooltip>
                                                    <TooltipTrigger className='w-full h-[150px] bg-[#d0e4ee] rounded-xl flex justify-center items-center group'>
                                                        <Image
                                                            src={skill.icon}
                                                            alt={skill.alt}
                                                            width={64}
                                                            height={64}
                                                            className="transition-all duration-300 object-contain w-16 h-16"
                                                        />
                                                    </TooltipTrigger>
                                                    <TooltipContent>
                                                        <p className='capitalize'>{skill.name}</p>
                                                    </TooltipContent>
                                                </Tooltip>
                                            </TooltipProvider>
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        </TabsContent>
                    </div>

                </Tabs>
            </div>
        </div>
    )
}

export default Resume