var FillIn = require('fill-in.js');
var Single = require('single.js');
var Multi = require('multi.js');
var Judge = require('judge.js');
var Short = require('short.js');

function Factory(){
}

Factory.prototype.create(question,body){
  if(question.type === "fillIn"){
    return new FillIn(question,body);
  }
  else if(question.type === "single"){
    return new Single(question,body);
  }
  else if(question.type === "multi"){
    return new Multi(question,body);
  }
  else if(question.type === "judge"){
    return new Judge(question,body);
  }
  else if(question.type === "short"){
    return new Short(question,body);
  }
}

module.exports = Factory;
