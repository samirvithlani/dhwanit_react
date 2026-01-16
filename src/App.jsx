import { useEffect, useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
// import "./App.css";
import { Home } from "./components/Home";
import Header from "./components/Header";
import { TableComponent } from "./components/TableComponent";
import { UseStateDemo1 } from "./components/UseStateDemo1";
import { UseStateDemo2 } from "./components/UseStateDemo2";
import { Employees } from "./components/Employees";
import { Route, Routes } from "react-router-dom";
import { HomeComponent } from "./components/HomeComponent";
import { Shows } from "./components/Shows";
import { Movies } from "./components/Movies";
import { Navbar } from "./components/Navbar";
import "./assets/css/style.css";
import { PLayContent } from "./components/PLayContent";
import { Error404 } from "./components/Error404";
import { InputHandlingDemo1 } from "./components/InputHandlingDemo1";
import { FormDemo1 } from "./components/forms/FormDemo1";
import { FormDemo2 } from "./components/forms/FormDemo2";
import { FormDemo3 } from "./components/forms/FormDemo3";
import { FormDemo4 } from "./components/forms/FormDemo4";
import { ApiDemo1 } from "./components/api/ApiDemo1";
import { ApiDemo2 } from "./components/api/ApiDemo2";
import { ApiDemo3 } from "./components/api/ApiDemo3";
import { ApiDemo4 } from "./components/api/ApiDemo4";
import { ToastContainer, Zoom } from "react-toastify";
import { UseEffectDemo } from "./components/UseEffectDemo";
import { UpdateUser } from "./components/api/UpdateUser";
import { ProductComponent } from "./components/ProductComponent";
import { useDispatch } from "react-redux";
import { fetchUser } from "./redux/ContentSlice";

function App() {
  
  const dispatch = useDispatch()
  useEffect(()=>{
    dispatch(fetchUser())
  },[])

  return (
    <div className="root">
      <ToastContainer
        position="top-center"
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick={false}
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="dark"
        transition={Zoom}
      />
      <Navbar></Navbar>
      <Routes>
        <Route path="/" element={<Home></Home>}></Route>
        <Route path="/home" element={<HomeComponent />}></Route>
        <Route path="/shows" element={<Shows />}></Route>
        <Route path="/movies" element={<Movies />}></Route>
        <Route path="/playcontent/:name" element={<PLayContent />}></Route>
        <Route path="/inputdemo1" element={<InputHandlingDemo1 />}></Route>
        <Route path="/formdemo1" element={<FormDemo1 />}></Route>
        <Route path="/formdemo2" element={<FormDemo2 />}></Route>
        <Route path="/formdemo3" element={<FormDemo3 />}></Route>
        <Route path="/formdemo4" element={<FormDemo4 />}></Route>
        <Route path="/apidemo1" element={<ApiDemo1 />}></Route>
        <Route path="/apidemo2" element={<ApiDemo2 />}></Route>
        <Route path="/apidemo3" element={<ApiDemo4 />}></Route>
        <Route path="/useEffectdemo" element = {<UseEffectDemo/>}></Route>
        <Route path="/updateuser/:id" element = {<UpdateUser/>}></Route>
        <Route path="/products" element = {<ProductComponent/>} ></Route>
        
        <Route path="/*" element={<Error404 />}></Route>
      </Routes>
    </div>
  );
}

export default App;
