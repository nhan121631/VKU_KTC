import React from "react";

const LoginPage = () => {
  return (
    <div className="flex items-center justify-center min-h-[100vh] bg-gradient-to-br from-[#6dd5fa] to-[#2980b9]">
      <div className="bg-white rounded-2xl shadow-lg p-8 w-full max-w-md">
        <h1 className="text-3xl font-extrabold text-[#2980b9] mb-4 text-center">
          Login
        </h1>
        <p className="text-gray-600 mb-6 text-center">
          Please enter your credentials to access your account.
        </p>
        <form className="space-y-4">
          <div>
            <label className="block mb-1 font-medium text-gray-700">
              Email
            </label>
            <input
              type="email"
              className="w-full px-3 py-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-[#6dd5fa]"
              placeholder="Enter your email"
            />
          </div>
          <div>
            <label className="block mb-1 font-medium text-gray-700">
              Password
            </label>
            <input
              type="password"
              className="w-full px-3 py-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-[#6dd5fa]"
              placeholder="Enter your password"
            />
          </div>
          <button
            type="submit"
            className="w-full bg-gradient-to-r from-[#2980b9] to-[#6dd5fa] text-white py-2 rounded-lg font-semibold shadow hover:from-[#2573a6] hover:to-[#4fc3f7] hover:shadow-lg transition-all duration-200"
          >
            Login
          </button>
        </form>
      </div>
    </div>
  );
};

export default LoginPage;
