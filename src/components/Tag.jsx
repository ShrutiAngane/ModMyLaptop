import React from 'react'

const Tag = ({text,bg}) => {
  return (
    <div className={`absolute top-0 flex items-center justify-center w-[160px] h-[40px] rounded-b-xl ${bg} font-bold }]`}>
      {text}
    </div>
  )
}
export default Tag
