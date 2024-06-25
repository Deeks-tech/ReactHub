import { useState, useEffect } from "react";

export default function FetchOnMount() {
  const [data, setData] = useState([]);

  async function policeFetch() {
    const res = await fetch("https://data.police.uk/api/forces");
    const data = await res.json();

    const firstTenForces = data.slice(0, 10);

    setData(firstTenForces);
  }

  useEffect(() => {
    policeFetch();
  }, []);

  return (
    <section>
      <div>
        <h2>Fetch on mount w/ useEffect()</h2>
      </div>
      <div>
        Here we have called our fetch within a useEffect hook to allow the fetch
        to occur only on first render and not activiated by a CTA
      </div>
      <div>
        {data.map((force) => (
          <p>{force.name}</p>
        ))}
      </div>
    </section>
  );
}
