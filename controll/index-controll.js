'use strict';
var TopicHelper = require('../helper/topic-helper');
var HomeViewModel = require('../view-model/home-view-model')
var page = require('../seeds/page.json')

function Controller(){
}

Controller.prototype.indexGet = function (req,res){
  var questions = page.questions;
  var topicHelper = new TopicHelper();
  var topics = topicHelper.getTopics(questions);
  topicHelper.setInputs(topics, req.body);
  var homeViewModel = new HomeViewModel(topics,req.body);
  res.render('index', homeViewModel);
}

Controller.prototype.indexPost = function (req,res){
  var questions = page.questions;
  var topicHelper = new TopicHelper();
  var topics = topicHelper.getTopics(questions);
  topicHelper.setInputs(topics, req.body);
  var homeViewModel = new HomeViewModel(topics,req.body);
  res.render('index', homeViewModel);
}



module.exports = Controller;
