import React from "react";

export const Ex7 = () => {
  const [state, setState] = React.useState(false);

  const handleChange = () => {
    setState(true);
    setTimeout(() => {
      setState(false);
    }, 2000);
  };

  return (
    <div>
      <button onDoubleClick={handleChange}>Click Me</button>
      <span style={{ display: state ? "block" : "none" }}>Double Kick!</span>
    </div>
  );
};
