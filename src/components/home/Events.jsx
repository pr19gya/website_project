import React, { useState } from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

function Events() {
  const [selectedEvent, setSelectedEvent] = useState(null);

  const settings = {
    dots: true,
    infinite: true,
    speed: 800,
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
    centerMode: true,
    centerPadding: '0px',
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
        },
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 1,
        },
      },
    ],
  };

  return (
    <div className='w-full h-[40rem] m-auto my-20 px-4 pb-8'>
      <div className='text-3xl sm:text-4xl font-semibold font-f_3 flex justify-center items-center mb-6'>Latest Events</div>
      <div className="text-lg sm:text-xl font-f_3 flex justify-center text-center items-center mb-12">Stay updated with the most recent happenings in Rotaract District 3080.</div>
      <div className='w-full lg:w-4/5 m-auto'>
        <Slider {...settings}>
          {data.map((d, index) => (
            <div key={d.name} className="bg-white h-[450px] px-5 text-black rounded-xl shadow-lg transform transition duration-300 hover:scale-105">
              <div className='h-56 rounded-t-lg overflow-hidden flex justify-center items-center'>
                <img src={d.img} alt={d.name} className="object-cover h-full w-full" />
              </div>
              <div className="flex flex-col items-center justify-center gap-4 p-4">
                <p className="text-xl font-semibold">{d.name}</p>
                <p className="text-center text-gray-700">{d.review}</p>
                <button
                  className='bg-[#E0218A] text-white text-lg px-6 py-2 rounded-full hover:bg-pink-700 transition duration-300'
                  onClick={() => setSelectedEvent(index)}
                >
                  Read More
                </button>
              </div>
            </div>
          ))}
        </Slider>
      </div>

      {selectedEvent !== null && (
        <div className="fixed inset-0 bg-black bg-opacity-70 flex justify-center items-center z-50">
          <div className="bg-white w-11/12 md:w-3/4 lg:w-1/2 p-6 rounded-lg shadow-lg relative">
            <button
              className="absolute top-4 right-4 text-2xl font-bold text-gray-600 hover:text-gray-800"
              onClick={() => setSelectedEvent(null)}
            >
              &times;
            </button>
            <img
              src={data[selectedEvent].img}
              alt={data[selectedEvent].name}
              className="w-full h-64 object-cover rounded-lg mb-4"
            />
            <h2 className="text-2xl font-semibold mb-2">{data[selectedEvent].name}</h2>
            <p className="text-gray-700 mb-4">{data[selectedEvent].review}</p>
            <p className="text-gray-700">Full information about the event goes here...</p>
          </div>
        </div>
      )}
    </div>
  );
}

const data = [
  {
    name: 'John Morgan',
    img: '/miquel-parera-VGmgsDsck58-unsplash.jpg',
    review: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
  },
  {
    name: 'Ellie Anderson',
    img: '/miquel-parera-VGmgsDsck58-unsplash.jpg',
    review: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
  },
  {
    name: 'Nia Adebayo',
    img: '/miquel-parera-VGmgsDsck58-unsplash.jpg',
    review: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
  },
  {
    name: 'Rigo Louie',
    img: '/miquel-parera-VGmgsDsck58-unsplash.jpg',
    review: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
  },
  {
    name: 'Mia Williams',
    img: '/miquel-parera-VGmgsDsck58-unsplash.jpg',
    review: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
  },
];

export default Events;
