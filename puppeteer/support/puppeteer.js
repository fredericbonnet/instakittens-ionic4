const puppeteer = require('puppeteer');

// Launch options.
const options = {
  headless: true,
};

// Create a global browser and page for the test session.
before({ timeout: 10000 }, async () => {
  global.browser = await puppeteer.launch(options);
  global.page = await global.browser.newPage();
});
after(async () => {
  await global.page.close();
  await global.browser.close();
});
