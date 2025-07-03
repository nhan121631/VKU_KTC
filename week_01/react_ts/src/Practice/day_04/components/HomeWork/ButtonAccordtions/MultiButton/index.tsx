import React from "react";
import { ButtonItem } from "../../ButtonTabs/ButtonItem";
import styles from "./MultiButton.module.css";
import { PItem } from "../../ButtonTabs/PItem";
export const ButtonMulti = () => {
  const buttons: {
    label: string;
    isActive: boolean;
    bg: "inline" | "outline";
  }[] = [
    { label: "history", isActive: true, bg: "inline" },
    { label: "AppRoach", isActive: false, bg: "inline" },
    { label: "Culture", isActive: false, bg: "inline" },
    { label: "Method", isActive: false, bg: "inline" },
  ];
  const vbs = [
    "Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores.",
    "Contenido de tabNeque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem. Ut enim ad minima veniam, quis nostrum exercitationem ullam corporis suscipit laboriosam, nisi ut aliquid ex ea commodi consequatur?",
    "At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti atque corrupti quos dolores et quas molestias excepturi sint occaecati cupiditate non provident, similique sunt in culpa qui officia deserunt mollitia animi, id est laborum et dolorum fuga. Et harum quidem rerum facilis est.",
    "Nam libero tempore, cum soluta nobis est eligendi optio cumque nihil impedit quo minus id quod maxime placeat facere possimus, omnis voluptas assumenda est, omnis dolor repellendus. Temporibus autem quibusdam et aut officiis debitis aut rerum necessitatibus saepe eveniet ut et voluptates repudiandae sint et molestiae non recusandae.",
  ];
  //   const [indexBtn, setIndexBtn] = React.useState(0);
  //   const handleClick = (index: number) => {
  //     setIndexBtn((prev) => (prev === index ? -1 : index));
  //   };
  const [ativeA, setActiveA] = React.useState<boolean[]>(
    Array(buttons.length).fill(false)
  );
  const handleClick = (index: number) => {
    setActiveA((prev) => {
      const newActive = [...prev];
      newActive[index] = !newActive[index];
      return newActive;
    });
  };
  return (
    <div className={styles.container}>
      {buttons.map((btn, index) => (
        <div key={index}>
          <ButtonItem
            label={btn.label}
            isActive={ativeA[index]}
            bg={btn.bg}
            onClick={() => handleClick(index)}
          />
          <PItem label={vbs[index]} isActive={ativeA[index]} />
        </div>
      ))}
    </div>
  );
};
