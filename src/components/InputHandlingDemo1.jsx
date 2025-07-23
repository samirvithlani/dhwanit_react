import React, { useState } from 'react'

export const InputHandlingDemo1 = () => {

    const [name, setname] = useState("")
    const [email, setemail] = useState("")
    const [isSubbmited, setisSubbmited] = useState(false)
    const nameHandler = (event)=>{
        console.log(event.target.value)
        setname(event.target.value)
    }
    const submitHandler = ()=>{
        //alert(`name = ${name}\nemail = ${email}`)
        setisSubbmited(true)
    }
  return (
    <div style={{textAlign:"center"}}>
        <h1>Input Handling Demo 1</h1>
        <div>
            <label>NAME</label>
            <input type='text' onChange={(event)=>{nameHandler(event)}}></input>
            {/* {name} */}
        </div>
        <div>
            <label>Email</label>
            <input type='text' onChange={(event)=>{setemail(event.target.value)}}></input>
            {/* {email} */}
        </div>
        <div>
            <input type='color'></input>
        </div>
        <div>
            <button onClick={()=>{submitHandler()}}>add</button>
        </div>
        {
            isSubbmited && <div style={{color:"red"}}>
            <h1>OUTPUT</h1>
            <h1>NAME  ={name}</h1>
            <h2>EMAIL = {email}</h2>
        </div>
        }
        
    </div>
  )
}
