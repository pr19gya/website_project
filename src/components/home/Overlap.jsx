import React from 'react'
import { Link } from 'react-router-dom'

const Overlap = () => {
  return (
    <div className='h-[700px] '>
        <div className='flex h-1/2 w-full '>
            <img src="/miquel-parera-VGmgsDsck58-unsplash.jpg" className='w-2/5 h-full object-cover'/>
            <div className='w-3/5 pt-16 px-20 text-center h-full bg-[#E0218A] text-white '>
            <div className='my-5 text-4xl font-bold flex justify-center items-center '>Our Team</div>
            <div className='text-xl flex justify-center items-center'>Discover the excitement in store – explore our comprehensive list of upcoming club events!</div>
            <div className='flex justify-center items-center'>
           <Link to="/council3080"><button className='flex justify-center items-center p-2 mt-5 border-2 border-white'>Learn More</button></Link> 
            </div>
        </div>
        </div>
        <div className='flex h-1/2 w-full'> 
            <div className='w-3/5 h-full text-center bg-black text-white pt-20 px-20'>
            <div className='my-5 text-4xl font-bold flex justify-center items-center '>Know Us</div>
            <div className='text-xl flex justify-center items-center'>Discover the excitement in store – explore our comprehensive list of upcoming club events!</div>
            <div className='flex justify-center items-center'>
           <Link to="/about"> <button className='flex justify-center items-center p-2 mt-5 border-2 border-white'>Learn More</button></Link>
            </div>
            </div>
            <img src="/miquel-parera-VGmgsDsck58-unsplash.jpg" className='w-2/5 h-full object-cover'/>
        </div>
    </div>
  )
}

export default Overlap