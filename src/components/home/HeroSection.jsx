import video from './../../../public/video.mp4'
const HeroSection = () => {
  return (
    <div className=" w-full">
    
    <div className="h-[700px] overflow-hidden rounded-b-full relative bg-white" style={{ height: '100vh', width: '98.9vw', borderRadius: '0 0 100% 100%' }}>
    <video autoPlay
        loop
        muted className="absolute top-0 left-0 w-full h-full object-cover" controls autoPlay muted>
      <source src={video} type="video/mp4" />
      Your browser does not support the video tag.
    </video>

        <div className="absolute inset-0   bg-black bg-opacity-50 ">
        {/* <h1 className="bg-[#E0218A] text-9xl font-bold mt-[10rem] ml-[7rem] h-[2rem] w-[20rem]  text-left"></h1>  */}
            <h1 className="text-white text-9xl font-bold  mt-[10rem]  ml-[7rem]  text-left">Rotaract</h1> 
            <h2 className="text-white text-7xl font-bold  ml-[7rem]  text-left">3080</h2>   
        </div>
    </div>
    </div>
  )
}

export default HeroSection