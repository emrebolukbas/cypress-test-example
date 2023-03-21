/// <reference types="Cypress" />

describe('firstApiTest', () => {

    it('Headers Verification', () => {
        cy.request('https://pokeapi.co/api/v2/pokemon/1')
        .its('headers')
        .its('content-type')
        .should('include','application/json; charset=utf-8');
        
    });

    it('Headers Verification-2', () => {
        cy.request({
            method: 'GET',
            url: 'https://pokeapi.co/api/v2/pokemon/1'
        })
        .its('headers')
        .its('content-type')
        .should('include','application/json; charset=utf-8');
        
    });
    it('Status Verification', () => {
        cy.request('https://pokeapi.co/api/v2/pokemon/1')
        .its('status')
        .its(200)
        .should('eq');
    });
    it('Status Verification-2', () => {
        cy.request({
            method:'GET',
            url:'https://pokeapi.co/api/v2/pokemon/1'
        })
        .its('status')
        .its(200)
        .should('eq');
    });

    it('Body-Name Verification', () => {
        cy.request('https://pokeapi.co/api/v2/pokemon/1')
        .its('body')
        .should('include',  {name: 'bulbasaur'});
    });
    it('Body-Name Verification-2', () => {
        cy.request({
            method:'GET',
            url:'https://pokeapi.co/api/v2/pokemon/1'

        })
        .its('body')
        .should('include',  {name: 'bulbasaur'});
    });
    it('Server Verification', () => {
        cy.request('https://pokeapi.co/api/v2/pokemon/1')
        .its('headers')
        .its('server')
        .should('eq','cloudflare');
    });
    it('Server Verification-2', () => {
        cy.request({
            method:'GET',
            url:'https://pokeapi.co/api/v2/pokemon/1'
        })
        .its('headers')
        .its('server')
        .should('eq','cloudflare');
    });

});

describe('Pokemon Data About  ', () => {
    it('Ivysaur status Verificition', () => {
        cy.request({
            method:'GET',
            url:'https://pokeapi.co/api/v2/pokemon/2'
        })
        .its('status')
        .should('eq',200)
        
    });
    it('Ivysaur headers Verificition', () => {
        cy.request({
            method:'GET',
            url:'https://pokeapi.co/api/v2/pokemon/2'
        })
        .its('headers')
        .its('cf-cache-status')
        .should('eq','HIT')
        
    });
    it('Ivysaur name Verificition', () => {
        cy.request({
            method:'GET',
            url:'https://pokeapi.co/api/v2/pokemon/2'
        })
        .its('body')
        .its('name')
        .should('eq','ivysaur')
        
    });
    it('Ivysaur experience Verificition', () => {
        cy.request({
            method:'GET',
            url:'https://pokeapi.co/api/v2/pokemon/2'
        })
        .its('body')
        .its('base_experience')
        .should('eq',142)
        
    });
    it('Ivysaur ability', () => {
        cy.request({
            method:'GET',
            url:'https://pokeapi.co/api/v2/pokemon/2'
        })
        .then((response) => {
            const res = response.body;
            const ability = res.abilities;

            expect(ability).to.have.lengthOf(2)
            

        });
    
        
    });
    
    

    
});

describe('Deneme', () => {
    it('Pokemon Information Verification-1', () => {
        cy.request({
            method:'GET',
            url:'https://pokeapi.co/api/v2/pokemon/5'
        })
        .its('status')
        .should('eq',200)
        
    });
    it('Pokemon Information Verification-2', () => {
        cy.request({
            method:'GET',
            url:'https://pokeapi.co/api/v2/pokemon/5'
        })
        .its('headers')
        .its('function-execution-id')
        .should('eq','rxryhflvcp07')
        
    });
    it('Pokemon Information Verification-3', () => {
        cy.request({
            method:'GET',
            url:'https://pokeapi.co/api/v2/pokemon/5'
        })
        .its('body')
        .its('order')
        .should('eq',6)
        
    });

    it('Pokemon Information Verification-4', () => {
        cy.request({
            method:'GET',
            url:'https://pokeapi.co/api/v2/pokemon/5'
        })
        .then((response) => {

            const res = response.body;
            const game = res.game_indices;

            expect(response.body.game_indices).to.have.lengthOf(20)
        })
        
    });
});