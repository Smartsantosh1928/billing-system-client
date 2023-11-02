import { BrowserRouter } from "react-router-dom";
import { Routes, Route, Navigate } from "react-router";
import Dashboard from "./pages/Dashboard/Dashboard";
import Login from "./pages/Auth/Login";
import SignUp from "./pages/Auth/Signup";
import { Demo } from "@/components"

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/auth/login" element={<Login />} />
        <Route path="/auth/signup" element={<SignUp />} />
        <Route path="/demo" element={<Demo />} />
        <Route path="/dashboard/*" element={<Dashboard />} />
        <Route path="*" element={<Navigate to={"/auth/login"} />} />
      </Routes>
    </BrowserRouter>
  );
 
}

export default App
