import styles from "./PItem.module.css";
type Props = {
  label: string;
  isActive: boolean;
};
export const PItem = ({ label, isActive = false }: Props) => {
  return (
    <div className={`${styles.container} ${isActive ? styles.active : ""}`}>
      <p>{label}</p>
    </div>
  );
};
