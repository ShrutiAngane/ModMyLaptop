import React from 'react'
import headerimg1 from '../assets/therapy.png'
import videobg from '../assets/homevideo.mp4'
import Services from './Services'
import Repaste from './Repaste'
import Pricing from './Pricing'
import Contact from './Contact'
import Testimonials from './Testimonials'


const Home = () => {
  return (
    <div className='text-[#000000] max-w-[100%] flex flex-col mb-8 gap-[150px]'>
      <div className='max-w-[100%] h-[100vh]'>
        {/* <img src={headerimg1} alt='therapyforlaptop' className='w-[100%] md:object-none'></img> */}
        <video src={videobg} autoPlay loop muted className='w-[100%] h-[100%] object-cover'></video>
        <div className='overlay'></div>
        <div className='absolute top-[114px] flex flex-col justify-center items-center w-[100%] h-[500px]'>
          <h2 className='text-[#FFFFFF] text-[2.4rem] lg:text-[3.8rem] font-bold font-brand'>Mod My Laptop</h2>
          <p className='text-[#FFFFFF] text-[1.5rem] font-semibold font-brand'>Therapy for laptops</p>
        </div>
      </div>
      <div className='flex flex-col w-[100%] items-center'>
        <Services/>
      </div>
      <div>
        <Repaste/>
      </div>
      <Testimonials/>
      <div className='flex flex-col w-[100%] items-center'>
        <Pricing/>
      </div>
      <div className='flex flex-col w-[100%] items-center'>
        <Contact/>
      </div>
      

      
    </div>
  )
}

export default Home
