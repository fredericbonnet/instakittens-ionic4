import { t } from 'testcafe';

/**
 * Users page object.
 */
export class UsersPage {
  async navigateTo() {
    return t.navigateTo(global.BASE_URL + '/users');
  }

  async isActive() {
    return (await t.eval(() => window.location.pathname)) === '/users';
  }
  async waitActive() {
    return t.expect(t.eval(() => window.location.pathname)).eql('/users');
  }
  async waitInactive() {
    return t.expect(t.eval(() => window.location.pathname)).notEql('/users');
  }
}
