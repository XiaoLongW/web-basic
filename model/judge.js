'use strict';
var Topic = require('./topic');

function JudgeMent (question){
  Topic.call(this, question);
}

JudgeMent.prototype = Object.create(Topic.prototype);
JudgeMent.prototype.constructor = JudgeMent;

module.exports = JudgeMent;
