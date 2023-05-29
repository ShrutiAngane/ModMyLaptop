import React, { useContext } from 'react'
import videobg from '../assets/Stock_mobo.mp4'
import Services from './Services'
import Repaste from './Repaste'
import Pricing from './Pricing'
import Contact from './Contact'
import Testimonials from './Testimonials'
import { BsChevronDoubleDown } from "react-icons/bs";
import { Link } from 'react-scroll'
import { toggleContext } from '../App'
import Animate from '../utility/animations/Animate'



const Home = () => {
  const {toggle}=useContext(toggleContext)
  return (
    <div className={`text-[#000000] max-w-[100%] flex flex-col mb-8 gap-[150px] ${toggle?'blurred':''}`}>
      <div className='max-w-[100%] h-[100vh]'>
        <video src={videobg} autoPlay loop muted className='w-[100%] h-[100%] object-cover'></video>
        <div className='overlay'></div>
        <div className='absolute top-[0px] flex flex-col justify-center items-center w-[100%] h-[100%]'>
          <h2 className='text-[#FFFFFF] text-[2.4rem] md:text-[3.8rem] font-bold font-brand'>ModMyLaptop</h2>
          <p className='text-[#FFFFFF] text-[1.5rem] font-semibold font-brand mb-8'>Therapy for laptops</p>
          <Link to='service' smooth={true} offset={-130} duration={1000}>
            <div className='bg-transparent border-2 border-[#FFFFFF] rounded-l-full rounded-r-full w-[150px] h-[50px] flex items-center justify-center btn'>
              <BsChevronDoubleDown size={25} color='white' className='btn-transition'/>
            </div>
          </Link>
        </div>
      </div>
      <div className='flex flex-col w-[100%] items-center'>
        <Animate>
          <Services/>
        </Animate>
      </div>
      <div>
        <Animate><Repaste/></Animate>
      </div>
      <Animate><Testimonials/></Animate>
      <div className='flex flex-col w-[100%] items-center'>
        <Animate><Pricing/></Animate>
      </div>
      <div className='flex flex-col w-[100%] items-center'>
        <Animate><Contact/></Animate>
      </div>
      

      
    </div>
  )
}

export default Home
