import React from 'react'
import { testimonials } from '../constants/testimonials'
import TestimonialCard from '../components/TestimonialCard'
import Fade from 'react-reveal/Fade';

const Testimonials = () => {
  return (
    <Fade left>
    <div className='w-[100%] flex flex-col items-center gap-7'>
        <h3 className='text-[#15273c] text-[1.5rem] font-bold'>What our clients say</h3>
        <div className='flex flex-col lg:flex-row gap-8 items-center lg:justify-center'>
            {testimonials.map((element)=>{
                return <TestimonialCard name={element.name} review={element.review}/>
            })}
        </div>
    </div>
    </Fade>
  )
}

export default Testimonials
