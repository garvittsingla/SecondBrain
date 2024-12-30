import Dashboard from "./pages/Dashboard";
import  {Signup}  from "./pages/Signup";
import  {Signin}  from "./pages/Signin";
import {BrowserRouter, Route, Routes } from "react-router-dom";

export default function App(){
  return(
    <div>
      <BrowserRouter>
        <Routes>
          <Route path="/dashboard" element={<Dashboard/>}></Route>
          <Route path="/signin" element={<Signin/>}></Route>
          <Route path="/signup" element={<Signup/>}></Route>
          <Route path="/share/:shareId" element={<Signup/>}></Route>

        </Routes>
      </BrowserRouter>
    </div>
  )
}

