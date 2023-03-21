/// <reference types="Cypress" />

describe ('Login Custom Commands Test', () => {

    it ('TC001', () => {
        cy.fixture("userdata").as("user");
        cy.visit('https://www.saucedemo.com/');
        cy.get("@user").then((user) => {
            cy.login (user.username, user.password);
        })

    })
})
