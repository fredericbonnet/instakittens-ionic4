const { UsersPage } = require('./pages/users.po');
const { useRole } = require('./support/roles');

describe('User Roles', () => {
  const usersPage = new UsersPage();

  it('admin', async () => {
    await useRole('admin');
    await usersPage.navigateTo();
    await usersPage.waitActive();
  });

  it('user', async () => {
    await useRole('user');
    await usersPage.navigateTo();
    await usersPage.waitActive();
  });

  it('admin 2', async () => {
    await useRole('admin');
    await usersPage.navigateTo();
    await usersPage.waitActive();
  });
});
