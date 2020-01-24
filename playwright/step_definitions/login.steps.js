const { Given, When, Then } = require('cucumber');
const { LoginPage } = require('../pages/login.po');

const testAccounts = require('../data/test-accounts.json');

const loginPage = new LoginPage();

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

Then(
  'the Sign In Button of the Login Form should be disabled',
  async function() {
    expect(
      await page.evaluate(el => el.disabled, await loginPage.getSigninButton())
    ).to.be.ok;
  }
);

When(
  'I type my username into the Username Input of the Login Form',
  async function() {
    const account = testAccounts.find(account => account.role === this.role);
    await (await loginPage.getUsernameInput()).type(account.username);
  }
);

When(
  'I type my password into the Password Input of the Login Form',
  async function() {
    const account = testAccounts.find(account => account.role === this.role);
    await (await loginPage.getPasswordInput()).type(account.password);
  }
);

When(
  'I type {string} into the Password Input of the Login Form',
  async function(password) {
    await (await loginPage.getPasswordInput()).type(password);
  }
);

When('I click on the Sign In Button of the Login Form', async function() {
  await (await loginPage.getSigninButton()).click();
});
