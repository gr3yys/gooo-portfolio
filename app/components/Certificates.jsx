import { assets } from '@/assets/assets';
import Image from 'next/image';
import React, { useState } from 'react';

const certificates = {
  items: [
    {
      name: 'Merit Certificate 2022',
      institution: 'UIPR',
      image: assets.merit_2022,
      alt: 'Merit Certificate',
    },
    {
      name: 'Merit Certificate 2023',
      institution: 'UIPR',
      image: assets.merit_2023,
      alt: 'Merit Certificate',
    },
    {
      name: 'Merit Certificate 2024',
      institution: 'UIPR',
      image: assets.merit_2024,
      alt: 'Merit Certificate',
    },
    {
      name: 'Google Cybersecurity',
      institution: 'Coursera',
      image: assets.cybersecurity_cert,
      alt: 'Cybersecurity Certificate',
    },
    {
      name: 'Google AI Essentials',
      institution: 'Coursera',
      image: assets.ai_cert,
      alt: 'AI Essentials Certificate',
    },
  ],
};

// Filter only merit certificates
const meritCertificates = certificates.items.filter(cert => cert.name.includes('Merit Certificate'));

// Filter other certificates
const otherCertificates = certificates.items.filter(cert => !cert.name.includes('Merit Certificate'));

const Certificates = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  // Function to go to the next slide
  const nextSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % meritCertificates.length);
  };

  // Function to go to the previous slide
  const prevSlide = () => {
    setCurrentIndex(
      (prevIndex) => (prevIndex - 1 + meritCertificates.length) % meritCertificates.length
    );
  };

  // Function to go to a specific slide 
  const goToSlide = (index) => {
    setCurrentIndex(index);
  };

  return (
    <div id="certificates" className="w-full px-[12%] py-20 scroll-mt-20">
      <h2 className="text-center text-5xl">My Certificates</h2>

      <div className="my-20 flex flex-wrap justify-between">
        {/* Certs */}
        <div className="flex w-full flex-col lg:flex-row text-center items-center gap-20 my-20">
          {/* Carousel */}
          <div className="flex flex-col items-center">
            <Image
              src={meritCertificates[currentIndex].image}
              alt={meritCertificates[currentIndex].alt}
              className='mb-4'
              width={300}
              height={200}
            />
            {/* Dots */}
            <div className="flex mb-4 justify-center">
              {meritCertificates.map((_, index) => (
                <button
                  key={index}
                  onClick={() => goToSlide(index)}
                  className={`w-2 h-2 mx-2 rounded-full ${index === currentIndex ? 'bg-[#d0e4ee]' : 'bg-gray-400'}`}
                ></button>
              ))}
            </div>
            <div className="text-center mt-2">
              <p className="text-xl font-semibold">{meritCertificates[currentIndex].name}</p>
              <p className="text-md font-semibold text-gray-600">{meritCertificates[currentIndex].institution}</p>
            </div>
          </div>

          {/* Other Certs */}
          {otherCertificates.map((cert, index) => (
            <div key={index} className="flex flex-col items-center">
              <Image
                src={cert.image}
                alt={cert.alt}
                className="mb-8"
                width={300}
                height={200}
              />
              <div className="text-center mt-2">
                <p className="text-xl font-semibold">{cert.name}</p>
                <p className="text-md font-semibold text-gray-600">{cert.institution}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Certificates;

