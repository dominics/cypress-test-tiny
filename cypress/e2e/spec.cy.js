/// <reference types="cypress" />
describe('page', () => {
  it('works', () => {
    cy.visit('https://www.flux.ai/dominic-dev/buffered-mult?editor=pcb_2d')
    
    let i = 100;
    while (i > 0) {
      cy.log(`Waiting to crash ${i}`)
      
      cy.get('.threeRootElement + div button[aria-label="Grid"]', {timeout: 20_000})
        .first()
        .as("gridButton")
        .should("be.visible");
      i--;
    }
    
    cy.log("Finished")
  })
})
