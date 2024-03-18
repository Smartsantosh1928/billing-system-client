import React, { useState,useEffect } from 'react'
import Swal from "sweetalert2";
import {
  PencilIcon
} from "@heroicons/react/24/outline";
import api from '../../utils/Utils';


export function Profile() {

 const[data,setData]=useState([{}]);
 
 
 useEffect(() => {
  const fetchData = async () => {
    try {
      const response = await api.post("/user/allusers");
      if (response.data) {
        console.log('====================================');
        console.log(response.data.User);
        console.log('====================================');
        setData(response.data.User)
        console.log(data);
      } else {
        throw new Error(response.data.msg);
      }
    } catch (error) {
      Swal.fire({
        title: 'Error!',
        text: error.message,
        icon: 'error',
      });
    }
  };

  fetchData();
}, []);


  return (
    <>
      <h1 className='text-xl mb-10 ml-3'>User Profile</h1>
    <div className='flex gap-20'>
      <div className='flex items-center h-[130px] w-[330px] bg-white shadow-xl rounded-xl '>
          <div className='h-20 w-20 flex justify-center items-center rounded-full  m-4 bg-orange-300'>
            <h1 className='text-2xl '>R</h1>
          </div>
          <div>
            <h1 className='text-xl font-medium '>Roshan David R</h1>
            <p className='text-sm font-medium '>roshan123@gmail.com</p>
          </div>
      </div>
      <div className='flex flex-col  h-[130px] w-[330px] bg-white shadow-xl rounded-xl '>
          <div className='m-7'>
            <h1 className='font-semibold text- tracking-wider'>Company Details</h1>
            <h1 className=' font-medium tracking-wider'>Mannaran company</h1>
            <h1 className=' font-medium tracking-wider'>Admin</h1>
          </div>
      </div>
    </div>



  
    <div className='pb-7 w-[400px] bg-white shadow-xl rounded-xl'>
      <div className='pt-10 flex justify-around m-5'>
        <h1 className='text-xl tracking-wider font-semibold -ml-7'>Account information</h1>
        <span className='flex text-md tracking-wider font-medium '><PencilIcon className='h-5 w-5 cursor-pointer'/></span>
      </div>
        {/* <hr className='border border-black w-10 ml-9 -mt-3' /> */}
      <div className='m-5 flex gap-10 pt-5'> 
        <div className=''>
          <h1 className='pb-2 font-semibold text-md'>Name</h1>
          <h1 className='font-medium text-md'>Roshan David</h1>
          <hr className='w-full border-gray-400 border-2px'/> 
        </div>
        <div>
          <h1 className='pb-2 font-semibold text-md'>Email</h1>
          <h1 className='font-medium text-md'>roshan123@gmail.com</h1>
          <hr className='w-full border-gray-400 border-2px'/> 
        </div>
      </div>

      <div className='m-5 flex gap-10 '> 
        <div className=''>
          <h1 className='pb-2 font-semibold text-md'>Company </h1>
          <h1 className='font-medium text-md'>Mannaran company</h1>
          <hr className='w-full border-gray-400 border-2px'/> 
       </div> 
      </div>
    </div>


    <div className='mt-10 w-[400px] h-[400px] bg-white shadow-2xl rounded-xl '>
        <h1 className='text-xl tracking-wider font-semibold text-center pt-3'>Cashier Info</h1>
        <div className='w-[350px] pl-12 pt-5'>
          <div>
            <h1 className='text-md font-semibold tracking-wider pb-1'>Roshan</h1>
            <hr className='border border-gray-400'/>
          </div>
          <div className='pt-6'>
            <h1 className='text-md font-semibold tracking-wider pb-1'>Roshan</h1>
            <hr className='border border-gray-400'/>
          </div>
          <div className='pt-6'>
            <h1 className='text-md font-semibold tracking-wider pb-1'>Roshan </h1>
            <hr className='border border-gray-400'/>
          </div>
        </div>
    </div>

    </>
  )
}

export default Profile