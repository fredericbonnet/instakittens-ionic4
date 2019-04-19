/// <reference path="../steps.d.ts" />

const loginPage = require('../pages/login.po');

const I = actor();

Given('I go to the Login Page', () => {
  loginPage.navigateTo();
});

Then('I should see the Login Form', () => {
  I.seeElement(loginPage.getLoginForm());
});

Then('the Login Form should have a Username Input', () => {
  I.seeElement(loginPage.getUsernameInput());
});

Then('the Login Form should have a Password Input', () => {
  I.seeElement(loginPage.getPasswordInput());
});

Then('the Login Form should have a Sign In Button', () => {
  I.seeElement(loginPage.getSigninButton());
});
