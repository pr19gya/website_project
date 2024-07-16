import React from 'react'
import { Link } from 'react-router-dom'

const Overlap = () => {
  return (
    <div className="bg-[#E0218A] text-white">
      <div className="max-w-screen-xl mx-auto px-4 py-8 lg:py-16">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {/* Left Section */}
          <div className="relative overflow-hidden rounded-lg shadow-lg bg-white text-black">
            <img src="/miquel-parera-VGmgsDsck58-unsplash.jpg" className="w-full h-72 object-cover lg:h-auto lg:w-auto" alt="Team" />
            <div className="absolute inset-0 bg-[#E0218A] bg-opacity-40 flex flex-col justify-center items-center">
              <div className="text-4xl lg:text-6xl font-bold mb-4 text-center">Our Team</div>
              <p className="text-lg lg:text-xl text-center px-4">Discover the excitement in store – explore our comprehensive list of upcoming club events!</p>
              <div className="mt-6">
                <Link to="/council3080" className="inline-block px-6 py-2 bg-black text-white border-2 border-black rounded-lg hover:bg-white hover:text-black transition duration-300">Learn More</Link>
              </div>
            </div>
          </div>

          {/* Right Section */}
          <div className="relative overflow-hidden rounded-lg shadow-lg bg-white text-black">
            <img src="/miquel-parera-VGmgsDsck58-unsplash.jpg" className="w-full h-72 object-cover lg:h-auto lg:w-auto" alt="Know Us" />
            <div className="absolute inset-0 bg-[#E0218A] bg-opacity-40 flex flex-col justify-center items-center">
              <div className="text-4xl lg:text-6xl font-bold mb-4 text-center">Know Us</div>
              <p className="text-lg lg:text-xl text-center px-4">Discover the excitement in store – explore our comprehensive list of upcoming club events!</p>
              <div className="mt-6">
                <Link to="/about" className="inline-block px-6 py-2 bg-black text-white border-2 border-black rounded-lg hover:bg-white hover:text-black transition duration-300">Learn More</Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Overlap
