const puppeteer = require('puppeteer');
const { BeforeAll, Before, After, AfterAll } = require('cucumber');

// Launch options.
const options = {
  headless: true,
};

// Create a global browser for the test session.
BeforeAll({ timeout: 10000 }, async () => {
  global.browser = await puppeteer.launch(options);
});
AfterAll(async () => {
  await global.browser.close();
});

// Create a fresh browser context for each test.
Before({ timeout: 10000 }, async () => {
  global.context = await global.browser.createIncognitoBrowserContext();
  global.page = await global.context.newPage();
});
After(async () => {
  await global.page.close();
  await global.context.close();
});
