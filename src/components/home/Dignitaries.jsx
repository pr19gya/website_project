import React from 'react'
import { IoLink } from "react-icons/io5";

const Dignitaries = () => {
  return (
    <div className='bg-[#E0218A] text-white py-8'>
      <div className='text-3xl flex justify-center items-center py-4'>DIGNITARIES OF ROTARY</div>
      <div className='flex flex-col lg:flex-row justify-center items-center lg:items-start'>
        <div className='flex flex-col justify-center items-center w-full lg:w-2/5 p-4'>
          <img src="/stephanie.webp" className="h-[12rem] w-[12rem] rounded-full object-cover border-4 border-white" />
          <div className='text-2xl font-bold mt-4'>Stephanie A. Urchick</div>
          <div className='text-xl text-center'>President, Rotary International 2024-25</div>
        </div>
        <div className='flex justify-center items-center text-4xl my-5 lg:my-20 lg:mx-10'>
          <IoLink />
        </div>
        <div className='flex flex-col justify-center items-center w-full lg:w-2/5 p-4'>
          <img src="/rajpal.webp" className="h-[12rem] w-[12rem] rounded-full object-cover border-4 border-white" />
          <div className='text-2xl font-bold mt-4'>Rajpal Singh</div>
          <div className='text-xl text-center'>President, Rotary International 2024-25</div>
        </div>
      </div>
    </div>
  )
}

export default Dignitaries;
