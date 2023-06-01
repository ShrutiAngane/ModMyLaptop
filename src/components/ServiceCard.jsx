import React from 'react'

const ServiceCard = ({icon,service,text}) => {
  return (
    <div className='flex flex-col w-[80%] sm:w-[60%] h-[310px] lg:w-[27%] gap-5 border-2 items-center justify-center p-[2%] rounded-lg'>
        <div className='rounded-full w-[60px] h-[60px] border-2 flex items-center justify-center bg-[#98BAE3]'>{icon}</div>
        <h4 className='text-[1.1rem] font-semibold'>{service}</h4>
        <p className='text-center'>{text}</p> 
    </div>
  )
}
export default ServiceCard
