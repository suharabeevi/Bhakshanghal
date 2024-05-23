import React from 'react'


function HeaderNav() {
  return (
   <div>
    <header><div className='bg-black w-full h-7 font-normal text-end text-white'>English</div>

  
  <nav
  class="relative h-24 flex w-full flex-wrap items-center justify-between bg-zinc-50 py-2 shadow-dark-mild dark:bg-neutral-700 lg:py-4">
  <div class="flex w-full flex-wrap items-center justify-between px-3">
    <span class="ms-2 text-xl text-black dark:text-white ">

         <img src="https://res.cloudinary.com/dpgbodkae/image/upload/v1711122599/64480603-8980-4278-bb9a-5b2ffdb5925e_1711116791789477156_hlyhro.png" alt="" className='h-20 pt-2' /> 

      </span>
    <div class="ms-5 flex w-[30%] items-center justify-between"> 
    <ul class="flex">
  
  <li class="mr-6">
    <button class=" pl-10 text-blue-500 hover:text-blue-800 " href="#">Link</button>
  </li>
  
  <li class="mr-6">
    <button class="text-blue-500 hover:text-blue-800" href="#">Disabled</button>
  </li>
</ul>
    </div>

      <input
        type="search"
        class=" relative m-0 block min-w-0 flex-auto rounded border border-solid border-secondary-500 bg-transparent bg-clip-padding px-1 py-1.5 text-base font-normal text-surface transition duration-300 ease-in-out focus:border-primary focus:text-gray-700 focus:shadow-inset focus:outline-none motion-reduce:transition-none dark:border-white/10 dark:bg-body-dark dark:text-white dark:placeholder:text-neutral-300 dark:autofill:shadow-autofill"
        placeholder="Search"
        aria-label="Search"
        aria-describedby="button-addon2" />

      
      <span
        class="flex items-center whitespace-nowrap rounded px-3 py-1.5 text-center text-base font-normal text-gray-600 dark:text-white [&>svg]:w-5"
        id="basic-addon2">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 20 20"
          fill="currentColor">
          <path
            fill-rule="evenodd"
            d="M9 3.5a5.5 5.5 0 100 11 5.5 5.5 0 000-11zM2 9a7 7 0 1112.452 4.391l3.328 3.329a.75.75 0 11-1.06 1.06l-3.329-3.328A7 7 0 012 9z"
            clip-rule="evenodd" />
        </svg>
      </span>
    </div>
  
</nav>


{/* <hr className="my-5 h-0.5 border-t-0 bg-neutral-100 dark:bg-black/10" /> */}
<div className=''>
</div>
</header>

</div>
   
  )
}

export default HeaderNav
