import { LoginPage } from './pages/login.po';

describe('Login Page', () => {
  const loginPage: LoginPage = new LoginPage();

  beforeEach(() => {
    loginPage.navigateTo();
  });

  it('should have a username input', () => {
    expect(loginPage.getUsernameInput().isPresent()).toEqual(true);
  });
  it('should have a password input', () => {
    expect(loginPage.getPasswordInput().isPresent()).toEqual(true);
  });
  it('should have a signin button', () => {
    expect(loginPage.getSigninButton().isPresent()).toEqual(true);
  });
});
