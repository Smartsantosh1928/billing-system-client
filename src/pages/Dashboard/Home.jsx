import React from 'react'

export function Home() {
  return (
    <div className='flex gap-5 font-pop '>
      <div className='relative h-[80px] w-[300px] rounded-xl bg-gray-200 shadow-xl'>
        <h1 className='absolute bottom-0 left-0 mb-2 flex ml-2 ' >Total Products</h1>
      </div>
      <div className='relative h-[80px] w-[300px] rounded-xl bg-red-200 shadow-xl'>
        <h1 className='absolute bottom-0 left-0 mb-2 flex ml-2 ' >Low Stocks</h1>
      </div>
      <div className='relative h-[80px] w-[300px] rounded-xl bg-blue-300 shadow-xl'>
        <h1 className='absolute bottom-0 left-0 mb-2 flex ml-2 ' >Total Customers</h1>
      </div>
      <div className='relative h-[80px] w-[300px] rounded-xl bg-green-400 shadow-xl'>
        <h1 className='absolute bottom-0 left-0 mb-2 flex ml-2 ' >Total Revenue</h1>
      </div>
    </div>
  )
}

export default Home