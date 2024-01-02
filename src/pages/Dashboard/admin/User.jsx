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
import Otp from "../../Auth/Otp";
import { AiOutlineEye,AiOutlineEyeInvisible } from "react-icons/ai";
import Loading from "react-loading";
   
export function User() {
  const navigate = useNavigate()
  const [details,setdetails] = useState({name:"",email:'',password:''})
  const [ checkbox, setCheckBox ] = useState(false)
  const [ validated, setValidated] = useState(false)
  const [ errors, serErrors ] = useState(["","",""])
  const [ open, setOpen ] = useState(false)
  const [pass,showPass] = useState(false)
  const [loading,setLoading] = useState(false)

  const toggle=()=>{
    showPass(!pass)
  }
  
  const handleChange =(e)=>{
    const {name,value}=e.target
    setdetails((prev)=>{
      return {...prev,[name]: value}
    })
    validate();
  };
  
  const role = localStorage.getItem("Role")
  
  
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
    setLoading(!loading)
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
    setLoading(false)
      const inputs = document.querySelectorAll("input")
      inputs.forEach(input => input.value = "")
      if(data.success){
        handleOpen()
      }else{
        setLoading(false)
        setdetails({name:'',email:'',password:'',})
        Swal.fire({
          title: 'Error!',
          text: data.msg,
          icon: 'error',
        })
      }
    }).catch(err => {
      setLoading(false)
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
    <div className="flex flex-col justify-center items-center h-full">
        <Typography variant="h3" color="black">
          {
            role=='admin'?<>Add Casher</>:<>Add Admin</>
          }
        </Typography>
    <Card className="w-96 ">
      <CardBody className="flex flex-col gap-4">
        <Input label="Full Name" size="lg" name="name" onChange={handleChange} required />
        {errors[0]!="" && <Typography variant="small" color="red">{errors[0]}</Typography>}
        <Input label="Email" type="email" name="email" size="lg" onChange={handleChange} required />
        {errors[1]!="" && <Typography variant="small" color="red">{errors[1]}</Typography>}
        <Input label="Password" type={pass ? "password" : "text"} name="password" size="lg" onChange={handleChange} required />
        <div className="absolute mt-28 ml-60 md:mt-36 md:ml-72"><button className="absolute  mt-6 md:-mt-2 md:ml-4" onClick={toggle} >{pass ? <AiOutlineEyeInvisible /> : <AiOutlineEye />}</button></div>
        {errors[2]!="" && <Typography variant="small" color="red">{errors[2]}</Typography>}
        <div className="flex gap-3 ml-16">
          {console.log(role)}
          {
            role=='admin'? 
                <><input type="radio" name="role" value="cashier" onChange={handleChange}/>Cashier</>
              :
              <><input type="radio" name="role" value="admin" onChange={handleChange}/>Admin</>
          } 

          
        </div>
      </CardBody>
      <CardFooter className="pt-0 flex flex-col items-center justify-center">
        {loading ? <Loading type="spin" width="30px" color="blue"/> : <Button variant="gradient" fullWidth onClick={(e) => validated&&handleSubmit(e)}>
          Add User 
        </Button>}
      </CardFooter>
    </Card>
    {open&&<Otp handleOpen={handleOpen} email={details.email} />}
    </div>
  </>
  );
}

export default User
