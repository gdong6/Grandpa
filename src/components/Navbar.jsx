import React, { useState } from 'react';
import { Link } from 'react-router-dom';

import { navLinks } from '../constants';

const Navbar = () => {
  const [active, setActive] = useState('');

  return (
    <nav id="navbar" className=' w-full flex items-center p-3 fixed z-20 bg-neutral-700/50 backdrop-blur-md border-b-[0.5px] border-slate-500'>
      <div className='w-full flex justify-between items-center max-w-7xl mx-auto'>
        <Link to="/" className='flex items-center gap-2' onClick={() => { 
            setActive(""); 
            window.scrollTo(0,0);
          }}
        >
            <div className='w-30 '></div>
        </Link>
        <ul className='list-none flex flex-row sm:gap-10 gap-3'>
          {navLinks.map((link) => (
            <li 
              key={link.id} 
              className={`${active === link.title ? "text-white" : "text-zinc-400"} hover:text-white text-[18px] font-medium cursor-pointer`}
              onClick={() => setActive(link.title)}
            >
              <a href={`#${link.id}`}>{link.title}</a>
            </li>
          ))}  
        </ul>
          
      </div>
    </nav>
  )
}

export default Navbar