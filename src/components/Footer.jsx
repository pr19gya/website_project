import React from 'react';
import { IoIosMail } from "react-icons/io";
import { IoCall } from "react-icons/io5";
import { FaFacebook, FaDiscord, FaTwitter, FaGithub } from "react-icons/fa";
import { motion, useAnimation } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

const Footer = () => {
  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.1
  });

  const animationControls = useAnimation();

  React.useEffect(() => {
    if (inView) {
      animationControls.start({ opacity: 1, y: 0 });
    } else {
      animationControls.start({ opacity: 0, y: 50 });
    }
  }, [inView, animationControls]);

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 50 }}
      animate={animationControls}
      transition={{ duration: 1, ease: "easeOut" }}
      className="bg-[#E0218A] text-white py-16 px-4"
    >
      <div className="text-center text-4xl md:text-7xl font-bold">
        JOIN THE MOVEMENT!
      </div>
      <div className="text-center text-2xl md:text-3xl font-bold pt-7">
        Get the Latest News & Updates
      </div>
      <div className="flex justify-center items-center pt-7 space-x-5">
        <IoIosMail size={44} className="h-10 w-10 p-2 rounded-full bg-black" />
        <IoCall size={44} className="h-10 w-10 p-2 rounded-full bg-black" />
      </div>

      <div className="relative flex justify-center items-center mt-5">
        <input
          type="search"
          id="search"
          className="block w-full md:w-[45rem] h-[3rem] md:h-[5rem] p-4 text-sm text-white bg-black placeholder-white rounded-l-lg"
          placeholder="Enter your email here"
          required
        />
        <button
          type="submit"
          className="right-0 top-0 h-[3rem] md:h-[5rem] w-[7rem] md:w-[10rem] text-black bg-white p-2 md:p-4 border-2 border-black font-medium text-sm rounded-r-lg"
        >
          Subscribe
        </button>
      </div>

      <div className="flex justify-center items-center mt-10 space-x-5 text-3xl md:text-5xl">
        <FaFacebook className="h-12 md:h-16 w-12 md:w-16 rounded-full text-white bg-[#E0218A] hover:bg-white hover:text-[#E0218A] transition duration-300" />
        <FaDiscord className="h-12 md:h-16 w-12 md:w-16 rounded-full text-[#E0218A] bg-white p-1 hover:bg-[#E0218A] hover:text-white transition duration-300" />
        <FaTwitter className="h-12 md:h-16 w-12 md:w-16 rounded-full text-[#E0218A] bg-white p-1 hover:bg-[#E0218A] hover:text-white transition duration-300" />
        <FaGithub className="h-12 md:h-16 w-12 md:w-16 rounded-full text-white bg-[#E0218A] hover:bg-white hover:text-[#E0218A] transition duration-300" />
      </div>
      <div className="text-white flex justify-center items-center mt-10 text-sm md:text-base">
        © 2024 CURC™. All Rights Reserved.
      </div>
    </motion.div>
  );
}

export default Footer;
