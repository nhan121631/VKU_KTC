/* eslint-disable @typescript-eslint/no-explicit-any */
import { useEffect, useState } from "react";
import apiClient from "../lib/api-client-ad";
import {
  useShoppingCartStore,
  type Product,
} from "../stores/ShopingCartStores";

export const Products = () => {
  const [products, setProducts] = useState<Product[]>([]);
  const { addItem } = useShoppingCartStore((state) => state);
  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const products = (await apiClient.get("/products")) as Product[];
        setProducts(products);
        console.log("Products fetched successfully:", products);
      } catch (error) {
        console.error("Error fetching products:", error);
      }
    };
    fetchProducts();
  }, []);
  return (
    <div>
      <h2>Products</h2>
      <div className="overflow-x-auto rounded-lg mt-4">
        <table className="min-w-full border border-gray-200 rounded-lg overflow-hidden text-sm">
          <thead className="bg-gray-100 text-gray-700">
            <tr>
              <th className="py-2 px-4 border-b border-gray-200">ID</th>
              <th className="py-2 px-4 border-b border-gray-200">Title</th>
              <th className="py-2 px-4 border-b border-gray-200">Price</th>
              <th className="py-2 px-4 border-b border-gray-200">Category</th>
              <th className="py-2 px-4 border-b border-gray-200">Actions</th>
            </tr>
          </thead>
          <tbody>
            {(products ?? []).map((product) => (
              <tr key={product.id} className="hover:bg-gray-50 transition">
                <td className="py-2 px-4 border-b border-gray-200 text-center">
                  {product.id}
                </td>
                <td className="py-2 px-4 border-b border-gray-200">
                  {product.title}
                </td>
                <td className="py-2 px-4 border-b border-gray-200">
                  ${product.price}
                </td>
                <td className="py-2 px-4 border-b border-gray-200">
                  {product.category}
                </td>
                <td className="py-2 px-4 border-b border-gray-200 text-center">
                  <button
                    onClick={() => addItem(product)}
                    className="bg-blue-500 text-white px-3 py-1 rounded hover:bg-blue-600 transition"
                  >
                    Add to Cart
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};
