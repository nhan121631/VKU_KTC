import { FaStar } from "react-icons/fa";
import { ImageItem } from "../../List4/ImageItem";
import styles from "./Item.module.css";

type Props = {
  image: string;
  percent?: number;
  title: string;
  price: string;
  priceOld: string;
  description: string;
  star: number;
  sold: number;
};
export const Item = ({
  image,
  percent = 0,
  title,
  price,
  priceOld,
  description,
  star,
  sold,
}: Props) => {
  const stars = [1, 2, 3, 4, 5];
  return (
    <div className={styles.container}>
      <ImageItem thumbnail={image} percent={percent} />
      <div className={styles.title}>
        <span>{title}</span>
        <hr></hr>
      </div>
      <div className={styles.prices}>
        <span className={styles.price}>{price}</span>
        <span className={styles.priceOld}>{priceOld}</span>
        <span className={styles.percent}>{percent}% off</span>
      </div>
      <div className={styles.rowLast}>
        <span className={styles.describe}>{description}</span>
        <div className={styles.displayStars}>
          {stars.map((st, index) => (
            <span
              key={index}
              className={`${star >= st ? styles.isRating : ""}`}
            >
              <FaStar />
            </span>
          ))}
        </div>
        <div className={styles.containerProgress}>
          <div className={styles.progress} style={{ width: `${sold}%` }}></div>
        </div>
        <div>Sold: {sold}</div>
      </div>
    </div>
  );
};
