import React from "react";
import OpenClose from "./OpenClose";

describe("<OpenClose />", () => {
  it("renders", () => {
    // see: https://on.cypress.io/mounting-react
    cy.mount(<OpenClose />);
    cy.get("button").click();
    cy.get(`[data-cy="expand"]`).should("be.visible");
  });
});
