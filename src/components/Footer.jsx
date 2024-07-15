import React from 'react'
import { IoIosMail } from "react-icons/io";
import { IoCall } from "react-icons/io5";
import { FaFacebook } from "react-icons/fa";
import { FaDiscord } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";

import { FaGithub } from "react-icons/fa";





const Footer = () => {
  return (
    <div className='h-[630px] bg-[#E0218A] text-white'>
        <div className='flex justify-center items-center text-7xl font-bold pt-[7rem]'>JOIN THE MOVEMENT!</div>
        <div className='flex justify-center items-center text-3xl font-bold pt-7'>Get the Latest News & Updates</div>
        <div className='flex justify-center items-center text-[#E0218A]  font-bold pt-7 '>
        <IoIosMail size={44} className='mx-5 h-10 w-10 p-1 rounded-full bg-black'/>
        <IoCall   className='mx-5 h-10 w-10 p-1 rounded-full bg-black'/>

        </div>
        
 
    {/* <label  className="mb-2 text-sm w-[30rem] flex justify-center items-center font-medium text-gray-900 sr-only dark:text-white">Search</label> */}
    <div className="relative flex justify-center items-center mt-5 ">
       
        <input type="search" id="search" className="block w-[45rem] h-[5rem] p-4  text-sm text-white  bg-black" placeholder="Enter your email here" required />
        <button type="submit" className="text-black bg-white p-4 h-[5rem] w-[10rem]  border-2 border-black font-medium  text-sm  ">Subscribe</button>
    </div>

    <div className='flex justify-center items-center mt-10 text-5xl '>
    <FaFacebook className='mx-3 h-16 w-16 rounded-full text-white bg-[#E0218A]'/>
    <FaDiscord  className='mx-3 h-16 w-16 rounded-full text-[#E0218A] bg-white p-1' />
    <FaTwitter className='mx-3 p-1 h-16 w-16 rounded-full text-[#E0218A] bg-white' />
    <FaGithub className='mx-3 h-16 w-16 rounded-full text-white bg-[#E0218A]' />

    </div>
    <div className='text-white flex justify-center items-center mt-10'>© 2024 CURC™. All Rights Reserved.</div>



    </div>
  )
}

export default Footer