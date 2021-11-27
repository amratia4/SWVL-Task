/// <reference  types="cypress"/>

import { TodoPage } from "../Page-object/todo-page"

describe ('to-do actions', () => {

    const TodoPage = new TodoPage
    beforeEach(() =>{
        TodoPage.navigate()
    
        TodoPage.addtodo('Clean the room')

        TodoPage.addtodo('Learn CYPRESS')



    })
    it ('should be able to add new todo to the list', () => {
        
    
        cy.get(':nth-child(2) > .view > label').should('contain.text', ' room')
    
        cy.get(':nth-child(2) > .view > .toggle').should('not.be.checked')
    
    })
    
    it ('should mark to do to be completed ', () => {
        
        cy.get(':nth-child(2) > .view > .toggle').click()
    
        cy.get(':nth-child(2) > .view > .toggle').should('be.checked')
    
        cy.get(':nth-child(3) > a').click()
    })
    
    it ('should click on completed then clear completed ', () => {
    
        cy.get(':nth-child(2) > .view > .toggle').click()
    
        cy.get('.clear-completed').click()
    }
    
    )

})
