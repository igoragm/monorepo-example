/* eslint-disable no-undef */
describe("main", () => {
    it("displays two todo items by default", () => {
        cy.visit("/");

        // check if main components present
        cy.get("[data-cy=main-layout]").should("exist");
        cy.get("[data-cy=main-slider]").should("exist");
        cy.get("[data-cy=main-character-details]").should("exist");
        cy.get("[data-cy=characters-table]").should("exist");
    });
});
