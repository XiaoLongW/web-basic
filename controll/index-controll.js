function Controller(){
}

Controller.prototype.indexPost = function (req,res){
  res.render('index');
}

Controller.prototype.indexGet = function (req,res){
  res.render('index');
  console.log(req.body);
}

module.exports = Controller;
