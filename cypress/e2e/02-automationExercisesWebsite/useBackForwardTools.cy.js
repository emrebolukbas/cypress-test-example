/// <reference types="Cypress" />

describe('Test Automation Website', () => {

    it('Use Back - Forward', () => {
        cy.visit('/')
        cy.contains('Test Cases')
        .should('be.visible')
        .click()
        cy.wait(1500)
        cy.go('back')
        cy.wait(1500)                                   // cy.go('forward') or (1) it can be use
        cy.go('forward')                                // cy.go('back') or (-1) it can be use
        cy.contains('API Testing')
        .should('be.visible')
        .click()
        cy.go(-1)
        cy.wait(1500)
        cy.contains('Products')
        .should('be.visible')
        .click()
        cy.wait(1500)
        cy.go(-1)
        cy.wait(1500)
        cy.go(1)  
    });
    
});