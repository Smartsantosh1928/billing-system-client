import React, { useState } from 'react'
import {Button}from '@material-tailwind/react'
import { CheckCircleIcon,ComputerDesktopIcon,SquaresPlusIcon,CalendarDaysIcon } from "@heroicons/react/24/solid";
import {loadStripe} from '@stripe/stripe-js'


const Payment = () => {
  const [sessionId,setSessionId] = useState("")
  const secretKey = "sk_test_51Mdm6DSJrdK8idgwzgtWlxXd8HKbSPWnywr7jWhxcEPX7H8xqBADIPSx2Vh93xqtVMvmWWcdDEIPwpWDuMTLJvcZ00qTrhBZPY"
  const  makePayment = async(rs)=>{
    const body ={
      price : rs
    }
    const res = await fetch("http://localhost:3000/payment/create-checkout-session",{
      method: "POST",
      headers:{
        "Content-Type": "application/json",
        "Authorization" : `Bearer ${secretKey}`
      },
      body : JSON.stringify(body)
    })

    const session = await res.json()
    setSessionId(session.id)
    window.location.href = session.paymentLink
  }

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
          <div className='w-80 h-72 flex flex-col items-center justify-center border-2 hover:border-orange-500 gap-3 shadow-xl '>
            <ComputerDesktopIcon className='w-10  text-orange-500'/>
            <h1 className='text-xl'>3Days</h1>
            <div className='flex'>
            <span className='pt-[10px] font-medium'>Rs</span>
            <h1 className='text-3xl pl-1 pr-1 font-semibold'>19.00</h1>
            <span className='pt-[10px]'>/3day</span>

            </div>
            <Button variant='gradient' onClick={()=>makePayment(19)}>Purchase</Button>
            {/* <button className='h-10 w-44 bg-blue-300 rounded-2xl text-white hover:text-black text-lg hover:border-2 transform duration-300 hover:bg-transparent hover:border-blue-300 tracking-wider'>Purchase</button> */}
          </div>
          <div className='w-80 h-72 flex flex-col items-center justify-center border-2  hover:border-orange-500  gap-6 shadow-xl relative overflow-hidden'>
            <SquaresPlusIcon className='w-10 text-orange-500'/>
            <div className='flex flex-col items-center '>
              <h1 className='text-xl'>Monthly</h1>
              <div className='flex items-end justify-end bg-orange-500 w-40 h-40 rounded-full font-bold p-2 -tracking-tighter text-xs absolute -top-20 -left-20 '><span className='-translate-y-6 -translate-x-6'>Save <br /> 70%</span></div>
            </div>
            <div className='flex'>
              <span className='pt-[10px] font-medium'>Rs</span>
              <h1 className='text-3xl pl-1 pr-1 font-semibold'>199.00</h1>
              <span className='pt-[10px]'>/mo</span>
            </div>
            <Button variant='gradient' onClick={()=>makePayment(199)} >Purchase</Button>
            {/* <button className='h-10 w-44 bg-blue-300 rounded-2xl text-white hover:text-black text-lg hover:border-2 transform duration-300 hover:bg-transparent hover:border-blue-300 tracking-wider'>Purchase</button> */}
          </div>
          <div className='w-80 h-72 flex flex-col items-center justify-center border-2 border-orange-500 gap-6 shadow-xl relative overflow-hidden'>
            <CalendarDaysIcon className='w-10 text-orange-500'/>
            <div className='flex flex-col items-center'>
              <h1 className='text-xl'>Yearly</h1>
              <div className='flex items-end justify-end bg-orange-500 w-40 h-40 rounded-full font-bold p-2 -tracking-tighter text-xs absolute -top-20 -left-20 '><span className='-translate-y-6 -translate-x-6'>Save <br /> 50%</span></div>
            </div>
            <div className='flex'>
              <span className='pt-[10px] font-medium'>Rs</span>
              <h1 className='text-3xl pl-1 pr-1 font-semibold'>1,999.00</h1>
              <span className='pt-[10px]'>/yr</span>
            </div>
            <Button variant='gradient' onClick={()=>makePayment(1999)}>Purchase</Button>
            {/* <button className='h-10 w-44 bg-blue-300 rounded-2xl text-white hover:text-black text-lg hover:border-2 transform duration-300 hover:bg-transparent hover:border-blue-300 tracking-wider'>Pruchase</button> */}
          </div>
          
      </div>
    </div>
    </>
  )
}

export default Payment
