import React from "react";
import styles from "./CardDate.module.css";
export default function CardDate() {
  const img = {
    Mon: "/images/mon.png",
    Tue: "/images/tue.png",
    Wed: "/images/web.png",
    Thu: "/images/thu.png",
    Fri: "/images/fri.png",
  };
  return (
    <div className={styles.cardContainer}>
      {Object.keys(img).map((key) => (
        <div key={key} className={styles.col}>
          <img
            className={styles.img}
            src={img[key as keyof typeof img]}
            alt={key}
          />
          <span className={styles.date}>{key}</span>
        </div>
      ))}
    </div>
  );
}
