import React from 'react'

const Content = () => {
  return (
    <div>
        <div className='flex flex-col lg:flex-row w-full mt-20'>
            <div className='w-full lg:w-1/2 flex justify-center items-center text-4xl lg:text-6xl font-bold px-6 lg:px-24 text-center mb-8 lg:mb-0'>ESTABLISHED IN RIY 1984-85.</div>
            <div className='w-full lg:w-1/2 flex justify-center items-center text-center text-sm lg:text-lg px-6 lg:pr-40'>Rotary International District 3080 (RID 3080) was established in the Rotary International Year (RIY) 1984-85. Since its inception, RID 3080 has been a cornerstone of service and leadership in the Rotaract community.</div>
        </div>
        <div className='w-full flex justify-center items-center mt-20 lg:mt-40'>
            <div className='flex justify-center items-center text-4xl lg:text-6xl font-bold px-6 lg:px-24 text-center'>GEOGRAPHIC REACH.</div>
        </div>
        <div className='flex flex-wrap justify-center  items-center mt-8 lg:mt-16'>
            <div className='h-[7rem] lg:h-[10rem] w-[7rem] lg:w-[10rem] m-2 lg:mx-5 rounded-full border-[0.7rem] bg-black text-white border-[#E0218A] text-xs lg:text-lg flex justify-center items-center text-center'>CHANDIGARH (UT)</div>
            <div className='h-[7rem] lg:h-[10rem] w-[7rem] lg:w-[10rem] m-2 lg:mx-5 rounded-full border-[0.7rem] bg-black text-white border-[#E0218A] text-xs lg:text-lg flex justify-center items-center text-center'>PUNJAB</div>
            <div className='h-[7rem] lg:h-[10rem] w-[7rem] lg:w-[10rem] m-2 lg:mx-5 rounded-full border-[0.7rem] bg-black text-white border-[#E0218A] text-xs lg:text-lg flex justify-center items-center text-center'>HARYANA</div>
            <div className='h-[7rem] lg:h-[10rem] w-[7rem] lg:w-[10rem] m-2 lg:mx-5 rounded-full border-[0.7rem] bg-black text-white border-[#E0218A] text-xs lg:text-md flex justify-center items-center text-center'>PARTS OF UP & UK</div>
        </div>
        <div className='flex flex-col lg:flex-row w-full mt-20 lg:mt-40'>
            <div className='w-full lg:w-1/2 flex justify-center items-center text-4xl lg:text-6xl font-bold px-6 lg:px-24 text-center mb-8 lg:mb-0'>DISTINGUISHED LEADERSHIP</div>
            <div className='w-full lg:w-1/2 flex justify-center items-center text-sm lg:text-lg text-center px-6 lg:pr-40'>RID 3080 is honored to be the home district of Past Rotary International President Rtn. Rajendra K. Saboo, a distinguished leader whose contributions have significantly impacted Rotary's global initiatives.</div>
        </div>
        <div className='w-full flex justify-center items-center mt-20 lg:mt-40'>
            <div className='flex justify-center items-center text-4xl lg:text-6xl font-bold px-6 lg:px-24 text-center'>STRUCTURE</div>
        </div>
        <div className='flex flex-wrap justify-center items-center mt-8 lg:mt-16'>
            <div className='h-[7rem] lg:h-[10rem] w-[7rem] lg:w-[10rem] mx-2 lg:mx-5 rounded-full border-[0.7rem] bg-black text-white border-[#E0218A] text-xs lg:text-lg flex justify-center items-center text-center'>60+ clubs</div>
            <div className='h-[7rem] lg:h-[10rem] w-[7rem] lg:w-[10rem] mx-2 lg:mx-5 rounded-full border-[0.7rem] bg-black text-white border-[#E0218A] text-xs lg:text-lg flex justify-center items-center text-center'>6 zones</div>
        </div>
        <div className='flex flex-col lg:flex-row w-full my-20'>
            <div className='w-full lg:w-1/2 text-4xl lg:text-6xl font-bold px-6 lg:px-24 text-center mb-8 lg:mb-0'>WHY JOIN US</div>
            <div className='w-full lg:w-1/2 flex justify-center items-center text-sm lg:text-lg px-6 lg:pr-40'>
                <ul className="list-disc  list-inside space-y-2 text-gray-700">
                    <li><b>Prestigious Network:</b> Be a part of an esteemed network with over 60 clubs across Chandigarh (UT), Punjab, Haryana, Himachal Pradesh, Uttarakhand, and Uttar Pradesh.</li>
                    <li><b>Mentorship by Leaders:</b> Gain insights and mentorship from distinguished leaders, including Past Rotary International President Rtn. Rajendra K. Saboo.</li>
                    <li><b>Meaningful Service:</b> Engage in impactful service projects that improve communities and foster sustainable development.</li>
                    <li><b>Leadership Development:</b> Enhance your leadership skills through specialized programs and workshops.</li>
                    <li><b>Global Opportunities:</b> Experience cultural exchanges and build a global network through our international partnerships.</li>
                    <li><b>Engaging Club Experience:</b> Enjoy a fulfilling Rotaract experience with activities designed to enhance club functionality and member engagement.</li>
                    <li><b>Literacy Initiatives:</b> Contribute to promoting literacy, reading, writing, and critical thinking in your community.</li>
                </ul>
            </div>
        </div>
    </div>
  )
}

export default Content
