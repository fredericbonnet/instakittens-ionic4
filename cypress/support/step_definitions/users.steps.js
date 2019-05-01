/* global Given, When, Then */

import { UsersPage } from '../pages/users.po';

const usersPage = new UsersPage();

Given('I go to the Users Page', () => {
  usersPage.navigateTo();
});

Then('I should see the User List', () => {
  usersPage.getUserList().should('exist');
});
