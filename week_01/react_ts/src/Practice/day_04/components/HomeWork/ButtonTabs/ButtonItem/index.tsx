import styles from "./ButtonItem.module.css";
type Props = {
  label: string;
  isActive?: boolean;
  bg: "inline" | "outline";
  onClick: () => void;
};
export const ButtonItem = ({
  label,
  isActive = false,
  bg = "inline",
  onClick,
}: Props) => {
  return (
    <div
      onClick={onClick}
      className={`${
        isActive
          ? bg === "inline"
            ? styles.activeInline
            : styles.activeOutline
          : ""
      } ${bg === "inline" ? styles.inline : styles.outline}`}
    >
      {label}
    </div>
  );
};
