/// <reference types="Cypress" />

describe ('writeFile and readFile', () =>{

    it('TC001-writeFile', () => {
        cy.writeFile('basicNotePad.txt','Hello World\n');
        cy.writeFile('basicNotePad.txt','Welcome to Cypress Lesson',{flag:'a+'});
       
    })
    it('TC002-readFile', () => {
        cy.readFile('basicNotePad.txt').then((text) => {
            expect(text).to.contain('Hello')
        })
       
    })

})
