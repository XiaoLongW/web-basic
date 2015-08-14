'use strict';
var Topic = require('./topic');

function Single (question){
  Topic.call(this, question);
}

Single.prototype = Object.create(Topic.prototype);
Single.prototype.constructor = Single;

module.exports = Single;
