import React from 'react'
import { useEffect,useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {faHeart} from '@fortawesome/free-solid-svg-icons'
import GridCard from './card';
const HomePage = () => {
  const [currentImage, setCurrentImage] = useState(0);

  
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
  class="  hover:bg-red-200 max-w-[18rem] rounded-lg bg-white text-surface shadow-secondary-1 dark:bg-surface-dark dark:text-white mt-16 ml-10 w-96">
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
  class="max-w-[18rem] hover:bg-red-200   rounded-lg bg-white text-surface shadow-secondary-1 dark:bg-surface-dark dark:text-white mt-16 ml-10 w-96">
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
  class="max-w-[18rem]  hover:bg-red-200 rounded-lg bg-white text-surface shadow-secondary-1 dark:bg-surface-dark dark:text-white mt-16 ml-10 w-96">
  <div class="relative overflow-hidden bg-cover bg-no-repeat ">
  <FontAwesomeIcon icon={faHeart} className='cursor-pointer ml-3' />    
    <img
      class="align-top ml-10 "
      
      src="https://res.cloudinary.com/dpgbodkae/image/upload/v1711389870/g92-2-500x500_1_jddkpi.png"
      alt="" />
                             

  </div>

  <div class="p-6">
  <button class="bg-black hover:bg-black text-white font-bold py-2 px-4 mt-9 w-full  hover:opacity-75 ">
Added to cart
</button> 
 </div>
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

        <div className='overflow-x-hidden'>
        <div class="flex flex-wrap -mx-6 ml-10 mt-6">
    <div class="box-content m-6 h-30 w-30 p-4 border-4 hover:bg-red-600 cursor-pointer rounded-lg

">
        <img src="https://res.cloudinary.com/dpgbodkae/image/upload/v1711389869/Rectangle_26_dme6yd.png" alt="" class='rounded-full'/>
        Pure Veg
    </div>
    <div class="box-content m-6 h-30 w-30 p-4 border-4 hover:bg-red-600 cursor-pointer rounded-lg

">        <img src="https://res.cloudinary.com/dpgbodkae/image/upload/v1711389869/Rectangle_26_dme6yd.png" alt="" class='rounded-full'/>
    Salt
</div>
    <div class="box-content m-6 h-30 w-30 p-4 border-4 hover:bg-red-600 cursor-pointer rounded-lg

">        <img src="https://res.cloudinary.com/dpgbodkae/image/upload/v1711389869/Rectangle_26_dme6yd.png" alt="" class='rounded-full'/>
    Non-Veg
</div>  
    <div class="box-content m-6 h-30 w-30 p-4 border-4 hover:bg-red-600 cursor-pointer rounded-lg

">        <img src="https://res.cloudinary.com/dpgbodkae/image/upload/v1711389869/Rectangle_26_dme6yd.png" alt="" class='rounded-full'/>
</div>
</div>
</div>

<div>
  <img src="https://res.cloudinary.com/dpgbodkae/image/upload/v1711388169/Frame_600_aqxxff.png" alt="" className='m-10 content-center'/>
</div>
<div className='flex'>
          <span className='bg-red-600 w-6 ml-11 rounded-lg cursor-pointer'></span>
          <h1 className='font-medium	 text-xl ml-5 mt-5 text-red-600 '> Featured</h1>
        </div>
        <div>
          <h1 className='font-medium		 text-5xl ml-10 mt-5'>New Arrivals</h1>
        </div>

        {/* photo collage */}
        {/* <div class="container mx-auto px-5 py-2 lg:px-32 lg:pt-24">
  <div class="-m-1 flex flex-wrap md:-m-2">
    <div class="flex w-1/2 flex-wrap">
      <div class="w-1/2 p-1 md:p-2">
        <img
          alt="gallery"
          class="block h-full w-full rounded-lg object-cover object-center"
          src="https://tecdn.b-cdn.net/img/Photos/Horizontal/Nature/4-col/img%20(70).webp" />
      </div>
      <div class="w-1/2 p-1 md:p-2">
        <img
          alt="gallery"
          class="block h-full w-full rounded-lg object-cover object-center"
          src="https://tecdn.b-cdn.net/img/Photos/Horizontal/Nature/4-col/img%20(72).webp" />
      </div>
      <div class="w-full p-1 md:p-2">
        <img
          alt="gallery"
          class="block h-full w-full rounded-lg object-cover object-center"
          src="https://tecdn.b-cdn.net/img/Photos/Horizontal/Nature/4-col/img%20(73).webp" />
      </div>
    </div>
    <div class="flex w-1/2 flex-wrap">
      <div class="w-full p-1 md:p-2">
        <img
          alt="gallery"
          class="block h-full w-full rounded-lg object-cover object-center"
          src="https://tecdn.b-cdn.net/img/Photos/Horizontal/Nature/4-col/img%20(74).webp" />
      </div>
      <div class="w-1/2 p-1 md:p-2">
        <img
          alt="gallery"
          class="block h-full w-full rounded-lg object-cover object-center"
          src="https://tecdn.b-cdn.net/img/Photos/Horizontal/Nature/4-col/img%20(75).webp" />
      </div>
      <div class="w-1/2 p-1 md:p-2">
        <img
          alt="gallery"
          class="block h-full w-full rounded-lg object-cover object-center"
          src="https://tecdn.b-cdn.net/img/Photos/Horizontal/Nature/4-col/img%20(77).webp" />
      </div>
    </div>
  </div>
</div> */}
<GridCard/>


    </>
  )
}

export default HomePage
