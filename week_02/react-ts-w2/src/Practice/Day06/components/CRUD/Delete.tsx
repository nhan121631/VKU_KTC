import { API_BASE_URL } from "./config";

type Props = {
  customerID: number;
  onDelete?: (id: number) => void;
};
export const Delete = ({ customerID, onDelete }: Props) => {
  const handOnDelete = async (id: number) => {
    try {
      if (!confirm("Are you sure you want to delete this customer?")) {
        console.log("Delete operation cancelled");
        return;
      }
      const response = await fetch(`${API_BASE_URL}/${id}`, {
        method: "delete",
      });
      if (!response.ok) {
        throw new Error("Error Network");
      }
      const data = await response.json();
      console.log("Customer deleted successfully:", data);
      if (onDelete && typeof onDelete === "function") {
        onDelete(id);
      }
    } catch (error) {
      console.log("error: ", error);
    }
  };
  return (
    <button
      className="bg-red-500 text-white py-1 px-2  rounded-md"
      onClick={() => handOnDelete(customerID)}
    >
      Delete
    </button>
  );
};
