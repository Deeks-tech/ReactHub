export default function RenderList({ data }) {
  const dataArray = Object.values(data.club);

  return (
    <section>
      <div>
        <h2>Render List Example 1 (from an Object) </h2>
        <p>This list will be rendered from the same data stored in db.json</p>
        <p>
          The data ccould have been imported directly into this component but
          for practice i have imported this into <code>App.js</code> and passed
          to this component via props{" "}
        </p>
        <p>
          {" "}
          Because we have used the data from db.json which is a json object we
          have converted this to be a array using{" "}
          <code>Object.values(data.club)</code> so it can be mapped over.
        </p>
        <ol>
          {dataArray.map((stats) => (
            <li>{stats}</li>
          ))}
        </ol>
      </div>
    </section>
  );
}
