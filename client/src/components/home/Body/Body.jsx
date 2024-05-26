import React from 'react'
import { useEffect,useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {faHeart} from '@fortawesome/free-solid-svg-icons'

const HomePage = () => {
  const [currentImage, setCurrentImage] = useState(0);

  // Array of image URLs
  // const images = [
  //   "https://res.cloudinary.com/dpgbodkae/image/upload/v1711387978/samosa_1_qpbq5i.png",
  //   "https://b.zmtcdn.com/data/o2_assets/69963815381d03505031ca97cc396b871687856789.png",
  //   "https://b.zmtcdn.com/data/o2_assets/da94405b04f6ae6bf64a4e2a01b1b5c11686563732.png"
  //   // Add URLs for other images here
  // ];

  // useEffect(() => {
  //   // Switch to the next image every 3 seconds
  //   const interval = setInterval(() => {
  //     setCurrentImage((prevImage) => (prevImage + 1) % images.length);
  //   }, 7000);

  //   return () => clearInterval(interval);
  // }, [images.length]);




  return (
    <>
    <div className="relative">
      
        <img
          
         src="https://res.cloudinary.com/dpgbodkae/image/upload/v1711387978/samosa_1_qpbq5i.png"
         className='w-full'
         
        />
        <div className='flex'>
        <span className='bg-red-600 w-6 ml-11  mt-3 rounded-lg cursor-pointer'></span>

  <h1 className='font-medium	 text-xl ml-5 mt-5 text-red-600 '> Today's</h1>
</div>
<div>
  <h1 className='font-medium		 text-5xl ml-10 mt-5'>Flash Sales</h1>
</div>

      <div className='flex'>
<div
  class="max-w-[18rem] rounded-lg bg-white text-surface shadow-secondary-1 dark:bg-surface-dark dark:text-white mt-16 ml-10 w-96">
  <div class="relative overflow-hidden bg-cover bg-no-repeat ">
  <FontAwesomeIcon icon={faHeart} className='cursor-pointer ml-3' />    
    <img
      class="align-top ml-10"
      
      src="https://res.cloudinary.com/dpgbodkae/image/upload/v1711389870/g92-2-500x500_1_jddkpi.png"
      alt="" />
                             

  </div>

  <div class="p-6">
  <button class="bg-black hover:bg-black text-white font-bold py-2 px-4 mt-9 w-full  hover:opacity-75 ">
  Added to cart

</button>  </div>
</div>

<div
  class="max-w-[18rem] rounded-lg bg-white text-surface shadow-secondary-1 dark:bg-surface-dark dark:text-white mt-16 ml-10 w-96">
  <div class="relative overflow-hidden bg-cover bg-no-repeat ">
  <FontAwesomeIcon icon={faHeart} className='cursor-pointer ml-3' />    
    <img
      class="align-top ml-10"
      
      src="https://res.cloudinary.com/dpgbodkae/image/upload/v1711389870/g92-2-500x500_1_jddkpi.png"
      alt="" />
                             

  </div>

  <div class="p-6">
  <button class="bg-black hover:bg-black text-white font-bold py-2 px-4 mt-9 w-full  hover:opacity-75 ">
  Added to cart

</button>  </div>
</div>
<div
  class="max-w-[18rem] rounded-lg bg-white text-surface shadow-secondary-1 dark:bg-surface-dark dark:text-white mt-16 ml-10 w-96">
  <div class="relative overflow-hidden bg-cover bg-no-repeat ">
  <FontAwesomeIcon icon={faHeart} className='cursor-pointer ml-3' />    
    <img
      class="align-top ml-10"
      
      src="https://res.cloudinary.com/dpgbodkae/image/upload/v1711389870/g92-2-500x500_1_jddkpi.png"
      alt="" />
                             

  </div>

  <div class="p-6">
  <button class="bg-black hover:bg-black text-white font-bold py-2 px-4 mt-9 w-full  hover:opacity-75 ">
Added to cart
</button>  </div>
</div>
</div>
  </div>
  <div class="flex justify-center mt-5">
   <button class="bg-red-600 hover:bg-red-400 text-white font-bold py-2 px-4 border-b-4  border-red-400 hover:border-red-400 rounded-md">
       View Products
   </button>

   
</div>
<hr
  class="my-12 h-px border-t-0 bg-transparent bg-gradient-to-r from-transparent via-neutral-500 to-transparent opacity-25 dark:via-neutral-400" />
   <div className='flex'>
          <span className='bg-red-600 w-6 ml-11 rounded-lg cursor-pointer'></span>
          <h1 className='font-medium	 text-xl ml-5 mt-5 text-red-600 '> This Month</h1>
        </div>
        <div>
          <h1 className='font-medium		 text-5xl ml-10 mt-5'>best selling products</h1>
        </div>
   
    </>
  )
}

export default HomePage
