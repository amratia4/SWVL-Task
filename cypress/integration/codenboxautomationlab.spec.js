/// <reference  types="cypress"/>
it ('OpenCodeBoxAutomationLab', () => {

cy.visit('http://codenboxautomationlab.com/practice/')
cy.get('#dropdown-class-example').should('have.value','option2')
cy.get('#dropdown-class-example').select('Selenium').should('have.value','option1')

})