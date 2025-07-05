import React from "react";

export const Ex2 = () => {
  const [text, setText] = React.useState("");
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setText(e.target.value);
  };
  return (
    <div>
      <input type="text" onChange={handleChange} />
      <span style={{ display: "block" }}>
        You typed: {text ? text : "nothing"}
      </span>
    </div>
  );
};
