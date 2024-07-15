import React from 'react'
import { IoLink } from "react-icons/io5";


const Dignitories = () => {
  return (
    <div className='bg-[#E0218A] h-[450px] w-full  text-white'>
        <div className='bg-[#E0218A] flex text-3xl justify-center items-center h-[100px] text-white'> DIGNITARIES OF ROTARY</div>
        <div className='flex justify-center items-center '>
        <div className='w-2/5 h-full  px-20 mt-3'>
            <div className='flex justify-center items-center'>
                <img src="/stephanie.webp" className="h-[12rem] w-[12rem] object-cover"/>
            </div>
            <div className='flex justify-center items-center text-2xl font-bold'>Stephanie A. Urchick</div>
            <div className='flex justify-center items-center text-xl '>President, Rotary International 2024-25</div>
        </div>
        <div className='w-1/5 h-full flex justify-center items-center text-4xl mt-5 '> <IoLink /></div>
        <div className='w-2/5  px-20 '>
            <div className='flex justify-center items-center'>
                <img src="/rajpal.webp" className="h-[12rem] w-[12rem] object-cover"/>
            </div>
            <div className='flex justify-center items-center text-2xl font-bold'>Stephanie A. Urchick</div>
            <div className='flex justify-center items-center text-xl '>President, Rotary International 2024-25</div>
        </div>
        </div>
    </div>
  )
}

export default Dignitories