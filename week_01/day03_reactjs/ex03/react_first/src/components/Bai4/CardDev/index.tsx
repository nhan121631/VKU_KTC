import React from "react";
import styles from "./CardDev.module.css";
import { FaCameraRetro } from "react-icons/fa";

export default function CardDev() {
  return (
    <div className={styles.cardContainer}>
      <div className={styles.leftCol}>
        <img className={styles.img} src="/images/avatar.png"></img>
        <div className={styles.detail}>
          <span className={styles.name}>Yolanda</span>
          <span className={styles.subname}>Web Development</span>
        </div>
      </div>
      <span className={styles.icon}>
        <FaCameraRetro />
      </span>
    </div>
  );
}
