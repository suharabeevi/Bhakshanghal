import React from 'react'
import { Ripple, Input, initTWE } from "tw-elements";
initTWE({ Ripple, Input });


function Register() {
  return (
    <div>
       <div className="flex flex-row">
      <div className="bg-slate-50"></div>
      <img src="https://res.cloudinary.com/dpgbodkae/image/upload/v1711337388/Side_Image_in21s6.png" alt="" className="w-1/2 h-1/2 mt-8" />
      
      <div className="mx-auto block max-w-sm rounded-lg dark:bg-surface-dark mt-16 w-96 h-97">
        {/* <h2 className="text-center text-2xl font-light mt-10 ml-19">Create an Account</h2> */}
      <div
  class="block max-w-sm rounded-lg bg-white p-6 shadow-[0_2px_15px_-3px_rgba(0,0,0,0.07),0_10px_20px_-2px_rgba(0,0,0,0.04)] dark:bg-neutral-700 ">
  <form>
    
    <div class="relative mb-6" data-twe-input-wrapper-init>
      <input
        type="email"
        class="peer block min-h-[auto] w-full rounded border-0 bg-transparent px-3 py-[0.32rem] leading-[1.6] outline-none transition-all duration-200 ease-linear focus:placeholder:opacity-100 data-[twe-input-state-active]:placeholder:opacity-100 motion-reduce:transition-none dark:text-neutral-200 dark:placeholder:text-neutral-200 dark:autofill:shadow-autofill [&:not([data-twe-input-placeholder-active])]:placeholder:opacity-0"
        id="exampleInputEmail2"
        aria-describedby="emailHelp"
        placeholder="Enter email" />
      <label
        for="exampleInputEmail2"
        class="pointer-events-none absolute left-3 top-0 mb-0 max-w-[90%] origin-[0_0] truncate pt-[0.37rem] leading-[1.6] text-neutral-500 transition-all duration-200 ease-out peer-focus:-translate-y-[0.9rem] peer-focus:scale-[0.8] peer-focus:text-primary peer-data-[twe-input-state-active]:-translate-y-[0.9rem] peer-data-[twe-input-state-active]:scale-[0.8] motion-reduce:transition-none dark:text-neutral-200 dark:peer-focus:text-primary"
        >Email address</label
      >
    </div>

   
    <div class="relative mb-6" data-twe-input-wrapper-init>
      <input
        type="password"
        class="peer block min-h-[auto] w-full rounded border-0 bg-transparent px-3 py-[0.32rem] leading-[1.6] outline-none transition-all duration-200 ease-linear focus:placeholder:opacity-100 data-[twe-input-state-active]:placeholder:opacity-100 motion-reduce:transition-none dark:text-neutral-200 dark:placeholder:text-neutral-200 dark:autofill:shadow-autofill [&:not([data-twe-input-placeholder-active])]:placeholder:opacity-0"
        id="exampleInputPassword2"
        placeholder="Password" />
      <label
        for="exampleInputPassword2"
        class="pointer-events-none absolute left-3 top-0 mb-0 max-w-[90%] origin-[0_0] truncate pt-[0.37rem] leading-[1.6] text-neutral-500 transition-all duration-200 ease-out peer-focus:-translate-y-[0.9rem] peer-focus:scale-[0.8] peer-focus:text-primary peer-data-[twe-input-state-active]:-translate-y-[0.9rem] peer-data-[twe-input-state-active]:scale-[0.8] motion-reduce:transition-none dark:text-neutral-200 dark:peer-focus:text-primary"
        >Password</label
      >
    </div>

    <div class="mb-6 flex items-center justify-between">
      <div class="block min-h-[1.5rem] ps-[1.5rem]">
        <input
          class="relative float-left -ms-[1.5rem] me-[6px] mt-[0.15rem] h-[1.125rem] w-[1.125rem] appearance-none rounded-[0.25rem] border-[0.125rem] border-solid border-neutral-300 outline-none before:pointer-events-none before:absolute before:h-[0.875rem] before:w-[0.875rem] before:scale-0 before:rounded-full before:bg-transparent before:opacity-0 before:shadow-[0px_0px_0px_13px_transparent] before:content-[''] checked:border-primary checked:bg-primary checked:before:opacity-[0.16] checked:after:absolute checked:after:-mt-px checked:after:ms-[0.25rem] checked:after:block checked:after:h-[0.8125rem] checked:after:w-[0.375rem] checked:after:rotate-45 checked:after:border-[0.125rem] checked:after:border-s-0 checked:after:border-t-0 checked:after:border-solid checked:after:border-white checked:after:bg-transparent checked:after:content-[''] hover:cursor-pointer hover:before:opacity-[0.04] hover:before:shadow-[0px_0px_0px_13px_rgba(0,0,0,0.6)] focus:shadow-none focus:transition-[border-color_0.2s] focus:before:scale-100 focus:before:opacity-[0.12] focus:before:shadow-[0px_0px_0px_13px_rgba(0,0,0,0.6)] focus:before:transition-[box-shadow_0.2s,transform_0.2s] focus:after:absolute focus:after:z-[1] focus:after:block focus:after:h-[0.875rem] focus:after:w-[0.875rem] focus:after:rounded-[0.125rem] focus:after:content-[''] checked:focus:before:scale-100 checked:focus:before:shadow-[0px_0px_0px_13px_#3b71ca] checked:focus:before:transition-[box-shadow_0.2s,transform_0.2s] checked:focus:after:-mt-px checked:focus:after:ms-[0.25rem] checked:focus:after:h-[0.8125rem] checked:focus:after:w-[0.375rem] checked:focus:after:rotate-45 checked:focus:after:rounded-none checked:focus:after:border-[0.125rem] checked:focus:after:border-s-0 checked:focus:after:border-t-0 checked:focus:after:border-solid checked:focus:after:border-white checked:focus:after:bg-transparent dark:border-neutral-600 dark:checked:border-primary dark:checked:bg-primary dark:focus:before:shadow-[0px_0px_0px_13px_rgba(255,255,255,0.4)] dark:checked:focus:before:shadow-[0px_0px_0px_13px_#3b71ca]"
          type="checkbox"
          value=""
          id="exampleCheck2" />
        <label
          class="inline-block ps-[0.15rem] hover:cursor-pointer"
          for="exampleCheck2">
          Remember me
        </label>
      </div>

      
      <a
        href="#!"
        class="text-red-600 transition duration-150 ease-in-out hover:text-red-500 focus:text-primary-600 active:text-primary-700 dark:text-primary-400 dark:hover:text-primary-500 dark:focus:text-primary-500 dark:active:text-primary-600"
        >Forgot password?</a
      >
    </div>

   
    <button
      type="submit"
      class="inline-block w-full rounded bg-red-500 px-6 pb-2 pt-2.5 text-xs font-medium uppercase leading-normal text-white shadow-primary-3 transition duration-150 ease-in-out hover:bg-red-300 hover:shadow-primary-2 focus:bg-red-600 focus:shadow-primary-2 focus:outline-none focus:ring-0 active:bg-red-600 active:shadow-primary-2 dark:shadow-black/30 dark:hover:shadow-dark-strong dark:focus:shadow-dark-strong dark:active:shadow-dark-strong"
      data-twe-ripple-init
      data-twe-ripple-color="light">
      Sign in
    </button>

    
    <p class="mt-6 text-center text-neutral-800 dark:text-neutral-200">
      Not a member?
      <a
        href="#!"
        class="text-red-600 transition duration-150 ease-in-out hover:text-red-600 focus:text-red-600 active:text-red-600 dark:text-red-600 dark:hover:text-red-600 dark:focus:text-red-600 dark:active:text-red-600"
        >Register</a
      >
    </p>
  </form>
</div>
      </div>
    </div>
    </div>
    
  )
}

export default Register
