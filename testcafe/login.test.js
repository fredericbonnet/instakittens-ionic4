import { LoginPage } from './pages/login.po';

const loginPage = new LoginPage();

fixture('Login Page').beforeEach(async t => {
  await loginPage.navigateTo();
});

test('should have a username input', async t => {
  await t.expect(loginPage.getUsernameInput().exists).ok();
});
test('should have a password input', async t => {
  await t.expect(loginPage.getPasswordInput().exists).ok();
});
test('should have a signin button', async t => {
  await t.expect(loginPage.getSigninButton().exists).ok();
});
