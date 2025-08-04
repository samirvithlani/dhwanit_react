import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
// import "./App.css";
import {Home} from "./components/Home"
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
import "./assets/css/style.css"
import { PLayContent } from "./components/PLayContent";
import { Error404 } from "./components/Error404";
import { InputHandlingDemo1 } from "./components/InputHandlingDemo1";
import { FormDemo1 } from "./components/forms/FormDemo1";
import { FormDemo2 } from "./components/forms/FormDemo2";
import { FormDemo3 } from "./components/forms/FormDemo3";

function App() {
  
  return (
    <div className="root">
      <Navbar></Navbar>
      <Routes>
        <Route path="/" element = {<Home></Home>}></Route>
        <Route path="/home" element = {<HomeComponent/>}></Route>
        <Route path="/shows" element = {<Shows/>}></Route>
        <Route path="/movies" element = {<Movies/>}></Route>
        <Route path="/playcontent/:name" element = {<PLayContent/>}></Route>
        <Route path="/inputdemo1" element = {<InputHandlingDemo1/>}></Route>
        <Route path="/formdemo1" element = {<FormDemo1/>}></Route>
        <Route path="/formdemo2" element = {<FormDemo2/>}></Route>
        <Route path="/formdemo3" element = {<FormDemo3/>}></Route>
        <Route path="/*" element = {<Error404/>}></Route>
      </Routes>
    </div>
  );
}

export default App;
