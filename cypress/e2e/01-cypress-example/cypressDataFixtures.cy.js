/// <reference types="Cypress" />

describe ('Cypress Data with Fixtures', () => {

    it ('TC001', () => { /// başarısız giriş
        cy.fixture("userdata").as("user");
        cy.visit('https://www.saucedemo.com/');
        cy.get("@user").then((user) => {
            cy.login (user.usernameFake, user.passwordFake);
            
        
        })

    })
    it ('TC002', () => { /// başarılı giriş
        cy.fixture("userdata").as("user");
        cy.visit('https://www.saucedemo.com/');
        cy.get("@user").then((user) => {
            cy.login (user.username, user.password);
            
        
        })

    })
})