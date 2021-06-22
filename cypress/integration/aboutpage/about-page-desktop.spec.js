/// <reference types='cypress'/>

describe('About page', () => {
  beforeEach(() => {
    cy.viewport(1440, 900);
    cy.visit('/about');
  })

  it('Should visit about page', () => {
    cy.get('button').contains(/click to place/i).should('exist').should('be.visible');
  })

  it('Should open and close popup after clicking on CTA button', () => {
    cy.contains('button', /click to place/i).click();
    cy.get('[data-testid="popup-wrapper"]').should('be.visible');
    cy.get('[data-testid="popup-wrapper"]').within(() => {
      // close button
      cy.get('button').click();
    })
  })

  it('Should render all content of the page when scrolled', () => {
    cy.jumpToSection('mystory');
    cy.get('h3').contains(/love of the digital world/i).should('be.visible');
    cy.get('h3').contains(/first lines of code/i).should('be.visible');
    cy.jumpToSection('Road to Frontend', 'h3');
    cy.get('h3').contains('Road to Frontend').should('be.visible');
    cy.jumpToSection('Check out my blog if you want to be up to date!', 'h3');
    cy.get('a').contains(/GO TO BLOG PAGE/i).should('be.visible').click();
    cy.url().should('contain', '/blog');
  })
})
