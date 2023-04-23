import React, { useState } from 'react'
import { SectionWrapper } from '../hoc';
import { motion } from 'framer-motion'

import { fadeIn } from '../utils/motion'

function Comment() {
  const [gift, setGift] = useState("🌼");
  return (
    <div className='h-full w-full bg-gray-100 p-20 mb-40 rounded-3xl drop-shadow-xl flex lg:flex-row flex-col justify-center items-center'>
      <motion.p 
        variants={fadeIn("","", 0, 2)}
        className="mt-4 text-zinc-400 text-3xl max-w-3xl leading-[30px]"
      >
        <h1 className='text-b m-3'>送上一份</h1>
      </motion.p>

      <div>
        <button id="dropdownDefaultButton" data-dropdown-toggle="dropdown" class="text-white text-6xl bg-white hover:bg-gray-200 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-2xl text-sm px-4 py-6 text-center inline-flex items-center" type="button"
          
        > 
          {gift} <svg class="w-4 h-4 ml-2" aria-hidden="true" fill="gray" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 9l-7 7-7-7"></path></svg>
        </button>
        <div id="dropdown" class="z-10  hidden fixed bg-white divide-y divide-gray-100 rounded-lg shadow w-44 dark:bg-gray-700">
            <ul class="py-2 text-sm text-gray-700 dark:text-gray-200" >
              <li>
                <a class="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white">🌸</a>
              </li>
              <li>
                <a class="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white">🌼</a>
              </li>
            </ul>
        </div>
      </div>

    </div>
  )
}

export default SectionWrapper(Comment, "comment")