import React from 'react';
import { IoIosMail } from "react-icons/io";
import { IoCall } from "react-icons/io5";
import { FaFacebook, FaDiscord, FaTwitter, FaGithub } from "react-icons/fa";

const Footer = () => {
  return (
    <div className="bg-[#E0218A] text-white py-16 px-4">
      <div className="text-center text-4xl md:text-7xl font-bold">JOIN THE MOVEMENT!</div>
      <div className="text-center text-2xl md:text-3xl font-bold pt-7">Get the Latest News & Updates</div>
      <div className="flex justify-center items-center pt-7 space-x-5">
        <IoIosMail size={44} className="h-10 w-10 p-1 rounded-full bg-black" />
        <IoCall className="h-10 w-10 p-1 rounded-full bg-black" />
      </div>

      <div className="relative flex justify-center items-center mt-5">
        <input
          type="search"
          id="search"
          className="block w-full md:w-[45rem] h-[3rem] md:h-[5rem] p-4 text-sm text-white bg-black placeholder-white"
          placeholder="Enter your email here"
          required
        />
        <button
          type="submit"
          className=" right-0 top-0 h-[3rem] md:h-[5rem] w-[7rem] md:w-[10rem] text-black bg-white p-2 md:p-4 border-2 border-black font-medium text-sm"
        >
          Subscribe
        </button>
      </div>

      <div className="flex justify-center items-center mt-10 space-x-5 text-3xl md:text-5xl">
        <FaFacebook className="h-12 md:h-16 w-12 md:w-16 rounded-full text-white bg-[#E0218A]" />
        <FaDiscord className="h-12 md:h-16 w-12 md:w-16 rounded-full text-[#E0218A] bg-white p-1" />
        <FaTwitter className="h-12 md:h-16 w-12 md:w-16 rounded-full text-[#E0218A] bg-white p-1" />
        <FaGithub className="h-12 md:h-16 w-12 md:w-16 rounded-full text-white bg-[#E0218A]" />
      </div>
      <div className="text-white flex justify-center items-center mt-10 text-sm md:text-base">© 2024 CURC™. All Rights Reserved.</div>
    </div>
  );
}

export default Footer;
