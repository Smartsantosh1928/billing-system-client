import React from 'react'
import { Card, Typography, CardHeader,CardBody,CardFooter,Button } from "@material-tailwind/react"
import OtpInput from 'react-otp-input';
import { useState, useEffect } from 'react';
import Swal from 'sweetalert2';
import { useNavigate } from 'react-router-dom';

function Otp({ email }) {

    const [ otp, setOtp ] = useState()
    const token = sessionStorage.getItem("AccessToken")
    const navigate = useNavigate();

    useEffect(() => {
      console.log(email);
    }, [])
    
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
          sessionStorage.setItem("AccessToken",data.accessToken)
          sessionStorage.setItem("RefreshToken",data.refreshToken)
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