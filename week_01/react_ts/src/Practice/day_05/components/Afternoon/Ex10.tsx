import React from "react";

export const Ex10 = () => {
  const items = ["Apple", "Banana", "Orange", "Grapes", "Pineapple"];
  const [arritem, setText] = React.useState<string[]>([]);
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setText(
      items.filter((item) =>
        item.toLowerCase().includes(e.target.value.toLowerCase())
      )
    );
  };
  return (
    <div>
      <input type="text" onChange={handleChange} />

      {arritem.map((item, index) => (
        <span key={index} style={{ display: "block" }}>
          You Search: {item}
        </span>
      ))}
    </div>
  );
};
