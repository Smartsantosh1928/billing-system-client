import React from 'react'
import {CheckIcon } from "@heroicons/react/24/solid";
import img3 from "../../../public/bill.png"
import img4 from "../../../public/add.png"
import dash from "../../../public/dashboard.png"
import bill from "../../../public/billpage.png"
import temp from "../../../public/billtemp.png"
import {Button}from '@material-tailwind/react'


const Features = () => {
  return (
    <>
    <div className='flex flex-col justify-center items-center p-10'>
      <h1 className='text-3xl font-semibold text-blue-300 md:pb-4'>All-in-one small business billing, invoicing, and accounting software</h1>
      {/* <button className='m-5 h-10 w-44 bg-blue-300 rounded-sm text-white hover:text-black text-lg hover:border-2 transform duration-300 hover:bg-transparent hover:border-blue-300'>Explore</button> */}
      <Button variant='gradient' className=''>Explore</Button>
    </div>

    <div className='flex h-full w-full'>
      <div className='pt-24  justify-center w-[20%] h-full items-center m-20  '>
          <h1 className='text-xl font-semibold text-blue-400'>Dashboard</h1>
          <p className='text-base text-justify text-gray-600'>This is your user friendly and very convenient dashboard.</p>
        </div>

      <div className='w-[50%] h-96 ml-40  p-5 border-2 shadow-lg m-10 flex'> 
        <img src={dash} className='h-full w-full' alt="" /> 
      </div>
    </div>
    <div className='flex h-full w-full'>

      <div className='w-[50%] h-96  p-5 border-2 shadow-lg m-10 flex'> 
        <img src={img4} className='h-full w-full' alt="" />   
      </div>
      <div className=' pt-24 justify-center w-[20%] h-full items-center m-20 '>
          <h1 className='text-xl font-semibold text-blue-400'>Add products</h1>
          <p className='text-base text-justify text-gray-600'>Add your products with convenient image and use it for billing.</p>
        </div>
    </div>
    <div className='flex h-full w-full'>

      <div className=' pt-24 justify-center w-[25%] h-full items-center m-20 '>
          <h1 className='text-xl font-semibold text-blue-400'>Billing Page</h1>
          <p className='text-base text-justify text-gray-600'>Here you can easily make a bill and we added a list for select the product from database of products.</p>
        </div>
      <div className='w-[50%] h-96  p-5 border-2 shadow-lg m-10 flex'> 
        <img src={bill} className='h-full w-full' alt="" />  
      </div>
    </div>
    <div className='flex h-full w-full'>

      <div className='w-[50%] h-96  p-5 border-2 shadow-lg m-10 flex'> 
        <img src={temp} className='h-full w-full' alt="" />
      </div>
      <div className=' pt-24 justify-center w-[25%] h-full items-center m-20 '>
          <h1 className='text-xl font-semibold text-blue-400'>Billing Template</h1>
          <p className='text-base text-justify text-gray-600'>Here our product bill template.</p>
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
              <a href="#features" className='scroll-smooth transform duration-300' >
              {/* <button className='m-5 h-10 w-44 bg-blue-300 rounded-sm text-white hover:text-black text-lg hover:border-2 transform duration-300 hover:bg-transparent hover:border-blue-300'>Learn More</button> */}
              <Button variant='gradient' className='m-5 '>Learn More</Button>
              </a>
            </div> 
            <div className='pr-5'>
              <img className='h-[190px] w-[260px]' src={img3} alt="" />
            </div> 
          </div>
        </div>
    </div>
    </>
  )
}

export default Features
