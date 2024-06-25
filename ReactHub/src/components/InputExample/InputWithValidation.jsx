import { useState } from "react";
import styles from "./styles.module.css";

export default function InputWithValidation() {
  const [inputValue, setInputValue] = useState("");
  const [errorMessage, setErrorMessage] = useState("");
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [lastSubmittedValue, setLastSubmittedValue] = useState("");
  const [allSubmittedValues, setAllSubmittedValues] = useState([]);

  function onChange(e) {
    const value = e.target.value;
    setInputValue(value);
  }

  function handleOnSubmit(e) {
    e.preventDefault();

    if (inputValue.length === 0) {
      setErrorMessage("Please enter a task");
    } else {
      setErrorMessage("");
      setIsSubmitted(true);
      setLastSubmittedValue(inputValue);
      setAllSubmittedValues((prevValues) => [...prevValues, inputValue]);
    }

    setInputValue("");
  }

  return (
    <section>
      <div>
        <h2>Input box with validation</h2>
      </div>
      <form onSubmit={handleOnSubmit}>
        <label>
          Enter Task:{" "}
          <input
            type="text"
            placeholder="Enter name ..."
            value={inputValue}
            onChange={onChange}
          />
        </label>
        <button type="submit">Submit</button>
      </form>
      {errorMessage && <div className={styles.error}>{errorMessage}</div>}
      {isSubmitted && (
        <div>
          <p>Submitted Task: {lastSubmittedValue}</p>
          <ul>
            {allSubmittedValues.map((name, index) => (
              <li key={index}>{name}</li>
            ))}
          </ul>
        </div>
      )}
    </section>
  );
}
