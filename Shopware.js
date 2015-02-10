/**
 * Created by braunreu on 10.02.15.
 */
'use strict';
var ShopwareClient = require('./ShopwareClient');
var requireDir = require('require-dir');

function Shopware(config) {
  this.client = new ShopwareClient(config.apiUrl, config.apiUser, config.apiKey);

  var resources = requireDir('./resources');
  for(var key in resources) {
    this[key] = new resources[key](this.client);
  }
}

module.exports = Shopware;