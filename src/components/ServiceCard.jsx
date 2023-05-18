import React from 'react'

const ServiceCard = ({icon,service,text,key}) => {
  return (
    <div className='flex flex-col w-[60%] lg:w-[20%] gap-5 border-2 items-center p-[2%] rounded-lg' key={key}>
        <div className='rounded-full w-[60px] h-[60px] border-2 flex items-center justify-center bg-[#98BAE3]'>{icon}</div>
        <h4 className='text-[1.1rem] font-semibold'>{service}</h4>
        <p className='text-center'>{text}</p> 
    </div>
  )
}

export default ServiceCard
