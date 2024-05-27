import React from 'react'

function GridCard() {
  return (
    
       <>


    <div class="max-w-5xl mx-auto grid grid-cols-2 gap-3 auto-rows-[250px] mt-11">
    <div class="bg-black border-2 rounded-md p-7 row-span-2 ">
    <h4 class=' text-white hover:underline decoration-wavy'>Shop Now </h4>
    
    <img src="https://res.cloudinary.com/dpgbodkae/image/upload/v1711388739/ps5-slim-goedkope-playstation_large_1_pngkee.png" alt="" class='mt-10'/>
    
    
  </div>

    <div class="bg-black border-2 rounded-md p-7">
      <span className='text-white block mt-' >Vishu Sweets</span>
    <span class="inline-block align-baseline text-white break-normal text-xs ">Featured Sweets collection that gives another vibe</span>
    <h4 class=' text-white hover:underline underline-offset-8'>Shop Now </h4>

      <img src="https://res.cloudinary.com/dpgbodkae/image/upload/v1711388733/attractive-woman-wearing-hat-posing-black-background_1_weqwlq.png" class='h-40 ml-40 mb-7' alt="" />
    </div>
    <div class="bg-black border-2 rounded-md p-7 flex">
    <h4 class=' text-white hover:underline underline-offset-8'>Shop Now </h4>
      <img src="https://res.cloudinary.com/dpgbodkae/image/upload/v1711388732/69-694768_amazon-echo-png-clipart-transparent-amazon-echo-png_1_k0kywp.png" alt="" />
      <img src="https://res.cloudinary.com/dpgbodkae/image/upload/v1711388731/652e82cd70aa6522dd785109a455904c_hijylk.png" alt="" />
    </div>
    
  </div>
  
  <div class="flex items-center justify-center mt-20 ">
  <div class="flex flex-wrap gap-64">
    <div className='bg-slate-400  rounded-full p-3'>
    <div class="bg-black border-2 rounded-full p-7 ">
      
    </div>

    </div>
    
    <div className='bg-slate-400  rounded-full p-3'>

    <div class="bg-black border-2 rounded-full p-7 ">
      
    </div>
    </div>
    <div className='bg-slate-400  rounded-full p-3'>

    <div class="bg-black border-2 rounded-full p-7">
      
    </div>
    </div>
  </div>


</div>
<div className='flex items-center justify-center mb-40 '>
  <div className='flex flex-wrap gap-36'>
<h1 className='font-bold'>FREE AND FAST DELIVERY</h1>
<h1 className='font-bold'>FREE AND FAST DELIVERY</h1>
<h1 className='font-bold'>FREE AND FAST DELIVERY</h1>
</div>
</div>


</>

  
    
  )
}

export default GridCard
