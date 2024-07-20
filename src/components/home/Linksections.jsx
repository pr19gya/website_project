import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

const Linksections = () => {
  const { ref: sectionRef1, inView: sectionInView1 } = useInView({ triggerOnce: true, threshold: 0.1 });
  const { ref: sectionRef2, inView: sectionInView2 } = useInView({ triggerOnce: true, threshold: 0.1 });
  const { ref: imageRef, inView: imageInView } = useInView({ triggerOnce: true, threshold: 0.1 });

  return (
    <div className='bg-black w-full flex flex-col lg:flex-row justify-center items-center text-white py-16 lg:py-20'>
      <motion.div
        ref={sectionRef1}
        className='w-full lg:w-2/5 px-8 lg:px-20 text-center lg:text-left mb-8 lg:mb-0'
        initial={{ opacity: 0, x: -100 }}
        animate={sectionInView1 ? { opacity: 1, x: 0 } : {}}
        transition={{ duration: 1 }}
      >
        <div className='my-5 text-3xl lg:text-4xl font-bold'>Club Events</div>
        <div className='text-lg lg:text-xl'>Discover upcoming events organized by our clubs across the district.</div>
        <Link to="/club-project">
          <motion.div
            className='border-2 border-white py-2 px-4 w-[10rem] mt-5 mx-auto lg:mx-0 text-center rounded-lg hover:bg-white hover:text-black transition duration-300'
            whileHover={{ scale: 1.1 }}
          >
            Learn More
          </motion.div>
        </Link>
      </motion.div>

      <motion.div
        ref={imageRef}
        className='w-full lg:w-1/5 h-64 lg:h-full px-4 mb-8 lg:mb-0'
        initial={{ opacity: 0 }}
        animate={imageInView ? { opacity: 1 } : {}}
        transition={{ duration: 1.5 }}
      >
        <img src="/pexels-monicaaaaa-aaa-36421873-8218375.jpg" className='w-full h-full object-cover rounded-lg shadow-lg' />
      </motion.div>

      <motion.div
        ref={sectionRef2}
        className='w-full lg:w-2/5 px-8 lg:px-20 text-center lg:text-left'
        initial={{ opacity: 0, x: 100 }}
        animate={sectionInView2 ? { opacity: 1, x: 0 } : {}}
        transition={{ duration: 1 }}
      >
        <div className='my-5 text-3xl lg:text-4xl font-bold'>Calendar</div>
        <div className='text-lg lg:text-xl'>View our comprehensive calendar to plan your participation in various activities.</div>
        <Link to="/calendar">
          <motion.div
            className='border-2 border-white py-2 px-4 w-[10rem] mt-5 mx-auto lg:mx-0 text-center rounded-lg hover:bg-white hover:text-black transition duration-300'
            whileHover={{ scale: 1.1 }}
          >
            Learn More
          </motion.div>
        </Link>
      </motion.div>
    </div>
  );
};

export default Linksections;
