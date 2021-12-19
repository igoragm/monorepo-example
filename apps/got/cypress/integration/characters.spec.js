/* eslint-disable no-undef */
describe("characters", () => {
    it("checks characters table & character details", () => {
        let response;
        cy.intercept("http://localhost:3030/characters/character?id=0", req => {
            req.continue(res => {
                response = res;
            });
        });
        cy.visit("/");

        // check if main components present
        cy.get("[data-cy=characters-table]").find("[data-row-key=0]").click();

        // check network response
        cy.should(() => {
            expect(response.statusCode).to.equal(200);
        });

        // check if character details displayed
        cy.get("[data-cy=main-character-img]").should("exist");
        cy.get("[data-cy=main-character-desc]").should("exist");
        cy.get("[data-cy=main-character-quote]").should("exist");
    });
});
