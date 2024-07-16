import video from './../../../public/video.mp4';

const HeroSection = () => {
  return (
    <div className="w-full">
      <div className="h-[700px] overflow-hidden rounded-b-full relative bg-white" style={{ height: '100vh', width: '98.9vw', borderRadius: '0 0 100% 100%' }}>
        <video autoPlay loop muted className="absolute top-0 left-0 w-full h-full object-cover" controls>
          <source src={video} type="video/mp4" />
          Your browser does not support the video tag.
        </video>
        <div className="absolute inset-0 bg-black bg-opacity-50 flex flex-col justify-center items-start px-4 md:px-8 lg:px-16">
          <h1 className="text-white text-6xl md:text-6xl lg:text-8xl xl:text-9xl font-bold   ml-4 md:ml-8 lg:ml-16 text-left">Rotaract</h1>
          <h2 className="text-white text-5xl md:text-5xl lg:text-6xl xl:text-7xl font-bold ml-4 md:ml-8 lg:ml-16 text-left">3080</h2>
        </div>
      </div>
    </div>
  );
};

export default HeroSection;
