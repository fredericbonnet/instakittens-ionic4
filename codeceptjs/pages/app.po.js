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

  getErrorMessage() {
    return 'ion-toast.error-message';
  },
  waitErrorMessageVisible() {
    I.waitForVisible(this.getErrorMessage());
  },
  waitErrorMessageNotVisible() {
    I.waitForInvisible(this.getErrorMessage());
  },
};
