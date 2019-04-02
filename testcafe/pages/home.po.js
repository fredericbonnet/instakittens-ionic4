import { Selector, t } from 'testcafe';

/**
 * Home page object.
 */
export class HomePage {
  async navigateTo() {
    return t.navigateTo(global.BASE_URL + '/home');
  }

  async isActive() {
    return (await t.eval(() => window.location.pathname)) === '/home';
  }

  getUsersLink() {
    return Selector('[data-testid="users-link"]');
  }
}
