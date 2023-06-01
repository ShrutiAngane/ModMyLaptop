import React from 'react'
import ServiceCard from '../components/ServiceCard'
import { service } from '../constants/service'
import Button from '../components/Button'
import { Element } from 'react-scroll'


const Services = () => {
  return (
    <Element name='service'>
    <div className='flex flex-col w-[100%] items-center gap-7'>
          <h3 className='text-[#15273c] text-[1.5rem] font-bold'>Our Services</h3>
          <div className='flex flex-col items-center gap-10 lg:justify-center w-[100%] lg:flex-row'>
              {service.map((element)=>{
                  return <ServiceCard icon={<element.icon size={25}/>} service={element.service} text={element.text} key={element.id}/> 
              })}
          </div> 
          
          <Button text={'Checkout our Plans'} smooth={true} href={''}/>
      </div>
    </Element>
  )
}

export default Services
