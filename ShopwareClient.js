/**
 * Created by braunreu on 09.02.15.
 */
'use strict';
var request = require('request');

/** this client wraps the http calls for easy accessing the api. */
function ShopwareClient(apiBaseUrl, apiUser, apiKey) {
  this.baseUrl = apiBaseUrl + '/api/';
  this.apiUser = apiUser;
  this.apiKey = apiKey;
}

ShopwareClient.prototype.get = function(url) {
  request.get(this.baseUrl + url, function (error, response, body) {
    if(error) {
      console.log(error);
    } else {
      console.log(body);
    }
  })
    .auth(this.apiUser, this.apiKey, false);
};

ShopwareClient.prototype.post = function (url, params) {

};

ShopwareClient.prototype.put = function (url, params) {

};

ShopwareClient.prototype.delete = function (url, params) {

};

module.exports = ShopwareClient;