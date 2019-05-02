describe('Foo', () => {
  it('bar', async browser => {
    const appPage = browser.page.app();
    appPage.navigateTo();
  });
});
