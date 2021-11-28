/* eslint-disable no-undef */
describe("Display news from search results", () => {
  before(() => {
    cy.intercept("GET", "https://newsapi.org/v2/top-headlines**", {
      fixture: "search_response.json",
    });
    cy.visit("/");
    cy.get("[data-cy=input_search]").type("politics");
    cy.get(".ui button").click();
  });

  it("is expected to see a header", () => {
    cy.get("[data-cy=news-header]").should("contain", "News Wire Network");
  });

  it("is expected to see 20 list items", () => {
    cy.get("[data-cy=articles]").children().should("have.length", 20);
  });

  describe("can see list of news", () => {
    it("is expected to see first article", () => {
      cy.get("[data-cy=articles]")
        .first()
        .within(() => {
          cy.get(".image").should("exist");
          cy.get(".header").should(
            "contain",
            "Channel migrants: Why politics is dominating the debate on migrants"
          );
          cy.get(".description").should("exist");
        });
    });
  });
});
