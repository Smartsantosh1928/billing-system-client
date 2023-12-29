import {
  Card,
  Input,
  Checkbox,
  Button,
  Typography,
} from "@material-tailwind/react";
import React, { useEffect } from 'react'
import { useState } from "react";

export function Bill() {

  const [formData, setFormData] = useState({pname:''});
  const [details,setDetails] = useState([]);

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };
 
 useEffect(()=>{
  fetch('http://localhost:3000/bill/new-bill',{
    method: "GET"
  })
  .then(res=>res.json())
  .then(data=>setDetails(data.Products))
  .catch(err=>console.log(err))
 },[])
 console.log(details);
  return (
    <div className=''>
      <Card color="transparent" shadow={false}>
        <div className="flex justify-center items-center w-full flex-col" >
          <Typography variant="h4" color="blue">
            Bill!!!
          </Typography>
          <Typography color="gray" className="mt-1 font-normal">
            Nice to meet you! Enter Bill details to get the bill.
          </Typography>
        </div>
    <div className="flex justify-center">
      <form className="mt-8 mb-2 w-80 max-w-screen-lg sm:w-96" >
        <div className="mb-1 flex flex-col gap-6">
          <Input name="pname" label="Product Name" onChange={handleChange} color="blue" />
          <Input name="quantity" label="Quantity" onChange={handleChange} color="blue" />
        </div>
        <div className="flex justify-center items-center" >
        <Button className="mt-6 w-80" color="black" fullWidth>
            Add
        </Button>
      </div>
      </form>
    </div>
    </Card>
    </div>
  )
}

export default Bill