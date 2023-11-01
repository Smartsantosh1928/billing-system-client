import { Route,Routes } from "react-router-dom"
import Login from "./pages/Auth/Login"
import Signup from "./pages/Auth/Signup"
import Home from "./pages/Dashboard/Home"
import Otp from "./pages/Auth/Otp"

function App() 
{
  return (
    <Routes>
        <Route path="/" element={<Home/>} ></Route>
        <Route path="/auth/login" element={<Login/>}></Route>
        <Route path="/auth/signup" element={<Signup/>}></Route>
        <Route path="/auth/otp" element={<Otp/>}></Route>
    </Routes>
  )
}

export default App
