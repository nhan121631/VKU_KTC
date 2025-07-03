import styles from "./Button.module.css";
type Props = {
  label: string;
  isActive: boolean;
  onClick: () => void;
};
export const ButtonItem = ({ label, isActive, onClick }: Props) => {
  return (
    <span
      onClick={onClick}
      className={`${styles.attr_value} ${isActive ? styles.active : ""}`}
    >
      {label}
    </span>
  );
};
