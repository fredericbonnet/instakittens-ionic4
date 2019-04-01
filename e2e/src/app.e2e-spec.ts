import { AppPage } from './app.po';
import { HomePage } from './home.po';

describe('App', () => {
  let page: AppPage;

  beforeEach(() => {
    page = new AppPage();
  });

  it('should display the app name', () => {
    page.navigateTo();
    expect(page.getTitle()).toBe('Instakittens');
  });

  it('should redirect to the home page', async () => {
    page.navigateTo();
    const homePage = new HomePage();
    expect(await homePage.isActive()).toEqual(true);
  });
});
