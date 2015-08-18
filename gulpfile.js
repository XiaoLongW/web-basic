var gulp = require('gulp');
var exec = require('child_process').exec;

gulp.task('start', function() {
  exec('node app.js');
});

gulp.task('sql', function() {
  exec('mysql -h localhost -u root -pwxl19942078 < ./seeds/create.sql');
});

gulp.task('default', function() {
  gulp.run('start');
  gulp.watch('./test.js', function(event) {
    console.log('File ' + event.path + ' was ' + event.type + ', running tasks...');
  });
});
