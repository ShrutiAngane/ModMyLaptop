import React from 'react'
import left from '../assets/arrow-left.svg'
import right from '../assets/arrow-right.svg'

const SwipeButton = ({align,func}) => {
  return (
    <div className={`w-[45px] h-[45px] ${align=='right'?'right-0':''} absolute flex justify-center top-[40%] rounded-full bg-[#f6f4f4] m-2 sliderbtn`} onClick={func}>
      <img src={align=='left'?left:right} alt='arrows' className='hover:cursor-pointer w-5 inline-block'></img>
    </div>
  )
}

export default SwipeButton
