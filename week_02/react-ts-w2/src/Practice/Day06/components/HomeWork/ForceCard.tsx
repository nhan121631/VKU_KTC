import React from "react";

type Props = {
  weatherDatas?:any;
};

export const ForceCard: React.FC<Props> = ({ weatherDatas }) => {
  if (!weatherDatas || weatherDatas.length === 0) return null;

  const hoursToday = weatherDatas[0].hour;
  const hoursTomorrow = weatherDatas[1]?.hour || [];
  const allHours = [...hoursToday, ...hoursTomorrow];

  const now = new Date();
  const nowHour = now.getHours();

  // Lấy 4 mốc giờ liên tiếp bắt đầu từ giờ hiện tại
  const nearest4 = allHours.slice(nowHour, nowHour + 4);

  return (
    <div className="flex justify-center gap-2 mt-6 bg-white rounded-2xl p-4">
      {nearest4.map((h:any, idx:any) => (
        <div
          key={idx}
          className=" rounded-xl p-3 flex flex-col items-center w-30 h-36"
        >
          <div className="font-semibold">{h.time.slice(-5)}</div>
          <img src={h.condition.icon} alt={h.condition.text} className="w-10 h-10" />
          <div className="text-lg font-bold">{h.temp_c}°C</div>
          <div className="text-xs">{h.condition.text}</div>
        </div>
      ))}
    </div>
  );
};
