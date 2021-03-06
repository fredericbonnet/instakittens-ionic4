import { Selector, t } from 'testcafe';

/**
 * App page object.
 */
export class AppPage {
  constructor(boundTestRun) {
    this.t = boundTestRun || t;
    this.options = { boundTestRun };
  }

  async navigateTo() {
    return this.t.navigateTo(global.BASE_URL + '/');
  }

  getTitle() {
    return Selector('app-root ion-title').with(this.options).textContent;
  }

  getErrorMessage() {
    return Selector('ion-toast.error-message').with(this.options);
  }
  async waitErrorMessageVisible() {
    return this.t.expect(this.getErrorMessage().exists).ok();
  }
  async waitErrorMessageNotVisible() {
    return this.t.expect(this.getErrorMessage().exists).notOk();
  }
}
