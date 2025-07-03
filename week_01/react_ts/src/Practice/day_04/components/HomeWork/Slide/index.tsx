import React from "react";
import styles from "./SlideThumbnail.module.css";
import { FaAngleLeft } from "react-icons/fa";

type Props = {
  index?: number;
};

export const SlideThumbnail = ({ index = 1 }: Props) => {
  const imgs = [1, 2, 3, 4, 5];
  const [indexImg, setIndexImg] = React.useState(index);
  const path = `/images/Day4/HomeWork/${indexImg}.jpg`;
  const handlePrev = () => {
    setIndexImg((prev) => (prev > 1 ? prev - 1 : prev));
  };

  const handleNext = () => {
    setIndexImg((prev) => (prev < 5 ? prev + 1 : prev));
  };
  const handleItem = (item: number) => setIndexImg(item);

  return (
    <div className={styles.container}>
      <div className={styles.rowOne}>
        <button className={styles.buttonRight} onClick={() => handlePrev()}>
          <FaAngleLeft />
        </button>
        <img className={styles.img} src={path}></img>
        <button className={styles.buttonLeft} onClick={() => handleNext()}>
          <FaAngleLeft />
        </button>
      </div>
      <div className={styles.rowTwo}>
        {imgs.map((item, index) => (
          <img
            key={index}
            className={`${styles.imgThumbnail} ${
              item === indexImg ? styles.imgBoder : ""
            }`}
            src={`/images/Day4/HomeWork/${item}.jpg`}
            onClick={() => handleItem(item)}
          ></img>
        ))}
      </div>
    </div>
  );
};
