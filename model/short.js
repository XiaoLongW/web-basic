'use strict';
var Topic = require('./topic');

function ShortAnswer (question){
  Topic.call(this, question);
}

ShortAnswer.prototype = Object.create(Topic.prototype);
ShortAnswer.prototype.constructor = ShortAnswer;

module.exports = ShortAnswer;
