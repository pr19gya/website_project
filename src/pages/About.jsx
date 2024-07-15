import React from 'react'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import HeroSection from '../components/about/HeroSection'
import Content from '../components/about/Content'

const About = () => {
  return (
    <div>
        <Navbar/>
        <HeroSection/>
        <Content/>
        <Footer/>
    </div>
  )
}

export default About