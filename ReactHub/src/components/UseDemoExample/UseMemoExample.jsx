import { useState, useMemo } from "react";

export default function UseMemoExample() {
  const [counter, setCounter] = useState(0);

  const [item, setItem] = useState(["Item 1", "Item 2", "Item 3"]);

  const [inputValue, setInputValue] = useState("");

  function handleClick() {
    setCounter((prev) => prev + 1);
    console.log("rendered counter ");
  }

  function handleAdd() {
    setItem([...item, inputValue]);
    setInputValue("");
    console.log();
  }

  const listItems = useMemo(() => {
    return item.map((items) => <p>{items}</p>);
  });

  return (
    <section>
      <h2>UseDemo() example</h2>
      <div>
        <button onClick={handleClick}>Click me to rerender</button>
        rerendered : {counter}
        <div>
          <input
            onChange={(e) => setInputValue(e.target.value)}
            type="text"
          ></input>
          <button onClick={handleAdd}>Click me to add to list</button>
        </div>
        <div>{listItems}</div>
      </div>
    </section>
  );
}
