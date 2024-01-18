import React, { useState } from 'react'
import img1 from "../../../public/hero-l.svg"
import img2 from "../../../public/hero-r.svg"
import img3 from "../../../public/bill.png"
import img4 from "../../../public/add.png"
import { ShieldCheckIcon,UserGroupIcon,ShoppingCartIcon,CubeTransparentIcon,CheckIcon,CheckCircleIcon,ComputerDesktopIcon,SquaresPlusIcon,CalendarDaysIcon } from "@heroicons/react/24/solid";
import Footer from './Footer'

const Home = () => {

    const [visible,Setvisible]=useState(flase);
    const button = 'h-10 w-24 bg-blue-300 rounded-3xl text-lg hover:border-2 transform duration-300 hover:bg-transparent hover:border-blue-300'
  return (
    <>
    <div className=' w-full h-[100px] flex '>
        <div className='flex w-full items-center p-5 gap-2'>
           <span className=' flex  items-center justify-around  w-12 h-12 rounded-full font-bold  text-xl  bg-blue-300'>Z</span>
           <h1 className='text-xl font-extrabold'>Ziry Tech</h1>
        </div>
        <div className='flex w-full justify-end items-center gap-2  pr-5'> 
            <button className={button}>Signin</button>
            <button className={button}>Signup</button>
        </div>
    </div>
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
    <div className='flex flex-col justify-center items-center p-10'>
      <h1 className='text-3xl font-semibold text-blue-300'>All-in-one small business billing, invoicing, and accounting software</h1>
      <button className='m-5 h-10 w-44 bg-blue-300 rounded-sm text-white hover:text-black text-lg hover:border-2 transform duration-300 hover:bg-transparent hover:border-blue-300'>Explore</button>
    </div>

    <div className='flex h-full w-full'>

      <div className='w-[50%] h-96  p-5 border-2 shadow-lg m-10 flex'> 
        <img src={img4} className='h-full w-full' alt="" />
        
      </div>
      <div className='  justify-center w-[20%] h-full items-center m-20 '>
          <h1 className='text-xl font-semibold text-blue-400'>Add products</h1>
          <p className='text-base text-justify text-gray-600'>Add your products with convenient image and use it for billing.</p>
        </div>
    </div>


    <div className='w-full flex justify-center'>
       <div className='h-[300px] w-[900px] rounded-3xl bg-gray-100'>
          <p className='text-lg font-bold py-8 text-center text-orange-600'>Looking for a stand-alone recurring billing solution? Try Our Subscriptions.</p>
          <div className='flex'>
            <div className='w-[70%] flex flex-wrap pl-8'>
              <div className='w-1/2 p-3 flex'>
              <CheckIcon className='w-5 h-5 text-blue-300'/><p className='font-medium ml-2'>Offer plans and add-ons</p>
              </div>
              <div className='w-1/2 p-3   flex'>
              <CheckIcon className='w-5 h-5 text-blue-300'/><p className='font-medium ml-2'>Handle customer subscriptions</p>
              </div>
              <div className='w-full md:w-1/2 p-3 flex'>
              <CheckIcon className='w-5 h-5 text-blue-300'/><p className='font-medium ml-2'>Reduce customer churn</p>
              </div>
              <div className='w-full md:w-1/2 p-3 pr-3 flex'>
              <CheckIcon className='w-5 h-5 text-blue-300'/><p className='font-medium ml-2'>Track subscription metrics</p>
              </div>
              <button className='m-5 h-10 w-44 bg-blue-300 rounded-sm text-white hover:text-black text-lg hover:border-2 transform duration-300 hover:bg-transparent hover:border-blue-300'>Learn More</button>
            </div> 
            <div className='pr-5'>
              <img className='h-[190px] w-[260px]' src={img3} alt="" />
            </div> 
          </div>
        </div>
    </div>
 <section id='payment'>
    <div className='w-full flex items-center justify-evenly p-10'>
      <div className= 'w-[30%] mr-14'>
        <h1 className='text-3xl py-7 px-3 hover:text-blue-400'>Our products</h1>
        <p className='flex text-base py-2 hover:text-blue-400'><CheckCircleIcon className='w-10 text-blue-500 px-2'/>435+ million users</p>
        <p className='flex text-base py-2 hover:text-blue-400'><CheckCircleIcon className='w-10 text-blue-500 px-2'/>Available only for all OS: PC, Mac</p>
        <p className='flex text-base py-2 hover:text-blue-400'><CheckCircleIcon className='w-10 text-blue-500 px-2'/>30-day money-back guarantee</p>
      </div>
      <div className='flex gap-5'>
          <div className='w-80 h-72 flex flex-col items-center justify-center border-2 hover:border-orange-500  gap-9 shadow-xl '>
            <ComputerDesktopIcon className='w-10 text-orange-500'/>
            <h1 className='text-xl'>Free Trail</h1>
            <h1 className='text-3xl font-semibold'>FREE</h1>
            <button className='h-10 w-44 bg-blue-300 rounded-2xl text-white hover:text-black text-lg hover:border-2 transform duration-300 hover:bg-transparent hover:border-blue-300 tracking-wider'>Purchase</button>
          </div>
          <div className='w-80 h-72 flex flex-col items-center justify-center border-2  hover:border-orange-500  gap-6 shadow-xl '>
            <SquaresPlusIcon className='w-10 text-orange-500'/>
            <div className='flex flex-col items-center'>
              <h1 className='text-xl'>Monthly</h1>
              <span className='bg-light-green-500 rounded-lg font-semibold p-1 -tracking-tighter'>Save70%</span>
            </div>
            <div className='flex'>
              <span className='pt-[10px] font-medium'>Rs</span>
              <h1 className='text-3xl pl-1 pr-1 font-semibold'>599.00</h1>
              <span className='pt-[10px]'>/mo</span>
            </div>
            <button className='h-10 w-44 bg-blue-300 rounded-2xl text-white hover:text-black text-lg hover:border-2 transform duration-300 hover:bg-transparent hover:border-blue-300 tracking-wider'>Purchase</button>
          </div>
          <div className='w-80 h-72 flex flex-col items-center justify-center border-2 border-orange-500 gap-6 shadow-xl '>
            <CalendarDaysIcon className='w-10 text-orange-500'/>
            <div className='flex flex-col items-center'>
              <h1 className='text-xl'>Yearly</h1>
              <span className='bg-light-green-500 rounded-lg font-semibold p-1 -tracking-tighter'>Save50%</span>
            </div>
            <div className='flex'>
              <span className='pt-[10px] font-medium'>Rs</span>
              <h1 className='text-3xl pl-1 pr-1 font-semibold'>59,999.00</h1>
              <span className='pt-[10px]'>/yr</span>
            </div>
            <button className='h-10 w-44 bg-blue-300 rounded-2xl text-white hover:text-black text-lg hover:border-2 transform duration-300 hover:bg-transparent hover:border-blue-300 tracking-wider'>Pruchase</button>
          </div>
          
      </div>
    </div>
    </section>
    <Footer/>
    </>
  )
}

export default Home