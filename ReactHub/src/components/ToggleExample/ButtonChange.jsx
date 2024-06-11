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
        <h2>
          Button Change <span>Cypress e2e test</span>
        </h2>
      </div>
      <div>
        <button
          data-cy="ButtonComponent"
          onClick={handleClick}
          className={btnColor}
        >
          {btnColor === "red" ? "change to blue " : "change to red"}
        </button>
      </div>
    </section>
  );
}
