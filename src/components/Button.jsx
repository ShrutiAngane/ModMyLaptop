import React from 'react'

const Button = ({text}) => {
  return (
    <div className='flex items-center justify-center w-[190px] h-[40px] bg-[#365475] text-[#FFFFFF] rounded-lg hover:cursor-pointer hover:bg-transparent transition-all duration-300 hover:border-2 hover:border-[#365475] hover:text-[#020408]'>
      {text}
    </div>
  )
}

export default Button
