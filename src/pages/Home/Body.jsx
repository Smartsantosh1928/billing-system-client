import React from 'react'
import img1 from "../../../public/hero-l.svg"
import img2 from "../../../public/hero-r.svg"
import {Button}from '@material-tailwind/react'
import { ShieldCheckIcon,UserGroupIcon,ShoppingCartIcon,CubeTransparentIcon} from "@heroicons/react/24/solid";


const Body = () => {
  return (
    <>
    <div className='flex flex-col items-center justify-center w-full gap-5 pt-10'>
        <h1 className='text-5xl font-semibold' >Commerce Hub Multi Industry Product</h1>
        <p className='text-lg text-gray-700 w-[60%] text-center gap-3'> Compare our award-winning security products to choose the best for you. Join the 435 million users who trust Our Product to keep them safe.</p>
    </div>
    <div className='w-full flex justify-evenly'>
      <div className='hidden md:block'>
        <img className=''  src={img1} alt="" />
      </div>
      <div className='hidden md:block'>
        <img className=''  src={img2} alt="" />
      </div>
    </div>
    <div className='flex  item-start items-center justify-evenly ml-44 mt-8  h-40 w-[77%] rounded-3xl bg-orange-100'>
      
      <div className='flex items-center'>
         <ShieldCheckIcon className='h-[55px] w-16 text-orange-500 bg-transparent'/>
         <p className='text-xl font-semibold'>High Security</p>
       </div>

       <div className='flex items-center'>
         <UserGroupIcon className='h-[55px] w-16 text-orange-500 bg-transparent'/>
         <p className='text-xl font-semibold'>User Friendly</p>
       </div>

       <div className='flex items-center'>
         <CubeTransparentIcon className='h-[55px] w-16 text-orange-500 bg-transparent'/>
         <p className='text-xl font-semibold'>Accuracy</p>
       </div>

       <div className='flex items-center'>
         <ShoppingCartIcon className='h-[55px] w-16 text-orange-500 bg-transparent'/>
         <p className='text-xl font-semibold'>Inventory Tracking</p>
       </div>

    </div>
    </>
  )
}

export default Body
