import React from "react";
import styles from "./CardLand.module.css";

type CardLandProps = {
  image: string;
  name: string;
  subname: string;
  nameBold?: "Bold";
  subnameBold?: "Bold";
  icon: React.ReactNode;
  bg?: string;
};

export default function CardLand({
  bg = "",
  image,
  name,
  subname,
  nameBold = "",
  subnameBold = "",
  icon,
}: CardLandProps) {
  return (
    <div className={`${styles.cardContainer} ${styles[bg]}`}>
      <div className={styles.leftCol}>
        <img className={styles.img} src={image} />
        <div className={styles.title}>
          <span
            className={`${styles.name} ${
              nameBold === "Bold" ? styles.bname : ""
            }`}
          >
            {name}
          </span>
          <span
            className={`${styles.subname} ${
              subnameBold === "Bold" ? styles.bsubname : ""
            }`}
          >
            {subname}
          </span>
        </div>
      </div>
      <span className={styles.icon}>{icon}</span>
    </div>
  );
}
