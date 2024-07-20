import React from 'react';
import { motion } from 'framer-motion';


const HeroSection = () => {
  return (
    <div className='relative h-[650px] w-full'>
      <img src="/1712478256146.jpg" className='h-full w-full object-cover' alt="Background"/>

      {/* Overlay Content */}
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1, ease: "easeOut" }}
        className='absolute inset-0 flex flex-col bg-black bg-opacity-40 justify-center items-center text-center px-6 md:px-10 lg:px-20'
      >
      <div className='absolute inset-0 flex flex-col justify-center items-center text-center px-6 md:px-10 lg:px-20'>
        <h1 className='text-white text-4xl md:text-6xl lg:text-7xl xl:text-8xl font-bold leading-tight md:leading-snug lg:leading-normal xl:leading-relaxed'>
          CLUB PROJECTS
        </h1>
        <h3 className='mt-6 text-white text-base md:text-lg lg:text-xl xl:text-2xl'>
        Together We Shine: Illuminating our initiatives, Inspiring action, Igniting passion, and making an Impact        </h3>
      </div>
      </motion.div>
    </div>
  );
}

export default HeroSection;
