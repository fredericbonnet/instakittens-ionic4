/// <reference path="../steps.d.ts" />

const { I, loginPage } = inject();

const testAccounts = require('../data/test-accounts.json');

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

Then('the Sign In Button of the Login Form should be disabled', () => {
  I.seeAttributesOnElements(loginPage.getSigninButton(), { disabled: true });
});

When(
  'I type my username into the Username Input of the Login Form',
  async () => {
    const world = await I.getWorld();
    const account = testAccounts.find(account => account.role === world.role);
    I.fillField(loginPage.getUsernameInput(), account.username);
  }
);

When(
  'I type my password into the Password Input of the Login Form',
  async () => {
    const world = await I.getWorld();
    const account = testAccounts.find(account => account.role === world.role);
    I.fillField(loginPage.getPasswordInput(), account.password);
  }
);

When('I type {string} into the Password Input of the Login Form', password => {
  I.fillField(loginPage.getPasswordInput(), password);
});

When('I click on the Sign In Button of the Login Form', () => {
  I.click(loginPage.getSigninButton());
});
