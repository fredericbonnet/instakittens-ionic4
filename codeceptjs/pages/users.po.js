const I = actor();

/**
 * Users page object.
 */
module.exports = {
  navigateTo() {
    I.amOnPage('/users');
  },

  async isActive() {
    return (await I.grabCurrentUrl()).endsWith('/users');
  },
  waitActive() {
    I.waitForFunction(() => window.location.pathname === '/users');
  },
  waitInactive() {
    I.waitForFunction(() => window.location.pathname !== '/users');
  },
};
