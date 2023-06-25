import React from 'react'
import error from '../assets/404.png'
import Button from '../components/Button'

const PageNotFound = () => {
  return (
    <div className='w-[100%] h-[100vh] flex flex-col justify-center items-center gap-4'>
      <img src={error} alt='404 error' className='w-[80%] xs:w-[400px]'></img>
      <p className='font-bold text-[1.4rem]'>LOOKS LIKE YOU ARE LOST !</p>
      <p className='text-[1rem]'>The page you are looking for is not available</p>
      <Button text={'Take me back home'} smooth={false} href={''}/>
    </div>
  )
}

export default PageNotFound
