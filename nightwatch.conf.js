// See https://github.com/nightwatchjs/nightwatch/issues/1992#issuecomment-455902105
const chromedriver = require('chromedriver');
module.exports = (function(settings) {
  settings.webdriver.server_path = chromedriver.path;
  return settings;
})(require('./nightwatch.json'));
