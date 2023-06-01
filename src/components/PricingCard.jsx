import React from 'react'
import Tag from './Tag'

const PricingCard = ({data}) => {
  return (
    <div className={`${data.id=='plan2'?'bg-[#365475] h-[420px] xl:h-[440px] text-[#FFFFFF]':'h-[380px] xl:h-[400px]'} flex flex-col relative gap-4 ${data.id=='plan4'?'border-0 w-[100%] text-[#FFFFFF] justify-center':'border-2 border-[#5981B1] w-[300px] md:w-[40%] lg:w-[27%] xl:w-[23%]'} items-center justify-end p-[2%] lg:p-[1%] rounded-lg m-0`} key={data.id}>
        {data.tag?<Tag text={data.tag.toUpperCase()} bg={data.tag}/>:''}
        <h4 className={`${data.id=='plan2'|| data.id=='plan4'?'text-[#FFFFFF]':'text-[#15273c]'} font-bold text-[1.2rem]`}>{data.plan}</h4>
        <p>Starting at</p>
        <h4 className={`${data.id=='plan2'|| data.id=='plan4'?'text-[#FFFFFF]':'text-[#15273c]'} font-bold text-[1.2rem]`}>&#8377; {`${data.price}`}</h4>
        <p className={`${data.id=='plan2'|| data.id=='plan4'?'text-[#FFFFFF]':'text-[#15273c]'} font-semibold`}>{data.type}</p>
        <p>TIM used:</p>
        <p>{data.tim}</p>
        <p>Includes:</p>
        <span className='text-center'>{data.includes}</span>
    </div>
  )
}
export default PricingCard
