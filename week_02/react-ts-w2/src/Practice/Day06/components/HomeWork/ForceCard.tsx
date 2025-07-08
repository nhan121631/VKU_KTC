import React from "react";

type Props = {
  weatherDatas?: any;
};

export const ForceCard: React.FC<Props> = ({ weatherDatas }) => {
  if (!weatherDatas || weatherDatas.length === 0) return null;

  const hoursToday = weatherDatas[0]?.hour;

  if (!hoursToday || hoursToday.length === 0) return null;

  return (
    <div className="flex justify-start gap-2 mt-6 bg-white rounded-2xl p-2 overflow-x-auto [&::-webkit-scrollbar]:hidden">
      {hoursToday.map((h: any, idx: number) => (
        <div
          key={idx}
          className=" rounded-xl p-3 flex flex-col items-center w-30 h-36"
        >
          <div className="font-semibold">{h.time.slice(-5)}</div>
          <img
            src={h.condition.icon}
            alt={h.condition.text}
            className="w-10 h-10"
          />
          <div className="text-lg font-bold">{h.temp_c}°C</div>
        </div>
      ))}
    </div>
  );
};
