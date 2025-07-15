"use client";

import React from "react";

export default function Page() {
  const [number, setNumber] = React.useState(0);
  const handleBtn = () => {
    setNumber((prev) => prev + 1);

    console.log(number);
  };
  return (
    <div className="flex flex-col items-center justify-center min-h-[60vh]">
      <h1 className="text-4xl font-extrabold text-[#2980b9] mb-4">Blog</h1>
      <p className="text-lg text-gray-600 mb-2">
        Welcome to the blog! Here you will find the latest articles and updates.
      </p>
      <div className="w-16 h-1 bg-gradient-to-r from-[#2980b9] to-[#6dd5fa] rounded-full mb-6"></div>
      <div className="text-gray-400 italic">No posts yet. Stay tuned!</div>
      <div>{number}</div>
      <button className="bg-amber-200 p-2" onClick={handleBtn}>
        {" "}
        btn
      </button>
    </div>
  );
}
