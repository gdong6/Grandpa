import React from 'react'
import { motion } from 'framer-motion'
// import Masonry, {ResponsiveMasonry} from 'react-responsive-masonry';

// import { fadeIn, textVariant } from '../utils/motion'
import { SectionWrapper } from '../hoc';

const Gallery = () => {
    return (
      <div className='pb-48'>
        <motion.div>
          <h2 className="text-transparent text-8xl bg-clip-text bg-gradient-to-r from-purple-400 to-pink-700 font-black md:text-[60px] sm:text-[50px] xs:text-[40px] text-[30px]">
            照片
          </h2>
        </motion.div>

        
  
      </div>
    )
  }

export default SectionWrapper(Gallery, "gallery")