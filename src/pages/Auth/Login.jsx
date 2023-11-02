import {
  Card,
  CardHeader,
  CardBody,
  CardFooter,
  Typography,
  Input,
  Checkbox,
  Button,
} from "@material-tailwind/react";
import { useEffect, useState } from "react";
import { Link,useNavigate } from "react-router-dom";
import Swal from "sweetalert2";
import Otp from "./Otp";
import { AiOutlineEye,AiOutlineEyeInvisible } from "react-icons/ai";
import Loading from "react-loading";
import { getAccessToken } from "../../utils/Utils";

export function Login() {

  const [ details,setdetails ] = useState({email :"",password:""})
  const [ checkbox, setCheckBox ] = useState(false)
  const [ validated, setValidated] = useState(false)
  const [ errors, serErrors ] = useState(["",""])
  const [ open, setOpen ] = useState(false)
  const [pass,showPass] = useState(false)
  const [loading,setLoading] = useState(false)

  const navigate = useNavigate()

  const handleOpen = () => {
    setOpen(!open)
  }

  const toggle=()=>{
    showPass(!pass)
  }

  useEffect(() => {
    fetch("http://localhost:3000/auth/verifyUser",{
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        "Authorization": "Bearer " + sessionStorage.getItem("AccessToken")
      }
    }).then(res => {
      if(res.status == 403){
        getAccessToken();
      }else{
        return res.json() 
      }
    })
    .then(data => {
      if(data.success)
        navigate("/dashboard/home")
    }).catch(err => navigate("/auth/login"))
  },[])
 
  const validate = () => {
    let isValid = true; // Assume the form is valid by default
  
    if(details){

      if (details.email) {
        const regex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
        if (!regex.test(details.email)) {
          setErrorHelper(0, "Email is not valid");
          isValid = false; // Set isValid to false if there's an error
        } else {
          setErrorHelper(0, "");
        }
      }
      
      if (details.password) {
        if (details.password.length < 8) {
          setErrorHelper(1, "Password must be at least 8 characters long");
          isValid = false; // Set isValid to false if there's an error
        } else {
          setErrorHelper(1, "");
        }
      }
      
      setValidated(isValid); 
    }
  };
  
  useEffect(validate, [details]);

  function setErrorHelper(index, msg) {
    serErrors(e => {
      const newErrors = [...e];
      newErrors[index] = msg;
      return newErrors;
    });
  }

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
  };

  const handleSubmit=(e)=>{
    setLoading(!loading)
    e.preventDefault();
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
        sessionStorage.setItem("AccessToken",data.accessToken)
        sessionStorage.setItem("RefreshToken",data.refreshToken)
        localStorage.setItem("AccessToken",data.accessToken)
        localStorage.setItem("RefreshToken",data.refreshToken)
        navigate("/dashboard/home")
      }
      else if(data.msg=="User not verified!"){
        setLoading(loading)
        handleOpen()
      }
      else{
        setLoading(loading)
        Swal({
          title: 'Error!',
          text: data.msg,
          icon: 'error',
        })
        setdetails({email :"",password:""})
      }
    })
    .catch(err => {
      setLoading(loading)
      Swal.fire({
        title: 'Error!',
          text: err,
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
          Sign In
        </Typography>
      </CardHeader>
      <CardBody className="flex flex-col gap-4">
        <Input label="Email" name="email" onChange={handleChange} size="lg" required />
        {errors[0]!="" && <Typography variant="small" color="red">{errors[0]}</Typography>}
        <Input label="Password" name="password" type={pass ? "text" : "password"} onChange={handleChange} size="lg" required/>
        <div className="absolute mt-16 ml-60 md:mt-20 md:ml-72"><button className="absolute mt-2 md:-mt-1 md:ml-4" onClick={toggle} >{pass ? <AiOutlineEyeInvisible /> : <AiOutlineEye />}</button></div>
        {errors[1]!="" && <Typography variant="small" color="red">{errors[1]}</Typography>}
        <div className="-ml-2.5">
          <Checkbox label="Remember Me" name="remind-me" onChange={handleChange} />
        </div>
      </CardBody>
      <CardFooter className="pt-0 flex flex-col items-center justify-center">
        {loading ? <Loading type="spin" width="30px" color="blue"/>  : <Button variant="gradient" onClick={validated && handleSubmit} fullWidth>
          Sign Up
        </Button>}
        <Typography variant="small" className="mt-6 flex justify-center">
          Don&apos;t have an account?
          <Link to="/auth/signup" className="text-base font-semibold hover:animate-pulse text-blue-500 ml-2" >Sign up</Link>
        </Typography>
      </CardFooter>
    </Card>
    {open&&<Otp handleOpen={handleOpen} email={details.email} />}
    </div>
  </>
  );
}

export default Login