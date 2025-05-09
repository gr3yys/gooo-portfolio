import { assets } from '@/assets/assets';
import Image from 'next/image';
import React, { useState } from 'react';

// Static certificate data, includes both merit and other types of certificates
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

// Separate merit certificates for carousel
const meritCertificates = certificates.items.filter(cert => cert.name.includes('Merit Certificate'));

// Separate other (non-merit) certificates
const otherCertificates = certificates.items.filter(cert => !cert.name.includes('Merit Certificate'));

const Certificates = () => {
  // State to track which merit certificate is currently shown in the carousel
  const [currentIndex, setCurrentIndex] = useState(0);

  // Advance to the next certificate in the carousel
  const nextSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % meritCertificates.length);
  };

  // Go to the previous certificate in the carousel
  const prevSlide = () => {
    setCurrentIndex(
      (prevIndex) => (prevIndex - 1 + meritCertificates.length) % meritCertificates.length
    );
  };

  // Go directly to a specific slide by index (used for dot navigation)
  const goToSlide = (index) => {
    setCurrentIndex(index);
  };

  return (
    <div id="certificates" className="w-full px-[12%] py-20 scroll-mt-20">
      {/* Section title */}
      <h2 className="text-center text-5xl">My Certificates</h2>

      <div className="my-20 flex flex-wrap justify-between">
        {/* Container for all certificates */}
        <div className="flex w-full flex-col lg:flex-row text-center items-center gap-20 my-20">

          {/* MERIT CERTIFICATES - Displayed in a basic carousel */}
          <div className="flex flex-col items-center">
            {/* Currently selected certificate image */}
            <Image
              src={meritCertificates[currentIndex].image}
              alt={meritCertificates[currentIndex].alt}
              className='mb-4'
              width={300}
              height={200}
            />

            {/* Carousel Dots */}
            <div className="flex mb-4 justify-center">
              {meritCertificates.map((_, index) => (
                <button
                  key={index}
                  onClick={() => goToSlide(index)}
                  className={`w-2 h-2 mx-2 rounded-full ${index === currentIndex ? 'bg-[#d0e4ee]' : 'bg-gray-400'}`}
                ></button>
              ))}
            </div>

            {/* Certificate title and institution */}
            <div className="text-center mt-2">
              <p className="text-xl font-semibold">{meritCertificates[currentIndex].name}</p>
              <p className="text-md font-semibold text-gray-600">{meritCertificates[currentIndex].institution}</p>
            </div>
          </div>

          {/* OTHER CERTIFICATES - Static display */}
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