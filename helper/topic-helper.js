'use strict';
var Factory = require('../model/topic-factory');
var TYPE =require('./type');

function TopicHelper(){
}

TopicHelper.prototype.getTopics = function(questions){
  var topics = [];
  var factory = new Factory();

  questions.forEach(function(question){
    topics.push(factory.create(question));
  });
  return topics;
}

TopicHelper.prototype.setInputs = function(topics, inputs){
  topics.forEach(function(topic){
    topic.inputs = inputs[topic.name] || [];
  });
}

module.exports = TopicHelper;
