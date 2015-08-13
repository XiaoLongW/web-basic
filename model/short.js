var Topic = require('./topic.js');

function Short (question, req){
  Topic.call(this, question, req);
}

Short.prototype.getScore = function() {
  var score = 0;
  if(this.answer == this.inputs){
    score += this.score;
  }
  return score;
}

module.exports = Short;
