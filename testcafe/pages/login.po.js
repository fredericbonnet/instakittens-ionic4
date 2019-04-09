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
  async waitActive() {
    return t.expect(t.eval(() => window.location.pathname)).eql('/login');
  }
  async waitInactive() {
    return t.expect(t.eval(() => window.location.pathname)).notEql('/login');
  }

  getUsernameInput() {
    return Selector('[data-testid="username-input"] input');
  }
  getPasswordInput() {
    return Selector('[data-testid="password-input"] input');
  }
  getSigninButton() {
    return Selector('[data-testid="signin-button"]');
  }

  async login(username, password) {
    await t.typeText(this.getUsernameInput(), username);
    await t.typeText(this.getPasswordInput(), password);
    await t.click(this.getSigninButton());
  }
}
