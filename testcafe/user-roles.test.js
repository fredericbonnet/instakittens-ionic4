import { UsersPage } from './pages/users.po';
import { adminRole, userRole } from './support/roles';

const usersPage = new UsersPage();

fixture('User Roles').page(global.BASE_URL);

test('admin', async t => {
  await t.useRole(adminRole);
  await usersPage.navigateTo();
  await usersPage.waitActive();
});

test('user', async t => {
  await t.useRole(userRole);
  await usersPage.navigateTo();
  await usersPage.waitActive();
});

test('admin 2', async t => {
  await t.useRole(adminRole);
  await usersPage.navigateTo();
  await usersPage.waitActive();
});
