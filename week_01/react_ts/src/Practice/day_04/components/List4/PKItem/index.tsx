import { ImageItem } from "../ImageItem";
import styles from "./PKItem.module.css";
type Props = {
  thumbnail: string;
  name: string;
  percent?: number;
  price: string;
  priceOld?: string;
};

export function PKItem({
  thumbnail,
  name,
  percent = 0,
  price,
  priceOld = "",
}: Props) {
  return (
    <div className={styles.containerCard}>
      <div className={styles.rowFirst}>
        <ImageItem thumbnail={thumbnail} percent={percent} />
      </div>
      <h3>{name}</h3>
      <div className={styles.rowLast}>
        <span className={styles.price}>{price}</span>
        {priceOld != "" ? (
          <span className={styles.priceOld}>{priceOld}</span>
        ) : (
          ""
        )}
      </div>
    </div>
  );
}
