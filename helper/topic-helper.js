var Factory = require('../model/topic-factory.js');

function TopicHelper(){

}

TopicHelper.prototype.getTopics = function(questions,body){
  var fillIn = [];
  var single = [];
  var multi = [];
  var judge = [];
  var short = [];

  var factory = new Factory();

  questions.forEach(function(question){
    if(question.type = 'fillIn'){
      fillIn.push(question,body);
    }
    else if (question.type = 'single') {
      single.push(question,body);
    }
    else if (question.type = 'multi') {
      multi.push(question,body);
    }
    else if (question.type = 'judge') {
      judge.push(question,body);
    }
    else if (question.type = 'short') {
      short.push(question,body);
    }
  });

  return {"fillIn":fillIn, "single":single, "multi":multi, "judge":judge, "short":short}
}
