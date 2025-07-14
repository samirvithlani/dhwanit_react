import React, { useState } from "react";
import { EmployeeList } from "./EmployeeList";

export const Employees = () => {
  const [employees, setemployees] = useState([
    {
      id: 1,
      name: "ram",
      age: 24,
      salary: 23000,
    },
    {
      id: 2,
      name: "shyam",
      age: 26,
      salary: 30000,
    },
    {
      id: 3,
      name: "amit",
      age: 26,
      salary: 32000,
    },
  ]);

  const deleteEmployee = (id) => {
    //alert(id)
    // var x = employees.filter((emp)=>emp.id!=id)
    // //console.log(x)
    // setemployees(x)
    setemployees(employees.filter((emp)=>emp.id!=id))
    
  };

  return (
    <div style={{ textAlign: "center" }}>
      <h1>EMPLOYEES</h1>
      <EmployeeList employees={employees} deleteEmployee = {deleteEmployee}></EmployeeList>
    </div>
  );
};
