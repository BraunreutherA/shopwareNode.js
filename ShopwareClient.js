/**
 * Created by braunreu on 09.02.15.
 */
'use strict';
var request = require('request-promise');
var BPromise = require('bluebird');
var HttpError = require('./HttpError');

/** this client wraps the http calls for easy accessing the api. */
function ShopwareClient(apiBaseUrl, apiUser, apiKey) {
  this.baseUrl = apiBaseUrl + '/api/';
  this.apiUser = apiUser;
  this.apiKey = apiKey;
}

function errorHandler(error) {
  return BPromise.reject(new HttpError(error.statusCode, error.message, error.errors));
}

function successHandler(body) {
  body = JSON.parse(body);
  return BPromise.resolve(body);
}

ShopwareClient.prototype._call = function(url, method, data) {
  return request({
    method: method,
    uri: this.baseUrl + url,
    auth: {
      user: this.apiUser,
      pass: this.apiKey,
      sendImmediately: false
    },
    body: JSON.stringify(data)
  })
    .then(successHandler)
    .catch(errorHandler);
};


ShopwareClient.prototype.get = function(url) {
    return this._call(url, 'GET');
};

ShopwareClient.prototype.post = function (url, data) {
  return this._call(url, 'POST', data);
};

ShopwareClient.prototype.put = function (url, data) {
  return this._call(url, 'PUT', data);
};

ShopwareClient.prototype.delete = function (url, data) {
  return this._call(url, 'DELETE', data);
};

module.exports = ShopwareClient;