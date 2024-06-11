import { useState } from "react";
import { sumUp } from "./sum";

export default function SumExample() {
  const [num1, setNum1] = useState(0);
  const [num2, setNum2] = useState(0);

  return (
    <section>
      <div>
        <h2>Sum Example with testing</h2>
        <p>
          In this example i have seperated out my sum function from my component
          so this can be easily tested and used by other components
        </p>
        <p>
          I have a <code>sum.js</code> file that holds the sum function
        </p>
        <p>
          This is imported and used in my <code>SumExample.jsx</code> file
        </p>
        <p>
          it is also imported into a test file <code>sumExample.test.js</code>{" "}
          so this can be used alongside vitest and tested{" "}
        </p>
        <div class="num1">
          <button onClick={() => setNum1((prevNum1) => prevNum1 + 1)}>
            ⬆️
          </button>
          <p>{num1}</p>
          <button onClick={() => setNum1((prevNum1) => prevNum1 - 1)}>
            ⬇️
          </button>
        </div>
        <div class="num1">
          <button onClick={() => setNum2((prevNum2) => prevNum2 + 1)}>
            ⬆️
          </button>
          <p>{num2}</p>
          <button onClick={() => setNum2((prevNum2) => prevNum2 - 1)}>
            ⬇️
          </button>
        </div>
      </div>
      <div>
        <h2>
          {`${num1} + ${num2} =`} {sumUp(num1, num2)}
        </h2>
      </div>
    </section>
  );
}
