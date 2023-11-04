import React from 'react'
import { Card, Typography, CardHeader,CardBody,CardFooter,Button } from "@material-tailwind/react"
import OtpInput from 'react-otp-input';
import { useState, useEffect } from 'react';
import Swal from 'sweetalert2';
import { useNavigate } from 'react-router-dom';

export function Otp({ email }) {

    const [ otp, setOtp ] = useState()
    // const token = localStorage.getItem("AccessToken")
    const navigate = useNavigate();

    useEffect(() => {
      console.log(otp);
    }, [otp])
    
    const handlesubmit = () => {
      fetch("http://localhost:3000/auth/verifyOTP", {
        method: 'POST',
        headers: {
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
          localStorage.setItem("AccessToken",data.accessToken)
          localStorage.setItem("RefreshToken",data.refreshToken)
          Swal.fire({
            title: 'Success!',
            text: data.msg,
            icon: 'success',
          }).then(() => navigate("/dashboard/home"))
        }
        else{
          Swal.fire({
            title: 'Error!',
            text: data.msg,
            icon: 'error',
          })
        }
      })
      .catch(error => {
        console.error('Error:', error);
      });

    }

  return (
    <div className='bg-opacity-80 z-50 flex items-center justify-center inset-0 fixed w-screen h-auto bg-black' >
        <Card className="mx-aut0 absolute flex items-center justify-center">
          <CardBody >
            <div className='w-full flex justify-center items-center font-bold mb-5'>
              Enter OTP Sent to {email}
            </div>
          <OtpInput
            value={otp}
            onChange={setOtp}
            onPaste={(otp) => setOtp(otp)}
            placeholder='000000'
            containerStyle={"p-2 flex justify-center items-center gap-2 w-96"}
            inputStyle={"border-2 border-gray-400 rounded-md h-12 font-semibold text-4xl text-blue-200 w-16"}
            inputType='text'
            numInputs={6}
            renderSeparator={<span>-</span>}
            renderInput={(props) => <input {...props} />}
          />
        </CardBody>
          <CardFooter className="pt-0">
            <Button variant="gradient" color='blue' onClick={handlesubmit}  fullWidth>
              Submit
            </Button>
          </CardFooter>
        </Card>
    </div >
  )
}

export default Otp