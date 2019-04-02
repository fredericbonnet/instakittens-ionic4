import { AppPage } from './app.po';
import { HomePage } from './home.po';

fixture('App');

const page = new AppPage();

test('should display the app name', async t => {
  await page.navigateTo();
  await t.expect(page.getTitle()).eql('Instakittens');
});

test('should redirect to the home page', async t => {
  await page.navigateTo();
  const homePage = new HomePage();
  await t.expect(await homePage.isActive()).ok();
});
