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
    appPage: './pages/app.po.js',
    homePage: './pages/home.po.js',
    loginPage: './pages/login.po.js',
  },
  require: glob.sync(__dirname + '/support/**/*.js'),
  bootstrap: null,
  mocha: {},
  name: 'instakittens-ionic4',
};
