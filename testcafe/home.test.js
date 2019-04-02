import { HomePage } from './home.po';

fixture('Home Page');

const page = new HomePage();

test('should have a link to Users', async t => {
  await page.navigateTo();
  await t.expect(page.getUsersLink().exists).ok();
});
