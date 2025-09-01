import axios from "axios";
import React from "react";
import { useForm } from "react-hook-form";
import { data, useNavigate, useParams } from "react-router-dom";
import { toast } from "react-toastify";

export const UpdateUser = () => {
  const id = useParams().id;
  const naviagate = useNavigate()

  const { register, handleSubmit } = useForm({
    defaultValues:async()=>{
        const res = await axios.get("https://node5.onrender.com/user/user/"+id)
        //console.log(res.data)
        return res.data.data // {_id}
    }
  });

  const submitHandler = async(data)=>{
    console.log("data",data)
    delete data._id
    const res = await axios.put("https://node5.onrender.com/user/user/"+id,data)
    console.log(res.data)
    if(res.status ==200){
        toast.warning("user data updateed successfully !!")
        naviagate("/apidemo1")

    }
 }

  return (
    <div style={{ textAlign: "center" }}>
      <h1>UPDATE USER</h1>
      <form onSubmit={handleSubmit(submitHandler)}>
        <div>
            <label>NAME</label>
            <input type="text" {...register("name")}></input>
        </div>
        <div>
            <label>Age</label>
            <input type="text" {...register("age")}></input>
        </div>
        <div>
            <label>Email</label>
            <input type="text" {...register("email")}></input>
        </div>
        <div>
            <label>Password</label>
            <input type="text" {...register("password")}></input>
        </div>
        <div>
            <label>IsActive</label>
            ISACTIVE:<input type="radio" {...register("isActive")} value="true"></input>
            NoTACTIVE:<input type="radio" {...register("isActive")} value="false"></input>
        </div>

        <div>
            <input type="submit" value="submit"></input>
        </div>
        
      </form>
    </div>
  );
};
