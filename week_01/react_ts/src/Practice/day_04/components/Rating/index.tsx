import { FaStar } from "react-icons/fa";
import styles from "./Rating.module.css";
import React from "react";

type Props = {
  star?: number;
};
export const Rating = ({ star = 0 }: Props) => {
  const [rating, setRating] = React.useState(star);
  const stars = [1, 2, 3, 4, 5];

  const handleClick = (index: number): void => {
    setRating(index);
  };
  return (
    <div className={styles.container}>
      {stars.map((star) => (
        <span
          key={star}
          className={`${rating >= star ? styles.isRating : ""}`}
          onClick={() => handleClick(star)}
        >
          <FaStar />
        </span>
      ))}
    </div>
  );
};
