import ContextNestedComponent from "./ContextNestedComponent";

export default function ContextExample() {
  return (
    <section>
      <div>
        <h2>Context Component </h2>
        <p>
          Context is a way to pass values to components that need it in order to
          avoid prop drilling.
        </p>
        <p>
          Prop drilling is a term used to describe the passing of props down to
          nested components , every component in the tree will need to recieve
          and send the props, Context solves this
        </p>
        <p>
          By creating context and then wrapping the component that needs the
          value in a <code>context.provider</code> that component and all its
          children have access to this value when <code>useContext()</code> is
          then used.
        </p>
      </div>
      <ContextNestedComponent />
    </section>
  );
}
