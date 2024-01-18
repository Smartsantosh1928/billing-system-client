import { BrowserRouter } from "react-router-dom";
import { Routes, Route, Navigate } from "react-router";
import Dashboard from "./pages/Dashboard/Dashboard";
import { Login, Signup , NewLogin} from "@/pages/Auth";
import { Demo } from "@/components"
import Home from "././pages/Home/Home"

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/auth/login" element={<Login />} />
        <Route path="/home" element={<Home />} />
        <Route path="/auth/signup" element={<Signup />} />
        <Route path="/demo" element={<Demo />} />
        <Route path="/log" element={<NewLogin />} />
        <Route path="/dashboard/*" element={<Dashboard />} />
        <Route path="*" element={<Navigate to={"/auth/login"} />} />
      </Routes>
    </BrowserRouter>
  );
 
}

export default App
