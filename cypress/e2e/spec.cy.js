/// <reference types="cypress" />

before(function () {
  cy.fixture("example.json").as("test_data");
});
it("Read files using Fixture", function () {
  cy.fixture("example.json").then((data) => {
    cy.log(data.name);
    cy.log(data.email);
    cy.fixture("example").its("name").should("contains", "Using");
  });
  cy.log(this.test_data.name);
});

it("Read file using readFile()", function () {
  cy.readFile("./cypress/fixtures/example.json").then((data) => {
    cy.log(data.name);
    cy.readFile("./cypress/fixtures/example.json")
      .its("name")
      .should("contains", "Using");
  });
});
