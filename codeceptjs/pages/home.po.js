const I = actor();

/**
 * Home page object.
 */
module.exports = {
  navigateTo() {
    I.amOnPage('/home');
  },

  async isActive() {
    return (await I.grabCurrentUrl()).endsWith('/home');
  },

  getUsersLink() {
    return '[data-testid="users-link"]';
  },
};
