/// <reference types = "cypress"/>

describe ('filtering',() =>{
    beforeEach(() =>{
        cy.visit('http://todomvc-app-for-testing.surge.sh/')
    
        cy.get('.new-todo').type("Clean the room {enter}")
    
        cy.get('.new-todo').type("Learn Cypress {enter}")

        cy.get('.new-todo').type("Take out the trash {enter}")

        cy.get(':nth-child(2) > .view > .toggle').click()
    
        cy.get(':nth-child(2) > .view > .toggle').should('be.checked')

    })
    it ('Should filter the active todos' , () =>{
        cy.get(':nth-child(2) > a').click()

        //cy.get(':nth-child(2) > a').should('not.contain.text', 'Learn Cypress')



    })

    it ('Should filter the Completed todos' , () =>{
        cy.get(':nth-child(3) > a').click()

        //cy.get(':nth-child(3) > a').should('contain.text', 'Learn Cypress')



    })

    it ('Should filter the All todos' , () =>{
        cy.get(':nth-child(1) > a').click()

        



    })
   


    })

