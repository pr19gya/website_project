import React from 'react';
import { motion } from 'framer-motion';

const HeroSection = () => {
  return (
    <div className='relative h-[650px] w-full overflow-hidden'>
      <img src="/image_4.webp" className='h-full w-full  object-cover' alt="Background" />

      {/* Overlay Content */}
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1, ease: "easeOut" }}
        className='absolute inset-0 bg-black bg-opacity-50 flex flex-col justify-center items-center text-center px-6 md:px-10 lg:px-20'
      >
        <h1 className='text-white text-4xl md:text-6xl lg:text-7xl xl:text-8xl font-bold leading-tight md:leading-snug lg:leading-normal xl:leading-relaxed'>
          ABOUT RID 3080
        </h1>
        <h3 className='mt-6 text-white text-base md:text-lg lg:text-xl xl:text-2xl max-w-2xl mx-auto'>
          We empower youth to develop leadership skills, foster responsible citizenship, and engage in meaningful service initiatives.
        </h3>
      </motion.div>
    </div>
  );
}

export default HeroSection;
