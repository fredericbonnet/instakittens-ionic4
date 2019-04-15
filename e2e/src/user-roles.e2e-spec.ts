import { UsersPage } from './pages/users.po';
import { useRole } from './support/roles';

describe('User Roles', () => {
  const usersPage: UsersPage = new UsersPage();

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
});
