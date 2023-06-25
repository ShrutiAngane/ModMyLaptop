import React from 'react'

const Fallback = () => {
  return (
    <div className='w-[100%] h-[100vh] flex flex-col justify-center items-center gap-4'>
        <span className='font-bold text-[1.2rem]'>LOADING ...</span>
        <div className="lds-dual-ring"></div>
    </div>
    
  )
}

export default Fallback
