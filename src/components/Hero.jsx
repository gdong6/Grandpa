import React from 'react'
import { styles } from '../styles'
import { detail } from '../constants'


import { grandpa } from '../assets'

const Hero = () => {
  return (
    <section className='relative w-full h-screen mx-auto'>
      <div className="sm:px-16 px-6 absolute inset-0 max-w-7xl mx-auto flex flex-col lg:flex-row items-center justify-end gap-12">
        {/* big name */}
        <div>
            <h1 className={`${styles.heroHeadText} text-white`}>{detail.name}</h1>
            <p className={`${styles.heroSubText} text-white-100 mt-2`}> 🕯 {detail.birth} - {detail.death} </p>
        </div>
        <div className='flex items-end justify-end w-full md:w-10/12 lg:w-7/12'>
            <img src={grandpa} alt='爷爷照片' className='w-max items-end '/>
        </div>
      </div>

    </section>
  )
}

export default Hero