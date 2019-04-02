import { HomePage } from './pages/home.po';

describe('Home Page', () => {
  const homePage: HomePage = new HomePage();

  it('should have a link to Users', () => {
    homePage.navigateTo();
    expect(homePage.getUsersLink().isPresent()).toEqual(true);
  });
});
