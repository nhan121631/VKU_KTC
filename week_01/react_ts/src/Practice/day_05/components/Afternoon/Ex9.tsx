import React from "react";

export const Ex9 = () => {
  const [state, setState] = React.useState(false);
  const handleChange = () => {
    setState((prev) => (prev = !prev));
  };
  return (
    <div>
      <input type="checkbox" onChange={handleChange} />
      <span>Tonggle</span>
      <span style={{ display: "block" }}>
        Checkbox is: {state ? "Checked" : "UnChecked"}
      </span>
    </div>
  );
};
