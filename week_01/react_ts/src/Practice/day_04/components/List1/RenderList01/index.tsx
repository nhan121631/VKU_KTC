import styles from "./RenderList01.module.css";
type Props = {
  image: string;
  title: string;
  view: string;
};
export const RenderList01 = ({ image, title, view }: Props) => {
  return (
    <div className={styles.container}>
      <div className={styles.rowimg}>
        <img className={styles.img} src={image} alt="" />
      </div>
      <h3 className={styles.title}>{title}</h3>
      <p className={styles.view}>{view}</p>
    </div>
  );
};
