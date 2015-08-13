var TopicHelper = require('../helper/topic-helper.js');
var page = require('../page.json')
function Controller(){
}

Controller.prototype.indexGet = function (req,res){
  var questions = page.questions;
  var topicHelper = new TopicHelper();
  var topics = topicHelper.getTopics(questions, req);
  var score = '';
  res.render('index', {'topic':topics,'scores':score});
}

Controller.prototype.indexPost = function (req,res){
  var questions = page.questions;
  var topicHelper = new TopicHelper();
  var topics = topicHelper.getTopics(questions, req);
  var score = topicHelper.getTotalScore(topics);
  res.render('index', {'topic':topics,'scores':score});
}



module.exports = Controller;
