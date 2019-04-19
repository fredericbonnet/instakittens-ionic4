const { Given, Then } = require('cucumber');
const { LoginPage } = require('../pages/login.po');

const loginPage = new LoginPage();

Given('I go to the Login Page', async function() {
  await loginPage.navigateTo();
});

Then('I should see the Login Form', async function() {
  expect(await loginPage.getLoginForm()).to.be.ok;
});

Then('the Login Form should have a Username Input', async function() {
  expect(await loginPage.getUsernameInput()).to.be.ok;
});

Then('the Login Form should have a Password Input', async function() {
  expect(await loginPage.getPasswordInput()).to.be.ok;
});

Then('the Login Form should have a Sign In Button', async function() {
  expect(await loginPage.getSigninButton()).to.be.ok;
});
