import React from "react";
import { useFieldArray, useForm } from "react-hook-form";

export const FormDemo4 = () => {
  const { register, handleSubmit, control } = useForm({
    defaultValues: {
      medicine: [{ name: "", dosage: 0, frequency: 0 }],
    },
  });
  const submitHandler = (data) => {
    console.log(data);
  };
  //[{}]
  const { fields, append, remove } = useFieldArray({
    control,
    name: "medicine",
  });

  return (
    <div>
      <h1>MEDICINE FORM</h1>
      <form onSubmit={handleSubmit(submitHandler)}>
        {fields.map((f, index) => {
          return (
            <div>
              <div>
                <label>NAME</label>
                <input
                  type="text"
                  {...register(`medicine.${index}.name`)}
                ></input>
              </div>
              <div>
                <label>DOSAGE</label>
                <input
                  type="text"
                  {...register(`medicine.${index}.dosage`)}
                ></input>
              </div>
              <div>
                <label>FREQUENCY</label>
                <input
                  type="text"
                  {...register(`medicine.${index}.frequency`)}
                ></input>
              </div>
            </div>
          );
        })}

        <div>
          <input type="submit"></input>
        </div>
      </form>
      <div>
        <button
          onClick={() => {
            append([{ name: "", dosage: 0, frequency: 0 }]);
          }}
        >
          add more medicine
        </button>
      </div>
    </div>
  );
};
