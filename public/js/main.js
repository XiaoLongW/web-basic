$(document).ready(function(){
  $("form").submit(function(){
    var detector = new Detector();
    detector.getMessage();
    if(!detector.isComplete()){
      return false;
    }
  });
});
