import { useState } from "react";

export default function ButtonChange() {
  const [btnColor, setBtnColor] = useState("red");
  const nextColor = btnColor === "red" ? "blue" : "red";

  function handleClick() {
    setBtnColor(nextColor);
  }

  return (
    <section>
      <div>
        <h2>Button Change</h2>
      </div>
      <div>
        <button onClick={handleClick} className={btnColor}>
          {btnColor ? "change to blue " : "change to red"}
        </button>
      </div>
    </section>
  );
}
