import type { CartItem } from "../types/CartItem";
import styles from "./Product.module.css";
type Props = {
  item: CartItem;
  removeItem: (itemId: number) => void;
};
export const ItemDropDown = ({ item, removeItem }: Props) => {
  return (
    <div className={styles.containerDropItem}>
      <button
        className={styles.btnDel}
        onClick={() => removeItem(item.product.id)}
      >
        Xóa
      </button>
      <span>{item.product.name} </span>
      <span>
        {item.quantity} x {item.product.price.toLocaleString("vi-VN")} đ
      </span>
    </div>
  );
};
