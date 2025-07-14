import React, { useState } from "react";

export const UseStateDemo1 = () => {
    // var count =0
    const [count,setCount] = useState(0)
    //count --> state variable
    //setCount --> function --use --> count change -->setCount..
    //(0) -->count initial value..
    const increseCount = ()=>{
        setCount(count+1)
        // console.log("count = ",count)
        // count++
        // console.log("count = ",count)
    }
  return (
    <div style={{ textAlign: "center" }}>
      <h1>UseStateDemo1</h1>
      {count}
      <button onClick={()=>{increseCount()}}>+</button>
    </div>
  );
};
