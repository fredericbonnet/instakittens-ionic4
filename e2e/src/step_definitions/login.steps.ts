import { Given, Then, When } from 'cucumber';
import { expect } from 'chai';
import { LoginPage } from '../pages/login.po';

const testAccounts = require('../../data/test-accounts.json');

const loginPage: LoginPage = new LoginPage();

Given('I go to the Login Page', async function() {
  await loginPage.navigateTo();
});

Then('I should be redirected to the Login Page', async function() {
  await loginPage.waitActive();
});

Then('I should leave the Login Page', async function() {
  await loginPage.waitInactive();
});

Then('I should see the Login Form', async function() {
  expect(await loginPage.getLoginForm().isPresent()).to.be.ok;
});

Then('the Login Form should have a Username Input', async function() {
  expect(await loginPage.getUsernameInput().isPresent()).to.be.ok;
});

Then('the Login Form should have a Password Input', async function() {
  expect(await loginPage.getPasswordInput().isPresent()).to.be.ok;
});

Then('the Login Form should have a Sign In Button', async function() {
  expect(await loginPage.getSigninButton().isPresent()).to.be.ok;
});

Then(
  'the Sign In Button of the Login Form should be disabled',
  async function() {
    expect(await loginPage.getSigninButton().getAttribute('disabled')).to.be.ok;
  }
);

When(
  'I type my username into the Username Input of the Login Form',
  async function() {
    const account = testAccounts.find(account => account.role === this.role);
    await loginPage.getUsernameInput().sendKeys(account.username);
  }
);

When(
  'I type my password into the Password Input of the Login Form',
  async function() {
    const account = testAccounts.find(account => account.role === this.role);
    await loginPage.getPasswordInput().sendKeys(account.password);
  }
);

When(
  'I type {string} into the Password Input of the Login Form',
  async function(password) {
    await loginPage.getPasswordInput().sendKeys(password);
  }
);

When('I click on the Sign In Button of the Login Form', async function() {
  await loginPage.getSigninButton().click();
});
