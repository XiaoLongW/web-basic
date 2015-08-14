'use strict';
var Controller = require('../controll/index-controll');
var express =require('express');
var router = express.Router();
var app = require('../app.js');

var controller = new Controller();

router.get('/', controller.indexGet);
router.post('/', controller.indexPost);

module.exports =router;
