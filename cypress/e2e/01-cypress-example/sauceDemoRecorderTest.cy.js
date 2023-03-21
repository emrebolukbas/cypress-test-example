describe("sauceDemoRecorderTest", () => {
it("TC001", () => {
  cy.viewport(900, 704);

  cy.visit("https://www.saucedemo.com/");

  cy.get("[data-test=username]").click();

  cy.get("[data-test=username]").type("standard_user");

  cy.get("[data-test=password]").click();

  cy.get("[data-test=password]").type("secret_sauce");

  cy.get("[data-test=login-button]").click();

  cy.get("[data-test=add-to-cart-sauce-labs-backpack]").click();

  cy.get("#shopping_cart_container > a").click();

  cy.get("[data-test=continue-shopping]").click();

  cy.get("#react-burger-menu-btn").click();

  cy.get("#logout_sidebar_link").click();

  });
});

