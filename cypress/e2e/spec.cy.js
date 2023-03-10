/// <reference types="cypress" />

Cypress.on('uncaught:exception', (err, runnable) => {
  // returning false here prevents Cypress from
  // failing the test
  return false
})

describe('page', () => {
  it('works', () => {
    cy.visit('https://www.flux.ai/dominic-dev/buffered-mult?editor=pcb_2d')
    
    let i = 100;
    while (i > 0) {
      cy.log(`Waiting to crash ${i}`)

      cy.get('[value="schematic"] > .MuiToggleButton-label').click();

      cy.get('[data-cy="showGrid"]', {timeout: 20_000})
        .first()
        .as("gridButton")
        .should("be.visible");

      cy.get('@gridButton').click();

      i--;
    }
    
    cy.log("Finished")
  })
})
