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

  getUsernameInput() {
    return '[data-testid="username-input"]';
  },
  getPasswordInput() {
    return '[data-testid="password-input"]';
  },
  getSigninButton() {
    return '[data-testid="signin-button"]';
  },
};
