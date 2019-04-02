import { HomePage } from './pages/home.po';

fixture('Home Page');

const homePage = new HomePage();

test('should have a link to Users', async t => {
  await homePage.navigateTo();
  await t.expect(homePage.getUsersLink().exists).ok();
});
