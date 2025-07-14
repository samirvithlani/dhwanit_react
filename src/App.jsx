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

function App() {
  
  return (
    <div>
      <Header></Header>
      {/* <Home></Home> */}
      {/* <TableComponent/> */}
      {/* <UseStateDemo1></UseStateDemo1> */}
      {/* <UseStateDemo2></UseStateDemo2> */}
      <Employees/>
    </div>
  );
}

export default App;
