import Slider from "react-slick";
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";

function Events() {
  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2000,
    centerMode: true,
    centerPadding: '10px',
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
          centerPadding: '50px',
        }
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 1,
          centerPadding: '50px',
        }
      }
    ]
  };

  return (
    <div className='w-full m-auto my-20 px-4 pb-8'>
      <div className='text-3xl sm:text-4xl font-semibold font-f_3 flex justify-center items-center'>Latest Events</div>
      <div className="text-xl sm:text-xl font-f_3 flex justify-center mt-5 items-center">Check out the latest events happening in your community.</div>
      <div className='w-full lg:w-3/4 m-auto'>
        <div className="mt-20">
          <Slider {...settings}>
            {data.map((d) => (
              <div key={d.name} className="bg-white h-[450px] px-5 text-black rounded-xl">
                <div className='h-56 rounded-lg flex justify-center items-center'>
                  <img src={d.img} alt={d.name} className="rounded-t-lg object-cover h-full w-full" />
                </div>
                <div className="flex flex-col items-center justify-center gap-4 p-4">
                  <p className="text-xl font-semibold">{d.name}</p>
                  <p className="text-center">{d.review}</p>
                  <button className='bg-[#E0218A] text-white text-lg px-6 py-1 rounded-xl'>Read More</button>
                </div>
              </div>
            ))}
          </Slider>
        </div>
      </div>
    </div>
  );
}

const data = [
  {
    name: `John Morgan`,
    img: `/miquel-parera-VGmgsDsck58-unsplash.jpg`,
    review: `Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.`
  },
  {
    name: `Ellie Anderson`,
    img: `/miquel-parera-VGmgsDsck58-unsplash.jpg`,
    review: `Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.`
  },
  {
    name: `Nia Adebayo`,
    img: `/miquel-parera-VGmgsDsck58-unsplash.jpg`,
    review: `Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.`
  },
  {
    name: `Rigo Louie`,
    img: `/miquel-parera-VGmgsDsck58-unsplash.jpg`,
    review: `Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.`
  },
  {
    name: `Mia Williams`,
    img: `/miquel-parera-VGmgsDsck58-unsplash.jpg`,
    review: `Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.`
  },
];

export default Events;
