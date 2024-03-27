import React, { useState , useEffect } from 'react'
import{XMarkIcon} from "@heroicons/react/24/solid";
import google from "../../../public/google.png"
import per from "../../../public/person.svg"
import { Input,Button } from "@material-tailwind/react";
import { Link,useNavigate } from "react-router-dom";
import Swal from "sweetalert2";
import Loading from "react-loading";
import {
     Dialog,Typography
   } from "@material-tailwind/react";
import { AiOutlineEye,AiOutlineEyeInvisible } from "react-icons/ai";


export function NewLogin({handleModelOpen}) {
     const[details,setDetails] = useState({email:"",password:""})
     const [ errors, setErrors ] = useState(["",""])
     const [ validated, setValidated] = useState(false)
     const [pass,showPass] = useState(false)
     const [loading,setLoading] = useState(false)
     const navigate = useNavigate()


     const toggle=()=>{
          showPass(!pass)
        }

     const handleChange = (e)=>{
          const {name,value} = e.target
          setDetails((prev)=>{
               return{...prev,[name]:value}
          })
          console.log(details);
     }

     const validate = () => {
          let isValid = true; 
        
          if(details){
      
            if (details.email) {
              const regex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
              if (!regex.test(details.email)) {
                setErrorHelper(0, "Email is not valid");
                isValid = false;
              } else {
                setErrorHelper(0, "");
              }
            }
            
            if (details.password) {
              if (details.password.length < 8) {
                setErrorHelper(1, "Password must be at least 8 characters long");
                isValid = false; 
              } else {
                setErrorHelper(1, "");
              }
            }
            
            setValidated(isValid); 
          }
        };

        useEffect(validate, [details]);

     function setErrorHelper(index, msg) {
     setErrors(e => {
          const newErrors = [...e];
          newErrors[index] = msg;
          return newErrors;
     });
     }
     const xmark = ()=>{
      handleModelOpen(false)
     }

     const handleSubmit=(e)=>{
          setLoading(!loading)
          e.preventDefault();
      
      
          // const fetchData = async ()=>{
      
          //   const res = await api.post("/auth/login",details)
      
          //   if(res.data.success)
          //   {
          //     setLoading(loading)
          //     localStorage.setItem("AccessToken",res.data.accessToken)
          //     localStorage.setItem("RefreshToken",res.data.refreshToken)
          //     localStorage.setItem("Role",res.data.role)
          //     navigate("/dashboard/home")
          //   }
          //   else if(res.data.msg=="User not verified!"){
          //     setLoading(loading)
          //     handleOpen()
          //   }
          //   else{
          //     setLoading(loading)
          //     Swal.fire({
          //       title: 'Error!',
          //       text: res.data.msg,
          //       icon: 'error',
          //     })
          //     setdetails({email :"",password:""})
          //   }
          // }
      
          // fetchData()
      
          fetch("http://localhost:3000/auth/login",{
            method: "POST",
            headers: {
              "Content-Type": "application/json"
            },
            body: JSON.stringify({...details})
          }).then(res => res.json())
          .then(data => {
            if(data.success){
              setLoading(loading)
              localStorage.setItem("AccessToken",data.accessToken)
              localStorage.setItem("RefreshToken",data.refreshToken)
              localStorage.setItem("Role",data.role)
              localStorage.setItem("Email",data.email)
              localStorage.setItem("StoreName",data.storename)
              navigate("/dashboard/home")
            }
            else if(data.msg=="User not verified!"){
              setLoading(loading)
              handleOpen()
            }
            else{
              setLoading(loading)
              handleModelOpen(!login)
              Swal.fire({
                title: 'Error!',
                text: data.msg,
                icon: 'error',
              })
              setDetails({email :"",password:""})
            }
          })
          .catch(err => {
            setLoading(loading)
            handleModelOpen(!login)
            Swal.fire({
              title: 'Error!',
                text: err,
                icon: 'error',
            })
          })
        }

  return (
     <>
     <Dialog open={open} size='xl'  className='bg-transparent shadow-none' handler={handleModelOpen}>
     <div className=' w-full  h-screen flex items-center justify-center '>
         <div className='flex  justify-around h-[75%] p-12 rounded-lg w-[70%] shadow-2xl bg-white'>
              <div className='h-[400px] w-[400px] mt-10'>
                   <img src={per} className='' alt="" />
              </div>
              <div className='flex flex-col mt-10 items-center justify-center h-[400px]  w-[320px] rounded-xl  bg-white shadow-2xl'>  
                   <h1 className='text-orange-400 text-xl text-center font-bold tracking-wide '>Welcome</h1>
                   <div className=' h-[30%] w-[70%] flex flex-col gap-2 pt-3'>
                         <Input label="Email" type='email' name='email' onChange={handleChange} className="" />
                         {errors[0]!="" && <Typography variant="small" color="red">{errors[0]}</Typography>}
                         <Input label="Password" type={pass ? 'text' : 'password'} name='password' onChange={handleChange} className="" />
                         <div className="absolute mt-[57px] ml-[195px]"><button className="" onClick={toggle} >{pass ?  <AiOutlineEye /> : <AiOutlineEyeInvisible />}</button></div>
                         {errors[1]!="" && <Typography variant="small" color="red">{errors[1]}</Typography>}
                   </div>
                   <div >
                        <Button onClick={handleSubmit}>Login</Button>
                   </div>
                   <div className='flex items-center pl-2 w-[70%] pt-3'>
                        <hr className='w-[40%] border-1 border-gray-500 ' />
                        <p className='px-2 ' >or</p>
                        <hr className='w-[40%] border-1 border-gray-500 ' />
                   </div>
                   <div>
                        <img src={google} className='h-10 w-10 cursor-pointer' alt="" />
                   </div>
                   <div className='flex  w-[70%] '>
                        <p className='text-sm cursor-pointer'>Don't have an account ?</p>
                        <Link to="/auth/NewSignin" className='text-sm text-orange-400 hover:text-blue-400 hover:cursor-pointer font-bold px-1' >Signup</Link>
                   </div>
              </div>
              <div className='-m-8 pl-10'>
                   <XMarkIcon onClick={xmark} className='w-8 h-8 cursor-pointer hover:bg-gray-300 transform duration-300 hover:rounded-md p-1' />
              </div>
         </div>
  </div>  
     </Dialog>
   </>
  )
}

export default NewLogin



