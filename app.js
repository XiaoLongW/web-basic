var express = require('express');
var routes = require('./routes/index');
var path = require('path');
var router = require('./routes/index.js');
var bodyParser = require('body-parser');

var app = express();

app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');
app.use(express.static(path.join(__dirname, 'public')));
app.use(express.static(path.join(__dirname,'routes')));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use('/',router);

app.listen(3000, function() {
  console.log('listening port 3000');
});

module.exports = app;
