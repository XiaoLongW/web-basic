var FillIn = require('./fill-in.js');
var Single = require('./single.js');
var Multi = require('./multi.js');
var Judge = require('./judge.js');
var Short = require('./short.js');
var TYPE =require('../helper/type.js');

function Factory(){
}

Factory.prototype.create = function (question, req){
  if(question.type === TYPE.fillIn){
    return (new FillIn(question, req));
  }
  else if(question.type === TYPE.single){
    return (new Single(question, req));
  }
  else if(question.type === TYPE.multi){
    return (new Multi(question, req));
  }
  else if(question.type === TYPE.judge){
    return (new Judge(question, req));
  }
  else if(question.type === TYPE.short){
    return (new Short(question, req));
  }
}

module.exports = Factory;
