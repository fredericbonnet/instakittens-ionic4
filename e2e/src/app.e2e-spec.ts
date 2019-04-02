import { AppPage } from './pages/app.po';
import { HomePage } from './pages/home.po';

describe('App', () => {
  const appPage: AppPage = new AppPage();
  const homePage: HomePage = new HomePage();

  it('should display the app name', () => {
    appPage.navigateTo();
    expect(appPage.getTitle()).toBe('Instakittens');
  });

  it('should redirect to the home page', async () => {
    appPage.navigateTo();
    expect(await homePage.isActive()).toEqual(true);
  });
});
