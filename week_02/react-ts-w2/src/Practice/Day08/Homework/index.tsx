import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
const schema = yup.object({
  fullName: yup
    .string()
    .min(3, "Full Name phải có ít nhất 3 ký tự")
    .required("Vui lòng nhập Full Name"),

  email: yup
    .string()
    .email("Email không hợp lệ")
    .required("Vui lòng nhập Email"),

  password: yup
    .string()
    .min(8, "Mật khẩu phải có ít nhất 8 ký tự")
    .matches(/[A-Za-z]/, "Phải có chữ cái")
    .matches(/[0-9]/, "Phải có số")
    .required("Vui lòng nhập mật khẩu"),

  confirmPassword: yup
    .string()
    .oneOf([yup.ref("password")], "Mật khẩu xác nhận không khớp")
    .required("Vui lòng xác nhận mật khẩu"),

  phone: yup
    .string()
    .matches(/^\d{10,}$/, "Số điện thoại phải có ít nhất 10 chữ số")
    .required("Vui lòng nhập số điện thoại"),

  gender: yup.string().required("Vui lòng chọn giới tính"),

  dob: yup
    .date()
    .required("Vui lòng chọn ngày sinh")
    .test("age", "Phải từ 18 tuổi trở lên", (value) => {
      if (!value) return false;
      const today = new Date();
      const dob = new Date(value);
      const age = today.getFullYear() - dob.getFullYear();
      return age >= 18;
    }),

  country: yup.string().required("Vui lòng chọn quốc gia"),

  hobbies: yup.array().min(1, "Chọn ít nhất 1 sở thích"),

  profilePicture: yup
    .mixed()
    .test("fileType", "Chỉ chấp nhận ảnh jpg/jpeg/png", (value) => {
      if (!value || !(value instanceof FileList) || value.length === 0)
        return false;
      const file = value[0];
      return (
        file && ["image/jpeg", "image/jpg", "image/png"].includes(file.type)
      );
    })
    .required("Vui lòng chọn ảnh"),

  bio: yup.string().max(300, "Bio tối đa 300 ký tự"),
});
export const HomeWork08 = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm({ resolver: yupResolver(schema) });

  const onSubmit = (data: any) => {
    alert("Đăng ký thành công!\n" + JSON.stringify(data, null, 2));
    reset();
  };

  return (
    <div className="min-h-screen w-full flex items-center justify-center bg-gray-50 p-6">
      <form
        className="w-full max-w-xl bg-white p-8 sm:p-10 rounded-2xl shadow-xl space-y-6 border border-blue-100 overflow-y-auto max-h-[90vh]"
        onSubmit={handleSubmit(onSubmit)}
        autoComplete="off"
      >
        <h1 className="text-4xl font-extrabold text-center text-blue-700 tracking-tight mb-8">
          Register Form
        </h1>

        {/* Full Name */}
        <div>
          <label
            htmlFor="fullName"
            className="block text-gray-700 font-semibold mb-2"
          >
            Full Name
          </label>
          <input
            type="text"
            id="fullName"
            {...register("fullName")}
            placeholder="Enter your full name"
            className="w-full border border-gray-300 rounded-lg p-3 focus:outline-none focus:ring-2 focus:ring-blue-500 transition-all duration-200"
            aria-label="Full Name"
          />
          {errors.fullName && (
            <p className="text-red-500 text-sm mt-1">
              {errors.fullName.message as string}
            </p>
          )}
        </div>

        {/* Email */}
        <div>
          <label
            htmlFor="email"
            className="block text-gray-700 font-semibold mb-2"
          >
            Email
          </label>
          <input
            type="email"
            id="email"
            {...register("email")}
            placeholder="Enter your email"
            className="w-full border border-gray-300 rounded-lg p-3 focus:outline-none focus:ring-2 focus:ring-blue-500 transition-all duration-200"
            aria-label="Email Address"
          />
          {errors.email && (
            <p className="text-red-500 text-sm mt-1">
              {errors.email.message as string}
            </p>
          )}
        </div>

        {/* Password */}
        <div>
          <label
            htmlFor="password"
            className="block text-gray-700 font-semibold mb-2"
          >
            Password
          </label>
          <input
            type="password"
            id="password"
            {...register("password")}
            placeholder="Enter password"
            className="w-full border border-gray-300 rounded-lg p-3 focus:outline-none focus:ring-2 focus:ring-blue-500 transition-all duration-200"
            aria-label="Password"
          />
          {errors.password && (
            <p className="text-red-500 text-sm mt-1">
              {errors.password.message as string}
            </p>
          )}
        </div>

        {/* Confirm Password */}
        <div>
          <label
            htmlFor="confirmPassword"
            className="block text-gray-700 font-semibold mb-2"
          >
            Confirm Password
          </label>
          <input
            type="password"
            id="confirmPassword"
            {...register("confirmPassword")}
            placeholder="Re-enter password"
            className="w-full border border-gray-300 rounded-lg p-3 focus:outline-none focus:ring-2 focus:ring-blue-500 transition-all duration-200"
            aria-label="Confirm Password"
          />
          {errors.confirmPassword && (
            <p className="text-red-500 text-sm mt-1">
              {errors.confirmPassword.message as string}
            </p>
          )}
        </div>

        {/* Phone */}
        <div>
          <label
            htmlFor="phone"
            className="block text-gray-700 font-semibold mb-2"
          >
            Phone Number
          </label>
          <input
            type="tel"
            id="phone"
            {...register("phone")}
            placeholder="Enter your phone number"
            className="w-full border border-gray-300 rounded-lg p-3 focus:outline-none focus:ring-2 focus:ring-blue-500 transition-all duration-200"
            aria-label="Phone Number"
          />
          {errors.phone && (
            <p className="text-red-500 text-sm mt-1">
              {errors.phone.message as string}
            </p>
          )}
        </div>

        {/* Gender */}
        <div>
          <label className="block text-gray-700 font-semibold mb-2">
            Gender
          </label>
          <div className="flex flex-wrap gap-4 mt-1">
            <label
              htmlFor="male"
              className="flex items-center gap-2 cursor-pointer"
            >
              <input
                type="radio"
                id="male"
                value="male"
                {...register("gender")}
                className="accent-blue-600 h-4 w-4"
                aria-label="Male"
              />
              <span>Male</span>
            </label>
            <label
              htmlFor="female"
              className="flex items-center gap-2 cursor-pointer"
            >
              <input
                type="radio"
                id="female"
                value="female"
                {...register("gender")}
                className="accent-blue-600 h-4 w-4"
                aria-label="Female"
              />
              <span>Female</span>
            </label>
            <label
              htmlFor="otherGender"
              className="flex items-center gap-2 cursor-pointer"
            >
              <input
                type="radio"
                id="otherGender"
                value="other"
                {...register("gender")}
                className="accent-blue-600 h-4 w-4"
                aria-label="Other Gender"
              />
              <span>Other</span>
            </label>
          </div>
          {errors.gender && (
            <p className="text-red-500 text-sm mt-1">
              {errors.gender.message as string}
            </p>
          )}
        </div>

        {/* Date of Birth */}
        <div>
          <label
            htmlFor="dob"
            className="block text-gray-700 font-semibold mb-2"
          >
            Date of Birth
          </label>
          <input
            type="date"
            id="dob"
            {...register("dob")}
            className="w-full border border-gray-300 rounded-lg p-3 focus:outline-none focus:ring-2 focus:ring-blue-500 transition-all duration-200"
            aria-label="Date of Birth"
          />
          {errors.dob && (
            <p className="text-red-500 text-sm mt-1">
              {errors.dob.message as string}
            </p>
          )}
        </div>

        {/* Country */}
        <div>
          <label
            htmlFor="country"
            className="block text-gray-700 font-semibold mb-2"
          >
            Country
          </label>
          <select
            id="country"
            {...register("country")}
            className="w-full border border-gray-300 rounded-lg p-3 focus:outline-none focus:ring-2 focus:ring-blue-500 transition-all duration-200 bg-white"
            aria-label="Select Country"
            defaultValue=""
          >
            <option value="" disabled>
              Select Country
            </option>
            <option value="vn">Vietnam</option>
            <option value="us">United States</option>
            <option value="uk">United Kingdom</option>
          </select>
          {errors.country && (
            <p className="text-red-500 text-sm mt-1">
              {errors.country.message as string}
            </p>
          )}
        </div>

        {/* Hobbies */}
        <div>
          <label className="block text-gray-700 font-semibold mb-2">
            Hobbies
          </label>
          <div className="flex flex-wrap gap-4 mt-1">
            <label
              htmlFor="reading"
              className="flex items-center gap-2 cursor-pointer"
            >
              <input
                type="checkbox"
                id="reading"
                value="reading"
                {...register("hobbies")}
                className="accent-blue-600 h-4 w-4"
                aria-label="Reading Hobby"
              />
              <span>Reading</span>
            </label>
            <label
              htmlFor="traveling"
              className="flex items-center gap-2 cursor-pointer"
            >
              <input
                type="checkbox"
                id="traveling"
                value="traveling"
                {...register("hobbies")}
                className="accent-blue-600 h-4 w-4"
                aria-label="Traveling Hobby"
              />
              <span>Traveling</span>
            </label>
            <label
              htmlFor="gaming"
              className="flex items-center gap-2 cursor-pointer"
            >
              <input
                type="checkbox"
                id="gaming"
                value="gaming"
                {...register("hobbies")}
                className="accent-blue-600 h-4 w-4"
                aria-label="Gaming Hobby"
              />
              <span>Gaming</span>
            </label>
          </div>
          {errors.hobbies && (
            <p className="text-red-500 text-sm mt-1">
              {errors.hobbies.message as string}
            </p>
          )}
        </div>

        {/* Profile Picture */}
        <div>
          <label
            htmlFor="profilePicture"
            className="block text-gray-700 font-semibold mb-2"
          >
            Profile Picture
          </label>
          <input
            type="file"
            id="profilePicture"
            accept="image/*"
            {...register("profilePicture")}
            className="w-full border border-gray-300 rounded-lg p-3 file:mr-4 file:py-2 file:px-4 file:rounded-lg file:border-0 file:text-sm file:font-semibold file:bg-blue-50 file:text-blue-700 hover:file:bg-blue-100 cursor-pointer focus:outline-none focus:ring-2 focus:ring-blue-500 transition-all duration-200"
            aria-label="Upload Profile Picture"
          />
          {errors.profilePicture && (
            <p className="text-red-500 text-sm mt-1">
              {errors.profilePicture.message as string}
            </p>
          )}
        </div>

        {/* Bio */}
        <div>
          <label
            htmlFor="bio"
            className="block text-gray-700 font-semibold mb-2"
          >
            Bio
          </label>
          <textarea
            id="bio"
            {...register("bio")}
            rows={4}
            placeholder="Tell us about yourself..."
            className="w-full border border-gray-300 rounded-lg p-3 focus:outline-none focus:ring-2 focus:ring-blue-500 transition-all duration-200 resize-y"
            aria-label="Your Bio"
          />
          {errors.bio && (
            <p className="text-red-500 text-sm mt-1">
              {errors.bio.message as string}
            </p>
          )}
        </div>

        {/* Submit Button */}
        <button
          type="submit"
          className="w-full bg-gradient-to-r from-blue-600 to-blue-400 text-white font-bold py-3 rounded-lg mt-8 shadow-lg hover:from-blue-700 hover:to-blue-500 transition-all duration-200 text-lg tracking-wide transform hover:scale-105"
        >
          Register
        </button>
      </form>
    </div>
  );
};
