import { RenderList01 } from "../RenderList01";
import styles from "./RenderList01S.module.css";
const cards = [
  {
    image: "/images/Day4/List1/dt1.webp",
    title:
      "Ấn tượng đầu tiên Samsung Galaxy A32 4G: Với hơn 6 triệu đã có mmành hình Super AMOLED 90HZ",
    view: "140 lượt xem",
  },
  {
    image: "/images/Day4/List1/dt1.webp",
    title:
      "Ấn tượng đầu tiên Samsung Galaxy A32 4G: Với hơn 6 triệu đã có mmành hình Super AMOLED 90HZ",
    view: "140 lượt xem",
  },
  {
    image: "/images/Day4/List1/dt1.webp",
    title:
      "Ấn tượng đầu tiên Samsung Galaxy A32 4G: Với hơn 6 triệu đã có mmành hình Super AMOLED 90HZ",
    view: "140 lượt xem",
  },
  {
    image: "/images/Day4/List1/dt1.webp",
    title:
      "Ấn tượng đầu tiên Samsung Galaxy A32 4G: Với hơn 6 triệu đã có mmành hình Super AMOLED 90HZ",
    view: "120 lượt xem",
  },
];
export const RenderList01s = () => {
  return (
    <div className={styles.cardContainer}>
      <div className={styles.labels}>
        <h2>TIN MỚI</h2>
        <span>Xem Thêm</span>
      </div>
      <div className={styles.container}>
        {cards.map((item, index) => (
          <div key={index}>
            <RenderList01
              image={item.image}
              title={item.title}
              view={item.view}
            />
          </div>
        ))}
      </div>
    </div>
  );
};
