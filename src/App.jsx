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

function App() {
  
  return (
    <div className="root">
      <Navbar></Navbar>
      <Routes>
        <Route path="/home" element = {<HomeComponent/>}></Route>
        <Route path="/shows" element = {<Shows/>}></Route>
        <Route path="/movies" element = {<Movies/>}></Route>
      </Routes>
    </div>
  );
}

export default App;
