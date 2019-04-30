import { browser, by, element } from 'protractor';

/**
 * App page object.
 */
export class AppPage {
  async navigateTo() {
    return browser.get('/');
  }

  async getTitle() {
    return element(by.deepCss('app-root ion-title')).getText();
  }

  getErrorMessage() {
    return element(by.css('ion-toast.error-message'));
  }
  async waitErrorMessageVisible() {
    return browser.wait(
      async () => await this.getErrorMessage().isPresent(),
      5000
    );
  }
  async waitErrorMessageNotVisible() {
    return browser.wait(
      async () => !(await this.getErrorMessage().isPresent()),
      5000
    );
  }
}
