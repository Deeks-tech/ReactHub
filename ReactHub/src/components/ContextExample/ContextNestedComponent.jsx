import { useContext } from "react";
import { VariableToPassContext } from "../../App";

export default function ContextNestedComponent() {
  const passedValue = useContext(VariableToPassContext);

  return (
    <section>
      <h3>Hello from nested component</h3>
      <p>
        The following variable has been passed via context rather than props
      </p>
      <p>
        Variable passed via props = <strong>{passedValue}</strong>
      </p>
    </section>
  );
}
