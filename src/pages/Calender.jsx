// src/App.js
import React from 'react';
import MainCalender from '../components/calender/MainCalender';
import Navbar from '../components/Navbar';
import HeroSection from '../components/calender/HeroSection';
import Footer from '../components/Footer';


function Calender() {
  const events = {
    '2024-07-15': 'Event 1',
    '2024-07-20': 'Event 2',
    // Add more events here
  };

  return (
    
      
        <>
        <Navbar/>
        <HeroSection/>
        <div className="min-h-screen bg-gray-100 flex items-center justify-center p-4">
      <header className="p-4">
        <h1 className="text-3xl font-bold mb-4 text-center">Calendar</h1>
        <MainCalender events={events} />
      </header>
    </div>
         <Footer/>
        </>
       
      
    
  );
}

export default Calender;
