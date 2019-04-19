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
}
