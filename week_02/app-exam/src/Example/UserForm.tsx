import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import UserProvider from "./UserProvider";
import React from "react";
import { useNavigate } from "react-router";
const schema = yup
  .object({
    name: yup
      .string()
      .required("Name is required")
      .min(2, "Minimum 2 characters"),
    email: yup.string().email("Invalid email").required("Email is required"),
    age: yup
      .number()
      .transform((value, v) => (v === "" ? undefined : value))
      .nullable()
      .notRequired()
      .positive("Age must be positive"),
  })
  .required();

export const FormInfo = () => {
  const navigate = useNavigate();
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(schema),
  });

  const { setUsers } = React.useContext(UserProvider);
  const onSubmit = (data: any) => {
    console.log(data);
    setUsers((prev) => [...prev, { id: prev.length + 1, ...data }]);
    navigate("/users");
  };
  return (
    <form className="max-w-md mx-auto bg-white p-6 rounded-lg shadow space-y-4">
      <div>
        <label className="block mb-1 font-medium">Name:</label>
        <input
          type="text"
          placeholder="Enter your name"
          {...register("name")}
          className="w-full px-3 py-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-400"
        />
        {errors.name && (
          <span className="text-red-500 text-sm">{errors.name.message}</span>
        )}
      </div>
      <div>
        <label className="block mb-1 font-medium">Email:</label>
        <input
          type="email"
          placeholder="Enter your email"
          {...register("email")}
          className="w-full px-3 py-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-400"
        />
        {errors.email && (
          <span className="text-red-500 text-sm">{errors.email.message}</span>
        )}
      </div>
      <div>
        <label className="block mb-1 font-medium">Age:</label>
        <input
          type="number"
          placeholder="Enter your age"
          {...register("age")}
          className="w-full px-3 py-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-400"
        />
        {errors.age && (
          <span className="text-red-500 text-sm">{errors.age.message}</span>
        )}
      </div>
      <button
        type="submit"
        onClick={handleSubmit(onSubmit)}
        className="w-full bg-blue-600 text-white py-2 rounded hover:bg-blue-700 transition"
      >
        Submit
      </button>
    </form>
  );
};
