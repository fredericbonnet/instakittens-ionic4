import { AppPage } from './pages/app.po';
import { HomePage } from './pages/home.po';

fixture('App');

const appPage = new AppPage();
const homePage = new HomePage();

test('should display the app name', async t => {
  await appPage.navigateTo();
  await t.expect(appPage.getTitle()).eql('Instakittens');
});

test('should redirect to the home page', async t => {
  await appPage.navigateTo();
  await t.expect(await homePage.isActive()).ok();
});
