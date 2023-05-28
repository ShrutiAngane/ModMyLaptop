import React from 'react';
import { Link } from 'react-scroll';

const Button = ({text,smooth,href}) => {
  return (
    <div className='flex items-center justify-center w-[190px] h-[40px] bg-[#365475] text-[#FFFFFF] rounded-lg hover:cursor-pointer hover:bg-transparent transition-all duration-300 hover:border-2 hover:border-[#365475] hover:text-[#020408]'>
      {smooth?<Link to='pricing' smooth={true} offset={-130} duration={1000} >{text}</Link>:<a href={href} target='_blank' rel="noreferrer">{text}</a>}
    </div>
  )
}

export default Button
