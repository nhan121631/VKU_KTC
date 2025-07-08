import { useState, useEffect } from "react";
import { FaSearch } from "react-icons/fa";
type Props = {
  onSearch: (current: any) => void;
};
const url =
  " https://api.weatherapi.com/v1/forecast.json?key=c9a0ca46550648b29ce125849232709&q=";
export const SearchBar = ({ onSearch }: Props) => {
  const [city, setCity] = useState("Hà Nội");
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setCity(e.target.value);
    console.log(city);
  };
  const handleSearch = async () => {
    try {
      const response = await fetch(
        url + city + "&days=1&aqi=no&alerts=no&lang=vi"
      );
      if (!response.ok) {
        throw new Error("Failed to fetch weather data");
      }
      const data = await response.json();
      onSearch(data);
      console.log(data);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    handleSearch();
    // eslint-disable-next-line
  }, []);

  return (
    <div className="container flex items-center gap-2 mt-5 w-full h-10 rounded-full p-5 bg-gray-50 text-black border-none focus:outline-none focus:ring-0">
      <i>
        <FaSearch onClick={handleSearch} />
      </i>
      <input
        type="text"
        value={city}
        placeholder="HaNoi"
        className="w-full h-10 rounded-full p-5 bg-gray-50 text-black border-none focus:outline-none focus:ring-0"
        onChange={handleChange}
      />
    </div>
  );
};
