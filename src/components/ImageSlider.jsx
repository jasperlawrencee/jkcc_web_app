import React, { useState, useEffect } from 'react';
import image1 from '../assets/sliderImages/image1.png';
import image2 from '../assets/sliderImages/image2.png';
import image3 from '../assets/sliderImages/image3.png';
import image4 from '../assets/sliderImages/image4.png';
import image5 from '../assets/sliderImages/image5.png';
import { IoMdArrowDropleftCircle, IoMdArrowDroprightCircle } from "react-icons/io";


export const ImageSlider = () => {
  const [currentIndex, setCurrentIndex] = useState(0); 
  const images = [image1, image2, image3, image4, image5];
  const imageText = [
    "Get High Performance PC Parts",
    "Upgrade Your Mobile Experience",
    "Laptops for Every Need",
    "Scalable Solutions for Your Growing Business",
    "All Your IT Needs Covered",
  ];
  const justifyOptions = ['start', 'end', 'start', 'end', 'start'];
  const alignOptions = ['center', 'end', 'end', 'end', 'center'];
  const textDirectionOptions = ['left', 'right', 'left', 'right', 'left'];

  useEffect(() => {
    const timerId = setInterval(() => {
      const nextIndex = (currentIndex + 1) % images.length;
      setCurrentIndex(nextIndex);
    }, 8000);

    return () => clearInterval(timerId);
  }, [currentIndex, images.length]);

  const nextIndex = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
  };

  const prevIndex = () => {
    setCurrentIndex((prevIndex) => (prevIndex - 1 + images.length) % images.length); 
  };


  return (
    <div className="w-full h-[230px] md:h-[600px] relative">
      <div
        style={{
          backgroundImage: `url(${images[currentIndex]})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
        }}
        className="w-full h-full bg-center bg-cover transition-transform duration-300"
      ></div>

      <div className="absolute inset-0 flex items-center bg-black bg-opacity-30 py-8 px-4"
        style={{
            justifyContent: justifyOptions[currentIndex],
            textAlign: textDirectionOptions[currentIndex],
            alignItems: alignOptions[currentIndex]
        }}
      >
        <h1 className="text-white text-xl md:text-5xl lg:text-6xl font-bold py-2 px-4 md:px-8 md:py-8 lg:px-8 w-[250px] md:w-[500px] lg:w[800px] h-fit">
          {imageText[currentIndex]}
        </h1>
      </div>

      <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 flex gap-2">
        {images.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrentIndex(index)}
            className={`w-3 h-3 rounded-full ${
              currentIndex === index ? 'bg-white' : 'bg-gray-400'
            }`}
          ></button>
        ))}
      </div>

      <div className="absolute top-1/2 left-0 transform -translate-y-1/2">
        <button 
          onClick={prevIndex} 
          className="hover:bg-gray-700 text-white font-bold py-2 px-4 rounded"
        >
          <IoMdArrowDropleftCircle size={20}/>
        </button>
      </div>

      <div className="absolute top-1/2 right-0 transform -translate-y-1/2">
        <button 
          onClick={nextIndex} 
          className="hover:bg-gray-700 text-white font-bold py-2 px-4 rounded"
        >
          <IoMdArrowDroprightCircle size={20}/>
        </button>
      </div>

    </div>
  );
};
