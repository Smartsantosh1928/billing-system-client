import React from 'react'
import img from '../../../public/share-idea.svg'
import { BiLogoFacebook,BiLogoTwitter,BiLogoInstagram,BiLogoWhatsapp,BiCopyright } from "react-icons/bi"
import { PiShootingStarDuotone } from "react-icons/pi";
import {FaXTwitter} from "react-icons/fa6"
import {HeartIcon,StarIcon,ArrowRightIcon} from "@heroicons/react/24/solid";
import {Button}from '@material-tailwind/react'

const features=["High security","User Friendly","Accuracy","Inventory Tracking"];
const Footer = () => {
  return (
    <>

    <div className='flex justify-center '>
       <div className='flex justify-center p-10 px-20  absolute m-7   w-[60%] h-[190px]  bg-white shadow-2xl rounded-2xl '>
          <img src={img} className='h-[100px] w-[150px]' alt="" />
          <div>
          <h1 className='text-lg -px-2 font-medium tracking-wide'>HAVE AN IDEA FOR US TO IMPROVE?</h1>
          <a href="#payment"><p className='py-2 text-sm hover:translate-x-3 cursor-pointer hover:transform hover:duration-300 font-semibold tracking-wide text-orange-700 flex hover:block'>SHARE YOUR IDEA </p></a>
          </div>
          
       </div>
    </div>
   
   <div className='flex items-end justify-evenly w-full h-[210px] mt-32 bg-orange-800'>
 
      <div className='pb-5 '>
          <h1 className='text-sm  tracking-wider font-semibold text-white'>EMAI ID</h1>
          <p className='text-md font-medium text-white tracking-wider cursor-pointer'>rockroshan1114@gmail.com</p>
      </div>

      <div className='pb-5  '>
          <h1 className='text-sm  tracking-wider font-semibold text-white'>SUPPORT</h1>
          <p className='text-lg font-medium text-white tracking-wider cursor-pointer'>+91 1234567890</p>
      </div>
   
      <div className='mb-5'>
        <h1 className='text-sm  tracking-wider font-semibold text-white'>FOLLOW US</h1>
        <div className='flex gap-2 '>
          <div className='h-[35px] w-[35px] bg-white rounded-full flex justify-center items-center cursor-pointer'><BiLogoFacebook className='h-[20px] w-[20px]  text-orange-800 hover:text-black '/></div>
          <div className='h-[35px] w-[35px] bg-white rounded-full flex justify-center items-center cursor-pointer text-sm'><FaXTwitter className='h-[20px] w-[20px]  text-orange-800 hover:text-black'/></div>
          <div className='h-[35px] w-[35px] bg-white rounded-full flex justify-center items-center cursor-pointer'><BiLogoInstagram className='h-[20px] w-[20px]  text-orange-800 hover:text-black'/></div>
          <div className='h-[35px] w-[35px] bg-white rounded-full flex justify-center items-center cursor-pointer'><BiLogoWhatsapp className='h-[20px] w-[20px] text-orange-800 hover:text-black '/></div>
        </div>
      </div>
    
   </div>
   <div className='w-full h-[300px] flex justify-center gap-8 p-6 bg-gray-900'>
    <div className='w-[25%] '>
        <h1 className='text-base font-medium border-b-[1px] pb-2  m-12 text-white '>FEATURES</h1>
  
        <div className='m-12 -mt-5  '>
          {features.map((fe)=>{
             return   <p className='flex pb-1 text-base hover:translate-x-3 cursor-pointer hover:transform hover:duration-300 text-orange-400 '>  <PiShootingStarDuotone className='h-7 w-7 px-1'/>{fe}</p>
          })}
          
        </div>
    </div>
    <div className='w-[25%] bg-gray-300'>

    </div>
    <div className='w-[25%]  bg-gray-300'>
      <h1 className='m-14 text-lg font-medium tracking-wide'></h1>
      
    </div>
    
   </div>
   <div className='w-full flex justify-center items-center h-8 bg-gray-900 border-t-[1px]'>
    <p className='text-white text-sm tracking-widest pr-1 cursor-pointer'>copyright </p><BiCopyright className='text-white'/>
    <p className='text-white text-sm tracking-widest pl-1 pr-1 ' >2024 ZiryTech</p>
    <HeartIcon className='h-4 w-4 hover: text-red-500'/>
   </div>
    </>
  )
}

export default Footer   