const glob = require('glob');

const { users } = require('./support/roles');

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
    usersPage: './pages/users.po.js',
  },
  gherkin: {
    features: './features/*.feature',
    steps: [
      './step_definitions/steps.js',
      ...glob.sync('./step_definitions/**/*.steps.js', { cwd: __dirname }),
    ],
  },
  plugins: {
    autoLogin: {
      enabled: true,
      inject: 'useRole',
      users,
    },
  },
  require: glob.sync(__dirname + '/support/**/*.js'),
  bootstrap: null,
  mocha: {},
  name: 'instakittens-ionic4',
};
