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

  it('should change path after clicking on button links', () => {
    cy.jumpToSection('bio');
    cy.wait(500);
    cy.get('a').contains(/full story/i).click()
    .url().should('contain', 'about');
    cy.go('back');

    cy.jumpToSection('projects');
    cy.wait(500);
    cy.window().then((win) => {
      cy.spy(win, 'open').as('redirect');
    })

    cy.checkExternalLinkStatus('view project', 200);
    cy.checkExternalLinkStatus('code', 200);

    cy.jumpToSection('show all projects', 'a');
    cy.get('a').contains(/show all projects/i).click()
    .url().should('contain', 'portfolio');
    cy.go('back');

    cy.jumpToSection('lastposts');
    cy.get('[data-testid="home-page-blog-posts"]').within(() => {
      cy.get('a').first().click();
    })
    .url().should('contain', '/blog/');
    cy.go('back');
  });

})

