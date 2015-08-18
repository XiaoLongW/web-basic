'use strict';
var TopicHelper = require('../helper/topic-helper');
var HomeViewModel = require('../view-model/home-view-model')
var ConnectSql = require('../seeds/get-sql')

function Controller(){
}

var connectSql = new ConnectSql();
connectSql.getData();

Controller.prototype.indexGet = function (req,res){
  var topicHelper = new TopicHelper();
  var topics = topicHelper.getTopics(connectSql.data);
  topicHelper.setInputs(topics, req.body);
  var homeViewModel = new HomeViewModel(topics,req.body);
  res.render('index', homeViewModel);
}

Controller.prototype.indexPost = function (req,res){
  var topicHelper = new TopicHelper();
  var topics = topicHelper.getTopics(connectSql.data);
  topicHelper.setInputs(topics, req.body);
  var homeViewModel = new HomeViewModel(topics,req.body);
  res.render('index', homeViewModel);
}



module.exports = Controller;
