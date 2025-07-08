import styles from "./ImageItem.module.css";

type Props = {
  thumbnail: string;
};
export const ImageItem = ({ thumbnail }: Props) => {
  return (
    <div className={styles.container}>
      <img src={thumbnail} className={styles.thumbnail}></img>
    </div>
  );
};
