import React from 'react'
import HeroSection from '../drr/HeroSection'
import Timeline from '../drr/Timeline'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'

const Drr = () => {
  return (
    <div>
        <Navbar/>
        <HeroSection/>
        <Timeline/>
        <Footer/>
    </div>
  )
}

export default Drr