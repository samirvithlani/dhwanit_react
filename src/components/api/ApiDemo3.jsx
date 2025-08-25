import axios from 'axios'
import React from 'react'

export const ApiDemo3 = () => {
    //name,age,email,password,isActive

    const addUser = async()=>{

        const userObj = {
            name:"priyanka",
            age:22,
            email:"priyanka.chopda.com",
            password:"piggy",
            isActive:true
        }

        const res  = await axios.post("https://node5.onrender.com/user/user",userObj)
        console.log(res.data)
    }
  return (
    <div style={{textAlign:"center"}}>
        <h1>API DEMO 3</h1>
        <button onClick={()=>{addUser()}}>ADD USER</button>
    </div>
  )
}
