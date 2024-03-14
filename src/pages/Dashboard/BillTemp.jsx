import React from 'react'
import {
    BellAlertIcon
  } from "@heroicons/react/24/outline";
const BillTemp = () => {
  return (
    <>
    <div className='flex flex-col justify-center items-center pt-10 h-full w-full '>
        <div className='w-[850px] bg-blue-400 shadow-xl rounded-lg flex justify-around items-center'>
            {/* <BellAlertIcon className='text-white h-10 w-10'/> */}
            <h1 className='pt-16 pb-16 text-2xl tracking-wider text-white font-bold'>Invoice</h1>
            <div className='pl-20'>
                <h1 className='text-xl text-white font-medium'>Company Name</h1>
                <h1 className='text-md text-white font-medium'>City</h1>
                <h1 className='text-md text-white font-medium'>Email</h1>
                <h1 className='text-md text-white font-medium'>Phone no</h1> 
            </div>
        </div>
        <div className='w-[850px] flex'>
            <div className='w-[850px] pt-5 pl-5'>
                <h1 className='text-sm font-bold tracking-wider'>BILL TO:</h1>
                <h1 className='text-md font-bold tracking-wider pt-4 text-gray-600'>Customer Name</h1>
                <h1 className='text-md font-bold tracking-wider text-gray-600'>City</h1>
                <h1 className='text-md font-bold tracking-wider text-gray-600'>Phone No</h1>   
            </div>
            <div className='w-[100px] pt-5'>
                <h1 className='text-sm font-bold tracking-wider'>Bill No</h1>
                <h1 className='text-sm font-bold tracking-wider pt-5'>DATE</h1>
            </div>
        </div>
         <div className='w-[810px] pt-5'>
             <hr className='border border-gray-400'/>
         </div>

         <div className='w-[850px] pt-3'>
            <table className="w-full  ">
            <thead>
            <tr className="">
                <th className="text-sm px-4 py-2">NO</th>
                <th className="text-sm px-4 py-2">PRODUCT NAME</th>
                <th className="text-sm px-4 py-2">QUANTITY</th>
                <th className="text-sm px-4 py-2">PRICE</th>
                <th className="text-sm px-4 py-2">TOTAL PRICE</th>
            </tr>
            </thead>
        </table>
         </div>

         <div className='w-[850px] pt-5 pb-2 flex'>
            <div className='w-[460px] text-justify bg-blue-200 p-3 rounded-l-lg'>
                <h1 className='text-sm font-bold'>NOTICE:</h1>
                <p className=''>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Dicta rerum maxime facere, itaque dignissimos ratione consectetur quae! Quisquam  </p>
            </div>
            <div className='w-[450px] bg-blue-400 p-5 rounded-r-lg'>
                <h1 className='text-2xl text-white font-bold'>TOTAL</h1>
                <p className='text-xl tracking-wider'>$0000</p>
            </div>
         </div>
    </div>
    </>
  )
}

export default BillTemp