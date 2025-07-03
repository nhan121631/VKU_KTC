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
        <img src={thumbnail} className={styles.thumbnail}></img>
        {percent != 0 ? (
          <span className={styles.percent}>-{percent}%</span>
        ) : (
          ""
        )}
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
