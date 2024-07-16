import React from 'react'
import { Link } from 'react-router-dom'

const Linksections = () => {
  return (
    <div className='bg-black w-full flex flex-col lg:flex-row justify-center items-center text-white p-8 lg:p-0'>
      <div className='w-full lg:w-2/5 p-8 lg:p-20 text-center lg:text-left'>
        <div className='my-5 text-3xl lg:text-4xl font-bold'>Club Events</div>
        <div className='text-lg lg:text-xl'>Discover the excitement in store – explore our comprehensive list of upcoming club events!</div>
        <Link to="/club-project">
          <div className='border-2 border-white p-2 w-[8rem] mt-5 mx-auto lg:mx-0 text-center rounded-lg hover:bg-white hover:text-black transition duration-300 ' >Learn More</div>
        </Link>
      </div>
      <div className='w-full lg:w-1/5 h-64 lg:h-full p-4'>
        <img src="/pexels-monicaaaaa-aaa-36421873-8218375.jpg" className='w-full h-full object-cover rounded-lg' />
      </div>
      <div className='w-full lg:w-2/5 p-8 lg:p-20 text-center lg:text-left'>
        <div className='my-5 text-3xl lg:text-4xl font-bold'>Calendar</div>
        <div className='text-lg lg:text-xl'>Discover the excitement in store – explore our comprehensive list of upcoming club events!</div>
        <Link to="/calendar">
          <div className='border-2 border-white p-2 w-[8rem] mt-5 mx-auto lg:mx-0 text-center rounded-lg hover:bg-white hover:text-black transition duration-300'>Learn More</div>
        </Link>
      </div>
    </div>
  )
}

export default Linksections
