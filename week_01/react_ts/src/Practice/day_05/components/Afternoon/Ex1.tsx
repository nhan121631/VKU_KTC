import React from "react";

export const Ex1 = () => {
  const [counter, setCounter] = React.useState(0);
  const handleClick = () => {
    setCounter((prev) => prev + 1);
  };
  return (
    <div>
      <button onClick={handleClick}>Click Me</button>
      <span> Clicked: {counter}</span>
    </div>
  );
};
