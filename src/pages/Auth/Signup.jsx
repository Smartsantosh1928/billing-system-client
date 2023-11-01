import {
  Card,
  CardHeader,
  CardBody,
  CardFooter,
  Typography,
  Input,
  Button,
} from "@material-tailwind/react";
import { Link,useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";
import Swal from "sweetalert2";
import Otp from "./Otp";
   
export function Signup() {
  const navigate = useNavigate()
  const [details,setdetails] = useState({name:"",email:'',password:''})
  const [ checkbox, setCheckBox ] = useState(false)
  const [ validated, setValidated] = useState(false)
  const [ errors, serErrors ] = useState(["","",""])
  const [ open, setOpen ] = useState(false)
  
  const handleChange =(e)=>{
    const {name,value}=e.target
    if(name=="remind-me"){
      setdetails((prev)=>{
        return {...prev,"remind-me": !checkbox}
      })
      setCheckBox(!checkbox);
    }else
    setdetails((prev)=>{
      return {...prev,[name]: value}
    })
    validate();
  };

  
  const validate = () => {
    let isValid = true; // Assume the form is valid by default
  
    if (details.name) {
      const regex = /^[a-zA-Z]+(([',. -][a-zA-Z ])?[a-zA-Z]*)*$/;
      if (!regex.test(details.name)) {
        setErrorHelper(0, "Name is not valid");
        isValid = false; // Set isValid to false if there's an error
      } else {
        setErrorHelper(0, "");
      }
    }
  
    if (details.email) {
      const regex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
      if (!regex.test(details.email)) {
        setErrorHelper(1, "Email is not valid");
        isValid = false; // Set isValid to false if there's an error
      } else {
        setErrorHelper(1, "");
      }
    }
  
    if (details.password) {
      if (details.password.length < 8) {
        setErrorHelper(2, "Password must be at least 8 characters long");
        isValid = false; // Set isValid to false if there's an error
      } else {
        setErrorHelper(2, "");
      }
    }
    
    setValidated(isValid); 
  };
  
  useEffect(validate, [details])

  function setErrorHelper(index, msg) {
      serErrors(e => {
        const newErrors = [...e];
        newErrors[index] = msg;
        return newErrors;
      });
  }

  const handleOpen = () => {
    setOpen(!open);
    } 

  const handleSubmit= (e)=>{
    console.log(details);
    e.preventDefault();
    fetch("http://localhost:3000/auth/register",{
      method: "POST",
      headers:{
        "Content-Type": "application/json"
      },
      body: JSON.stringify({...details})
    }).then(res => res.json())
    .then(data => {
      const inputs = document.querySelectorAll("input")
      inputs.forEach(input => input.value = "")
      if(data.success){
        setdetails({name:"",email:'',password:''})
        sessionStorage.setItem("AccessToken",data.accessToken)
        sessionStorage.setItem("RefreshToken",data.refreshToken)
        handleOpen()
      }else{
        setdetails({name:"",email:'',password:''})
        Swal.fire({
          title: 'Error!',
          text: data.msg,
          icon: 'error',
        })
      }
    }).catch(err => {
      console.log(err)
      Swal.fire({
        title: 'Error!',
        text: "Something went wrong",
        icon: 'error',
      })
    })
  }


  return (
    <>
    <div className="flex justify-center items-center h-screen bg-blue-gray-300">
    <Card className="w-96 ">
      <CardHeader
        variant="gradient"
        color="gray"
        className="mb-4 grid h-28 place-items-center">
        <Typography variant="h3" color="white">
          Sign Up
        </Typography>
      </CardHeader>
      <CardBody className="flex flex-col gap-4">
        <Input label="Full Name" size="lg" name="name" onChange={handleChange} required />
        {errors[0]!="" && <Typography variant="small" color="red">{errors[0]}</Typography>}
        <Input label="Email" type="email" name="email" size="lg" onChange={handleChange} required />
        {errors[1]!="" && <Typography variant="small" color="red">{errors[1]}</Typography>}
        <Input label="Password" type="password" name="password" size="lg" onChange={handleChange} required />
        {errors[2]!="" && <Typography variant="small" color="red">{errors[2]}</Typography>}
      </CardBody>
      <CardFooter className="pt-0">
        <Button variant="gradient" fullWidth onClick={(e) => validated&&handleSubmit(e)}>
          Sign Up
        </Button>
        <Typography variant="small" className="mt-6 flex justify-center">
          Already have an account?
          <Link to="/auth/login" className="text-base font-semibold hover:animate-pulse text-blue-500 ml-2" >Login</Link>
        </Typography>
      </CardFooter>
    </Card>
    {open&&<Otp handleOpen={handleOpen} email={details.email} />}
    </div>
  </>
  );
}

export default Signup
