import React from "react";

//component name must starts with cap

export const Home = () => {
  var title = "React js";
  var year = 2025;
  var isActive = false;

  var user = {
    id: 101,
    name: "rahul",
  };

  return (
    <div style={{backgroundColor:"GrayText"}}>
      <h1>HOME COMPONENTs</h1>
      <h1>Hello</h1>
      <p>At a time we can return only 1 tag</p>
      <p>whatever written in return statment can only display to browser</p>
      {title}
      <h1 style={{color:"blue"}}>TITLE = {title}</h1>
      <h3>Year = {year}</h3>
      <h3>active = {isActive == true ? "ACtive" : "Not active"}</h3>
      <h3>id = {user.id}</h3>
      <h3>{user.name}</h3>
    </div>
  );
};
