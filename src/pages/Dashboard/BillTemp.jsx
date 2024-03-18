import React from 'react'
import {
    BellAlertIcon
  } from "@heroicons/react/24/outline";
  import {
    Dialog
  } from "@material-tailwind/react";

export const BillTemp = ({handle,data}) => {
  return (
    <>
    <Dialog open={open} size='xl'  className='bg-transparent shadow-none overflow-scroll' handler={handle}>
        <div className='flex flex-col justify-center items-center pt-10 bg-white '>
            <div className='w-[850px] bg-blue-400 shadow-xl rounded-lg flex justify-around items-center'>
                {/* <BellAlertIcon className='text-white h-10 w-10'/> */}
                <h1 className='py-12 text-2xl tracking-wider text-white font-bold'>Invoice</h1>
                <div className='pl-20'>
                    <h1 className='text-xl text-white font-medium'>Company Name</h1>
                    <h1 className='text-md text-white font-medium'>Email</h1>
                    <h1 className='text-md text-white font-medium'>Phone no</h1> 
                </div>
            </div>
            <div className='w-[850px] flex'>
                <div className='w-[850px] pt-5 pl-5'>
                    <h1 className='text-sm font-bold tracking-wider'>BILL TO:</h1>
                    <h1 className='text-md font-bold tracking-wider pt-2 pl-10 text-gray-600'>{data.customerName}</h1>
                    <h1 className='text-md font-bold tracking-wider pl-10 text-gray-600'>{data.city}</h1>
                    <h1 className='text-md font-bold tracking-wider pl-10 text-gray-600'>{data.number}</h1>   
                </div>
                <div className='w-[100px] pt-5'>
                    <h1 className='text-sm font-bold tracking-wider'>Bill No: {data.billno}</h1>
                    <h1 className='text-sm font-bold tracking-wider pt-5'>Date: {data.createdAt}</h1>
                </div>
            </div>
            <div className='w-[810px] pt-5'>
                <hr className='border border-gray-400'/>
            </div>

            <div className='w-[850px] pt-3'>
                <table className="w-full">
                <thead>
                <tr className="">
                    <th className="text-sm px-4 py-2">NO</th>
                    <th className="text-sm px-4 py-2">PRODUCT NAME</th>
                    <th className="text-sm px-4 py-2">QUANTITY</th>
                    <th className="text-sm px-4 py-2">PRICE</th>
                    <th className="text-sm px-4 py-2">TOTAL PRICE</th>
                </tr>
                </thead>
                <tbody>
                    {data.items.map(({productName,quantity,totalPrice,unitPrice},index)=>{
                        return <tr className="">
                            <th className="text-sm px-4 py-2">{index+1}</th>
                            <th className="text-sm px-4 py-2">{productName}</th>
                            <th className="text-sm px-4 py-2">{quantity}</th>
                            <th className="text-sm px-4 py-2">{unitPrice}</th>
                            <th className="text-sm px-4 py-2">{totalPrice}</th>
                        </tr>
                    })}
                </tbody>
            </table>
            </div>
            <div className='w-[850px] pt-5 pb-2 flex'>
                <div className='w-[460px] text-justify bg-blue-200 p-3 rounded-l-lg'>
                    <h1 className='text-sm font-bold'>NOTICE:</h1>
                    <p className=''>All purchases are final. We regret to inform you that exchanges and refunds are not available.</p>
                </div>
                <div className='w-[450px] bg-blue-400 p-5 rounded-r-lg'>
                    <h1 className='text-2xl text-white font-bold'>TOTAL</h1>
                    <p className='text-xl text-gray-800 tracking-wider'>${data.totalAmount}</p>
                </div>
            </div>
        </div>
    </Dialog>
    </>
  )
}

export default BillTemp