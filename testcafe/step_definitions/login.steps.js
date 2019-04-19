const { Before, Given, Then } = require('cucumber');
const { LoginPage } = require('../pages/login.po');

Before(function() {
  this.loginPage = new LoginPage(this.t);
});

Given('I go to the Login Page', async function() {
  await this.loginPage.navigateTo();
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
