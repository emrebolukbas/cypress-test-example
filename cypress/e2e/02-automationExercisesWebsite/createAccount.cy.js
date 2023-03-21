/// <reference types="Cypress" /> 

describe('Test Automation Website', () => {

    it('Create Account', () => {
        cy.visit('/');
        cy.title()
        .should('eq','Automation Exercise')
        cy.contains('Signup / Login')
        .click();
        cy.contains('New User Signup!')
        .should('be.visible');
        cy.get('[data-qa="signup-name"]')                       //You can copy details if you want use this data 
        .type('username2');                                     //Login Details-- mail-- username2@hotmail.com
        cy.get('[data-qa="signup-email"]')                      //Login Details-- password-- password2
        .type('username2@hotmail.com');
        cy.get('[data-qa="signup-button"]')
        .should('be.visible')
        .click()
        cy.get('#id_gender1').click()
        cy.get('[data-qa="password"]').type('password2')
        cy.get('[data-qa="days"]').select(5)
        cy.get('[data-qa="months"]').select(11)
        cy.get('#years').select(20)
        cy.get('#newsletter').click()
        cy.get('#optin').click()
        cy.get('#first_name').type('user')
        cy.get('[data-qa="last_name"]').type('name')
        cy.get('#company').type('Microsoft')
        cy.get('[data-qa="address"]').type('Gungoren Town')
        cy.get('[data-qa="address2"]').type('Bagcilar Street')
        cy.get('[data-qa="country"]').select('United States')
        cy.get('[data-qa="state"]').type('California')
        cy.get('[data-qa="city"]').type('LA')
        cy.get('[data-qa="zipcode"]').type(12345)
        cy.get('[data-qa="mobile_number"]').type(12345000023)
        cy.get('[data-qa="create-account"]').click()
        cy.get('[data-qa="continue-button"]').click()
    });   

    it.only('Register User with existing email', () => {
        cy.visit('/login');
        cy.get('[data-qa="signup-name"]')                        
        .type('username2');                                     
        cy.get('[data-qa="signup-email"]')                      
        .type('username2@hotmail.com');
        cy.get('[data-qa="signup-button"]')
        .should('be.visible')
        .click()
        cy.contains('Email Address already exist!')
        .should('be.visible');
        
    });
    
});