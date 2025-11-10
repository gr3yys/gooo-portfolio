import { assets } from '@/assets/assets'
import Image from 'next/image'
import React from 'react'

// Data for contact section
const contactInfo = {
  info: [
    {
      icon: assets.mail_icon,
      alt: 'Mail Icon',
      title: 'Email Address',
      contact: 'greyocasio@gmail.com',
      href: 'mailto:greyocasio@gmail.com',
    },
    {
      icon: assets.phone_icon,
      alt: 'Phone Icon',
      title: 'Phone Number',
      contact: '+1 787 000 0000',
    },
    {
      icon: assets.social_icon,
      alt: 'Social Media Icon',
      title: 'Social Media',
      contact: 'LinkedIn',
      href: 'https://www.linkedin.com/in/greychel-o-90b802308?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=ios_app',
    },
  ],
}

// Contact component renders a "Contact Me" section with contact methods (e.g., email, LinkedIn)
// and includes a footer at the bottom of the page.
const Contact = () => {
  return (
    <div id="contact" className="w-full px-[12%] mt-20">
      {/* Section Title */}
      <h2 className="text-center text-5xl tracking-wide">Contact me</h2>

      {/* Contact Info Cards */}
      <div className="flex w-full flex-col lg:flex-row text-center items-center gap-20 my-20">
        {contactInfo.info.map((item, index) => (
          <div key={index} className="flex-1 flex flex-col items-center">
            {/* Contact Method Title with Icon */}
            <span className="flex text-center items-center gap-2">
              <Image src={item.icon} alt={item.alt} className="w-4" />
              {item.title}
            </span>

            {/* Render as link if href is provided, otherwise just text */}
            {item.href ? (
              <a
                href={item.href}
                className="cursor-pointer"
                target="_blank"
                rel="noopener noreferrer"
              >
                {item.contact}
              </a>
            ) : (
              <p className="cursor-pointer">{item.contact}</p>
            )}
          </div>
        ))}
      </div>

      {/* Footer Section */}
      <div className="items-center text-center mb-6">
        <p className="text-xs">
          &copy; 2025 All rights reserved. Developed by Greychel Ocasio Ortiz
        </p>
      </div>
    </div>
  );
};

export default Contact;