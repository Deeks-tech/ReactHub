import { useState } from "react";

export default function CounterExample() {
  const [count, setCount] = useState(0);

  function handleUpClick() {
    setCount((prev) => prev + 1);
  }

  function handleDownClick() {
    setCount((prev) => prev - 1);
  }

  return (
    <section>
      <div>
        <h2> Counter Example</h2>
        <p>
          A simple counter but its important that when working with state you do
          not update the current state directly but update the previous state
        </p>
        <p>
          Example : <code>(prev) ={">"} prev - 1</code>
        </p>
        <div>
          <p>{count}</p>
        </div>
        <div>
          <button onClick={handleUpClick}>+</button>
          <button onClick={handleDownClick}>-</button>
        </div>
      </div>
    </section>
  );
}
