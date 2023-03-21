/// <reference types="Cypress" />

describe('Test Automation Website', () => {

    it('Contact Us Form', () => {
        cy.visit('/')
        cy.contains('Contact us').should('be.visible').click()
        cy.title()
        .should('include','Automation Exercise - Contact Us')
        cy.get('[data-qa="name"]')
        .type('username2')
        cy.get('[data-qa="email"]')
        .type('username2@hotmail.com')
        cy.get('[data-qa="subject"]')
        .type('False Password About')
        cy.get('[data-qa="message"]')
        .type('Im using my password but it failed please help me')
        cy.get('[data-qa="submit-button"]')
        .should('be.visible')
        .click()
        cy.contains('Success! Your details have been submitted successfully.')
        cy.contains('Home')
        .should('be.visible')
        .click()
        
    });
    
});