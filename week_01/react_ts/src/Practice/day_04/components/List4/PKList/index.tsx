import { PKItem } from "../PKItem";
import styles from "./PKList.module.css";

const listPKItems = [
  {
    name: "Cáp chuyển đổi USB-C sang SD",
    percent: 25,
    thumbnail: "/images/Day4/List4/airpod.png",
    price: "1,290,000đ",
    priceOld: "790,000đ",
  },
  {
    name: "Cáp chuyển đổi USB-C sang SD",
    thumbnail: "/images/Day4/List4/airpod.png",
    price: "1,290,000đ",
  },
  {
    name: "Cáp chuyển đổi USB-C sang SD",
    thumbnail: "/images/Day4/List4/airpod.png",
    price: "1,290,000đ",
    priceOld: "790,000đ",
  },
  {
    name: "Cáp chuyển đổi USB-C sang SD",
    percent: 20,
    thumbnail: "/images/Day4/List4/airpod.png",
    price: "1,290,000đ",
  },
];
export const PKlist = () => {
  return (
    <div className={styles.containerCard}>
      {listPKItems.map((item, index) => (
        <div key={index}>
          <PKItem
            name={item.name}
            percent={item.percent}
            thumbnail={item.thumbnail}
            price={item.price}
            priceOld={item.priceOld}
          />
        </div>
      ))}
    </div>
  );
};
