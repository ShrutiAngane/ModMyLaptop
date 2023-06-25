import React from 'react'
import Slider from '../components/Slider'
import {gallery} from '../constants/slider'

const WhatWeDo = () => {
  return (
    <div className='w-[100%]'>
        {gallery.map((element)=>{
          return <div key={element.id} className={`flex ${element.id%2==0?'flex-col lg:flex-row-reverse':'flex-col lg:flex-row'} lg:gap-7 gap-5 items-center w-[100%] lg:h-[100vh] lg:justify-evenly pt-[150px] pb-[30px] pl-[30px] pr-[30px] lg:p-[30px]`}>
            <Slider images={element.images}/>
            <div className={`flex flex-col w-[70%]  gap-4 justify-center ${element.id%2==0?'lg:items-end':'items-start'}`}>
              <span><b>Model : </b>{element.model}</span>
              <p className={`lg:w-[60%] ${element.id%2==0?'lg:text-end':'lg:text-start'}`}><b>Case : </b>{element.case}</p>
              </div>
          </div>
        })}
    </div>
  )
}

export default WhatWeDo
