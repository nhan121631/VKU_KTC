import React from "react";

export const Ex4 = () => {
  const [state, setState] = React.useState(false);
  const handleMouse = () => {
    setState((prev) => (prev = !prev));
  };
  return (
    <div>
      <div
        onMouseEnter={handleMouse}
        style={{ backgroundColor: state ? "yellow" : "white" }}
        onMouseLeave={handleMouse}
      >
        Hover me!
      </div>
    </div>
  );
};
