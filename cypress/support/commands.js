Cypress.Commands.add('jumpToSection', (sectionName) => {
  const sectionNameRegexp = new RegExp(sectionName, 'i');
  cy.get('span').contains(sectionNameRegexp).scrollIntoView({ easing: 'linear', duration: 1000 })
})

