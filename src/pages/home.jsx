// import Aboutus from "./components/Aboutus"
import Dignitaries from "../components/home/Dignitaries"
import Events from "../components/home/Events"
import Footer from "./../components/Footer"
import HeroSection from "../components/home/HeroSection"
import Linksections from "../components/home/Linksections"
import Navbar from "./../components/Navbar"
import Overlap from "../components/home/Overlap"
import Notifications from "../components/home/Notifications"
import Complaint from "../components/home/Complaint"


function Home() {
 

  return (
    <>
      <Navbar/>
      <HeroSection/>
      <Events/>
      <Dignitaries/>
      <Linksections/>
      <Overlap/>
      <Notifications/>
      <Complaint/>
      <Footer/>
    </>
  )
}

export default Home
