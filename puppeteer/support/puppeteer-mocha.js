const puppeteer = require('puppeteer');

// Launch options.
const options = {
  headless: true,
};

// Create a global browser for the test session.
before({ timeout: 10000 }, async () => {
  global.browser = await puppeteer.launch(options);
});
after(async () => {
  await global.browser.close();
});

// Create a fresh browser context for each test.
beforeEach({ timeout: 10000 }, async () => {
  global.context = await global.browser.createIncognitoBrowserContext();
  global.page = await global.context.newPage();
});
afterEach(async () => {
  await global.page.close();
  await global.context.close();
});
