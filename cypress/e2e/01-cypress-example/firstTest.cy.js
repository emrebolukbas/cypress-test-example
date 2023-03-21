/// <reference types="Cypress" />

describe ('IlkTest', () =>{

    it('Test Case-1', () => {
        cy.visit('https://www.google.com');
        cy.wait(3000);
       /// cy.scrollTo('top');
        cy.get('.gLFyf').scrollIntoView().should('be.visible').type('ayhan metin').click();
        cy.wait(3000);
        cy.get('.iblpc').should('be.visible').click();
    

    })

    it('Test Case-2', () => {
        

    })
})