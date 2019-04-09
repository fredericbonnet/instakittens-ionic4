/// <reference path="./steps.d.ts" />

const testAccounts = require('./data/test-accounts.json');

Feature('Test Sessions');

Scenario('should not persist between runs', (usersPage, loginPage) => {
  usersPage.navigateTo();
  loginPage.waitActive();

  const account = testAccounts.find(account => account.role === 'admin');
  loginPage.login(account.username, account.password);
  loginPage.waitInactive();
});

Scenario('should not persist between tests', (usersPage, loginPage) => {
  usersPage.navigateTo();
  loginPage.waitActive();
});
