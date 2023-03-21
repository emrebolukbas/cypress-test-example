/// <reference types="Cypress" />

describe('Test Automation Website', () => {


    it('Login&Logout', () => {
    cy.visit('/login')  
    cy.get('[data-qa="login-email"]').type('username2@hotmail.com')
    cy.get('[data-qa="login-password"]').type('password2')
    cy.get('[data-qa="login-button"]').click()
    cy.contains('username2')
    .should('be.visible')
    cy.contains('Logout').click()
    });
    
    it('Login User with incorrect email and password', () => {
        cy.visit('/login')  
        cy.get('[data-qa="login-email"]').type('username2@hotmail.com')
        cy.get('[data-qa="login-password"]').type('password3')
        cy.get('[data-qa="login-button"]').click()
        cy.contains('Your email or password is incorrect!')
        .should('be.visible');

    });
});