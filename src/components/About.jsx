import React from 'react'
import { motion } from 'framer-motion'

import { fadeIn } from '../utils/motion'
import { SectionWrapper } from '../hoc';
import { detail } from '../constants';

const About = () => {
  return (
    <div className=''>
      <motion.div>
        <h2 className="blue-text-gradient font-black md:text-[60px] sm:text-[50px] xs:text-[40px] text-[30px]">生平</h2>
      </motion.div>

      <motion.p 
        variants={fadeIn("","", 1, 2)}
        className="mt-4 text-zinc-400 text-[17px] max-w-3xl leading-[30px]"
      >
        出生于{detail.birth}年，享年{detail.death - detail.birth}岁。<br/>
        一些介绍 <br/>
        一些介绍 <br/>
        一些介绍 <br/>
        一些介绍 <br/>
        一些介绍 <br/>
        一些介绍 <br/>
        一些介绍 <br/>
        一些介绍 <br/>
        一些介绍 <br/>
        一些介绍 <br/>
        一些介绍 <br/>
        一些介绍 <br/>
      </motion.p>

    </div>
  )
}

export default SectionWrapper(About, "about")