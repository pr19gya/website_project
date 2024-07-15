// import Aboutus from "./components/Aboutus"
import Dignitories from "../components/home/Dignitories"
import Events from "../components/home/Events"
import Footer from "./../components/Footer"
import HeroSection from "../components/home/HeroSection"
import Linksections from "../components/home/Linksections"
import Navbar from "./../components/Navbar"
import Overlap from "../components/home/Overlap"


function Home() {
 

  return (
    <>
      <Navbar/>
      <HeroSection/>
      <Events/>
      <Dignitories/>
      <Linksections/>
      <Overlap/>
      <Footer/>
    </>
  )
}

export default Home
