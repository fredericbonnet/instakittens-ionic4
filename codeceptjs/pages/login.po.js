const I = actor();

/**
 * Login page object.
 */
module.exports = {
  navigateTo() {
    I.amOnPage('/login');
  },

  async isActive() {
    return new URL(await I.grabCurrentUrl()).pathname === '/login';
  },
  waitActive() {
    I.waitForFunction(() => window.location.pathname === '/login');
  },
  waitInactive() {
    I.waitForFunction(() => window.location.pathname !== '/login');
  },

  getLoginForm() {
    return '[data-testid="login-form"]';
  },
  getUsernameInput() {
    return '[data-testid="username-input"] input';
  },
  getPasswordInput() {
    return '[data-testid="password-input"] input';
  },
  getSigninButton() {
    return '[data-testid="signin-button"]';
  },

  login(username, password) {
    I.fillField(this.getUsernameInput(), username);
    I.fillField(this.getPasswordInput(), password);
    I.click(this.getSigninButton());
  },
};
