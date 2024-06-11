import { useState } from "react";

export default function OpenClose() {
  const [isOpen, setIsOpen] = useState(false);

  function handleOpen() {
    setIsOpen(!isOpen);
  }
  return (
    <section>
      <div>
        <h2>
          Open Close toggle Example <span> Cypress Component test </span>
        </h2>
        <p>
          This example uses a couple of different concepts , useState and
          conditional rendering{" "}
        </p>
        <p>
          {" "}
          An <code>isOpen</code> state is set to false and when the button is
          clicked the handle function sets state to the opposite using{" "}
          <code>!isOpen</code>
        </p>
        <p>
          using the conditonal rendering practice of <code>&&</code> we have
          said that if isOpen is true then display the Hello world section , if
          false display nothing.
        </p>
      </div>
      <button onClick={handleOpen}>{isOpen ? "close me " : "open me"}</button>
      <div>
        {isOpen && (
          <section data-cy="expand">
            <h3 className="open-header">Hello World 😎</h3>
            <div>
              <p></p>
            </div>
          </section>
        )}
      </div>
    </section>
  );
}
