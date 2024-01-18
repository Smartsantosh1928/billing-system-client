import React from 'react'
import{UserIcon } from "@heroicons/react/24/solid";

export function NewLogin() {
  return (
   <>
   <div className='flex justify-center mt-30 pt-24'>
        <div className='flex justify-end h-[50%] p-12 rounded-lg w-[60%] bg-gray-400 '>
             <div className='flex flex-col items-center pt-10 h-[380px]  w-[300px] rounded-xl  bg-white'>
               
                   <h1 className='text-orange-400 text-lg text-center font-semibold '>Welcome</h1>
                   <div className=' h-[30%] w-[70%] '>
                        <input type="text" name='email' placeholder='Enter Email' className='mb-3 border-[2px] mt-7 border-gray-500  active:border-orange-400  rounded-full placeholder:text-sm placeholder:indent-2 active:indent-2' />
                        <input type="text" placeholder='Enter PassWord' className='border-2 border-gray-500  active:border-orange-400  rounded-full placeholder:text-sm placeholder:indent-2 active:indent-2'/> 
                   </div>
                   <button className='mt-4  h-7 w-24 bg-orange-400 rounded-3xl text-sm hover:border-2 font-semibold transform duration-300 hover:bg-transparent hover:border-orange-400' >Submit</button> 
             </div>
             <hr />or<hr />
        </div>
   </div>
   </>
  )
}

export default NewLogin