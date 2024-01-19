import React from 'react'
import { CheckCircleIcon,ComputerDesktopIcon,SquaresPlusIcon,CalendarDaysIcon } from "@heroicons/react/24/solid";

const Payment = () => {
  return (
    <>
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
              <h1 className='text-3xl pl-1 pr-1 font-semibold'>199.00</h1>
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
              <h1 className='text-3xl pl-1 pr-1 font-semibold'>1,999.00</h1>
              <span className='pt-[10px]'>/yr</span>
            </div>
            <button className='h-10 w-44 bg-blue-300 rounded-2xl text-white hover:text-black text-lg hover:border-2 transform duration-300 hover:bg-transparent hover:border-blue-300 tracking-wider'>Pruchase</button>
          </div>
          
      </div>
    </div>
    </>
  )
}

export default Payment
