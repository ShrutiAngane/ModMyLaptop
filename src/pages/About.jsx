import React, { useContext } from 'react'
import aboutimg from '../assets/aboutimg.jpeg'
import { socials } from '../constants/socials'
import { useLoadScript } from "@react-google-maps/api";
import Map from '../utility/Map';
import { toggleContext } from '../App';
import { BsFillGeoAltFill } from "react-icons/bs";

const About = () => {
    const {toggle}=useContext(toggleContext)
    
        const {isLoaded}=useLoadScript({
            googleMapsApiKey:import.meta.env.VITE_MAP_API_KEY,
        });
  return (
    <div className={`max-w-[100%] flex flex-col items-center p-[5%] ${toggle?'blurred':''}`}>
        <section className='flex flex-col-reverse lg:flex lg:flex-row w-[100%] justify-between gap-5 bg-[#DFDFDF] p-[6%] lg:p-[3%]'>
            <ul className='flex flex-col gap-5 lg:w-[50%]'>
                <li className='text-[0.8rem] xs:text-[1rem] lg:text-[1.2rem] text-[#020408] list-none'>ModMyLaptop aims to provide quality service at affordable prices for laptop users.</li>
                <li className='text-[0.8rem] xs:text-[1rem] lg:text-[1.2rem] text-[#020408] list-none'>High performance and cost-effective services have become a necessity with the ever-increasing demand and usage of laptops.</li>
                <li className='text-[0.8rem] xs:text-[1rem] lg:text-[1.2rem] text-[#020408] list-none'>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Tenetur, dignissimos.</li>
                <li className='text-[0.8rem] xs:text-[1rem] lg:text-[1.2rem] text-[#020408] list-none'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Iure placeat aliquam harum ducimus provident! Error fugiat neque ducimus nesciunt beatae.</li>
                <li className='text-[0.8rem] xs:text-[1rem] lg:text-[1.2rem] text-[#020408] list-none'>We have various mods & products coming up soon, so make sure you are connected with us through our social media handles.</li>
            </ul>
                <div className=''>
                    <img src={aboutimg} alt='laptop' loading='lazy' className='lg:w-[500px] lg:h-[350px]'></img>
                </div>
        </section>
        <section className='flex flex-col lg:flex lg:flex-row justify-around gap-10 bg-[#DFDFDF] mt-[10%] p-[5%] lg:p-[2%] w-[100%]'>
                <div className='lg:w-[60%] '>
                    {!isLoaded?<p>Loading...</p>:<Map/>}
                </div>
            <div className='flex flex-col gap-10 justify-center lg:w-[40%] '>
                <h4 className='text-[#020408] font-bold text-[0.8rem] xs:text-[1rem] lg:text-[1.2rem]'>Pickup Locations</h4>
                <div className='flex justify-between xs:justify-evenly items-center'>
                    <li className='text-[0.8rem] xs:text-[1rem] lg:text-[1.2rem] text-[#020408] list-none flex items-center gap-2'><BsFillGeoAltFill size={20}/>Thane</li>
                    <li className='text-[0.8rem] xs:text-[1rem] lg:text-[1.2rem] text-[#020408] list-none flex items-center gap-2'><BsFillGeoAltFill size={20}/>Kalyan</li>
                    <li className='text-[0.8rem] xs:text-[1rem] lg:text-[1.2rem] text-[#020408] list-none flex items-center gap-2'><BsFillGeoAltFill size={20}/>Andheri</li>
                </div>
                <h4 className='text-[0.8rem] xs:text-[1rem] lg:text-[1.2rem] text-[#020408] font-bold'>Our Social Handles</h4>
                <div className='grid grid-cols-2 self-center lg:flex lg:flex-col lg:self-start gap-5'>
                    {socials.map((element)=>{
                        return <div key={element.id} className='flex gap-2 hover:cursor-pointer'>
                            <span>{<element.icon style={{width:'30px',height:'30px'}}/>}</span>
                            <li className='list-none text-[0.8rem] xs:text-[1rem] lg:text-[1.2rem] text-[#020408] hover:font-bold'>{element.text}</li>
                        </div>
                        
                    })}
                </div>
            </div>
        </section>
    </div>
  )
}

export default About
