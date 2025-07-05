import React, { type ChangeEvent } from "react";

export const Ex8 = () => {
  const [text, setText] = React.useState("Apple");
  const handleChange = (e: ChangeEvent<HTMLSelectElement>) => {
    setText(e.target.value);
  };
  return (
    <div>
      <select onChange={handleChange}>
        <option value="" disabled>
          -- Select an option --
        </option>
        <option value="Apple">Apple</option>
        <option value="Banana">Banana</option>
        <option value="Orange">Orange</option>
      </select>
      <span style={{ display: "block" }}>You typed: {text}</span>
    </div>
  );
};
