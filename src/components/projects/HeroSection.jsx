import React from 'react'

const HeroSection = () => {
  return (
    <div className='h-[700px] w-full'>
        <img src="/miquel-parera-VGmgsDsck58-unsplash.jpg" className='h-full w-full object-cover'/>
        <div className='absolute inset-0 w-[40rem] mt-[12rem] ml-32'>
            <h1 className='text-white text-9xl font-bold'>CLUB PROJECTS</h1>
            {/* <h3 className='mt-10 text-white text-xl'>RID 3080 is honored to be the home district of Past Rotary International President Rtn. Rajendra K. Saboo, a distinguished leader whose contributions have significantly impacted Rotary's global initiatives.</h3> */}
        </div>

    </div>
  )
}

export default HeroSection