import type { Product } from "../type/Product";
import { ImageItem } from "./ImageItem";
import styles from "./Product.module.css";
type Props = {
  product: Product;
};

export function ProductCard({ product }: Props) {
  return (
    <div className={styles.containerCard}>
      <div className={styles.rowFirst}>
        <ImageItem thumbnail={product.images[0]} />
      </div>
      <h3 className={styles.title + " font-semibold"}>{product.title}</h3>
      <div className={styles.rowLast}>
        <span className={styles.price}>{product.price} $</span>
      </div>
    </div>
  );
}
