var Topic = require('./topic.js');

function Multi (question, req){
  Topic.call(this, question, req);
}

Multi.prototype.getScore = function() {
  var score = 0;
  var isRight = true;
  for(var x = 0; x < this.answer.length; x++){
    if(this.inputs[x] != this.answer[x]){
      isRight = false;
    }
  }
  score += isRight ? 10 : 0;
  return score;
}

module.exports = Multi;
