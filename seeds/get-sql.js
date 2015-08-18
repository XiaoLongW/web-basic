var DB = require('../config/database');
var mysql = require('mysql');

function ConnectSql(){
  this.data = undefined;
}

ConnectSql.prototype.getData = function(){
  var o_this =this;
  var connection = mysql.createConnection({
   host: DB.HOST,
   user: DB.USER,
   password: DB.PASSWORD,
   database: DB.DATABASE
  });

  connection.connect(function(err) {
   if (err) {
     console.error('error connecting: ' + err.stack);
     return;
   }
   console.log('connect');
  });

  connection.query('SELECT name,topic,type,answer,score,GROUP_CONCAT(item) AS item,GROUP_CONCAT(options) AS options FROM question,choice WHERE choice.question_id = question.id group by question.id;',function(err, rows, fields) {
    if (err) throw err;
    o_this.data = rows;
    for(var i = 0; i<rows.length; i++){
      o_this.data[i].item = rows[i].item.split(',');
      o_this.data[i].options = rows[i].options.split(',');
      o_this.data[i].answer = rows[i].answer.split('-');
    }
  });

  connection.end();
}



module.exports = ConnectSql;
