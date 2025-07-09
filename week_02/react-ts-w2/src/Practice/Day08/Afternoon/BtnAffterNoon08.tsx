import { Link } from "react-router";

export const BtnAfternoonDay8 = () => {
  return (
    <div className="flex flex-col bg-gray-100 gap-2">
      <Link to="/day08/afternoon/formone">
        <div className="flex items-center bg-gray-100">
          <button className="px-6 py-3 bg-blue-600 text-white rounded-lg shadow-md hover:bg-blue-700 transition-colors duration-300">
            Form One
          </button>
        </div>
      </Link>
      <Link to="/day08/afternoon/formtwo">
        <div className="flex items-center bg-gray-100">
          <button className="px-6 py-3 bg-green-600 text-white rounded-lg shadow-md hover:bg-green-700 transition-colors duration-300">
            Form Two
          </button>
        </div>
      </Link>
    </div>
  );
};
