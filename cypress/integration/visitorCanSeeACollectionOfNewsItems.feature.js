/* eslint-disable no-undef */
describe("Display latest news headlines", () => {
  beforeEach(() => {
    cy.intercept("GET", "https://newsapi.org/v2/top-headlines**", {
      fixture: "news_index.json",
    });
    cy.visit("/");
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
            "DBS Bank to launch cryptocurrency exchange after condemning Bitcoin a Ponzi scheme in 2017"
          );
          cy.get(".description").should("exist");
        });
    });
  });
});
