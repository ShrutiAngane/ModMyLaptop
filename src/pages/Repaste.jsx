import React from 'react'
import Fade from 'react-reveal/Fade';

const Repaste = () => {
  return (
    <Fade right>
    <div className='flex flex-col w-[100%] items-center gap-7'>
        <h3 className='text-[#15273c] text-[1.5rem] font-bold'>Why Repaste ?</h3>
        <p className='text-center lg:w-[60%]'>Over the course of time, TIM which is used to transfer the heat from CPU/GPU to heatsink dries up and loses its ability to transfer heat efficiently thereby degrading the performance. Apart from oils drying up there's also constant expansion and reduction of metal contact which results in the paste pumping out from sides thereby affecting its efficiency.  Re-pasting enhances the performance by ensuring that there is no/minimal thermal throttling by replacing the old TIM with a new one. It is recommended to re-paste & clean the laptop heatsinks at least once a year.</p>
      
    </div>
    </Fade>
  )
}

export default Repaste
