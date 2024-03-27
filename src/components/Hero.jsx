import React from 'react'
import { detail } from '../constants'


import { grandpa } from '../assets'

const Hero = () => {
  return (
    <section className='relative w-full h-screen mx-auto'>
      <div className="sm:px-16 px-6 absolute inset-0 max-w-7xl mx-auto flex flex-col lg:flex-row items-center justify-end gap-12">
        <div>
            <h1 className='text-white font-sans lg:text-[80px] sm:text-[60px] xs:text-[50px] text-[40px] lg:leading-[98px] mt-2'>
              {detail.name}
            </h1>
            <p className='text-white font-sans lg:text-[30px] sm:text-[26px] xs:text-[20px] text-[16px] lg:leading-[40px]'> 
              🕯 {detail.birth} - {detail.death} 
            </p>
        </div>
        <div className='flex items-end justify-end w-full md:w-10/12 lg:w-7/12'>
            <img src={grandpa} alt='爷爷照片' className='w-max items-end '/>
        </div>
      </div>

    </section>
  )
}

export default Hero