import React, { useState } from 'react'
import { motion } from 'framer-motion'
import Masonry, {ResponsiveMasonry} from 'react-responsive-masonry';

import { fadeIn, textVariant } from '../utils/motion'
import { SectionWrapper } from '../hoc';
import { p1,p2,p3,p4,p5,p6,p7,p8,p9,p10,p11,p12,p13,p14,p15,p16,p17,p18 } from '../assets';
const images = [
  p1,
  p2,
  p3,
  p4,
  p5,
  p6,
  p7,
  p8,
  p9,
  p10,
  p11,
  p12,
  p13,
  p14,
  p15,
  p16,
  p17,
  p18,
]
const Gallery = () => {
    const [data, setData] = useState({img: '', i:0})

    const viewImage = (img, i) => {
      setData({img, i})
    }

    const imgAction = (action) => {
      let i = data.i;
      if(action === 'next-img'){
        setData({img: images[i+1], i:i+1});
      }
      if(action === 'prev-img'){
        setData({img: images[i-1], i:i-1});
      }
      if(!action){
        setData({img: '', i:0});
      }
    }

    return (
      <div className='pb-20'>
        <motion.div>
          <h2 className="text-transparent text-8xl bg-clip-text bg-gradient-to-r from-purple-400 to-pink-700 font-black md:text-[60px] sm:text-[50px] xs:text-[40px] text-[30px]">照片</h2>
        </motion.div>
        
        {data.img &&
          <div className='w-screen h-screen fixed top-0 left-0  bg-black/90 flex justify-center items-center overflow-hidden z-10'
          >
            <button 
              className='rounded-full p-3 absolute top-10 right-4 bg-gray-600'
              onClick={() => imgAction()}
            > 
              X 
            </button>
            <button className="z-0 absolute left-10" onClick={() => imgAction('prev-img')}> &lt;上一张 </button>
            <img src={data.img} alt='selectedimage' className='w-auto max-w-[90%] max-h-[90%]'/>
            <button className="z-0 absolute right-10" onClick={() => imgAction('next-img')}> &gt;下一张 </button>
          </div>
        }
  
        <ResponsiveMasonry
          className='my-10'
          columnsCountBreakPoints={{350: 1, 750: 2, 900: 3}}
        >
          <Masonry gutter='10px'>
              {images.map((image, i) => (
                <img 
                  key={i} 
                  src={image}
                  style={{width: "100%", display: "block", cursor: 'pointer'}} 
                  alt='memorialimage' 
                  onClick={() => viewImage(image, i)}
                />
              ))}
          </Masonry>
        </ResponsiveMasonry>
  
      </div>
    )
  }

export default SectionWrapper(Gallery, "gallery")