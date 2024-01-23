import React, { useState,useContext } from 'react'
import{XMarkIcon} from "@heroicons/react/24/solid";
import google from "../../../public/google.png"
import per from "../../../public/person.svg"
import {
  Dialog
} from "@material-tailwind/react";



export function NewSignin({handleOpen}) {
  return (
    <>
      <Dialog size='xl' className='bg-transparent shadow-none' open={open} handler={handleOpen}>
        
      <div className=' w-full  h-screen flex items-center bg-opacity-100  justify-center '>
          <div className='flex justify-around h-[75%] p-20  rounded-lg w-[70%] shadow-2xl bg-white'>
              
               <div className='flex flex-col items-center justify-center h-[400px]  w-[350px] rounded-xl  bg-white shadow-2xl'>  
                    <h1 className='text-orange-400 text-lg text-center font-semibold '>Welcome</h1>
                    <div className=' h-[35%] w-[70%] '>
                         <span className='text-sm text-gray-600'>Email</span>
                         <input type="text" name='email' placeholder='Enter Email' className='text-sm cursor-pointer w-full h-[25px] mb-3 border-[2px]  border-gray-500  rounded-sm placeholder:text-sm placeholder:indent-2  indent-2 ' />
                         <span className='text-sm text-gray-600'>Password</span>
                         <input type="text" placeholder='Enter Password' className=' cursor-pointer w-full mb-3 h-[25px] text-sm border-2 border-gray-500  rounded-sm placeholder:text-sm placeholder:indent-2 indent-2'/>
                         <span className='text-sm text-gray-600'>Company Name</span>
                         <input type="text" placeholder='Enter comapany name' className='mb-3 cursor-pointer w-full h-[25px] text-sm border-2 border-gray-500  rounded-sm placeholder:text-sm placeholder:indent-2 indent-2'/>  
                    </div>
                    <div className='pt-12' >
                         <button className=' h-7 w-24 bg-orange-400 rounded-sm text-sm hover:border-2 font-semibold text-gray-900 transform duration-300 hover:bg-transparent hover:border-orange-400' >Login</button> 
                    </div>
                    <div className='flex items-center pl-2 w-[70%] pt-3'>
                         <hr className='w-[40%] border-1 border-gray-500 ' />
                         <p className='px-2 ' >or</p>
                         <hr className='w-[40%] border-1 border-gray-500 ' />
                    </div>
                    <div>
                         <img src={google} className='h-10 w-10  cursor-pointer' alt="" />
                    </div>
                    <div className='flex  w-[70%] '>
                         <p className='text-sm cursor-pointer'>Don't have an account ?</p>
                         <p className='text-sm text-orange-400 hover:text-blue-400 hover:cursor-pointer font-bold px-1' >Signin</p>
                    </div>
                    
               </div>
               <div className='h-[350px] w-[400px] '>
                    <img src={per} className='pl-1' alt="" />
               </div>
               <div className='-m-8 pl-10'>
                    <button onClick={handleOpen}><XMarkIcon className='w-8 h-8 cursor-pointer hover:bg-gray-300 transform duration-300 hover:rounded-md p-1' /></button>
               </div>
             
          </div>
   </div>
        
        {/* <DialogFooter>
          <Button
            variant="text"
            color="red"
            
            className="mr-1"
          >
            <span>Cancel</span>
          </Button>
          <Button variant="gradient" color="green" onClick={handleOpen}>
            <span>Confirm</span>
          </Button>
        </DialogFooter> */}
      </Dialog>

    </>
  )
}

export default NewSignin








