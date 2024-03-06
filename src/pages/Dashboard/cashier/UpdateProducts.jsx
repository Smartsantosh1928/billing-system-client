import React, { useState,useEffect } from 'react'
import Swal from "sweetalert2";
import {
  Input,
  Typography,
  Button,
  Dialog,
  Switch
} from "@material-tailwind/react";
import api from '../../../utils/Utils';
import { CgAddR } from "react-icons/cg";
 

export function UpdateProducts({handleOpen,edit}) {

  const [details,setDetails] = useState({_id:edit._id,name:edit.name,barcode:edit.barcode,stock:edit.stock,lowStock:edit.lowStock,price:edit.price})
  const handleChange= (e)=>{
    const {name,value}=e.target
    setDetails((prev)=>{
    return {...prev,[name]: value}
  })
  console.log(details); 
  }

  const handleSubmit = (e)=>{
    const update =async () =>{
      try{
        const response = await api.post("/products/update",details)
        if (response.data.success) 
        {
          console.log(response);
          console.log(response.data);
          Swal.fire({
            title: 'Success...!',
            text: response.data.msg,
            icon: 'success',
          });
        } 
        else 
        {
          throw new Error(response.data.msg);
        }
      }
      catch (error) {
        Swal.fire({
          title: 'Error!',
          text: error.message,
          icon: 'error',
        });
      }
    }
    update();
  }

  
return (
  <>
    <Dialog open={open} size='xl'  className='bg-transparent shadow-none' handler={handleOpen}>
      <div className='w-[90%]  h-screen flex flex-col items-center justify-center gap-5'>
      <form className="grid md:grid-cols-2 lg:grid-cols-2 w-[60%] gap-4 sm:grid-cols-1 mb-4">
          <div className="flex flex-col gap-4">
            <Typography variant="h6" color="blue-gray" className="-mb-3">
              Name
            </Typography>
            <Input
              size="md"
              name='name'
              className="clear !border-t-blue-gray-200 focus:!border-t-gray-900"
              value={details.name}
              onChange={handleChange}
              labelProps={{
                className: "before:content-none after:content-none",
              }}
            />
          </div>

          <div className="flex flex-col gap-4">
            <Typography variant="h6" color="blue-gray" className="-mb-3">
              BarCode
            </Typography>
            <Input
              size="lg"
              name='barcode'
              type='number'
              value={details.barcode}
              onChange={handleChange}
              className="clear !border-t-blue-gray-200 focus:!border-t-gray-900 hover:decoration-brown-700"
              labelProps={{
                className: "before:content-none after:content-none",
              }}
            />
          </div>

          <div className="flex flex-col gap-4">
            <Typography variant="h6" color="blue-gray" className="-mb-3">
              Price
            </Typography>
            <Input
              size="lg"
              name='price'
              value={details.price}
              onChange={handleChange}
              type='number'
              className="clear !border-t-blue-gray-200 focus:!border-t-gray-900"
              labelProps={{
                className: "before:content-none after:content-none",
              }}
            />
          </div>

          <div className="flex flex-col gap-4">
            <Typography variant="h6" color="blue-gray" className="-mb-3">
              Stock
            </Typography>
            <Input
              size="lg"
              name='stock'
              type ='number'
              value={details.stock}
              onChange={handleChange}
              className="clear !border-t-blue-gray-200 focus:!border-t-gray-900"
              labelProps={{
                className: "before:content-none after:content-none",
              }}
            />
          </div>

          <div className="flex flex-col gap-4">
            <Typography variant="h6" color="blue-gray" className="-mb-3">
              Low Stock
            </Typography>
            <Input
              size="lg"
              name='lowStock'
              value={details.lowStock}
              onChange={handleChange}
              type='number'
              className="clear !border-t-blue-gray-200 focus:!border-t-gray-900"
              labelProps={{
                className: "before:content-none after:content-none",
              }}
            />
          </div>

          <div className="flex flex-col mt-8 gap-4">
            <Switch
            name='isActive'
            value={details.isActive}
            onChange={handleChange}
              label={
                <Typography
                  variant="small"
                  color="gray"
                  className="clear flex items-center font-normal"
                >
                  <p
                    className="font-medium transition-colors hover:text-gray-900"
                  >
                    Is Active
                  </p>
                </Typography>
              }
            />
          </div>
          </form> 
          <div className="flex flex-col  sm:items-start sm:justify-start sm:w-full md:items-center md:justify-center gap-4 ">
            <Button className="flex items-center justify-center w-60 mb-5 gap-4" onClick={handleSubmit} fullWidth>
              Add Products<CgAddR className='w-4 h-5'/>
            </Button>
          </div>
      </div>  
    </Dialog>
  </>
)
}

export default UpdateProducts


