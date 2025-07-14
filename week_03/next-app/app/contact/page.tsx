import React from "react";

const Page = () => {
  return (
    <div className="flex items-center justify-center min-h-[100vh] bg-gradient-to-br from-[#6dd5fa] to-[#2980b9]">
      <div className="bg-white rounded-2xl shadow-lg p-8 w-full max-w-lg">
        <h1 className="text-3xl font-extrabold text-[#2980b9] mb-4 text-center">
          Contact Us
        </h1>
        <p className="text-gray-600 mb-2 text-center">
          Feel free to reach out with any questions or feedback.
        </p>
        <p className="text-gray-600 mb-6 text-center">
          We are here to help you!
        </p>
        <form className="space-y-4">
          <div>
            <label className="block mb-1 font-medium text-gray-700">
              Your Name
            </label>
            <input
              type="text"
              className="w-full px-3 py-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-[#6dd5fa]"
              placeholder="Enter your name"
            />
          </div>
          <div>
            <label className="block mb-1 font-medium text-gray-700">
              Your Email
            </label>
            <input
              type="email"
              className="w-full px-3 py-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-[#6dd5fa]"
              placeholder="Enter your email"
            />
          </div>
          <div>
            <label className="block mb-1 font-medium text-gray-700">
              Message
            </label>
            <textarea
              rows={4}
              className="w-full px-3 py-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-[#6dd5fa]"
              placeholder="Type your message..."
            />
          </div>
          <button
            type="submit"
            className="w-full bg-gradient-to-r from-[#2980b9] to-[#6dd5fa] text-white py-2 rounded-lg font-semibold shadow hover:from-[#2573a6] hover:to-[#4fc3f7] hover:shadow-lg transition-all duration-200"
          >
            Send Message
          </button>
        </form>
      </div>
    </div>
  );
};
export default Page;
