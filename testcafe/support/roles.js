import { Role } from 'testcafe';
import { LoginPage } from '../pages/login.po';

const loginPage = new LoginPage();

const testAccounts = require('../data/test-accounts.json');

/**
 * Create a role of the given type.
 *
 * @param role Account role (e.g. admin, user)
 */
function newRole(role) {
  return Role(loginPage.url(), async () => {
    const account = testAccounts.find(account => account.role === role);
    await loginPage.login(account.username, account.password);
  });
}

/** Admin role */
export const adminRole = newRole('admin');

/** User role */
export const userRole = newRole('user');

/** Unknown role */
export const unknownRole = newRole('unknown');

/** Anonymous role */
export const anonymousRole = Role.anonymous();
