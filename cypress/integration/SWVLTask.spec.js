
// Assumptions:
//  Assume we have 2 drop-down lists:
// 1-	1st drop-down list with id = ”dropdown1” which  contain 2 values
//Value1 = “male”
//Value2 = ‘female”

//2-	2nd drop-down list with id = “dropdown2” which contain 4 values
//Value3= “Amr”
//Value4= “Mohamed”
//Value5= “Sara”
//Value6= “Nour”


//when we choose ( Value1 = “male”) from 1st drop-down (id = “dropdown1”) then the 2nd dropdown (id = “dropdown2”) will display 2 values only (Value3= “Amr” & Value4= “Mohamed”)

//And when we choose ( Value2 = “female”) from 1st drop-down (id = “dropdown1”) then the 2nd dropdown (id = “dropdown2”) will display 2 values only (Value5= “Sara” & Value6= “Nour”)

/// <reference  types="cypress"/>

describe ('Nested Drop-down List', () => {

    
    beforeEach(() =>{
                       cy.visit('Application URL')
    })
it ('should choose male and Amr', () => {
        
    
        cy.get('#dropdown1').select('male').should('have.value','Value1')
 
        cy.get('#dropdown2').select('Amr').should('have.value','Value3')
 })

it ('should choose male and Mohamed', () => {
        
    
        cy.get('#dropdown1').select('male').should('have.value','Value1')

        cy.get('#dropdown2').select('Mohamed').should('have.value','Value4')
})

it ('should choose Female and Sara', () => {
        
    
        cy.get('#dropdown1').select('female').should('have.value','Value2')

        cy.get('#dropdown2').select('Sara').should('have.value','Value5')
})
it ('should choose Female and Nour', () => {
        
    
        cy.get('#dropdown1').select('female').should('have.value','Value2')

        cy.get('#dropdown2').select('Nour'). should('have.value','Value6')
})
})
