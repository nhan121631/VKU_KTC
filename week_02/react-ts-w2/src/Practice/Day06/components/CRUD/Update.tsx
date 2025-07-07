import React, { useEffect, type ChangeEvent } from "react";
import { API_BASE_URL } from "./config";
type Props = {
  onClose: () => void;
  customerID: number;
  onUpdate: (customer: any) => void;
};
export const Update = ({ onClose, customerID, onUpdate }: Props) => {
  const [formData, setFormData] = React.useState({
    firstName: "",
    lastName: "",
    email: "",
    phoneNumber: "",
    address: "",
    birthday: "",
  });
  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    const { id, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [id]: value,
    }));
  };

  useEffect(() => {
    const fetchCustomerData = async () => {
      try {
        const response = await fetch(`${API_BASE_URL}/${customerID}`);
        if (!response.ok) {
          throw new Error("Network response was not ok");
        }
        const data = await response.json();
        return data;
      } catch (error) {
        console.log("error: ", error);
      }
    };
    fetchCustomerData().then((data) => {
      if (data) {
        setFormData({
          firstName: data.firstName || "",
          lastName: data.lastName || "",
          email: data.email || "",
          phoneNumber: data.phoneNumber || "",
          address: data.address || "",
          birthday: data.birthday || "",
        });
      }
    });
  }, [customerID]);

  const handleOnSumit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    try {
      const response = await fetch(`${API_BASE_URL}/${customerID}`, {
        method: "PATCH",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });
      if (!response.ok) {
        throw new Error("Network response was not ok");
      }
      const data = await response.json();
      console.log(data);
      if (onUpdate && typeof onUpdate === "function") {
        onUpdate(data); // Call the callback with the created customer data
      }
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <form
      className="fixed inset-0 bg-gray-500 bg-opacity-50 flex justify-center items-center"
      onSubmit={handleOnSumit}
    >
      <div className="bg-white p-8 rounded-lg shadow-lg w-1/3">
        <h2 className="text-2xl font-semibold mb-4">Update Customer</h2>
        <div className="mb-4">
          <div>
            <div className="w-full p-4 bg-white rounded shadow">
              <div className="mb-4">
                <label
                  className="block text-sm font-medium text-gray-700 mb-1"
                  htmlFor="firstName"
                >
                  First Name
                </label>
                <input
                  type="text"
                  id="firstName"
                  value={formData.firstName}
                  className="w-full p-2 border border-gray-300 rounded"
                  onChange={handleChange}
                />
              </div>
              <div className="mb-4">
                <label
                  className="block text-sm font-medium text-gray-700 mb-1"
                  htmlFor="lastName"
                >
                  Last Name
                </label>
                <input
                  type="text"
                  id="lastName"
                  value={formData.lastName}
                  className="w-full p-2 border border-gray-300 rounded"
                  onChange={handleChange}
                />
              </div>
              <div className="mb-4">
                <label
                  className="block text-sm font-medium text-gray-700 mb-1"
                  htmlFor="email"
                >
                  Email
                </label>
                <input
                  type="email"
                  id="email"
                  value={formData.email}
                  className="w-full p-2 border border-gray-300 rounded"
                  onChange={handleChange}
                />
              </div>
              <div className="mb-4">
                <label
                  className="block text-sm font-medium text-gray-700 mb-1"
                  htmlFor="phoneNumber"
                >
                  Phone Number
                </label>
                <input
                  type="tel"
                  id="phoneNumber"
                  value={formData.phoneNumber}
                  className="w-full p-2 border border-gray-300 rounded"
                  onChange={handleChange}
                />
              </div>
              <div className="mb-4">
                <label
                  className="block text-sm font-medium text-gray-700 mb-1"
                  htmlFor="address"
                >
                  Address
                </label>
                <input
                  type="text"
                  id="address"
                  value={formData.address}
                  className="w-full p-2 border border-gray-300 rounded"
                  onChange={handleChange}
                />
              </div>
              <div className="mb-4">
                <label
                  className="block text-sm font-medium text-gray-700 mb-1"
                  htmlFor="birthday"
                >
                  Birthday
                </label>
                <input
                  type="date"
                  id="birthday"
                  value={formData.birthday}
                  className="w-full p-2 border border-gray-300 rounded"
                  onChange={handleChange}
                />
              </div>
            </div>
          </div>
        </div>
        {/* BUTTONS */}
        <div className="flex justify-end gap-2">
          <button
            // onClick={onClose}
            className="w-full bg-gray-500 text-white py-2 rounded hover:bg-gray-600 transition-colors"
            onClick={onClose}
          >
            Close
          </button>
          <button
            type="submit"
            className="w-full bg-blue-500 text-white py-2 rounded hover:bg-blue-600 transition-colors"
          >
            Update Customer
          </button>
        </div>
      </div>
    </form>
  );
};
