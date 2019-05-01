/* global Given, When, Then */

import { LoginPage } from '../pages/login.po';

const loginPage = new LoginPage();

Given('I go to the Login Page', () => {
  loginPage.navigateTo();
});

Then('I should be redirected to the Login Page', () => {
  loginPage.waitActive();
});

Then('I should leave the Login Page', () => {
  loginPage.waitInactive();
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

Then('the Sign In Button of the Login Form should be disabled', () => {
  loginPage.getSigninButton().should('have.attr', 'disabled');
});

When('I type my username into the Username Input of the Login Form', () => {
  cy.getWorld().then(world => {
    cy.fixture('test-accounts.json').then(testAccounts => {
      const account = testAccounts.find(account => account.role === world.role);
      loginPage.getUsernameInput().type(account.username);
    });
  });
});

When('I type my password into the Password Input of the Login Form', () => {
  cy.getWorld().then(world => {
    cy.fixture('test-accounts.json').then(testAccounts => {
      const account = testAccounts.find(account => account.role === world.role);
      loginPage.getPasswordInput().type(account.password);
    });
  });
});

When('I type {string} into the Password Input of the Login Form', password => {
  loginPage.getPasswordInput().type(password);
});

When('I click on the Sign In Button of the Login Form', () => {
  loginPage.getSigninButton().click();
});
