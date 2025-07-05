import React from "react";

export const Ex5 = () => {
  const [text, setText] = React.useState("");
  const textOnChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setText(e.target.value);
  };
  const submitForm = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    alert(`You submitted: ${text}`);
  };
  return (
    <div>
      <form onSubmit={submitForm}>
        <input onChange={textOnChange} value={text}></input>
        <button type="submit">Submit</button>
      </form>
    </div>
  );
};
