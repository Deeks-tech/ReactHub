describe("my first tests", () => {
  it("Checks the button component mounts can be clicked and the text changes in relation to colour", () => {
    cy.visit("http://localhost:5173/");
    cy.get(`[data-cy="ButtonComponent"]`)
      .should("be.visible")
      .click()
      .should("contain.text", "red")
      .click()
      .should("have.class", "red")
      .should("have.prop", "onClick");
  });
});
