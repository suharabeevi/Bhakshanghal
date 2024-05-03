// import React from 'react'
// // Initialization for ES Users
// import {
//     Ripple,
//     Input,
//     initTWE,
//   } from "tw-elements";
  
//   initTWE({ Ripple, Input });
// function Login() {
//   return (
//     <div class="flex flex-row ...">
//     <div className='bg-slate-50'></div>
//     <img src="https://res.cloudinary.com/dpgbodkae/image/upload/v1711122784/5a7e508b-d571-46df-94d0-badf52ae6288_1711116793709442186_fgl5v2.png" alt="" className='w-1/2 h-1/2 mt-8'/>
   
//     <div class="flex flex-row ...">
//     <h2 class="text-center text-2xl font-bold mt-10 ml-19">Create an Account</h2>

        
//     <div
//   class="mx-auto block max-w-sm rounded-lg bg-white p-6 shadow-4 dark:bg-surface-dark  mt-16 w-96 h-96">
    
//   <form>
//   <div class="relative mb-6" data-twe-input-wrapper-init>
//         <input
//           type="text"
//           class="peer block min-h-[auto] w-full rounded border-0 bg-transparent px-3 py-[0.32rem] leading-[1.6] outline-none transition-all duration-200 ease-linear focus:placeholder:opacity-100 peer-focus:text-primary data-[twe-input-state-active]:placeholder:opacity-100 motion-reduce:transition-none dark:text-white dark:placeholder:text-neutral-300 dark:autofill:shadow-autofill dark:peer-focus:text-primary [&:not([data-twe-input-placeholder-active])]:placeholder:opacity-0"
//           id="exampleInput123"
//           aria-describedby="emailHelp123"
//           placeholder="First name" />
//         <label
//           for="emailHelp123"
//           class="pointer-events-none absolute left-3 top-0 mb-0 max-w-[90%] origin-[0_0] truncate pt-[0.37rem] leading-[1.6] text-neutral-500 transition-all duration-200 ease-out peer-focus:-translate-y-[0.9rem] peer-focus:scale-[0.8] peer-focus:text-primary peer-data-[twe-input-state-active]:-translate-y-[0.9rem] peer-data-[twe-input-state-active]:scale-[0.8] motion-reduce:transition-none dark:text-neutral-300 dark:peer-focus:text-primary"
//           >First name
//         </label>
//          <hr className="my-2 h-0.5 border-t-0 bg-neutral-100 dark:bg-black/10" /> 
//       </div>



//     <div class="relative mb-6" data-twe-input-wrapper-init>
//       <input
//         type="email"
//         class="peer block min-h-[auto] w-full rounded border-0 bg-transparent px-3 py-[0.32rem] leading-[1.6] outline-none transition-all duration-200 ease-linear focus:placeholder:opacity-100 peer-focus:text-primary data-[twe-input-state-active]:placeholder:opacity-100 motion-reduce:transition-none dark:text-white dark:placeholder:text-neutral-300 dark:autofill:shadow-autofill dark:peer-focus:text-primary [&:not([data-twe-input-placeholder-active])]:placeholder:opacity-0"
//         id="exampleInputEmail2"
//         aria-describedby="emailHelp"
//         placeholder="Enter email" />
//       <label
//         for="exampleInputEmail2"
//         class="pointer-events-none absolute left-3 top-0 mb-0 max-w-[90%] origin-[0_0] truncate pt-[0.37rem] leading-[1.6] text-neutral-500 transition-all duration-200 ease-out peer-focus:-translate-y-[0.9rem] peer-focus:scale-[0.8] peer-focus:text-primary peer-data-[twe-input-state-active]:-translate-y-[0.9rem] peer-data-[twe-input-state-active]:scale-[0.8] motion-reduce:transition-none dark:text-neutral-300 dark:peer-focus:text-primary"
//         >Email address</label
//       >
//        <hr className="my-2 h-0.5 border-t-0 bg-neutral-100 dark:bg-black/10" /> 
//     </div>

    
//     <div class="relative mb-6" data-twe-input-wrapper-init>
//       <input
//         type="password"
//         class="peer block min-h-[auto] w-full rounded border-0 bg-transparent px-3 py-[0.32rem] leading-[1.6] outline-none transition-all duration-200 ease-linear focus:placeholder:opacity-100 peer-focus:text-primary data-[twe-input-state-active]:placeholder:opacity-100 motion-reduce:transition-none dark:text-white dark:placeholder:text-neutral-300 dark:autofill:shadow-autofill dark:peer-focus:text-primary [&:not([data-twe-input-placeholder-active])]:placeholder:opacity-0"
//         id="exampleInputPassword2"
//         placeholder="Password" />
//       <label
//         for="exampleInputPassword2"
//         class="pointer-events-none absolute left-3 top-0 mb-0 max-w-[90%] origin-[0_0] truncate pt-[0.37rem] leading-[1.6] text-neutral-500 transition-all duration-200 ease-out peer-focus:-translate-y-[0.9rem] peer-focus:scale-[0.8] peer-focus:text-primary peer-data-[twe-input-state-active]:-translate-y-[0.9rem] peer-data-[twe-input-state-active]:scale-[0.8] motion-reduce:transition-none dark:text-neutral-300 dark:peer-focus:text-primary"
//         >Password</label
//       >
//        <hr className="my-2 h-0.5 border-t-0 bg-neutral-100 dark:bg-black/10" /> 
//     </div>

    
//     <div class="mb-6 flex items-center justify-between">
      

      
//       <a
//         href="#!"
//         class="text-primary focus:outline-none dark:text-primary-400"
//         >Forgot password?</a
//       >
//     </div>

    
//     <button
//       type="submit"
//       class="inline-block w-full rounded bg-red-500 px-6 pb-2 pt-2.5 text-xs font-medium uppercase leading-normal text-white shadow-primary-3 transition duration-150 ease-in-out hover:bg-red-300 hover:shadow-primary-2 focus:bg-primary-accent-300 focus:shadow-primary-2 focus:outline-none focus:ring-0 active:bg-primary-600 active:shadow-primary-2 dark:shadow-black/30 dark:hover:shadow-dark-strong dark:focus:shadow-dark-strong dark:active:shadow-dark-strong"
//       data-twe-ripple-init
//       data-twe-ripple-color="light">
//       Sign in
//     </button>

    
//     <p class="mt-6 text-center">
//       Not a member?
//       <a
//         href="#!"
//         class="text-primary focus:outline-none dark:text-primary-400"
//         >Register</a
//       >
//     </p>
//   </form>
// </div>
// </div>

//     </div>
    
//   )
// }

// export default Login
import React from 'react';
import { Ripple, Input, initTWE } from "tw-elements";

// Initialize TWE
initTWE({ Ripple, Input });

function Login() {
  return (
    <div className="flex flex-row">
      <div className="bg-slate-50"></div>
      <img src="https://res.cloudinary.com/dpgbodkae/image/upload/v1711122784/5a7e508b-d571-46df-94d0-badf52ae6288_1711116793709442186_fgl5v2.png" alt="" className="w-1/2 h-1/2 mt-8" />
      <div className="mx-auto block max-w-sm rounded-lg bg-white p-6 shadow-4 dark:bg-surface-dark mt-16 w-96 h-97">
        <h2 className="text-center text-2xl font-light mt-10 ml-19">Create an Account</h2>
        <form>
  <div class="relative mb-6" data-twe-input-wrapper-init>
    <input
          type="text"
          class="peer block min-h-[auto] w-full rounded border-0 bg-transparent px-3 py-[0.32rem] leading-[1.6] outline-none transition-all duration-200 ease-linear focus:placeholder:opacity-100 peer-focus:text-primary data-[twe-input-state-active]:placeholder:opacity-100 motion-reduce:transition-none dark:text-white dark:placeholder:text-neutral-300 dark:autofill:shadow-autofill dark:peer-focus:text-primary [&:not([data-twe-input-placeholder-active])]:placeholder:opacity-0"
          id="exampleInput123"
          aria-describedby="emailHelp123"
          placeholder="First name" />
        <label
          for="emailHelp123"
          class="pointer-events-none absolute left-3 top-0 mb-0 max-w-[90%] origin-[0_0] truncate pt-[0.37rem] leading-[1.6] text-neutral-500 transition-all duration-200 ease-out peer-focus:-translate-y-[0.9rem] peer-focus:scale-[0.8] peer-focus:text-primary peer-data-[twe-input-state-active]:-translate-y-[0.9rem] peer-data-[twe-input-state-active]:scale-[0.8] motion-reduce:transition-none dark:text-neutral-300 dark:peer-focus:text-primary"
          >First name
        </label>
         <hr className="my-2 h-0.5 border-t-0 bg-neutral-100 dark:bg-black/10" /> 
      </div>



    <div class="relative mb-6" data-twe-input-wrapper-init>
      <input
        type="email"
        class="peer block min-h-[auto] w-full rounded border-0 bg-transparent px-3 py-[0.32rem] leading-[1.6] outline-none transition-all duration-200 ease-linear focus:placeholder:opacity-100 peer-focus:text-primary data-[twe-input-state-active]:placeholder:opacity-100 motion-reduce:transition-none dark:text-white dark:placeholder:text-neutral-300 dark:autofill:shadow-autofill dark:peer-focus:text-primary [&:not([data-twe-input-placeholder-active])]:placeholder:opacity-0"
        id="exampleInputEmail2"
        aria-describedby="emailHelp"
        placeholder="Enter email" />
      <label
        for="exampleInputEmail2"
        class="pointer-events-none absolute left-3 top-0 mb-0 max-w-[90%] origin-[0_0] truncate pt-[0.37rem] leading-[1.6] text-neutral-500 transition-all duration-200 ease-out peer-focus:-translate-y-[0.9rem] peer-focus:scale-[0.8] peer-focus:text-primary peer-data-[twe-input-state-active]:-translate-y-[0.9rem] peer-data-[twe-input-state-active]:scale-[0.8] motion-reduce:transition-none dark:text-neutral-300 dark:peer-focus:text-primary"
        >Email address</label
      >
       <hr className="my-2 h-0.5 border-t-0 bg-neutral-100 dark:bg-black/10" /> 
    </div>

    
    <div class="relative mb-6" data-twe-input-wrapper-init>
      <input
        type="password"
        class="peer block min-h-[auto] w-full rounded border-0 bg-transparent px-3 py-[0.32rem] leading-[1.6] outline-none transition-all duration-200 ease-linear focus:placeholder:opacity-100 peer-focus:text-primary data-[twe-input-state-active]:placeholder:opacity-100 motion-reduce:transition-none dark:text-white dark:placeholder:text-neutral-300 dark:autofill:shadow-autofill dark:peer-focus:text-primary [&:not([data-twe-input-placeholder-active])]:placeholder:opacity-0"
        id="exampleInputPassword2"
        placeholder="Password" />
      <label
        for="exampleInputPassword2"
        class="pointer-events-none absolute left-3 top-0 mb-0 max-w-[90%] origin-[0_0] truncate pt-[0.37rem] leading-[1.6] text-neutral-500 transition-all duration-200 ease-out peer-focus:-translate-y-[0.9rem] peer-focus:scale-[0.8] peer-focus:text-primary peer-data-[twe-input-state-active]:-translate-y-[0.9rem] peer-data-[twe-input-state-active]:scale-[0.8] motion-reduce:transition-none dark:text-neutral-300 dark:peer-focus:text-primary"
        >Password</label
      >
       <hr className="my-2 h-0.5 border-t-0 bg-neutral-100 dark:bg-black/10" /> 
    </div>

    
    <div class="mb-6 flex items-center justify-between">
      

      
      <a
        href="#!"
        class="text-primary focus:outline-none dark:text-primary-400"
        >Forgot password?</a
      >
    </div>

    
    <button
      type="submit"
      class="inline-block w-full rounded bg-red-500 px-6 pb-2 pt-2.5 text-xs font-medium uppercase leading-normal text-white shadow-primary-3 transition duration-150 ease-in-out hover:bg-red-300 hover:shadow-primary-2 focus:bg-primary-accent-300 focus:shadow-primary-2 focus:outline-none focus:ring-0 active:bg-primary-600 active:shadow-primary-2 dark:shadow-black/30 dark:hover:shadow-dark-strong dark:focus:shadow-dark-strong dark:active:shadow-dark-strong"
      data-twe-ripple-init
      data-twe-ripple-color="light">
      Sign in
    </button>
    {/* <p class="mt-6 text-center">
      Not a member?
      <a
        href="#!"
        class="text-primary focus:outline-none dark:text-primary-400"
        >Register</a
      >
    </p> */}
  </form>
      </div>
    </div>
  );
}

export default Login;
