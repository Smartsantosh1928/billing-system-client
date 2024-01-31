import React,{useState} from 'react'

import {
  Dialog
} from "@material-tailwind/react";

export function UpdateProducts({handleOpen,edit}) {


return (
  <>
    <Dialog open={open} size='xl'  className='bg-transparent shadow-none' handler={handleOpen}>
      <div className='w-full  h-screen flex items-center justify-center '>
        <h1>{edit._id}</h1>
      </div>  
    </Dialog>
  </>
)
}

export default UpdateProducts


