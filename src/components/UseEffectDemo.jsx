import React, { useEffect, useState } from 'react'

export const UseEffectDemo = () => {
    //()=>{} func , [] depdency array
    const [count, setcount] = useState(0)

    useEffect(() => {
        console.log("called....")
    }, [count])
    
  return (
    <div>
        <h1>USE EFFECT DEMO</h1>
        <button onClick={()=>{setcount(count+1)}}>+</button>
        {count}
    </div>
  )
}
