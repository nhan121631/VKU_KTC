import { useEffect, useState } from "react";
import { FaBatteryHalf, FaWifi } from "react-icons/fa";
import { MdSignalWifiStatusbar3Bar } from "react-icons/md";

export const StatusBar = () => {
  const [time, setTime] = useState("");

  useEffect(() => {
    const updateTime = () => {
      const now = new Date();
      const hours = String(now.getHours()).padStart(2, "0");
      const minutes = String(now.getMinutes()).padStart(2, "0");
      setTime(`${hours}:${minutes}`);
    };

    updateTime();
    const interval = setInterval(updateTime, 1000);

    return () => {
      clearInterval(interval);
    };
  }, []);

  return (
    <div className="container flex justify-between items-center text-white text-2xl ">
      <span className="">{time}</span>
      <div className="flex gap-2 items-center">
        <MdSignalWifiStatusbar3Bar />
        <FaWifi />
        <FaBatteryHalf />
      </div>
    </div>
  );
};
