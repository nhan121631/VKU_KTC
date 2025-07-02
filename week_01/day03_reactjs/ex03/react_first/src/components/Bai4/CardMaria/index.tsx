import React from "react";
import styles from "./CardMaria.module.css";
import { FaPhone } from "react-icons/fa";
export default function CardMaria() {
  return (
    <div className={styles.cardContainer}>
      <img className={styles.img} src="/images/maria.png"></img>
      <h2>María</h2>
      <span className={styles.icon}>
        <FaPhone />
      </span>
    </div>
  );
}
