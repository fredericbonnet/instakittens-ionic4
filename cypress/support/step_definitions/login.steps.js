/* global Given, When, Then */

import { LoginPage } from '../pages/login.po';

const loginPage = new LoginPage();

Given('I go to the Login Page', () => {
  loginPage.navigateTo();
});

Then('I should see the Login Form', () => {
  loginPage.getLoginForm().should('exist');
});

Then('the Login Form should have a Username Input', () => {
  loginPage.getUsernameInput().should('exist');
});

Then('the Login Form should have a Password Input', () => {
  loginPage.getPasswordInput().should('exist');
});

Then('the Login Form should have a Sign In Button', () => {
  loginPage.getSigninButton().should('exist');
});
