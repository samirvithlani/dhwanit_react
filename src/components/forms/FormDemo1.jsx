import React, { useState } from "react";
import { useForm } from "react-hook-form";

export const FormDemo1 = () => {
  const { handleSubmit, register } = useForm();
  const [output, setoutput] = useState({});
  const [isSubbmited, setisSubbmited] = useState(false);

  const submithandler = (data) => {
    console.log(data);
    setoutput(data);
    setisSubbmited(true);
  };

  return (
    <div style={{ textAlign: "center" }}>
      <h1>FORM DEMO 1</h1>
      <form onSubmit={handleSubmit(submithandler)}>
        <div>
          <label>NAME</label>
          <input type="text" {...register("name")}></input>
        </div>
        <div>
          <label>AGE</label>
          <input type="text" {...register("age")}></input>
        </div>
        <div>
          <label>GENDER</label> <br></br>
          MALE <input type="radio" value="male" {...register("gender")}></input>
          <br></br>
          FEMALE{" "}
          <input type="radio" value="female" {...register("gender")}></input>
        </div>
        <div>
          <label>HOBBIES</label>
          <br></br>
          CRICKET{" "}
          <input
            type="checkbox"
            value="criceket"
            {...register("hobbies")}
          ></input>
          FOOTBALL{" "}
          <input
            type="checkbox"
            value="football"
            {...register("hobbies")}
          ></input>
          CHESS{" "}
          <input type="checkbox" value="chess" {...register("hobbies")}></input>
        </div>
        <div>
          <input type="submit"></input>
        </div>
      </form>
      {isSubbmited && (
        <div>
          <h1>OUTPUT</h1>
          <h1>NAMe = {output.name}</h1>
          <h2>AGE = {output.age}</h2>
          <h3>Gender = {output.gender}</h3>
        </div>
      )}
    </div>
  );
};
