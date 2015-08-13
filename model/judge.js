var Topic = require('./topic.js');

function Judge (question, req){
  Topic.call(this, question, req);
}

Judge.prototype.getScore = function() {
  var score = 0;
  if(this.answer == this.inputs){
    score += this.score;
  }
  return score;
}

module.exports = Judge;
