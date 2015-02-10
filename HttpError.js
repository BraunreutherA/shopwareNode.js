/**
 * Created by braunreu on 29.01.15.
 */
'use strict';
function HttpError(statusCode, message, errors) {
  Error.call(this);
  Error.captureStackTrace(this, HttpError);
  this.message = message;
  this.errors = errors;
  this.statusCode = statusCode;
  this.name = "HttpError";
}
require('util').inherits(HttpError, Error);

module.exports = HttpError;