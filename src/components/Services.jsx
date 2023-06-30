import React, { useState } from 'react';
import Massage from '../assests/massage.jpg'
import Facial from '../assests/facial.jpg'

const Services = () => {
    // Create an array of images for the slider
    const images = [Massage, Facial]; // Replace Massage, Facial with your actual image paths
  
    // Create an array of corresponding texts
    const texts = [

      {
        title: 'MASSAGE SWEDISH',
        subtitle: 'Relaxing Massage',
        description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Perspiciatis, commodi!',
      },
      {
        title: 'FACIAL',
        subtitle: 'Rejuvenating Facial',
        description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Perspiciatis, commodi!',
      },
      // Add more objects for additional images
    ];
  
    // Set initial index and state for the active image
    const [activeIndex, setActiveIndex] = useState(0);
  
    // Function to handle next and previous image
    const handleNext = () => {
      setActiveIndex((prevIndex) => (prevIndex === images.length - 1 ? 0 : prevIndex + 1));
    };
  
    const handlePrevious = () => {
      setActiveIndex((prevIndex) => (prevIndex === 0 ? images.length - 1 : prevIndex - 1));
    };
  
    return (
      <div name='Services' className='w-full bg-white py-16 px-4'>
       
        <div className='max-w-[1240px] mx-auto grid md:grid-cols-2'>
          <img className='w-[500px] mx-auto my-4' src={images[activeIndex]} alt="/" />
  
          <div className='flex flex-col justify-center'>
            <p className='text-[grey]'>{texts[activeIndex].title}</p>
            <h1 className='md:text-4xl sm:text-3xl text-2x1 font-bold py-2'>{texts[activeIndex].subtitle}</h1>
            <p>{texts[activeIndex].description}</p>
          </div>
        </div>
  
        <div className="flex justify-center mt-4">
          <button className='mr-2 font-bold'  onClick={handlePrevious}>Previous</button>
          <button className='mr-2 font-bold' onClick={handleNext}>Next</button>
        </div>
      </div>
    );
  };
  
  export default Services;