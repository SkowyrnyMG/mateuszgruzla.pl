Cypress.Commands.add('jumpToSection', (sectionName, nodeName = 'span') => {
  const sectionNameRegexp = new RegExp(sectionName, 'i');
  cy.get(nodeName).contains(sectionNameRegexp).scrollIntoView({ easing: 'linear', duration: 1000 })
})

Cypress.Commands.add('checkExternalLinkStatus', (linkName, expectedStatus) => {
  const linkNameRegExp = new RegExp(linkName, 'i');
  cy.get('a').contains(linkNameRegExp).then(link => {
    cy.request(link.parent().prop('href'))
    .its('status')
    .should('eq', expectedStatus);
  })
})

