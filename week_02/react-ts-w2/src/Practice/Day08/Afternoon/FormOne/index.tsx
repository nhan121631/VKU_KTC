import { FaApple, FaChevronLeft, FaFacebook, FaGoogle } from "react-icons/fa";
import { BtnGG } from "./Button/BtnGG";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import React from "react";

export const FormOne = () => {
  const [email, setEmail] = React.useState("");
  const [name, setName] = React.useState("");

  const onClickHi = (email: string) => {
    setEmail(email);
  };
  const onClickSignUp = (name: string) => {
    setName(name);
  };
  return (
    <div
      className="flex flex-col items-center  bg-gray-100 gap-4 bg-cover bg-center bg-no-repeat h-[700px] w-[380px] p-1 rounded-2xl"
      style={{ backgroundImage: "url(/images/bg_image.webp)" }}
    >
      <div className="flex items-center justify-start w-full mb-4 text-white text-2xl m-3">
        <FaChevronLeft />
      </div>
      <div className="h-10"></div>
      {email === "" && <FormHi onclick={onClickHi} />}
      {email !== "" && name === "" && (
        <FormSignUp email={email} onclick={onClickSignUp} />
      )}
      {email !== "" && name !== "" && <FormSignIn name={name} email={email} />}
    </div>
  );
};

// FormHi component
// This component is used to get the user's email before they can sign up or log in.
const schemaHi = yup
  .object({
    email: yup
      .string()
      .email("Email không hợp lệ")
      .required("Vui lòng nhập email"),
  })
  .required();
type FormHiProps = {
  onclick: (email: string) => void;
};
const FormHi = ({ onclick }: FormHiProps) => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(schemaHi),
  });

  const onSubmit = (data: any) => {
    console.log(data);
    onclick(data.email);
  };

  return (
    <div className="flex flex-col gap-4 justify-start p-2 rounded-lg shadow-md w-full">
      <h1 className="text-3xl font-bold text-left text-white ms-5">Hi!</h1>
      <div className="bg-white/20 rounded-2xl flex flex-col p-4 gap-4">
        <form className="flex flex-col gap-4" onSubmit={handleSubmit(onSubmit)}>
          <input
            type="text"
            {...register("email")}
            placeholder="Email"
            className="p-2 h-14 rounded-lg bg-white border-none focus:outline-none"
          />
          {errors.email && (
            <span className="text-red-500 text-sm">{errors.email.message}</span>
          )}
          <input
            type="submit"
            className="flex text-white font-semibold items-center gap-4 bg-emerald-500 p-4 rounded-lg w-full justify-center"
            value={"Continue"}
          />
        </form>
        <div className="flex justify-center items-center gap-2 text-white/70">
          <span>or</span>
        </div>
        <BtnGG label="Continue with Facebook" icon={<FaFacebook />} />
        <BtnGG label="Continue with Google" icon={<FaGoogle />} />
        <BtnGG label="Continue with Apple" icon={<FaApple />} />
        <span className="flex gap-1 text-white">
          Don't have an account?{" "}
          <strong className="text-emerald-600">Sign up</strong>
        </span>
        <strong className="text-emerald-600">Forgot your password?</strong>
      </div>
    </div>
  );
};
// FormSignUp component
// This component is used to create a new account after the user has entered their email.
type FormSignUpProps = {
  onclick: (name: string) => void;
  email: string;
};
const schemaSignUp = yup
  .object({
    name: yup.string().required("Tên không được để trống"),
    password: yup
      .string()
      .min(8, "Mật khẩu phải có ít nhất 8 ký tự")
      .required("Mật khẩu không được để trống"),
  })
  .required();
const FormSignUp = ({ onclick, email }: FormSignUpProps) => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(schemaSignUp),
  });

  const onSubmitSignUp = (data: any) => {
    console.log(data);
    onclick(data.name);
  };
  return (
    <div className="flex flex-col gap-4 justify-start p-2 rounded-lg shadow-md w-full">
      <h1 className="text-3xl font-bold text-left text-white ms-5">Sign up</h1>
      <div className="bg-white/20 rounded-2xl flex flex-col p-4 gap-4">
        <div className="flex flex-col text-white/70">
          <span className="flex text-white/70">
            Looks like you dont have an account.
          </span>
          <span className="flex text-white/70 gap-2 flex-wrap">
            Let's create a new account for
            <strong className="text-white">{email}</strong>
          </span>
        </div>
        <form
          className="flex flex-col gap-4"
          onSubmit={handleSubmit(onSubmitSignUp)}
        >
          <input
            type="text"
            {...register("name")}
            placeholder="Name"
            className="p-2 h-14 rounded-lg bg-white border-none focus:outline-none"
          />
          {errors.name && (
            <span className="text-red-500 text-sm">{errors.name.message}</span>
          )}
          <input
            type="password"
            {...register("password")}
            placeholder="Passwword"
            className="p-2 h-14 rounded-lg bg-white border-none focus:outline-none"
          />
          {errors.password && (
            <span className="text-red-500 text-sm">
              {errors.password.message}
            </span>
          )}
          <div className="flex text-[14px] text-white/70 flex-col">
            <span className="flex gap-1 text-white">
              By selecting Agree and countinue below,
            </span>
            <span className="flex gap-1 text-white">
              I agree to{" "}
              <strong className="text-emerald-600">
                Term of Service and Privacy Policy
              </strong>
            </span>
          </div>
          <input
            type="submit"
            className="flex text-white font-semibold items-center gap-4 bg-emerald-500 p-4 rounded-lg w-full justify-center"
            value={"Agree and Countinue"}
          />
        </form>
      </div>
    </div>
  );
};
// FormSignIn component
// This component is used to log in after the user has created an account.
type FormSignInProps = {
  email: string;
  name: string;
};
const schemaSignIn = yup
  .object({
    password: yup.string().required("Mật khẩu không được để trống"),
  })
  .required();
const FormSignIn = ({ email, name }: FormSignInProps) => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(schemaSignIn),
  });
  return (
    <div className="flex flex-col gap-4 justify-start p-2 rounded-lg shadow-md w-full">
      <h1 className="text-3xl font-bold text-left text-white ms-5">Log in</h1>
      <div className="bg-white/20 rounded-2xl flex flex-col p-4 gap-4">
        <div className="flex text-white p-2 gap-2 items-center">
          <img src="/images/avt.webp" className="w-12 h-12 rounded-full" />
          <div className="flex flex-col">
            <strong>{name}</strong>
            <span className="text-white/70">{email}</span>
          </div>
        </div>

        <form
          className="flex flex-col gap-4"
          onSubmit={handleSubmit((data) => console.log(data))}
        >
          <input
            type="password"
            {...register("password")}
            placeholder="Password"
            className="p-2 h-14 rounded-lg bg-white border-none focus:outline-none"
          />
          {errors.password && (
            <span className="text-red-500 text-sm">
              {errors.password.message}
            </span>
          )}
          <input
            type="submit"
            className="flex text-white font-semibold items-center gap-4 bg-emerald-500 p-4 rounded-lg w-full justify-center"
            value={"Continue"}
          />
        </form>
        <strong className="text-emerald-600">Forgot your password?</strong>
      </div>
    </div>
  );
};
