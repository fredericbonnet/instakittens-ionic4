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
};
