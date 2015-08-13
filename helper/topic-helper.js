var Factory = require('../model/topic-factory.js');
var TYPE =require('./type.js');
function TopicHelper(){

}

TopicHelper.prototype.getTopics = function(questions, req){
  var fillIn = [];
  var single = [];
  var multi = [];
  var judge = [];
  var short = [];

  var factory = new Factory();

  questions.forEach(function(question){
    if(question.type === TYPE.fillIn){
      fillIn.push(factory.create(question,req));
    }
    else if (question.type === TYPE.single) {
      single.push(factory.create(question,req));
    }
    else if (question.type === TYPE.multi) {
      multi.push(factory.create(question,req));
    }
    else if (question.type === TYPE.judge) {
      judge.push(factory.create(question,req));
    }
    else if (question.type === TYPE.short) {
      short.push(factory.create(question,req));
    }
  });

  return {"fillIn":fillIn, "single":single, "multi":multi, "judge":judge, "short":short};
}

TopicHelper.prototype.getTotalScore = function(topics){
  var score = 0;
  for(var questions in topics){
    topics[questions].forEach(function(oneQuestion){
      score += oneQuestion.getScore();
    });
  }
  return score;
}

module.exports = TopicHelper;
