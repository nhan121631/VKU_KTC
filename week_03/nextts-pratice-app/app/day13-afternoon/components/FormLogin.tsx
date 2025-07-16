"use client";
import { useForm, type SubmitHandler } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import { login } from "../services";
import Cookie from "js-cookie";
const schema = yup.object({
  username: yup
    .string()
    .email("Email không hợp lệ")
    .required("Bắt buộc nhập email"),
  password: yup
    .string()
    .min(8, "Mật khẩu phải có ít nhất 8 ký tự")
    .required("Bắt buộc nhập mật khẩu"),
});

interface IFormInput {
  username: string;
  password: string;
}
export default function LoginForm() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<IFormInput>({
    resolver: yupResolver(schema),
    defaultValues: {
      username: "tungnt@softech.vn",
      password: "123456789",
    },
  });

  const onSubmit: SubmitHandler<IFormInput> = async (data) => {
    const rs = await login(data.username, data.password);
    if (rs) {
      const user = {
        id: rs.loggedInUser.id,
        email: rs.loggedInUser.email,
        access_token: rs.access_token,
      };

      // setUser(user);
      Cookie.set("user", JSON.stringify(user));
      Cookie.set("access_token", user.access_token);
      //   console.log("Login successful:", sessionStorage.getItem("access_token"));
      window.location.href = "/day13-afternoon/tasks";
    } else {
      alert("Đăng nhập thất bại. Vui lòng kiểm tra lại thông tin.");
    }
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
      <div>
        <label className="block text-sm font-medium mb-1" htmlFor="email">
          Email
        </label>
        <input
          type="email"
          id="email"
          {...register("username")}
          className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#7f7fd5] transition"
          placeholder="example@email.com"
        />
        {errors.username && (
          <p className="text-red-500 text-sm mt-1">{errors.username.message}</p>
        )}
      </div>

      <div>
        <label className="block text-sm font-medium mb-1" htmlFor="password">
          Mật khẩu
        </label>
        <input
          type="password"
          id="password"
          {...register("password")}
          className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#7f7fd5] transition"
          placeholder="••••••••"
        />
        {errors.password && (
          <p className="text-red-500 text-sm mt-1">{errors.password.message}</p>
        )}
      </div>

      <button
        type="submit"
        className="w-full bg-[#7f7fd5] hover:bg-[#6c6cd1] text-white py-2 rounded-full font-semibold transition duration-200"
      >
        Đăng nhập
      </button>
    </form>
  );
}
