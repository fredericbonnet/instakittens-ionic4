import { UsersPage } from './pages/users.po';
import { useRole } from './support/roles';

describe('User Roles', () => {
  const usersPage: UsersPage = new UsersPage();

  it('admin', () => {
    useRole('admin');
    usersPage.navigateTo();
    usersPage.waitActive();
  });

  it('user', () => {
    useRole('user');
    usersPage.navigateTo();
    usersPage.waitActive();
  });

  it('admin 2', () => {
    useRole('admin');
    usersPage.navigateTo();
    usersPage.waitActive();
  });
});
