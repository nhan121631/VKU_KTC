import styles from "./Product.module.css";
import { IoCartOutline } from "react-icons/io5";
type Props = {
  quantity: number;
};

export const CartIcon = ({ quantity }: Props) => {
  return (
    <div className={styles.cartIconContainer}>
      <IoCartOutline className={styles.cartIcon} />

      <span>Giỏ hàng của bạn {quantity} sản phẩm</span>
    </div>
  );
};
