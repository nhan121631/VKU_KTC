import { CiCircleMinus, CiCirclePlus } from "react-icons/ci";
import styles from "./Product.module.css";
import type { Product } from "../types/Product";
import { useContext } from "react";
import { ShoppingCartContext } from "./ProductGrid"; // hoặc tách file riêng nếu cần

type Props = {
  product: Product;
};

export const ProductCard = ({ product }: Props) => {
  const { cart } = useContext(ShoppingCartContext);

  const getQuantityInCart = (productId: number) => {
    const item = cart.items.find(
      (cartItem) => cartItem.product.id === productId
    );
    return item ? item.quantity : 0;
  };
  const quantity = getQuantityInCart(product.id);

  const { addItem, minusItem } = useContext(ShoppingCartContext);
  return (
    <div className={styles.productCard}>
      <span className={styles.productName}>{product.name}</span>
      <p className={styles.productPrice}>
        {product.price.toLocaleString("vi-VN")} đ
      </p>
      <div className={styles.productActive}>
        <button
          className={styles.btn}
          onClick={() => addItem({ product, quantity: 1 })}
        >
          <CiCirclePlus />
        </button>
        <span className={styles.quantity}>{quantity}</span>
        <button
          className={styles.btn}
          onClick={() => minusItem({ product, quantity: 1 })}
        >
          <CiCircleMinus />{" "}
        </button>
      </div>
    </div>
  );
};
