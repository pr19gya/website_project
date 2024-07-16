import { Route, Routes } from "react-router-dom"

import Home from "./pages/home"
import About from "./pages/About"
import Council from "./pages/Council"
import Drr from "./pages/Drr"
import Projects from "./pages/Projects"
import SignIn from "./pages/SignIn"
import Calender from "./pages/Calender"


function App() {
 

  return (
    <div className="font-f_3">
      <Routes>
        <Route path="/" element ={<Home/>}/>
        <Route path="/about" element={<About/>}/>
        <Route path="/council3080" element={<Council/>}/>
        <Route path="/past-drrs" element={<Drr/>}/>
        <Route path="/club-project" element={<Projects/>}/>
        {/* <Route path="/sign-in" element={<SignIn/>}/> */}
        <Route path="/calendar" element={<Calender/>}/>


      </Routes>
    </div>
  )
}

export default App
