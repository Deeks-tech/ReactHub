import { useState } from "react";

export default function Output({ input, setShowInput, setInput }) {
  function handleClick() {
    setShowInput(false);
    setInput("");
  }

  return (
    <div>
      {input === "" ? (
        <h1>Nothing entered</h1>
      ) : (
        <h1> You entered = {input} </h1>
      )}

      <button onClick={handleClick}>Go Back</button>
    </div>
  );
}
