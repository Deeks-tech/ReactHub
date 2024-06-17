import { useState } from "react";
import DumbBtn from "./DumbBtn";

export default function DumbBtnContainer() {
  const [count, setCount] = useState(0);

  function handleClick() {
    setCount((prev) => prev + 1);
  }

  return (
    <section>
      <div>
        <h2>Dumb Btn Container</h2>
        <h3>{count}</h3>
        <section>
          <DumbBtn onClick={handleClick}>Click Me </DumbBtn>
        </section>
      </div>
    </section>
  );
}
