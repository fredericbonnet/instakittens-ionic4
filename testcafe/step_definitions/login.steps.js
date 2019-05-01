const { Before, Given, When, Then } = require('cucumber');
const { LoginPage } = require('../pages/login.po');

const testAccounts = require('../data/test-accounts.json');

Before(function() {
  this.loginPage = new LoginPage(this.t);
});

Given('I go to the Login Page', async function() {
  await this.loginPage.navigateTo();
});

Then('I should be redirected to the Login Page', async function() {
  await this.loginPage.waitActive();
});

Then('I should leave the Login Page', async function() {
  await this.loginPage.waitInactive();
});

Then('I should see the Login Form', async function() {
  await this.t.expect(this.loginPage.getLoginForm().exists).ok();
});

Then('the Login Form should have a Username Input', async function() {
  await this.t.expect(this.loginPage.getUsernameInput().exists).ok();
});

Then('the Login Form should have a Password Input', async function() {
  await this.t.expect(this.loginPage.getPasswordInput().exists).ok();
});

Then('the Login Form should have a Sign In Button', async function() {
  await this.t.expect(this.loginPage.getSigninButton().exists).ok();
});

Then(
  'the Sign In Button of the Login Form should be disabled',
  async function() {
    await this.t
      .expect(this.loginPage.getSigninButton().hasAttribute('disabled'))
      .ok();
  }
);

When(
  'I type my username into the Username Input of the Login Form',
  async function() {
    const account = testAccounts.find(account => account.role === this.role);
    await this.t.typeText(this.loginPage.getUsernameInput(), account.username);
  }
);

When(
  'I type my password into the Password Input of the Login Form',
  async function() {
    const account = testAccounts.find(account => account.role === this.role);
    await this.t.typeText(this.loginPage.getPasswordInput(), account.password);
  }
);

When(
  'I type {string} into the Password Input of the Login Form',
  async function(password) {
    await this.t.typeText(this.loginPage.getPasswordInput(), password);
  }
);

When('I click on the Sign In Button of the Login Form', async function() {
  await this.t.click(this.loginPage.getSigninButton());
});
