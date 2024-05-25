import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {faHeart,faCartShopping} from '@fortawesome/free-solid-svg-icons'


function HeaderNav() {
  return (
    <div>
      <header>
        <div className='bg-black w-full h-5 font-normal text-end text-white'>
          English
        </div>

        <nav className="relative h-24 flex w-full flex-wrap items-center justify-between shadow-dark-mild dark:bg-neutral-700">
          <img
            src="https://res.cloudinary.com/dpgbodkae/image/upload/v1711122599/64480603-8980-4278-bb9a-5b2ffdb5925e_1711116791789477156_hlyhro.png"
            alt=""
            className='h-20 border-r-2 border-white-800'
          />
            <input
              type="search"
              className="  flex items-center absolute m-72  pl-5 w-96 rounded border border-solid border-secondary-500 bg-transparent bg-clip-padding px-1 py-1.5 text-base font-normal text-surface transition duration-300 ease-in-out focus:border-primary focus:text-gray-700 focus:shadow-inset focus:outline-none motion-reduce:transition-none dark:border-white/10 dark:bg-body-dark dark:text-white dark:placeholder:text-neutral-300"

              placeholder="Search"
              aria-label="Search"
              aria-describedby="button-addon2"
            />
             <div className>
            <button class="bg-red-500 hover:bg-red-400 text-white font-bold py-2 px-4  rounded">Login</button>
            <div className="inline-block ml-32 space-x-6 p-5">
            <FontAwesomeIcon icon={faHeart} size="2xl" className='cursor-pointer' />     
            <FontAwesomeIcon icon={faCartShopping} size="2xl" className='cursor-pointer' />       </div>
            {/* <FontAwesomeIcon icon={faEnvelope} /> */}
        </div>
            {/* <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
              className="size-6 inline"
            >
              <path strokeLinecap="round" strokeLinejoin="round" d="m21 21-5.197-5.197m0 0A7.5 7.5 0 1 0 5.196 5.196a7.5 7.5 0 0 0 10.607 10.607Z" />
            </svg>
           */}
        </nav>

        {/* <hr className="my-5 h-0.5 border-t-0 bg-neutral-100 dark:bg-black/10" /> */}
        
      </header>
    </div>
  );
}

export default HeaderNav;
