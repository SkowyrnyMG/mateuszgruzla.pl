/// <reference types='cypress' />

describe('Home page', () => {
  beforeEach(() => {
    cy.viewport(1440, 900);
    cy.visit('/');
  })

  it('should visit home page as a default', () => {
    cy.get('h1').contains(/with passion and dreams/i).should('exist');
  })

  it('should render each section seperatetly on scroll', () => {
    cy.wait(1000);
    cy.jumpToSection('bio');
    cy.get('h3').contains(/mateusz gruźla/i).should('exist').and('be.visible');
    cy.get('a').contains(/full story/i).should('exist').and('be.visible');

    cy.jumpToSection('stack');
    cy.get('h4').contains(/javascript/i).should('exist').and('be.visible');
    cy.get('h4').contains(/react/i).should('exist').and('be.visible');
    cy.get('[data-testid=home-page-carousel]').should('exist').and('be.visible');

    cy.jumpToSection('projects');
    cy.get('a').contains(/view project/i).should('exist').and('be.visible');

    cy.jumpToSection('blog');
    cy.get('[data-testid=home-page-blog-posts]').should('exist').and('be.visible');
  });

})

