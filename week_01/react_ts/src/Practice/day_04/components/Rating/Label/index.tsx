import styles from "./Label.module.css";
type Props = {
  label: string;
  isActive: boolean;
};

export const LabelRating = ({ label, isActive = false }: Props) => {
  return (
    <span className={isActive ? styles.display : styles.hidden}>{label}</span>
  );
};
