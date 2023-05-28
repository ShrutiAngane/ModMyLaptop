import React, { useContext } from 'react'
import { toggleContext } from '../App'

const Footer = () => {
  const {toggle}=useContext(toggleContext)
  return (
    <div className={`w-[100%] h-[15%] bg-[#15273C] flex justify-center items-center ${toggle?'blurred':''}`}>
      <p className='text-[#FFFFFF] text-[1rem] font-medium'>&#169;2023 by ModMyLaptop</p>
    </div>
  )
}

export default Footer
