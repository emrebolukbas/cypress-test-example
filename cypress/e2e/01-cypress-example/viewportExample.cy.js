// <reference types="Cypress" />

describe ('Diffrent Device Use Viewport', () => {

    it ('TC001', () => {
        cy.viewport ('iphone-8');
        cy.fixture("userdata").as("user");
        cy.visit('https://www.saucedemo.com/');
        cy.get("@user").then((user) => {
            cy.login (user.username, user.password);
        })
        cy.wait(2000);
    })

    it ('TC002', () => {
        cy.viewport (1500,700);
        cy.fixture("userdata").as("user");
        cy.visit('https://www.saucedemo.com/');
        cy.get("@user").then((user) => {
            cy.login (user.username, user.password);
        })
        cy.wait(2000);
    })

    it ('TC003', () => {
        cy.viewport ('ipad-mini');
        cy.fixture("userdata").as("user");
        cy.visit('https://www.saucedemo.com/');
        cy.get("@user").then((user) => {
            cy.login (user.username, user.password);
        })
        
    })
})