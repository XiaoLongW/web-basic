function Topic(question, req){
  this.title = question.topic;
  this.option = question.choices || [];
  this.answer = question.answer;
  this.score = question.score;
  this.inputs = req.body[question.name] || [];
}

Topic.prototype.getScore = function() {
}

module.exports = Topic;
