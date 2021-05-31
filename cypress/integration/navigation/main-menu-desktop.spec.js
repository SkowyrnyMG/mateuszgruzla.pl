/// <reference types='cypress'/>

describe('Main menu', () => {
  beforeEach(() => {
    cy.viewport(1440, 900);
    cy.visit('/');
  })

  it('should contain clickable main buttons', () => {
    cy.log(':)')
  });
})
