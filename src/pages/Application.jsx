import React from "react";
import { useForm } from "react-hook-form"

const Application = () => {
  const { register, handleSubmit } = useForm();

  // Function runs on application form submission.
  const onSubmit = (data) => console.log(data);

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <label>First Name:</label>
      <input className="h-10 border mt-1 rounded px-4 w-full bg-gray-50" {...register("firstName", { required: true })} />

      <label>Last Name:</label>
      <input {...register("lastName", { required: true })} />

      <input type="date" {...register("dateOfBirth", { required: true })} />
      <input {...register("email", { required: true })} />
      <input type="number" {...register("phoneNumber", { required: true })} />
      <input {...register("ethnicity", { required: true })} />
      <input {...register("gender", { required: true })} />
      <input {...register("pronouns", { required: true })} />

      <input {...register("address", { required: true })} />
      <input {...register("city", { required: true })} />
      <input {...register("state", { required: true })} />
      <input {...register("country", { required: true })} />
      <input type="number" {...register("zipCode", { required: true })} />

      <input {...register("college", { required: true })} />
      <input type="number" {...register("year", { required: true })} />
      <input {...register("major", { required: true })} />
      <input {...register("highestEducation", { required: true })} />

      <h1>Personal Information:</h1>
      <input type="submit" />
    </form>
  )
};

export default Application;
