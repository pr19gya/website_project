import React from 'react'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import HeroSection from '../components/council/HeroSection'

import Elements from '../components/council/Elements'

const Council = () => {
  return (
    <div>
        <Navbar/>
        <HeroSection/>
       <Elements/>
        <Footer/>
    </div>
  )
}

export default Council