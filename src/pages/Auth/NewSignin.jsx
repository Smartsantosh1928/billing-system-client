import React from 'react'
import{UserCircleIcon,XMarkIcon} from "@heroicons/react/24/solid";
import google from "../../../public/google.png"
import per from "../../../public/person.svg"

export function NewSignin() {
  return (
   <>
   <div className=' w-full  h-screen flex items-center justify-center '>
          <div className='flex justify-around h-[70%] p-12 rounded-lg w-[60%] shadow-2xl'>
              
               <div className='flex flex-col items-center justify-center h-[380px]  w-[300px] rounded-xl  bg-white shadow-2xl'>  
                    <h1 className='text-orange-400 text-lg text-center font-semibold '>Welcome</h1>
                    <div className=' h-[35%] w-[70%] '>
                         <span className='text-sm text-gray-600'>Email</span>
                         <input type="text" name='email' placeholder='Enter Email' className='text-sm cursor-pointer w-full h-[25px] mb-3 border-[2px]  border-gray-500  rounded-full placeholder:text-sm placeholder:indent-2  indent-2 ' />
                         <span className='text-sm text-gray-600'>Password</span>
                         <input type="text" placeholder='Enter PassWord' className=' cursor-pointer w-full h-[25px] text-sm border-2 border-gray-500  rounded-full placeholder:text-sm placeholder:indent-2 indent-2'/> 
                    </div>
                    <div >
                         <button className=' h-7 w-24 bg-orange-400 rounded-3xl text-sm hover:border-2 font-semibold transform duration-300 hover:bg-transparent hover:border-orange-400' >Login</button> 
                    </div>
                    <div className='flex items-center pl-2 w-[70%] pt-3'>
                         <hr className='w-[40%] border-1 border-gray-500 ' />
                         <p className='px-2 ' >or</p>
                         <hr className='w-[40%] border-1 border-gray-500 ' />
                    </div>
                    <div>
                         <img src={google} className='h-10 w-10 cursor-pointer' alt="" />
                    </div>
                    <div className='flex  w-[70%] '>
                         <p className='text-sm cursor-pointer'>Don't have an account ?</p>
                         <p className='text-sm text-orange-400 hover:text-blue-400 hover:cursor-pointer font-bold px-1' >Signin</p>
                    </div>
                    
               </div>
               <div className='h-[400px] w-[350px] px-4'>
                    <img src={per} className='' alt="" />
               </div>
               <div className='-m-8 pl-10'>
                    <XMarkIcon className='w-8 h-8 cursor-pointer hover:bg-gray-300 transform duration-300 hover:rounded-md p-1' />
               </div>
             
          </div>
   </div>
   </>
  )
}

export default NewSignin