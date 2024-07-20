import React from 'react';
import { IoLink } from "react-icons/io5";

const Dignitaries = () => {
  return (
    <div className='bg-[#E0218A] text-white py-12'>
      <div className='text-4xl font-semibold flex justify-center items-center py-4'>Dignitaries of Rotary</div>
      <div className='flex flex-col lg:flex-row justify-center items-center lg:items-start'>
        {dignitariesData.map((dignitary, index) => (
          <div key={index} className='flex flex-col justify-center items-center w-full lg:w-1/3 p-6'>
            <div className='relative'>
              <img 
                src={dignitary.image} 
                alt={dignitary.name} 
                className="h-[12rem] w-[12rem] rounded-full object-cover border-4 border-white transition-transform transform hover:scale-105" 
              />
              {/* <div className='absolute bottom-0 right-0 h-10 w-10 bg-white rounded-full flex justify-center items-center text-[#E0218A] hover:text-white hover:bg-[#E0218A] transition-colors'>
                <IoLink className='h-6 w-6' />
              </div> */}
            </div>
            <div className='text-2xl font-bold mt-4'>{dignitary.name}</div>
            <div className='text-xl text-center mt-2'>{dignitary.title}</div>
          </div>
        ))}
      </div>
    </div>
  );
}

const dignitariesData = [
  {
    image: '/stephanie.webp',
    name: 'Stephanie A. Urchick',
    title: 'President, Rotary International 2024-25',
  },
  {
    image: '/shashank.jpg',
    name: 'Shashank Kaushik',
    title: 'DRR, Rotary International District 3080',
  },
  {
    image: '/rajpal.jpg',
    name: 'Rajpal Singh',
    title: 'District Governor 2024-25',
  },
];

export default Dignitaries;
