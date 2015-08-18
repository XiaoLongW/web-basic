'use strict';
var _ = require('lodash');

function Topic(question){
  this.title = question.topic;
  this.type = question.type;
  this.name = question.name;
  this.item = question.item;
  this.option = question.options;
  this.answer = question.answer;
  this.score = question.score;
  this.inputs = "";
}

Topic.prototype.getScore = function() {
  return this.answer[0] === this.inputs ? this.score : 0;
}

module.exports = Topic;
