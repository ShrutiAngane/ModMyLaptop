import React from 'react'
import Button from '../components/Button'


const Contact = () => {
  return (
    <div className='w-[100%] flex flex-col items-center justify-center gap-4' id='contact'>
        <h3 className='text-[#15273c] text-[1.5rem] font-bold'>Contact Us</h3>
        <div className='flex flex-col md:flex-row items-center justify-center w-[100%] gap-4 lg:gap-2'>
            <Button text={'Chat with us'} smooth={false} href={'https://wa.me/918976831219'}/>
            <Button text={'Send Email'} smooth={false} href={'mailto:modmylaptop@gmail.com'}/>
        </div>  
    </div>
  )
}

export default Contact
