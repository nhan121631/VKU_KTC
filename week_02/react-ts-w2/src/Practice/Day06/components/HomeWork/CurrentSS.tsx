type Props = {
  currentData: any;
};
export const CurrentSS = ({ currentData }: Props) => {
  return (
    <div>
      <div className="container mt-15 flex justify-between items-center">
        <div className="flex flex-col gap-2 text-white ms-10">
          <div className="text-6xl font-bold">
            {currentData?.current?.temp_c} °C
          </div>
          <div className="text-2xl font-bold">
            {currentData?.current?.condition?.text}
          </div>
        </div>
        <div className="me-10">
          <img
            src={currentData?.current?.condition?.icon}
            alt=""
            className="w-[100px] h-[100px]"
          />
        </div>
      </div>
      <div className="container mt-10 flex justify-center gap-10 p-10 bg-white/50 rounded-2xl">
        <div className="flex flex-col gap-2 text-black items-center">
          <div className="text-2xl text-gray-400">Humidity</div>
          <div className="text-3xl font-bold">
            {currentData?.current?.humidity}%
          </div>
        </div>
        <div className="border-l-2 border-gray-300 h-16 self-center mx-6"></div>
        <div className="flex flex-col gap-2  items-center">
          <div className="text-2xl text-gray-400">Wind</div>
          <div className="text-3xl font-bold">
            {currentData?.current?.wind_kph} km/h
          </div>
        </div>
      </div>
    </div>
  );
};
