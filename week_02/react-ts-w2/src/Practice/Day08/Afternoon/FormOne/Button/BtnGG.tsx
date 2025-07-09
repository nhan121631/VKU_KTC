import React from "react";
import { FaFacebook } from "react-icons/fa";

type Props = {
  icon: React.ReactNode;
  label: string;
};

export const BtnGG = ({ icon, label }: Props) => {
  return (
    <div className="flex items-center gap-3 bg-gray-100 p-4 rounded-lg w-full">
      <div className=" text-2xl flex-shrink-0">{icon}</div>
      <span className="font-semibold flex-1 text-center">{label}</span>
    </div>
  );
};
