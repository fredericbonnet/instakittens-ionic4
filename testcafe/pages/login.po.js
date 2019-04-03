import { Selector, t } from 'testcafe';

/**
 * Login page object.
 */
export class LoginPage {
  async navigateTo() {
    return t.navigateTo(global.BASE_URL + '/login');
  }

  async isActive() {
    return (await t.eval(() => window.location.pathname)) === '/login';
  }

  getUsernameInput() {
    return Selector('[data-testid="username-input"]');
  }
  getPasswordInput() {
    return Selector('[data-testid="password-input"]');
  }
  getSigninButton() {
    return Selector('[data-testid="signin-button"]');
  }
}
