var FillIn = require('./fill-in.js');
var Single = require('./single.js');
var Multi = require('./multi.js');
var Judge = require('./judge.js');
var Short = require('./short.js');

function Factory(){
}

Factory.prototype.create = function (question, req){
  if(question.type === "fillIn"){
    return (new FillIn(question, req));
  }
  else if(question.type === "single"){
    return (new Single(question, req));
  }
  else if(question.type === "multi"){
    return (new Multi(question, req));
  }
  else if(question.type === "judge"){
    return (new Judge(question, req));
  }
  else if(question.type === "short"){
    return (new Short(question, req));
  }
}

module.exports = Factory;
