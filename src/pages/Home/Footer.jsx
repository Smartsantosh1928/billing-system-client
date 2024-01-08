import React from 'react'
import img from '../../../public/share-idea.svg'
import { BiLogoFacebook,BiLogoTwitter,BiLogoInstagram,BiLogoWhatsapp,BiCopyright } from "react-icons/bi"
import {HeartIcon } from "@heroicons/react/24/solid";

const Footer = () => {
  return (
    <>
    <div className='flex justify-center '>
       <div className='flex justify-center p-10 px-20  absolute m-7   w-[60%] h-[190px]  bg-white shadow-2xl rounded-2xl '>
          <img src={img} className='h-[100px] w-[150px]' alt="" />
          <div>
          <h1 className='text-lg -px-2 font-medium tracking-wide'>HAVE AN IDEA FOR US TO IMPROVE?</h1>
          <p className='py-2 text-sm hover:translate-x-3 hover:transform hover:duration-300 font-semibold tracking-wide text-orange-700'>SHARE YOUR IDEA</p>
          </div>
          
       </div>
    </div>
   
   <div className='flex items-end justify-evenly w-full h-[210px] mt-32 bg-orange-800'>
 
      <div className='pb-5 '>
          <h1 className='text-sm  tracking-wider font-semibold text-white'>EMAI ID</h1>
          <p className='text-md font-medium text-white tracking-wider'>rockroshan1114@gmail.com</p>
      </div>

      <div className='pb-5  '>
          <h1 className='text-sm  tracking-wider font-semibold text-white'>SUPPORT</h1>
          <p className='text-lg font-medium text-white tracking-wider'>1234567890</p>
      </div>
   
      <div className='mb-5'>
        <h1 className='text-sm  tracking-wider font-semibold text-white'>FOLLOW US</h1>
        <div className='flex gap-2 '>
          <div className='h-[35px] w-[35px] bg-white rounded-full flex justify-center items-center'><BiLogoFacebook className='h-[20px] w-[20px]  text-orange-800 hover:text-black '/></div>
          <div className='h-[35px] w-[35px] bg-white rounded-full flex justify-center items-center'><BiLogoTwitter className='h-[20px] w-[20px]  text-orange-800 hover:text-black'/></div>
          <div className='h-[35px] w-[35px] bg-white rounded-full flex justify-center items-center'><BiLogoInstagram className='h-[20px] w-[20px]  text-orange-800 hover:text-black'/></div>
          <div className='h-[35px] w-[35px] bg-white rounded-full flex justify-center items-center'><BiLogoWhatsapp className='h-[20px] w-[20px] text-orange-800 hover:text-black '/></div>
        </div>
      </div>
    
   </div>
   <div className='w-full flex justify-center items-center h-8 bg-black'>
    <p className='text-white text-sm tracking-widest pr-1'>copyrigth </p><BiCopyright className='text-white'/>
    <p className='text-white text-sm tracking-widest pl-1 pr-1'>2024 ZiryTech</p>
    <HeartIcon className='h-4 w-4 hover: text-red-500'/>
   </div>
    </>
  )
}

export default Footer   