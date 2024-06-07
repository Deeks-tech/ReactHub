import { useState } from "react";

export default function FetchWithAsync() {
  const [joke, setJoke] = useState();

  async function handleClick() {
    const res = await fetch(
      "https://official-joke-api.appspot.com/jokes/random"
    );
    const data = await res.json();
    console.log(data);
    setJoke(data);
  }

  function removeJoke() {
    setJoke(null);
  }

  return (
    <section>
      <div>
        <h2>Fetch with Async Example</h2>
      </div>
      <div>
        <p>
          With this fetch example we are using a async await function rather
          than chaining <code>.then()</code>
        </p>
      </div>
      <div>
        <button onClick={handleClick}>Fetch some info</button>
      </div>
      {joke && (
        <>
          <div className="joke-wrapper">
            {joke.setup} - {joke.punchline}
          </div>
          <div className="remove-btn">
            <button onClick={removeJoke}> Remove </button>
          </div>
        </>
      )}
    </section>
  );
}
