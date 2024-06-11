import { useContext } from "react";
import { VariableToPassContext } from "../../App";

export default function ContextNestedComponent() {
  const { variableToPass, passMore } = useContext(VariableToPassContext);
  // const { passMore } = useContext(VariableToPassContext);

  return (
    <section>
      <h3>Hello from nested component</h3>
      <p>
        The following variable has been passed via context rather than props
      </p>
      <p>
        Variables passed via props = <strong>{variableToPass} </strong>&
        <strong> {passMore}</strong>
      </p>
    </section>
  );
}
