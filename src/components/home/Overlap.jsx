import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

const Overlap = () => {
  const { ref: leftRef, inView: leftInView } = useInView({
    triggerOnce: true,
    threshold: 0.1
  });
  const { ref: rightRef, inView: rightInView } = useInView({
    triggerOnce: true,
    threshold: 0.1
  });

  return (
    <div className="bg-[#E0218A] text-white">
      <div className="max-w-screen-xl mx-auto px-4 py-8 lg:py-16">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {/* Left Section */}
          <motion.div
            ref={leftRef}
            className="relative overflow-hidden rounded-lg shadow-lg bg-white text-black"
            initial={{ opacity: 0, x: -100 }}
            animate={leftInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 1 }}
          >
            <img src="/miquel-parera-VGmgsDsck58-unsplash.jpg" className="w-full h-72 object-cover lg:h-auto lg:w-auto" alt="Team" />
            <div className="absolute inset-0 bg-[#E0218A] bg-opacity-40 flex flex-col justify-center items-center">
              <div className="text-4xl lg:text-6xl font-bold mb-4 text-center">Our Team</div>
              <p className="text-lg lg:text-xl text-center px-4">Meet the District Council of Rotaract District 3080—dedicated leaders committed to guiding our initiatives, supporting clubs, and enhancing community engagement.</p>
              <div className="mt-6">
                <Link to="/council3080" className="inline-block px-6 py-2 bg-black text-white border-2 border-black rounded-lg hover:bg-white hover:text-black transition duration-300">Learn More</Link>
              </div>
            </div>
          </motion.div>

          {/* Right Section */}
          <motion.div
            ref={rightRef}
            className="relative overflow-hidden rounded-lg shadow-lg bg-white text-black"
            initial={{ opacity: 0, x: 100 }}
            animate={rightInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 1 }}
          >
            <img src="/miquel-parera-VGmgsDsck58-unsplash.jpg" className="w-full h-72 object-cover lg:h-auto lg:w-auto" alt="Know Us" />
            <div className="absolute inset-0 bg-[#E0218A] bg-opacity-40 flex flex-col justify-center items-center">
              <div className="text-4xl lg:text-6xl font-bold mb-4 text-center">Know Us</div>
              <p className="text-lg lg:text-xl text-center px-4">We empower youth to develop leadership skills, foster responsible citizenship, and engage in meaningful service initiatives.</p>
              <div className="mt-6">
                <Link to="/about" className="inline-block px-6 py-2 bg-black text-white border-2 border-black rounded-lg hover:bg-white hover:text-black transition duration-300">Learn More</Link>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  );
}

export default Overlap;
