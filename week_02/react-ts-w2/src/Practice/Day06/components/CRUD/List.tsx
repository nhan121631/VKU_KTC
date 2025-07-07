import React, { useState } from "react";
import { API_BASE_URL } from "./config";
import { Delete } from "./Delete";
import { Update } from "./Update";

type Customer = {
  id: number;
  firstName: string;
  lastName: string;
  email: string;
  phoneNumber: string;
  address: string;
  birthday: string;
  // Add other fields if needed
};

type Props = {
  reload: boolean;
};

export function List({ reload }: Props) {
  const [customers, setCustomers] = React.useState<Customer[]>([]);
  const [loading, setLoading] = useState(true);
  const [selectedCustomer, setSelectCustomer] = React.useState<Customer | null>(
    null
  );
  const handeleOnUpdate = (customer: any) => {
    setCustomers((prev) =>
      prev.map((c: any) => (c.id === customer.id ? customer : c))
    );
    // Close the update form after updating
    setSelectCustomer(null);
  };
  const handleOnSelect = (customer: any) => {
    setSelectCustomer(customer);
  };
  React.useEffect(() => {
    const fetchCustomers = async () => {
      try {
        const response = await fetch(API_BASE_URL);
        if (!response.ok) {
          throw new Error("Network error");
        }
        const data = await response.json();
        setCustomers(data);
        setLoading(false);
      } catch (error) {
        console.log("Fect error: " + error);
      } finally {
        setLoading(false);
      }
    };

    fetchCustomers();
  }, [reload]);
  return (
    <div>
      {loading && <h3>Loading...</h3>}

      <table className="border-collapse border border-gray-400 mx-auto w-full">
        <thead>
          <tr>
            <th className="border border-gray-300">ID</th>
            <th className="border border-gray-300">Full Name</th>
            <th className="border border-gray-300">Email</th>
            <th className="border border-gray-300">Phone</th>
            <th className="border border-gray-300">Address</th>
            <th className="border border-gray-300">Actions</th>
          </tr>
        </thead>
        <tbody>
          {customers.map((customer, index) => {
            return (
              <tr key={index}>
                <td className="border border-gray-300 p-2">{customer.id}</td>
                <td className="border border-gray-300 p-2">
                  {customer.firstName} {customer.lastName}
                </td>
                <td className="border border-gray-300  p-2">
                  {customer.phoneNumber}
                </td>
                <td className="border border-gray-300  p-2">
                  {customer.email}
                </td>
                <td className="border border-gray-300  p-2">
                  {customer.address}
                </td>
                <td className="border border-gray-300 p-2 flex justify-center items-center">
                  <button
                    onClick={() => handleOnSelect(customer)}
                    className="bg-blue-500 text-white py-1 px-2 rounded hover:bg-blue-600 transition-colors mr-2"
                  >
                    Edit
                  </button>
                  <Delete
                    customerID={customer.id}
                    onDelete={(id) => {
                      setCustomers((prev) =>
                        prev.filter((customer: any) => customer.id !== id)
                      );
                    }}
                  />
                </td>
              </tr>
            );
          })}
        </tbody>
      </table>
      {selectedCustomer && (
        <Update
          customerID={selectedCustomer.id}
          onUpdate={handeleOnUpdate}
          onClose={() => setSelectCustomer(null)}
        />
      )}
    </div>
  );
}
