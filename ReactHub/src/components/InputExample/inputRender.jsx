import { useState } from "react";
import Test from "./test";
export default function InputRender() {
  const [input, setInput] = useState("");
  const [showInput, setShowInput] = useState(false);

  function handleChange(event) {
    setInput(event.target.value);
  }

  function handleClick(e) {
    e.preventDefault();

    setShowInput(!showInput);
  }
  return (
    <section>
      {showInput ? (
        <Test input={input} setInput={setInput} setShowInput={setShowInput} />
      ) : (
        <div>
          <div>
            <h2>Input {">"} Render example</h2>
          </div>
          <form onSubmit={handleClick}>
            <input
              onChange={handleChange}
              type="text"
              placeholder="Enter something..."
            ></input>
            <button type="submit">{!showInput ? "submit" : "clear"}</button>
          </form>
        </div>
      )}
    </section>
  );
}
