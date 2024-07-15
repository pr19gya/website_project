import React from 'react'
import Navbar from '../components/Navbar'
import HeroSection from '../components/projects/HeroSection'
import Events from '../components/projects/Events'
import Footer from '../components/Footer'

const Projects = () => {
  return (
    <div>
        <Navbar/>
        <HeroSection/>
        <Events/>
        <Footer/>
    </div>
  )
}

export default Projects