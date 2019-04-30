import { UsersPage } from './pages/users.po';
import { LoginPage } from './pages/login.po';
import { useRole } from './support/roles';

describe('User Roles', () => {
  const usersPage: UsersPage = new UsersPage();
  const loginPage: LoginPage = new LoginPage();

  it('admin', async () => {
    await useRole('admin');
    usersPage.navigateTo();
    usersPage.waitActive();
  });

  it('user', async () => {
    await useRole('user');
    usersPage.navigateTo();
    usersPage.waitActive();
  });

  it('admin 2', async () => {
    await useRole('admin');
    usersPage.navigateTo();
    usersPage.waitActive();
  });

  it('unknown', async () => {
    await useRole('unknown');
    usersPage.navigateTo();
    loginPage.waitActive();
  });

  it('anonymous', async () => {
    await useRole('anonymous');
    usersPage.navigateTo();
    loginPage.waitActive();
  });
});
