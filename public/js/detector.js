function Detector() {
  this.clas = '';
  this.id = '';
  this.name = '';
}

Detector.prototype.getMessage = function(){
  this.clas = $("#class");
  this.id = $("#id");
  this.name = $("#name");
}

Detector.prototype.isComplete = function() {
  if(this.clas.val() === ''){
    $('#myModal').modal('show');
    return false;
  }
  if(this.id.val() === ''){
    $('#myModal').modal('show');
    return false;
  }
  if(this.name.val() === ''){
    $('#myModal').modal('show');
    return false;
  }
  return true;
}
