/// <reference types="Cypress" />

describe ('Hide XHR', () =>{

    it('TC001', () => {

        cy.visit('https://amazon.com');
        cy.title().should('eq','Amazon.com. Spend less. Smile more.')
    

    })

})