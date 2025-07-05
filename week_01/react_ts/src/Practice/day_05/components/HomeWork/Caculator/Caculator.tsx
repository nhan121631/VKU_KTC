import React from "react";
import { ButtonCaculator } from "./ButtonCaculator";
import styles from "./Caculator.module.css";
export const Caculator = () => {
  const buttons: { label: string; bg: "" | "orange" | "red" | "green" }[] = [
    {
      label: "7",
      bg: "",
    },
    {
      label: "8",
      bg: "",
    },
    {
      label: "9",
      bg: "",
    },
    {
      label: "/",
      bg: "orange",
    },
    {
      label: "4",
      bg: "",
    },
    {
      label: "5",
      bg: "",
    },
    {
      label: "6",
      bg: "",
    },
    {
      label: "*",
      bg: "orange",
    },
    {
      label: "1",
      bg: "",
    },
    {
      label: "2",
      bg: "",
    },
    {
      label: "3",
      bg: "",
    },
    {
      label: "-",
      bg: "orange",
    },
    {
      label: "0",
      bg: "",
    },
    {
      label: ".",
      bg: "",
    },
    {
      label: "C",
      bg: "red",
    },
    {
      label: "+",
      bg: "orange",
    },
    {
      label: "=",
      bg: "green",
    },
  ];

  const [textResult, setTextResult] = React.useState("0");

  const handleClick = (label: string) => {
    setTextResult((prev) => {
      if (prev === "0" && label !== "C" && label !== "." && label !== "=") {
        return label;
      }
      if (label === "+" || label === "-" || label === "*" || label === "/") {
        return prev + " " + label + " ";
      }
      if (label === "C") {
        return "0";
      }
      if (label === "=") {
        try {
          const arrCaculators = prev.split(" ");
          const ex1 = arrCaculators[0];
          const ex2 = arrCaculators[2];
          const operator = arrCaculators[1];
          if (!operator) {
            return String(Number(ex1));
          }
          switch (operator) {
            case "+":
              return String(Number(ex1) + Number(ex2));
            case "-":
              return String(Number(ex1) - Number(ex2));
            case "*":
              return String(Number(ex1) * Number(ex2));
            case "/":
              if (Number(ex2) === 0) {
                return "Error";
              }
              return String(Number(ex1) / Number(ex2));
            default:
              return "Error";
          }
        } catch (error) {
          console.error("Error evaluating expression:", error);
          return "Error";
        }
      }
      return prev + label;
    });
  };
  return (
    <div className={styles.container}>
      <div className={styles.screenResult}>{textResult}</div>
      <div className={styles.caculator}>
        {buttons.map((button, index) => (
          <ButtonCaculator
            key={index}
            onClick={() => handleClick(button.label)}
            label={button.label}
            bg={button.bg}
          />
        ))}
      </div>
    </div>
  );
};
