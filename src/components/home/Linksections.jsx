import React from 'react'
import { Link } from 'react-router-dom'

const Linksections = () => {
  return (
    <div className='bg-black h-[400px] w-full flex justify-center items-center text-white'>
        <div className='w-2/5  px-20'>
           <div className='my-5 text-4xl font-bold'>ClubEvents</div>
            <div className='text-xl'>Discover the excitement in store – explore our comprehensive list of upcoming club events!</div>
            <Link to="/club-project"><div className='border-2 border-white p-2 w-[6.5rem] mt-5'>Learn More</div></Link> 
        </div>
        <div className='w-1/5 h-full  '><img src="/pexels-monicaaaaa-aaa-36421873-8218375.jpg" className='w-full h-full object-cover'/></div>
        <div className='w-2/5  px-20'>
            <div className='my-5 text-4xl font-bold'>Calender</div>
            <div className='text-xl'>Discover the excitement in store – explore our comprehensive list of upcoming club events!</div>
           <Link to="/calendar"> <div className='border-2 border-white p-2 w-[6.5rem] mt-5'>Learn More</div></Link> 
        </div>
    </div>
  )
}

export default Linksections