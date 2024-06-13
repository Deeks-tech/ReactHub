export default function RouterExample() {
  return (
    <section>
      <div>
        <h2>React Router</h2>
      </div>
      <div>
        <p>
          React router has been implement to allow the <code>Nav.jsx </code>
          to link to other pages in our site.
          <p>
            {" "}
            <a href="https://reactrouter.com/en/main/routers/create-browser-router">
              https://reactrouter.com/en/main/routers/create-browser-router
            </a>
          </p>
        </p>
        <p>
          in <code>Main.jsx</code> paths are defined and then prodivded
        </p>
        <p>
          Within <code>Nav</code> we link to the pages using a react router dom
          <code>{"<Link>"}</code> component
        </p>
        <p>
          <a href="https://reactrouter.com/en/main/components/link">
            https://reactrouter.com/en/main/components/link
          </a>
        </p>
      </div>
    </section>
  );
}
