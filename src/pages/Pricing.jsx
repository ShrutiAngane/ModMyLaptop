import React from 'react'
import { plans,extreme } from '../constants/plans'
import PricingCard from '../components/PricingCard'
import {ReactComponent as Warning} from '../assets/warning.svg'
import Tag from '../components/Tag'
import Fade from 'react-reveal/Fade';

const Pricing = () => {
  return (
    <Fade right>
    <div className='flex flex-col w-[100%] items-center gap-7'>
        <h3 className='text-[#15273c] text-[1.5rem] font-bold'>Our Plans</h3>
        <div className='flex flex-col lg:flex-row lg:gap-0 w-[100%] items-center lg:items-end lg:justify-center gap-6'>
            {plans.map((element)=>{
                const data={id:element.id,tag:element.tag,plan:element.plan,
                    price:element.price,type:element.type,tim:element.tim,
                    includes:element.includes,warning:element.warning
                };
                return <PricingCard data={data}/>
            })}

        </div>
        <div className='w-[50%] flex flex-col items-center gap-4 lg:flex lg:flex-row justify-center border bg-[#15273C] rounded-lg relative p-2'>
            <div className='flex flex-col items-center justify-center w-[100%] lg:w-[40%] text-[#FFFFFF]'>
                <Warning style={{width:'80px',height:'80px'}}/>
                <p className='w-[70%] lg:w-[100%] text-center'>Warning! 
By opting for this plan, the user takes complete responsibility for any damage inflicted by liquid metal. 
Not recommended for normal users, only intended for extreme users & enthusiasts.</p>

            </div>
            <Tag text={'LIQUID METAL'} bg={'liquidmetal'}/>
            <div className='w-[100%] lg:w-[60%]'>
                <PricingCard data={extreme[0]}/>
            </div>
            
        </div>
        
        
    </div>
    </Fade>
  )
}

export default Pricing
