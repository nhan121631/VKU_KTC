import React from "react";
import { CurrentSS } from "./CurrentSS";
import { TopBar } from "./TopBar";
import { ForceCard } from "./ForceCard";

// export interface WeatherData {
//   current: {
//     temp_c: number;
//     condition: {
//       text: string;
//       icon: string;
//     };
//     humidity:number;
//     wind_kph:number;
//   };
// }
export interface WeatherData {
  current: {
    temp_c: number;
    condition: {
      text: string;
      icon: string;
    };
    humidity: number;
    wind_kph: number;
  };
  forecast?: {
    forecastday: Array<{
      hour: Array<{
        time: string;
        temp_c: number;
        condition: {
          text: string;
          icon: string;
        };
        humidity: number;
        wind_kph: number;
      }>;
    }>;
  };
}

export const Phone = () => {
  const [weatherDataCurrent, setWeatherDataCurrent] =
    React.useState<WeatherData | null>(null);
  const handleSearch = (current: any) => {
    setWeatherDataCurrent(current);
    console.log("Current", current);
  };
  return (
    <div className="container mt-5 bg-blue-200 w-[500px] h-[700px] mx-auto rounded-2xl p-5 pt-3">
      <TopBar onSearch={handleSearch} />
      <CurrentSS currentData={weatherDataCurrent} />
      <ForceCard weatherDatas={weatherDataCurrent?.forecast?.forecastday} />
    </div>
  );
};
