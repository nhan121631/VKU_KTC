import React from "react";

export const Ex3 = () => {
  const [state, setState] = React.useState(false);
  const handleClick = () => {
    setState((prev) => (prev = !prev));
  };
  return (
    <div>
      <button onClick={handleClick}>{state ? "Turn Off" : "Turn On"}</button>
      <span> {state ? "ON" : "OFF"}</span>
    </div>
  );
};
