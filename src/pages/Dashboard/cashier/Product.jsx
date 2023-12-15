import React,{useState} from 'react'
import {
  Input,
  Button,
  Typography,
  Switch
} from "@material-tailwind/react";
import { CgAddR } from "react-icons/cg";
import { RxUpload } from "react-icons/rx";
import Swal from "sweetalert2";
import { useNavigate } from 'react-router-dom';


 

export function Product() {


  const [imageUrl, setImageUrl] = useState(null);
  const [details , setDetails] = useState({name:"",barcode:0,measurement:"",description:"",price:0,stock:0,lowStock:0,color:""})
  const [active,setActive] = useState(false);
  const [imagedata,setImageData] = useState(null);
  const [imageVal,setImageVal] = useState("");
  const navigate = useNavigate();


  

  const handleFileUpload = (event) => {
    const file = event.target.files[0];
    const imagedata = new FormData();
    imagedata.append('file',file);
    setImageData(imagedata)
    console.log(imagedata)
    if (file && file.type.startsWith('image/')) {
      const reader = new FileReader();
      reader.onload = () => {
        setImageUrl(reader.result);
      };
      reader.readAsDataURL(file);
    } else {
      alert('Please select a valid image file.');
    }
  };


  const handleChange =(e)=>{
    const {name,value}=e.target
    if(name=="isActive"){
      setDetails((prev)=>{
        return {...prev,"isActive": !active}
      })
      setActive(!active);
    }
    else if(imagedata!=null)
    {
      setDetails((prev)=>{
          return{...prev,"file":imagedata}
      })
    }
    else
    setDetails((prev)=>{
      return {...prev,[name]: value}
    })
    console.log(details)
  };


  // const handleSubmit=(e)=>{
  //   e.preventDefault();
  //   let imageStr = ""
  //   fetch("http://localhost:3000/files/upload",{
  //     method: "POST",
  //     body: imagedata
  //   }).then(res => res.json())
  //   .then(data => {
  //     if(data.success){
  //      setImageVal(data.fileName)
  //      imageStr = data.fileName
  //      console.log(imageStr);
  //     }
  //     else{
  //       Swal.fire({
  //         title: 'Error!',
  //         text: data.msg,
  //         icon: 'error',
  //       })
  //     }
  //   }).catch(err => {
  //     Swal.fire({
  //       title: 'Error!',
  //         text: err,
  //         icon: 'error',
  //     })
  //   })

  //   const product ={...details,image:imageStr};
  //   console.log(product);
  //   fetch("http://localhost:3000/products/add",{
  //     method: "POST",
  //     headers: {
  //       "Content-Type": "application/json"
  //     },
  //     body: JSON.stringify(product)
  //   }).then(res => res.json())
  //   .then(data => {
  //     if(data.success){
  //       Swal.fire({
  //         title: 'Success...!',
  //         text: data.msg,
  //         icon: 'success',
  //       })
  //     }
  //     else{
  //       Swal.fire({
  //         title: 'Error!',
  //         text: data.msg,
  //         icon: 'error',
  //       })
  //     }
  //   }).catch(err => {
  //     Swal.fire({
  //       title: 'Error!',
  //         text: err,
  //         icon: 'error',
  //     })
  //   })
  // }

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      let imageStr = "";
      const uploadResponse = await fetch("http://localhost:3000/files/upload", {
        method: "POST",
        body: imagedata,
      });
      const uploadData = await uploadResponse.json();
  
      if (uploadData.success) {
        setImageVal(uploadData.fileName);
        imageStr = uploadData.fileName;
        console.log(imageStr);
      } else {
        throw new Error(uploadData.msg);
      }
  
      const product = { ...details, image: imageStr };
      console.log(product);
  
      const addProductResponse = await fetch("http://localhost:3000/products/add", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(product),
      });
      const addProductData = await addProductResponse.json();
  
      if (addProductData.success) {
        Swal.fire({
          title: 'Success...!',
          text: addProductData.msg,
          icon: 'success',
        });
      } else {
        throw new Error(addProductData.msg);
      }
    } catch (err) {
      Swal.fire({
        title: 'Error!',
        text: err.message,
        icon: 'error',
      });
    }
  };
  



return (
  <>
    <div className="flex flex-col gap-4">
      <div className="flex flex-col items-center justify-center gap-4 "> 
      <Typography variant="h4" color="blue-gray">
        Add Products
      </Typography>
      <Typography color="gray" className="mt-1">
        Nice to meet you! Enter your Product details
      </Typography>
      </div>

        <form className="grid md:grid-cols-2 lg:grid-cols-3 w-full gap-4 sm:grid-cols-1 mb-4">
          <div className="flex flex-col gap-4">
            <Typography variant="h6" color="blue-gray" className="-mb-3">
              Name
            </Typography>
            <Input
              size="md"
              name='name'
              onChange={handleChange}
              className="!border-t-blue-gray-200 focus:!border-t-gray-900"
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
              onChange={handleChange}
              className=" !border-t-blue-gray-200 focus:!border-t-gray-900"
              labelProps={{
                className: "before:content-none after:content-none",
              }}
            />
          </div>

          <div className="flex flex-col gap-4">
            <Typography variant="h6" color="blue-gray" className="-mb-3">
              Measurement
            </Typography>
            <Input
              size="lg"
              name='measurement'
              onChange={handleChange}
              className=" !border-t-blue-gray-200 focus:!border-t-gray-900"
              labelProps={{
                className: "before:content-none after:content-none",
              }}
            />
          </div>

          <div className="flex flex-col gap-4">
            <Typography variant="h6" color="blue-gray" className="-mb-3">
              Description
            </Typography>
            <Input
              size="lg"
              name='description'
              onChange={handleChange}
              className=" !border-t-blue-gray-200 focus:!border-t-gray-900"
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
              onChange={handleChange}
              type='number'
              className=" !border-t-blue-gray-200 focus:!border-t-gray-900"
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
              onChange={handleChange}
              type ='number'
              className=" !border-t-blue-gray-200 focus:!border-t-gray-900"
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
              onChange={handleChange}
              type='number'
              className=" !border-t-blue-gray-200 focus:!border-t-gray-900"
              labelProps={{
                className: "before:content-none after:content-none",
              }}
            />
          </div>

          <div className="flex flex-row mt-8 gap-2">
            <label className=" flex flex-row h-10 w-36 gap-2 justify-center items-center text-uppercase text-white text-center bg-black hover:bg-gray-700 py-2 px-4 rounded cursor-pointer"> Upload File
            <RxUpload className="w-4 h-4"/>
            <input type="file" accept="image/*" name='file' onChange={handleFileUpload} className='hidden' />
            </label>
            {imageUrl && <img src={imageUrl} alt="Selected Image" className='h-10 w-10' />}
          </div>

          <div className="flex flex-col mt-8 gap-4">
            <Switch
            name='isActive'
            onChange={handleChange}
              label={
                <Typography
                  variant="small"
                  color="gray"
                  className="flex items-center font-normal"
                >
                  <p
                    className="font-medium transition-colors hover:text-gray-900"
                  >
                    Is Active
                  </p>
                </Typography>
              }
              containerProps={{ className: "-ml-2.5" }}
            />
          </div>
          </form>
          <div className="flex flex-col  sm:items-start sm:justify-start sm:w-full md:items-center md:justify-center gap-4 ">
            <Button className="flex items-center justify-center w-60 mb-5 gap-4" onClick={handleSubmit} fullWidth>
              Add Products<CgAddR className='w-4 h-5'/>
            </Button>
          </div>
    </div>
  </>
)
}

export default Product


