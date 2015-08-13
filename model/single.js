var Topic = require('./topic.js');

function Single (question, req){
  Topic.call(this, question, req);
}

Single.prototype.getScore = function() {
  var score = 0;
  if(this.answer == this.inputs){
    score += this.score;
  }
  return score;
}

module.exports = Single;
