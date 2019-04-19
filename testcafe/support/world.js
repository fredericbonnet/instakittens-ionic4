const { setWorldConstructor } = require('cucumber');

/**
 * Cucumber world object for TestCafé.
 *
 * Makes it possible for Cucumber step definitions to access the current TestCafé test runner.
 */
class World {
  /**
   * Constructor.
   *
   * @param {Object} options
   * @param {function} options.attach Function used for adding attachments to hooks/steps
   * @param {Object} options.parameters Object of parameters passed in via the Cucumber runner
   * @param {TestController} options.parameters.t TestCafé test controller
   */
  constructor({ attach, parameters }) {
    // Standard initialization.
    this.attach = attach;
    this.parameters = parameters;
  }

  /**
   * TestCafé test controller accessor.
   */
  get t() {
    return this.parameters.t;
  }
}
setWorldConstructor(World);
