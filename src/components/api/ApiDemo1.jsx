import axios from 'axios'
import React, { useEffect, useState } from 'react'

export const ApiDemo1 = () => {
    const [message, setmessage] = useState("")
    const [users, setusers] = useState([])

    useEffect(()=>{

        getApiCall()
    },[])

    const getApiCall = async()=>{
        const res = await axios.get("https://node5.onrender.com/user/user")
        //res -- axios object..
        console.log(res)
        console.log(res.data) //api response..
        console.log(res.status)
        setmessage(res.data.message)
        setusers(res.data.data)
    }

  return (
    <div>
        <h1>API DEMO 1</h1>
        {/* <button onClick={()=>{getApiCall()}}>GET</button> */}
        <h1>{message}</h1>
        <table className='table table-dark'>
            <thead>
                <tr>
                    <th>ID</th>
                    <th>NAME</th>
                    <th>AGE</th>
                    <th>EMAIL</th>
                    <th>STATUS</th>
                    
                </tr>
            </thead>
            <tbody>
                {
                    users.map((user)=>{
                        return <tr>
                            <td>{user._id}</td>
                            <td>{user.name}</td>
                            <td>{user.email}</td>
                            <td>{user.age}</td>
                            <td>{user.isActive == true?"Active":"NOt Active"}</td>
                        </tr>
                    })
                }
            </tbody>
        </table>
    </div>
  )
}
