import React from 'react'
import HeroSection from '../components/club_finder/HeroSection'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import AllClubs from '../components/club_finder/AllClubs'

const ClubFinder = () => {
  return (
    <div>
        <Navbar/>
        <HeroSection/>

        <AllClubs/>
        <Footer/>
    </div>
  )
}

export default ClubFinder