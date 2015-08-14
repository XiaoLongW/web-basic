'use strict';
var Topic = require('./topic');
var _ = require('lodash');

function FillIn (question){
  Topic.call(this, question);
}

FillIn.prototype = Object.create(Topic.prototype);
FillIn.prototype.constructor = FillIn;

FillIn.prototype.getScore = function() {
  var score = 0;
  if(typeof(this.inputs) == 'string'){
    if(this.inputs == this.answer){
      score += this.score;
    }
  }else{
    var same = [];
    for(var x=0; x<this.inputs.length; x++){
      if(((this.answer).indexOf(this.inputs[x]) != -1)&&(same.indexOf(this.inputs[x]) == -1)){
        score += this.score;
        same.push(this.inputs[x]);
      }
    }
  }
  return score;
}

module.exports = FillIn;
