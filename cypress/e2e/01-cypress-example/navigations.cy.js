/// <reference types="Cypress" />

describe ('Using Back Forward', () => {

    it('Will Go Cypress Homepage and Click otherpage after will use back forward commands', () => {
        
        cy.visit("https://www.cypress.io/");
        cy.title().should('eq','JavaScript Web Testing and Component Testing Framework | cypress.io'); 
        
        cy.get(':nth-child(5) > .nav-bar-link').should('be.visible').click(); /// Will go to pricing page
        cy.title().should('contains','Cypress Cloud Pricing ');

        cy.go('back'); /// Will go to Homepage
        cy.title().should('eq','JavaScript Web Testing and Component Testing Framework | cypress.io');
        cy.wait(2000);

        cy.go('forward'); /// Will go to Pricing Page
        cy.title().should('contains','Cypress Cloud Pricing ');
        cy.wait(2000);

        cy.go(-1); /// Will go to Homepage
        cy.title().should('eq','JavaScript Web Testing and Component Testing Framework | cypress.io');
        cy.wait(2000);
        
        cy.go(1); /// Will go to Pricing Page
        cy.title().should('contains','Cypress Cloud Pricing ');


    });
})