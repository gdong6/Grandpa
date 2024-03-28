import React from 'react'
import { motion } from 'framer-motion'

function Footer() {
  return (
    <div className="flex flex-col justify-center items-center pt-20">
      <motion.div 
        
      >
        <h1 className='text-amber-200 font-black lg:text-[80px] sm:text-[60px] xs:text-[50px] text-[40px] lg:leading-[98px] mt-2'>
          斯人已逝,<br/> 生者如斯
        </h1>
      </motion.div>
      <h2 className='text-white mt-40'>
        2024年4月4日-龙 Build with React.js, Tailwind CSS, framer motion
      </h2>
    </div>    
  )
}

export default Footer

