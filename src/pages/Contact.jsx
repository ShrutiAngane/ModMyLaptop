import React from 'react'
import Button from '../components/Button'
import Fade from 'react-reveal/Fade';

const Contact = () => {
  return (
    <Fade left>
    <div className='w-[100%] flex flex-col items-center justify-center gap-4'>
        <h3 className='text-[#15273c] text-[1.5rem] font-bold'>Contact Us</h3>
        <div className='flex items-center justify-center w-[100%] gap-2'>
            <Button text={'Chat with us'}/>
            <Button text={'Send Email'}/>
        </div>
        
    </div>
    </Fade>
  )
}

export default Contact
