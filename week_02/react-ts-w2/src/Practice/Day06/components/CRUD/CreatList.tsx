import React from "react";
import { API_BASE_URL } from "./config";

type Props = {
  onCreate: (Customer: any) => void;
};
export const CreatList = ({ onCreate }: Props) => {
  const [formData, setFormData] = React.useState({
    firstName: "",
    lastName: "",
    email: "",
    phoneNumber: "",
    address: "",
    birthday: "",
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { id, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [id]: value,
    }));
  };
  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    console.log("Form submitted:", formData);

    try {
      const response = await fetch(API_BASE_URL, {
        method: "POST",
        headers: {
          "Content-Type": "application/json", // ✅ thêm dòng này
        },
        body: JSON.stringify(formData),
      });
      if (!response.ok) {
        console.log("Errok nework");
      }
      const data = await response.json();
      console.log("Customer created successfully:", data);

      // Reset form data after successful creation
      setFormData({
        firstName: "",
        lastName: "",
        phoneNumber: "",
        address: "",
        birthday: "",
        email: "",
      });
      alert("Customer created successfully!");
      if (onCreate && typeof onCreate === "function") {
        onCreate(data);
      }
      console.log(data);
    } catch (error) {
      console.log("fecth error: " + error);
    } finally {
      console.log("error");
    }
  };
  return (
    <div>
      <form
        className="w-full p-4 bg-white rounded shadow mb-4"
        onSubmit={handleSubmit}
      >
        <h2 className="text-xl font-bold mb-4">Create Customer</h2>
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
        <button
          type="submit"
          className="w-full bg-blue-500 text-white py-2 rounded hover:bg-blue-600 transition-colors"
        >
          Create Customer
        </button>
      </form>
    </div>
  );
};
