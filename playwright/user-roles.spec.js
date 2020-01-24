const { UsersPage } = require('./pages/users.po');
const { LoginPage } = require('./pages/login.po');
const { useRole } = require('./support/roles');

describe('User Roles', () => {
  const usersPage = new UsersPage();
  const loginPage = new LoginPage();

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

  it('unknown', async () => {
    await useRole('unknown');
    await usersPage.navigateTo();
    await loginPage.waitActive();
  });

  it('anonymous', async () => {
    await useRole('anonymous');
    await usersPage.navigateTo();
    await loginPage.waitActive();
  });
});
