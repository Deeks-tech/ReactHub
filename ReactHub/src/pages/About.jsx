import Nav from "../components/Nav";

export default function About() {
  return (
    <div>
      <Nav />
      <section>
        <div>
          <h2>About</h2>
        </div>
        <div>
          <p>
            This <code>page</code> has been set up to demo react router and
            shows how naviagtion is possible in a simple react app{" "}
          </p>
        </div>
      </section>
    </div>
  );
}
