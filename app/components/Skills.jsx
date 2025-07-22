import { assets } from '@/assets/assets';
import React from 'react';
import Image from 'next/image';
import { motion } from 'framer-motion';

const skills = {
    title: "Technical Skills",
    skillList: [
        { icon: assets.html_icon, name: "HTML", alt: "HTML 5 Icon" },
        { icon: assets.css_icon, name: "CSS", alt: "CSS 3 Icon" },
        { icon: assets.js_icon, name: "JavaScript", alt: "JavaScript Icon" },
        { icon: assets.react, name: "React js", alt: "React Icon" },
        { icon: assets.nextjs_icon, name: "Next js", alt: "Next js Icon" },
        { icon: assets.tailwind, name: "Tailwind CSS", alt: "Tailwind Icon" },
        { icon: assets.git, name: "Git", alt: "Git Icon" },
        { icon: assets.figma, name: "Figma", alt: "Figma Icon" }
    ],
};

const fadeInVariants = {
    hidden: { opacity: 0, y: 40 },
    visible:  (i) => ({
        opacity: 1,
        y: 0,
        transition: {
            delay: i * 0.1,
            duration: 0.5,
            ease: 'easeOut'
        }
    })
};

const Skills = () => {
    return (
        <section id='skills' className='relative w-full py-20 px-[10%]'>
            <h2 className='text-center text-5xl mb-16 tracking-wide'>Skills</h2>

            {/* Technical Skills */}
            <div className='mb-20'>
                <ul className='grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-6 xl:gap-10'>
                    {skills.skillList.map((skill, index) => (
                        <motion.li
                            key={index}
                            className='transition-transform hover:scale-105'
                            initial="hidden"
                            whileInView="visible"
                            viewport={{ once: true }}
                            variants={fadeInVariants}
                            custom={index}
                        >
                            <div className='w-full h-[120px] flex flex-col items-center justify-center text-center gap-4 p-4'>
                                <Image
                                    src={skill.icon}
                                    alt={skill.alt}
                                    width={48}
                                    height={48}
                                    className='object-contain'
                                />
                                <p className='font-medium text-sm uppercase tracking-wide'>{skill.name}</p>
                            </div>
                        </motion.li>
                    ))}
                </ul>
            </div>
        </section>
    );
};

export default Skills;
