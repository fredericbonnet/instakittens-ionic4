import { Given, Then } from 'cucumber';
import { expect } from 'chai';
import { UsersPage } from '../pages/users.po';

const usersPage: UsersPage = new UsersPage();

Given('I go to the Users Page', async function() {
  await usersPage.navigateTo();
});

Then('I should see the User List', async function() {
  expect(await usersPage.getUserList().isPresent()).to.be.ok;
});
