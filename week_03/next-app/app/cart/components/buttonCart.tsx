import { useShoppingCartStore } from "@/app/stores/ShopingCartStores";
import { Item } from "@/app/stores/ShopingCartStores";

type ButtonCartProps = {
  item: Item;
};

export const ButtonCart = ({ item }: ButtonCartProps) => {
  const { removeItem, decreaseItem, addItem } = useShoppingCartStore(
    (state) => state
  );
  return (
    <div className="flex gap-2">
      <button
        onClick={() => decreaseItem(item.product.id)}
        className="bg-yellow-500 hover:bg-yellow-600 text-white px-2 py-1 rounded"
      >
        Decrease
      </button>
      <button
        onClick={() => addItem(item.product, 1)}
        className="bg-green-500 hover:bg-green-600 text-white px-2 py-1 rounded"
      >
        Add
      </button>
      <button
        onClick={() => removeItem(item.product.id)}
        className="bg-red-500 hover:bg-red-600 text-white px-2 py-1 rounded"
      >
        Remove
      </button>
    </div>
  );
};
