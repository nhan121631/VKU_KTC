import styles from "./ButtonCaculator.module.css";
type Props = {
  label: string;
  bg: "red" | "orange" | "green" | "";
  onClick: (arg: { text: string }) => void;
};
export const ButtonCaculator = ({ label, bg, onClick }: Props) => {
  return (
    <button
      onClick={() => onClick({ text: label })}
      className={`${styles.button} ${
        bg === "red"
          ? styles.bgRed
          : bg === "orange"
          ? styles.bgOrange
          : bg === "green"
          ? styles.bgGreen
          : ""
      }`}
    >
      {label}
    </button>
  );
};
