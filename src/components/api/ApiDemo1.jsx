import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { Loader } from '../../Loader'
import { toast } from 'react-toastify'
import { Link } from 'react-router-dom'

export const ApiDemo1 = () => {
    const [message, setmessage] = useState("")
    const [users, setusers] = useState([])
    const [isLoading, setisLoading] = useState(false)

    useEffect(()=>{

        getApiCall()
    },[])

    const getApiCall = async()=>{
        setisLoading(true)
        const res = await axios.get("https://node5.onrender.com/user/user")
        //res -- axios object..
        console.log(res)
        console.log(res.data) //api response..
        console.log(res.status)
        setmessage(res.data.message)
        setusers(res.data.data)
        setisLoading(false)
    }

    const deleteUser = async(id)=>{
        //delete api call...
        const res = await axios.delete("https://node5.onrender.com/user/user/"+id)
        console.log(res)
        if(res.status==204){
            toast.error("user deleted successfully !!")
            getApiCall()
        }
    }

  return (
    <div>
        <h1>API DEMO 1</h1>
        {
            isLoading && <Loader/>
        }
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
                    <th>Action</th>
                    
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
                            <td>
                                <button onClick={()=>{deleteUser(user._id)}} className='btn btn-danger'>DELETE</button>
                                <Link to={`/updateuser/${user._id}`} style={{margin:2}} className='btn btn-warning'>UDPATE</Link>
                        
                            </td>
                        </tr>
                    })
                }
            </tbody>
        </table>
    </div>
  )
}
