import { Selector, t } from 'testcafe';

/**
 * Login page object.
 */
export class LoginPage {
  constructor(boundTestRun) {
    this.t = boundTestRun || t;
    this.options = { boundTestRun };
  }

  url() {
    return global.BASE_URL + '/login';
  }
  async navigateTo() {
    return this.t.navigateTo(global.BASE_URL + '/login');
  }

  async isActive() {
    return (await this.t.eval(() => window.location.pathname)) === '/login';
  }
  async waitActive() {
    return this.t
      .expect(this.t.eval(() => window.location.pathname))
      .eql('/login');
  }
  async waitInactive() {
    return this.t
      .expect(this.t.eval(() => window.location.pathname))
      .notEql('/login');
  }

  getLoginForm() {
    return Selector('[data-testid="login-form"]').with(this.options);
  }
  getUsernameInput() {
    return Selector('[data-testid="username-input"] input').with(this.options);
  }
  getPasswordInput() {
    return Selector('[data-testid="password-input"] input').with(this.options);
  }
  getSigninButton() {
    return Selector('[data-testid="signin-button"]').with(this.options);
  }

  async login(username, password) {
    await this.t.typeText(this.getUsernameInput(), username);
    await this.t.typeText(this.getPasswordInput(), password);
    await this.t.click(this.getSigninButton());
  }
}
