import React from 'react'
import { Card, Typography, CardHeader,CardBody,CardFooter,Button } from "@material-tailwind/react"
import { XMarkIcon } from "@heroicons/react/24/solid";
import OtpInput from 'react-otp-input';
import { useState } from 'react';
import Swal from 'sweetalert2';
import { useNavigate } from 'react-router-dom';

function Otp({open,handleOpen,email}) {

    const [ otp, setOtp ] = useState()
    const token = sessionStorage.getItem("AccessToken")
    const navigate = useNavigate();

    const handlesubmit = () => {
    fetch("http://localhost:3000/auth/verifyOTP", {
      method: 'POST',
      headers: {
        // 'Authorization': `Bearer ${token}`,
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({otp,email})
    })
      .then(response => {
        if (!response.ok) {
          throw new Error('Network response was not ok');
        }
        return response.json();
      })
      .then(data => {
        if(data.success){
          Swal.fire({
            title: 'Success!',
            text: data.msg,
            icon: 'success',
          }).then(() => navigate("/"))
        }
      })
      .catch(error => {
        console.error('Error:', error);
      });

        }



  return (
    <div className='bg-opacity-80 z-50 flex items-center justify-center inset-0 fixed w-screen h-auto bg-black' >
        <Card className="mx-aut0 absolute flex items-center justify-center">
          <div  className=" text-red-600 absolute top-0 right-0 rounded-2xl transition-all duration-500 hover:text-white hover:bg-red-600">
            <button className="translate-x-2.5 translate-y-1" 
            onClick={handleOpen}
            >
              <XMarkIcon strokeWidth={2} className="h-7 w-7 -translate-x-3 pl-1"/>
            </button>
          </div>
          <CardBody>
            Enter Your OTP
          <OtpInput
            value={otp}
            onChange={setOtp}
            inputType='text'
            numInputs={6}
            renderSeparator={<span>-</span>}
            renderInput={(props) => <input {...props} />}
        />
        </CardBody>
          <CardFooter className="pt-0">
            <Button variant="gradient" onClick={handlesubmit}  fullWidth>
              Submit
            </Button>
          </CardFooter>
        </Card>
    </div >
  )
}

export default Otp