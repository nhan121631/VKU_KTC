"use client";
import { useShoppingCartStore } from "@/app/stores/ShopingCartStores";
import { ButtonCart } from "./buttonCart";

export const Cart = () => {
  const { items } = useShoppingCartStore((state) => state);
  return (
    <div className="cart">
      <h2 className="text-2xl font-bold mb-4">Shopping Cart</h2>
      <div className="overflow-x-auto rounded-lg mt-4">
        <table className="min-w-full border border-gray-200 rounded-lg overflow-hidden text-sm">
          <thead className="bg-gray-100 text-gray-700">
            <tr>
              <th className="py-2 px-4 border-b border-gray-200">Product</th>
              <th className="py-2 px-4 border-b border-gray-200">Quantity</th>
              <th className="py-2 px-4 border-b border-gray-200">Price</th>
              <th className="py-2 px-4 border-b border-gray-200">Actions</th>
            </tr>
          </thead>
          <tbody>
            {items.length === 0 ? (
              <tr>
                <td colSpan={4} className="text-center py-4 text-gray-500">
                  Cart is empty
                </td>
              </tr>
            ) : (
              items.map((item) => (
                <tr
                  key={item.product.id}
                  className="hover:bg-gray-50 transition"
                >
                  <td className="py-2 px-4 border-b border-gray-200">
                    {item.product.title}
                  </td>
                  <td className="py-2 px-4 border-b border-gray-200 text-center">
                    {item.quantity}
                  </td>
                  <td className="py-2 px-4 border-b border-gray-200 text-center">
                    ${item.product.price * item.quantity}
                  </td>
                  <td className="py-2 px-4 border-b border-gray-200 text-center">
                    <ButtonCart item={item} />
                  </td>
                </tr>
              ))
            )}
          </tbody>
        </table>
        {/* Tổng tiền */}
        {items.length > 0 && (
          <div className="text-right mt-4 font-semibold text-lg">
            Total: $
            {items
              .reduce(
                (sum, item) => sum + item.product.price * item.quantity,
                0
              )
              .toFixed(2)}
          </div>
        )}
      </div>
    </div>
  );
};
