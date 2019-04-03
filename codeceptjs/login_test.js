/// <reference path="./steps.d.ts" />

Feature('Login Page');

Before(loginPage => {
  loginPage.navigateTo();
});

Scenario('should have a username input', (I, loginPage) => {
  I.seeElement(loginPage.getUsernameInput());
});
Scenario('should have a password input', (I, loginPage) => {
  I.seeElement(loginPage.getPasswordInput());
});
Scenario('should have a signin button', (I, loginPage) => {
  I.seeElement(loginPage.getSigninButton());
});
