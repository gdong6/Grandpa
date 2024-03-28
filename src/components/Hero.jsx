import React from 'react'
import { detail } from '../constants'


import { grandpa } from '../assets'

const Hero = () => {
  return (
    <div className='flex w-full h-screen  justify-center'>
      <div className="flex sm:px-0 max-w-7xl flex-col lg:flex-row justify-end">
        <div className='flex-col m-auto '>
            <h1 className='text-white font-sans lg:text-[80px] sm:text-[60px] xs:text-[50px] text-[50px] lg:leading-[98px] mt-2'>
              {detail.name}
            </h1>
            <p className='text-white font-sans lg:text-[30px] sm:text-[26px] xs:text-[20px] text-[20px] lg:leading-[40px]'> 
              🕯 {detail.birth} - {detail.death} 
            </p>
        </div>
        <div className='flex w-full md:w-10/12 lg:w-8/12'>
            <img src={grandpa} alt='爷爷照片' className='object-scale-down object-bottom'/>
        </div>
      </div>

    </div>
  )
}

export default Hero