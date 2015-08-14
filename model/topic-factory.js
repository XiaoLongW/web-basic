'use strict';
var FillIn = require('./fill-in');
var Single = require('./single');
var Multi = require('./multi');
var JudgeMent = require('./judge');
var ShortAnswer = require('./short');
var TYPE =require('../helper/type');

function Factory(){
}

Factory.prototype.create = function (question){
  if(question.type === TYPE.fillIn){
    return (new FillIn(question));
  }
  else if(question.type === TYPE.single){
    return (new Single(question));
  }
  else if(question.type === TYPE.multi){
    return (new Multi(question));
  }
  else if(question.type === TYPE.judge){
    return (new JudgeMent(question));
  }
  else if(question.type === TYPE.short){
    return (new ShortAnswer(question));
  }
}

module.exports = Factory;
