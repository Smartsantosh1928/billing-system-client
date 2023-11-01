<<<<<<< HEAD
import { BrowserRouter } from "react-router-dom";
import { Routes, Route } from "react-router";
import Dashboard from "./pages/Dashboard/Dashboard";
import Login from "./pages/Auth/Login";
import Register from "./pages/Auth/Register";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/auth/login" element={<Login />} />
        <Route path="/auth/signup" element={<Register />} />
        <Route path="/dashboard/*" element={<Dashboard />} />
      </Routes>
    </BrowserRouter>
  );
 
=======
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
>>>>>>> origin/roshan
}

export default App
