import { Given, Then } from 'cucumber';
import { expect } from 'chai';
import { LoginPage } from '../pages/login.po';

const loginPage: LoginPage = new LoginPage();

Given('I go to the Login Page', async function() {
  await loginPage.navigateTo();
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
