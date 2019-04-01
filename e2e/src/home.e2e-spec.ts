import { HomePage } from './home.po';

describe('Home Page', () => {
  let page: HomePage;

  beforeEach(() => {
    page = new HomePage();
  });

  it('should have a link to Users', () => {
    page.navigateTo();
    expect(page.getUsersLink().isPresent()).toEqual(true);
  });
});
