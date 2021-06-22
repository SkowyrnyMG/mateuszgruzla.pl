/// <reference types='cypress'/>

describe('Main menu', () => {
  beforeEach(() => {
    cy.viewport(1440, 900);
    cy.visit('/');
  })

  it('should contain clickable main buttons', () => {
    cy.get('[data-testid="main-menu"]').within(() => {
      cy.get('button').last().click();
    });
    cy.get('nav').should('exist').and('be.visible');

    cy.get('[data-testid="main-menu"]').within(() => {
      cy.get('button').eq(1).click();
    });
    cy.get('input').should('have.attr', 'placeholder').and('eq', 'Search').and('exist');
    cy.get('button').contains(/close/i).click();

    cy.get('[data-testid="main-menu"]').within(() => {
      cy.get('button').eq(0).click();
    });
    cy.getCookie('theme')
    .should('have.property', 'value', 'light');

    cy.get('[data-testid="main-menu"]').within(() => {
      cy.get('button').eq(0).click();
    });
    cy.getCookie('theme')
    .should('have.property', 'value', 'dark');

    cy.visit('/about');
    cy.get('[data-testid="main-menu"]').within(() => {
      cy.get('a').first().click();
    });
    cy.url().should('eq', 'http://localhost:8000/');
  });
})
