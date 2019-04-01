const glob = require('glob');

exports.config = {
  tests: './*_test.js',
  output: './output',
  helpers: {
    Puppeteer: {
      url: 'http://localhost:4200',
    },
  },
  include: {
    I: './steps_file.js',
    appPage: './pages/app.js',
    homePage: './pages/home.js',
  },
  require: glob.sync(__dirname + '/support/**/*.js'),
  bootstrap: null,
  mocha: {},
  name: 'instakittens-ionic4',
};
