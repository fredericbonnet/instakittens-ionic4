/*
 * Cucumber-js profiles.
 */

module.exports = {
  default: `
    features/**/*.feature
    --require support/globals.js 
    --require support/assertions.js 
    --require support/puppeteer-cucumber.js 
    --require step_definitions/**/*.steps.js
    `,
};
