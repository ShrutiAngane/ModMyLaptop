import React, { useState } from 'react'
import SwipeButton from './SwipeButton'

const Slider = ({images}) => {
  const[slide,setSlide]=useState(0)
  function nextSlide(){
    images.length-1==slide?setSlide(0):setSlide((prev)=>prev+1);
  }
  function prevSlide(){
    slide==0?setSlide(images.length-1):setSlide((prev)=>prev-1);
  }
  return (
    <div className='lg:w-[35%] w-[300px] sm:w-[550px] relative slider'>
        <div className='overlay'></div>
        <SwipeButton align={'left'} func={prevSlide}/>
        <img src={images[slide]} className='sliderImg'></img>
        <SwipeButton align={'right'} func={nextSlide}/>
        <div className='absolute flex justify-center w-[100%] gap-3 bottom-4'> 
          {images.map((element,index)=>{
              return <span className='w-4 h-4 rounded-full bg-[#f6f4f4] hover:cursor-pointer hover:bg-black hover:border-2 hover:border-[#f6f4f4]' key={index} onClick={()=>setSlide(index)}></span>
          })}
          </div>
    </div>
  )
}

export default Slider
