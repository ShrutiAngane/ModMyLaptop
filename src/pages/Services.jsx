import React from 'react'
import ServiceCard from '../components/ServiceCard'
import { service } from '../constants/service'
import Button from '../components/Button'


const Services = () => {
  return (
   <div className='flex flex-col w-[100%] items-center gap-7' id='service'>
        <h3 className='text-[#15273c] text-[1.5rem] font-bold'>Our Services</h3>
        <div className='flex flex-col items-center gap-10 lg:justify-center w-[100%] lg:flex-row'>
            {service.map((element)=>{
                return <ServiceCard icon={<element.icon size={25}/>} service={element.service} text={element.text} key={element.id}/> 
            })}
        </div> 
        
        <Button text={'Checkout our Plans'} smooth={true} href={''}/>
    </div>
  )
}

export default Services
