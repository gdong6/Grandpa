import React from 'react'
import { motion } from 'framer-motion'

import { fadeIn, textVariant } from '../utils/motion'
import { SectionWrapper } from '../hoc';

function Footer() {
  return (
    <div className="flex flex-col justify-center items-center pt-20">
      <motion.p 
        variants={fadeIn("","", 0.1, 1)}
      >
        <h1 className='text-amber-200 font-black lg:text-[80px] sm:text-[60px] xs:text-[50px] text-[40px] lg:leading-[98px] mt-2'>
          斯人已逝,<br/> 生者如斯
        </h1>
      </motion.p>
      <h2 className='text-white mt-40'>
        2023年4月23日-龙
      </h2>
    </div>    
  )
}

export default Footer

