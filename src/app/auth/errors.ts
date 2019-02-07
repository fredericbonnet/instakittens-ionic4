/*
 * Authentication errors.
 *
 * @note Extending the built-in Error type requires setting the prototype
 * explicitly in the constructor.
 *
 * See: https://github.com/Microsoft/TypeScript/wiki/Breaking-Changes#extending-built-ins-like-error-array-and-map-may-no-longer-work
 */

/**
 * Error thrown when login is required (e.g. HTTP 401).
 */
export class LoginRequiredError extends Error {
  constructor(message: string) {
    super(message);

    Object.setPrototypeOf(this, LoginRequiredError.prototype);
  }
}

/**
 * Error thrown when access is denied (e.g. HTTP 403).
 */
export class AccessDeniedError extends Error {
  constructor(message: string) {
    super(message);

    Object.setPrototypeOf(this, AccessDeniedError.prototype);
  }
}
