import { useState } from "react";
import DumbBtn from "./DumbBtn";

export default function DumbBtnContainer() {
  const [count, setCount] = useState(0);
  const [displayText, setDisplayText] = useState("");
  const [display, setDisplay] = useState(false);

  function handleDumbClick() {
    setCount((prev) => prev + 1);
  }

  function handleDumbClick2() {
    setDisplayText("Revealed");
    setDisplay((prev) => !prev);
  }

  return (
    <section>
      <div>
        <h2>Dumb Btn Container</h2>
        <p>
          This example is set up to have a place for a button component , i have
          made this dumb and resusable and it takes children and onClick props
          passed to it
        </p>
        <p>
          I have also incorporated css modules , created a file within the
          DumbButtonExample component folder and imported and used in DumbBtn
        </p>
        <p>
          The style is then called via dot notation {""}
          <a href="https://www.reacttutorial.com/css-modules-react">
            https://www.reacttutorial.com/css-modules-react
          </a>
        </p>
        <section>
          <h3>{count}</h3>
          <DumbBtn onClick={handleDumbClick}>Click Me </DumbBtn>
        </section>
        <section>
          <DumbBtn onClick={handleDumbClick2}>
            {display ? "Close" : " Click to reveal"}
          </DumbBtn>
          {display && <h3>{displayText}</h3>}
        </section>
      </div>
    </section>
  );
}
