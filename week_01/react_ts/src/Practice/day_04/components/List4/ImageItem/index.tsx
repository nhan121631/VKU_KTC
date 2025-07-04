import styles from "./ImageItem.module.css";

type Props = {
  thumbnail: string;
  percent?: number;
};
export const ImageItem = ({ thumbnail, percent }: Props) => {
  return (
    <div className={styles.container}>
      <img src={thumbnail} className={styles.thumbnail}></img>
      {percent != 0 ? <span className={styles.percent}>-{percent}%</span> : ""}
    </div>
  );
};
