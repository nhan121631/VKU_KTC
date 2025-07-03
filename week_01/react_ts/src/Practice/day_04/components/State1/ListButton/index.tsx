import { useState } from "react";
import { ButtonItem } from "../Button";
import styles from "./ListButton.module.css";

const listBtn = [
  {
    id: 1,
    label: "Hồng",
  },
  {
    id: 2,
    label: "Đỏ",
  },
  {
    id: 3,
    label: "tím",
  },
];
export const ListButton = () => {
  const [currentIndex, setCurrentIndex] = useState(1);
  return (
    <div className={styles.attributes}>
      <span className={styles.attr_name}>Màu sắc</span>
      {listBtn.map((item) => (
        <ButtonItem
          key={item.id}
          label={item.label}
          isActive={currentIndex === item.id}
          onClick={() => setCurrentIndex(item.id)}
        />
      ))}
    </div>
  );
};
