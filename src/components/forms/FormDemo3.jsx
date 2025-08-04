import React from 'react'
import { useForm } from 'react-hook-form'
import { data } from 'react-router-dom'

export const FormDemo3 = () => {
    const {register,handleSubmit,formState:{errors}} = useForm()
    console.log("errors",errors)
    const validationSchema = {
        nameValidator : {
            required:{
                value:true,
                message:"name is required*"
            },
            minLength:{
                value:5,
                message:"min length should be 5"
            },
            maxLength:{
                value:8,
                message:"max length should be 8"
            }
        },
        refCodeValidator:{
            required:{
                value:true,
                message:"ref code is required.."
            },
            validate:(value)=>{
                return value =="royal" || "ref code is not valid..."
            }
        }
    }
    const submitHandler = (data)=>{
        console.log(data)
    }
  return (
    <div style={{textAlign:"center"}}>
        <h1>FormDemo3</h1>
        <form onSubmit={handleSubmit(submitHandler)}>
            <div>
                <label>NAME</label>
                <input type='text' {...register("name",validationSchema.nameValidator)}></input>
                {errors.name?.message}
            </div>
            <div>
                <label>ref code</label>
                <input type='text' {...register("refcode",validationSchema.refCodeValidator)}></input>
                {errors.refcode?.message}
            </div>
            <div>
                <label>HOBBIES</label><br></br>
                CRICKET <input type='checkbox' {...register("hobbies")} value="cricket"></input>
                CHESS <input type='checkbox' {...register("hobbies")} value="chess"></input>
                FOOTBALL <input type='checkbox' {...register("hobbies")} value="football"></input>
            </div>
            <div>
                <label>GENDER</label>
                MALE : <input type="radio" value="male" {...register("gender")}/>
                FEMALE : <input type="radio" value="female" {...register("gender")}/>
            </div>
            <div>
                <input type='submit'></input>
            </div>
        </form>
    </div>
  )
}
