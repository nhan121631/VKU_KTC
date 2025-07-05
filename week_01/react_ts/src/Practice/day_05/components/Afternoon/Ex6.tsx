import React from "react";

export const Ex6 = () => {
  const [text, setText] = React.useState("");
  const handleChange = (e: React.KeyboardEvent<HTMLInputElement>) => {
    setText(e.key);
  };
  return (
    <div>
      <input type="text" onKeyDown={handleChange} />
      <span style={{ display: "block" }}>
        You typed: {text ? text : "nothing"}
      </span>
    </div>
  );
};
