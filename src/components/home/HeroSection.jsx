import React from 'react';
import { motion } from 'framer-motion';
import video from './../../../public/video.webm';

const HeroSection = () => {
  return (
    <div className="w-full">
      <div className="relative h-screen overflow-hidden rounded-b-full bg-white" style={{ width: '98.9vw', borderRadius: '0 0 100% 100%' }}>
        <video autoPlay loop muted className="absolute top-0 left-0 w-full h-full object-cover">
          <source src={video} type="video/webm" />
          Your browser does not support the video tag.
        </video>
        <div className="absolute inset-0 bg-black bg-opacity-40 flex flex-col justify-center items-start px-4 md:px-8 lg:px-16">
          <motion.h1
            initial={{ opacity: 0, y: -50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.3 }}
            className="text-white text-6xl md:text-6xl lg:text-8xl xl:text-9xl font-bold ml-4 md:ml-8 lg:ml-16 text-left"
          >
            Rotaract
          </motion.h1>
          <motion.h2
            initial={{ opacity: 0, y: -50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.5 }}
            className="text-white text-5xl md:text-5xl lg:text-6xl xl:text-7xl font-bold ml-4 md:ml-8 lg:ml-16 text-left"
          >
            3080
          </motion.h2>
        </div>
      </div>
    </div>
  );
};

export default HeroSection;
