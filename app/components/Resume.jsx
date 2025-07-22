import React from 'react';

// Data for the Education section
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

// Data for the Experience section
const experience = {
    title: "Experience",
    items: [
        {
            duration: "January 2025 - April 2025",
            position: "Practicum, Dean of Students Department",
            company: "UIPR",
        },
        {
            duration: "August 2024 - May 2025",
            position: "Secretary of Student Association",
            company: "UIPR",
        },
        {
            duration: "October 2021 - May 2022",
            position: "Work-study, Distance Learning Department",
            company: "UIPR",
        },
    ]
};

const Resume = () => {
    return (
        <div className='flex items-center justify-center py-10'>
            <div id='experience' className='w-full px-[12%] scroll-mt-20'>
                <h2 className='text-center text-5xl my-20 tracking-wide'>Resume</h2>

                <div className='flex flex-col md:flex-row gap-10 justify-center'>
                    {/* Timeline */}
                    <div className='flex-col items-center py-18 hidden md:block'>
                        <div className='w-3 h-3 rounded-full bg-[#FFFAB4]'></div>
                        <div className='w-0.5 h-25 bg-[#FFFAB4] mt-2 mx-auto'></div>
                        <div className='w-3 h-3 rounded-full mt-2 bg-[#FFFAB4]'></div>
                        <div className='w-0.5 h-18 bg-[#FFFAB4] mt-2 mx-auto'></div>
                    </div>

                    {/* Education Column */}
                    <div className='w-full md:w-1/2'>
                        <h3 className='text-2xl font-semibold mb-4'>{education.title}</h3>
                        <div className='flex flex-col gap-4'>
                            {education.items.map((item, index) => (
                                <div key={index} className='bg-[#222222] p-4 rounded shadow-xl transition-transform hover:scale-105'>  
                                    <h4 className='text-md font-bold'>{item.duration}</h4>
                                    <p className=''>{item.degree}</p>
                                    <p className='text-sm'>{item.institution}</p>
                                </div>
                            ))}
                        </div>
                    </div>

                     {/* Timeline */}
                     <div className='flex-col items-center py-18 hidden md:block'>
                        <div className='w-3 h-3 rounded-full bg-[#FFFAB4]'></div>
                        <div className='w-0.5 h-25 bg-[#FFFAB4] mt-2 mx-auto'></div>
                        <div className='w-3 h-3 rounded-full mt-2 bg-[#FFFAB4]'></div>
                        <div className='w-0.5 h-25 bg-[#FFFAB4] mt-2 mx-auto'></div>
                        <div className='w-3 h-3 rounded-full mt-2 bg-[#FFFAB4]'></div>
                        <div className='w-0.5 h-18 bg-[#FFFAB4] mt-2 mx-auto'></div>
                    </div>

                    {/* Experience Column */}
                    <div className='w-full md:w-1/2'>
                        <h3 className='text-2xl font-semibold mb-4'>{experience.title}</h3>
                        <div className='flex flex-col gap-4'>
                            {experience.items.map((item, index) => (
                                <div key={index} className='bg-[#222222] p-4 rounded shadow-xl transition-transform hover:scale-105'>
                                    <h4 className='text-md font-bold'>{item.duration}</h4>
                                    <p className=''>{item.position}</p>
                                    <p className='text-sm'>{item.company}</p>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>

            </div>
        </div>
    );
};

export default Resume;