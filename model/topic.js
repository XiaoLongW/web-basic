'use strict';
var _ = require('lodash');

function Topic(question){
  this.title = question.topic;
  this.type = question.type;
  this.name = question.name;
  this.option = question.choices || '';
  this.answer = question.answer;
  this.score = question.score;
  this.inputs = "";
}

Topic.prototype.getScore = function() {
  return this.answer === this.inputs ? this.score : 0;
}

module.exports = Topic;
