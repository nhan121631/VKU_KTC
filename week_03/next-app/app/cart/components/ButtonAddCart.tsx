"use client";
import { useShoppingCartStore } from "@/app/stores/ShopingCartStores";
import { Product } from "@/app/stores/ShopingCartStores";

type ButtonAddCartProps = {
  product: Product;
};

export const ButtonAddCart = ({ product }: ButtonAddCartProps) => {
  const { addItem } = useShoppingCartStore((state) => state);
  return (
    <button
      onClick={() => addItem(product)}
      className="bg-blue-500 text-white px-3 py-1 rounded hover:bg-blue-600 transition"
    >
      Add to Cart
    </button>
  );
};
