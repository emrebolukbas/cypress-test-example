/// <reference types="Cypress" />

describe('Test Automation Website', () => {
    it('Seach Product and Add in Cart', () => {
        cy.visit('/products')
        cy.get('#search_product')
        .type('polo')
        cy.get('#submit_search')
        .click()
        cy.get('.productinfo > .btn')
        .click()
        cy.contains('Your product has been added to cart.')
        .should('be.visible')
        cy.get('[data-dismiss="modal"]')
        .click()
        cy.get('#search_product')
        .clear()
        .type('kids')
        cy.get('#submit_search')
        .click()
        cy.get('.productinfo > .btn')
        .click()
        cy.contains('Your product has been added to cart.')
        .should('be.visible')
        cy.get('[data-dismiss="modal"]')
        .click()
        cy.contains('Cart')
        .click()
        cy.contains('Proceed To Checkout')
        .click()
        cy.get('.modal-body').should('contain','Register / Login account to proceed on checkout.')

    });
});