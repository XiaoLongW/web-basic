var _ = require('lodash');

function HomeViewModel(topics,inputs){
  this.topics= topics;
  this.inputs = inputs;
  this.studentName = inputs.name;
  this.studentNumber = inputs.number;
  this.studentClass = inputs.class;
}

HomeViewModel.prototype.getTopic = function(){
  var allTopic = _.groupBy(this.topics, function(topic) {
    return topic.type;
  });

  return allTopic;
}

HomeViewModel.prototype.getTotalScore = function(){
  var totalScore = 0;
  this.topics.forEach(function(topic){
    totalScore += topic.getScore();
  });

  return totalScore;
}

module.exports = HomeViewModel;
