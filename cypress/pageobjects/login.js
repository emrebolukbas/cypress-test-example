export class Login {
    
    navigate(){
        cy.visit('https://www.saucedemo.com/');
    }
    title(){
        cy.title().should('eq',"Swag Labs");
        return this;
    }
    username(){
        cy.get('#user-name').clear().type('standard_user'); /// username
        return this;

    }
    password(){
        cy.get('#password').clear().type('secret_sauce'); ///password
    }
    btn(){
        cy.get('#login-button').should('be.visible').click(); ///login
    }
}