import { Selector, ClientFunction, t } from 'testcafe';

/**
 * Home page object.
 */
export class HomePage {
  navigateTo() {
    return t.navigateTo(global.BASE_URL + '/home');
  }

  async isActive() {
    return (await t.eval(() => window.location.pathname)) === '/home';
  }

  getUsersLink() {
    return Selector('[data-testid="users-link"]');
  }
}
