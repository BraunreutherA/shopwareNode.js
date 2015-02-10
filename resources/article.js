/**
 * Created by braunreu on 10.02.15.
 */
'use strict';

function Article(client) {
  this.client = client;
}

Article.prototype.list = function () {
  return this.client.get('articles');
};

Article.prototype.info = function(id) {
  return this.client.get('articles/' + id);
};

Article.prototype.create = function (articleData) {
  return this.client.post('articles', articleData);
};

/** TODOD: Implement at client */
Article.prototype.update = function(id, articleData) {
  return this.client.put('articles/' + id, articleData);
};

Article.prototype.delete = function(id) {
  return this.client.delete('articles/' + id);
};

module.exports = Article;

/** Found this technique at https://github.com/MadisonReed/magentoapi.
 * It would be a possible way to do this, but at the moment i have not enough time to get my mind arround this way.
 * Create a pull request :) */
//var prototypes = {
//  /** creates a new article */
//  create: {
//
//  },
//  /** delete a article by it's id. */
//  delete: {
//
//  },
//  /** retrieve information about single article */
//  info: {
//
//  },
//  /** list all articles */
//  list: {
//
//  },
//  /** update the article */
//  update: {
//
//  }
//};
//
//for (var key in prototypes) {
//  Article.prototype[key] = function () {
//    console.log('implement prototype currying...');
//  };
//}