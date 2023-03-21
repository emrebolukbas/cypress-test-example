export class Log {

    navigate(){
        cy.visit('https://automationexercise.com/login')
    }

    title(){
        cy.title('eq','Automation Exercise - Signup / Login')
    }

    signuser(){
        cy.get('signup-name')
        .clear()
        .type('user123@hotmail.com')
    }

    signpass(){
        cy.get('signup-email')
        .clear()
        .type('123user')
    }
    
    loginuser(){
        cy.get('login-name')
        .clear()
        .type('user123@hotmail.com')

    }
    
    loginpass(){
        cy.get('login-email')
        .clear()
        .type('123user')
    }

    fakeloginuser(){
        cy.get('login-name')
        .clear()
        .type('fakeuser123@hotmail.com')

    }
    
    fakeloginpass(){
        cy.get('login-email')
        .clear()
        .type('123fakeuser')
    }

    btnsign(){
        cy.get('signup-button')
        .should('be.visible')
        .click()
    }
    btnlogin(){
        cy.get('login-button')
        .should('be.visible')
        .click()

    }
}