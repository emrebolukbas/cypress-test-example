/// <reference types="Cypress" />

describe ('SauceDemo Login Page Test', () =>{
    beforeEach(() => {
        cy.visit('https://www.saucedemo.com/');
    });
    afterEach (() => {
        cy.visit('https://www.saucedemo.com/');
    })
    it('TC001 - Go to SauceDemo Page and Verify Title', () => { 
        
        cy.title().should('eq',"Swag Labs");
        cy.wait(2000);

    });

    it('TC002 - Login Test False Information', () => { /// başarısız login testi
    
        
        cy.get('#user-name').type('user'); /// username
        cy.get('#password').type('password'); ///password
        cy.get('#login-button').should('be.visible').click(); ///login
    });
    it('TC003 - Login Test True Information', () => { /// başarılı login testi
    
        
        cy.get('#user-name').clear().type('standard_user'); /// username
        cy.get('#password').clear().type('secret_sauce'); ///password
        cy.get('#login-button').should('be.visible').click(); ///login
    });
    it('TC004 - Login Test True User False Password', () => { /// başarısız
    
        
        cy.get('#user-name').clear().type('standard_user'); /// username
        cy.get('#password').clear().type('secret_s'); ///password
        cy.get('#login-button').should('be.visible').click(); ///login
    });
    it('TC005 - Login Test True Password False User', () => { /// başarısız login testi
    
        
        cy.get('#user-name').clear().type('ndard_user'); /// username
        cy.get('#password').clear().type('secret_sauce'); ///password 
        cy.get('#login-button').should('be.visible').click(); ///login
    });
});
