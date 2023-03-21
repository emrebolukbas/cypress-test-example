/// <reference types="Cypress" />

import { Login } from "../../pageobjects/login"
const login = new Login ();

describe ('POM Example', () =>{
    
    it('TC001 - POM command call', () => { 

        login.navigate();
        login.title()
        .username()
        .password();
        login.btn();
        
    });
});