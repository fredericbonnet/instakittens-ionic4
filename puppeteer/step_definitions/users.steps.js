const { Given, Then } = require('cucumber');
const { UsersPage } = require('../pages/users.po');

const usersPage = new UsersPage();

Given('I go to the Users Page', async function() {
  await usersPage.navigateTo();
});

Then('I should see the User List', async function() {
  expect(await usersPage.getUserList()).to.be.ok;
});
