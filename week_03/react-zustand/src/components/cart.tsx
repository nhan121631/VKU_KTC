import { useShoppingCartStore } from "../stores/ShopingCartStores";

export default function Cart() {
  const { items, removeItem, decreaseItem, addItem } = useShoppingCartStore(
    (state) => state
  );
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
                    <button
                      onClick={() => decreaseItem(item.product.id)}
                      className="bg-yellow-500 hover:bg-yellow-600 text-white px-2 py-1 rounded mr-2"
                    >
                      Decrease
                    </button>
                    <button
                      onClick={() => addItem(item.product, 1)}
                      className="bg-green-500 hover:bg-green-600 text-white px-2 py-1 rounded mr-2"
                    >
                      Add
                    </button>
                    <button
                      onClick={() => removeItem(item.product.id)}
                      className="bg-red-500 hover:bg-red-600 text-white px-2 py-1 rounded"
                    >
                      Remove
                    </button>
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
}
