import { Item } from "../Item";
import styles from "./ListItem.module.css";
export const ListItem = () => {
  const items = [
    {
      image: "/images/Day4/HomeWork/1.jpg",
      percent: 20,
      title: "young shop",
      price: "$1,422.67",
      priceOld: "$1,025.5",
      description: "LG white front load steam washer",
      star: 4,
      sold: 30,
    },
    {
      image: "/images/Day4/HomeWork/2.jpg",
      percent: 20,
      title: "young shop",
      price: "$1,422.67",
      priceOld: "$1,025.5",
      description: "LG white front load steam washer",
      star: 2,
      sold: 60,
    },
    {
      image: "/images/Day4/HomeWork/3.jpg",
      percent: 20,
      title: "young shop",
      price: "$1,422.67",
      priceOld: "$1,025.5",
      description: "LG white front load steam washer",
      star: 4,
      sold: 25,
    },
    {
      image: "/images/Day4/HomeWork/4.jpg",
      percent: 17,
      title: "young shop",
      price: "$1,422.67",
      priceOld: "$1,025.5",
      description: "LG white front load steam washer",
      star: 1,
      sold: 70,
    },
    {
      image: "/images/Day4/HomeWork/5.jpg",
      percent: 20,
      title: "young shop",
      price: "$1,422.67",
      priceOld: "$1,025.5",
      description: "LG white front load steam washer",
      star: 4,
      sold: 79,
    },
    {
      image: "/images/Day4/HomeWork/5.jpg",
      percent: 20,
      title: "young shop",
      price: "$1,422.67",
      priceOld: "$1,025.5",
      description: "LG white front load steam washer",
      star: 4,
      sold: 79,
    },
  ];
  return (
    <div className={styles.container}>
      {items.map((item, index) => {
        return (
          <Item
            image={item.image}
            description={item.description}
            percent={item.percent}
            price={item.price}
            priceOld={item.priceOld}
            sold={item.sold}
            star={item.star}
            title={item.title}
            key={index}
          />
        );
      })}
    </div>
  );
};
