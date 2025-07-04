import { FaStar } from "react-icons/fa";
import styles from "./Rating.module.css";
import React from "react";
import { LabelRating } from "./Label";

type Props = {
  star?: number;
};
export const Rating = ({ star = 0 }: Props) => {
  const [rating, setRating] = React.useState(star);
  const stars = [1, 2, 3, 4, 5];
  const labels = ["Realy Bad", "Bad", "Normal", "Amazing", "Excellently!"];

  const handleClick = (index: number): void => {
    setRating(index);
  };
  return (
    <div className={styles.container}>
      <div className={styles.leftCol}>
        {stars.map((star, index) => (
          <span
            key={index}
            className={`$ ${rating >= star ? styles.isRating : ""}`}
            onClick={() => handleClick(star)}
          >
            <FaStar />
          </span>
        ))}
      </div>
      <div className={styles.rightCol}>
        <LabelRating label={labels[rating - 1]} isActive={true} />
      </div>
    </div>
  );
};
