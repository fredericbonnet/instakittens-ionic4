# Instakittens Ionic 4/Angular client application

This project implements a client application for the [Instakittens
project](https://github.com/fredericbonnet/instakittens).

It uses the [Ionic 4](https://ionicframework.com/) and [Angular
7](https://angular.io/) frameworks that let you build modern multi-platform web
applications very rapidly.

It connects to the [Instakittens JSON
Server](https://github.com/fredericbonnet/instakittens-json-server) backend on
port 3000.

## NPM Scripts

### Serving the app

Start the development server on port 4200:

```sh
npm run start
```

Start the production server on port 4201:

```sh
npm run start:prod
```

### Unit tests

Run Karma/Jasmine unit tests in watch mode:

```sh
npm run test
```

### End-to-end tests

#### Protractor

Protractor tests need a running development server on port 4200 unless otherwise stated.

Run Protractor tests once (will build & serve on port 4200)

```sh
npm run e2e
```

Run Protractor tests in watch mode:

```sh
npm run e2e:watch-no-serve
```

Run Protractor Cucumber scenarios once (will build & serve on port 4200)

```sh
npm run e2e:cucumber
```

Run Protractor Cucumber scenarios in watch mode:

```sh
npm run e2e:cucumber:watch-no-serve
```

#### Puppeteer

Puppeteer tests need a running development server on port 4200.

Run Puppeteer tests once:

```sh
npm run puppeteer
```

Run Puppeteer tests in watch mode:

```sh
npm run puppeteer:watch
```

Run Puppeteer Cucumber scenarios once:

```sh
npm run cucumber
```

Run Puppeteer Cucumber scenarios in watch mode:

```sh
npm run cucumber:watch
```

#### Cypress

Cypress tests need a running development server on port 4200.

Run Cypress tests & scenarios once:

```sh
npm run cypress:run
```

Open Cypress GUI:

```sh
npm run cypress:open
```

#### TestCafé

TestCafé tests need a running production server on port 4201. For some reason, Ionic 4 in development mode doesn't play nice with the TestCafé Hammerhead proxy.

Run TestCafé tests & scenarios once:

```sh
npm run testcafe
```

Run TestCafé tests & scenarios in watch mode:

```sh
npm run testcafe:watch
```

#### CodeceptJS

CodeceptJS tests need a running development server on port 4200.

Run CodeceptJS tests & scenarios once:

```sh
npm run codeceptjs
```

Run CodeceptJS tests & scenarios in watch mode:

```sh
npm run codeceptjs:watch
```

## Project bootstrap

This project was bootstrapped with the [Ionic CLI](https://ionicframework.com/docs/cli):

```sh
ionic start instakittens-ionic4 blank --type=angular
```
