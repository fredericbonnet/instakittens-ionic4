const I = actor();

/**
 * App page object.
 */
module.exports = {
  navigateTo() {
    I.amOnPage('/');
  },

  async getTitle() {
    return await I.grabTextFrom('app-root ion-title');
  },
};
