import { useContext } from "react";
import { ItemDropDown } from "./ItemDropdown";
import styles from "./Product.module.css";
import { ShoppingCartContext } from "./ProductGrid";
type Props = {
  isActiveDropdown: boolean;
};
export const CartDropdown = ({ isActiveDropdown = false }: Props) => {
  const { cart, total, removeItem } = useContext(ShoppingCartContext);
  return (
    <div
      className={`${styles.containerCartDrop} ${
        isActiveDropdown ? styles.isDropdownActive : ""
      }`}
    >
      <div className={styles.Items}>
        {cart.items.map((item, index) => (
          <ItemDropDown key={index} item={item} removeItem={removeItem} />
        ))}
      </div>
      <hr />
      <div className={styles.total}>
        <h3>Tổng cộng</h3>
        <span className={styles.totalPrice}>
          {total.toLocaleString("vi-VN")} đ
        </span>
      </div>
      <button className={styles.btnCart}>Xem giỏ hàng</button>
    </div>
  );
};
