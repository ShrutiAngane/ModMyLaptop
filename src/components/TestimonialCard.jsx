import React from 'react'
import { BsPersonFill,BsFillStarFill } from "react-icons/bs";

const TestimonialCard = ({name,review}) => {
  return (
    <div className='flex flex-col lg:w-[27%] w-[80%] sm:w-[60%] lg:h-[365px] p-[2%] rounded-lg border items-center gap-2'>
        <div className='rounded-full w-[60px] h-[60px] border-2 flex items-center justify-center bg-[#98BAE3]'><BsPersonFill size={20}/></div>
        <h4 className='text-[1.1rem] font-semibold text-center'>{name}</h4>
        <span className='flex w-[80%] items-center justify-center gap-2'>
            <BsFillStarFill size={20} color={'yellow'}/>
            <BsFillStarFill size={20} color={'yellow'}/>
            <BsFillStarFill size={20} color={'yellow'}/>
            <BsFillStarFill size={20} color={'yellow'}/>
            <BsFillStarFill size={20} color={'yellow'}/>
        </span>
        <p className='text-center'>&#10077; {review} &#10078;</p>    
    </div>
  )
}

export default TestimonialCard
