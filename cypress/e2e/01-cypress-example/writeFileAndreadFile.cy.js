/// <reference types="Cypress" />

describe ('writeFile and readFile', () =>{

    it('TC001-writeFile', () => {
        cy.writeFile('basitNotDefteri.txt','Merhaba Dünya\n');
        cy.writeFile('basitNotDefteri.txt','Cypress Dersine Hoş Geldiniz',{flag:'a+'});
       
    })
    it('TC002-readFile', () => {
        cy.readFile('basitNotDefteri.txt').then((text) => {
            expect(text).to.contain('Merhaba')
        })
       
    })

})