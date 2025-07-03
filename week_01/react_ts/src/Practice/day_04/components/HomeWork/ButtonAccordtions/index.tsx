import styles from "./ButtonAccordtions.module.css";
import { ButtonMulti } from "./MultiButton";
import { ButtonSingle } from "./SingleButton";
export const ButtonAccordtions = () => {
  return (
    <div className={styles.container}>
      <div className={styles.col}>
        <ButtonSingle />
      </div>
      <div className={styles.col}>
        <ButtonMulti />
      </div>
    </div>
  );
};
